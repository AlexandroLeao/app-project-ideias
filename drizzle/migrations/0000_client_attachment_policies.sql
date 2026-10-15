CREATE OR REPLACE FUNCTION public.attachment_header_token()
RETURNS text LANGUAGE sql STABLE SET search_path = public AS $$
  SELECT coalesce(nullif(current_setting('request.headers', true), '')::json->>'x-attachment-token', '')
$$;

CREATE POLICY "Anon upload attachments with capability"
ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (
  bucket_id = 'idea-attachments'
  AND name ~ '^[a-f0-9]{64}/file\.(png|jfif|pdf)$'
  AND split_part(name, '/', 1) = public.attachment_header_token()
  AND coalesce((metadata->>'size')::bigint, 0) <= 10485760
);

CREATE POLICY "Anon read attachment with capability"
ON storage.objects FOR SELECT TO anon, authenticated
USING (
  bucket_id = 'idea-attachments'
  AND name ~ '^[a-f0-9]{64}/file\.(png|jfif|pdf)$'
  AND split_part(name, '/', 1) = public.attachment_header_token()
);