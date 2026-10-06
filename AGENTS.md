<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve the browser-local idea store and migrate away only built-in sample IDs; reopening must not erase user-created ideas.
- Use private Cloud Storage for attachments with 256-bit per-object capabilities, server-generated short-lived signed URLs, and no public listing; this preserves the existing no-login experience without exposing personal files.
- Keep attachment validation/upload helpers separate from forms and validate file signatures and limits again before server-side access; this centralizes the PNG/PDF safety boundary.
- Keep category color identifiers in the local idea store and resolve their visual roles through global CSS tokens and a shared category mark; legacy categories must remain usable without deleting user data.
