import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Star, CalendarDays, ArrowLeft, Pencil, Trash2, Paperclip, ExternalLink, Loader2 } from "lucide-react";
import { useState } from "react";
import { openAttachment } from "@/lib/attachments.functions";
import type { Attachment } from "@/lib/attachments";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { IdeaForm, PriorityDot } from "@/components/IdeaForm";
import { actions, catOf, dueLabel, fmtDate, fmtDay, STATUSES, useStore } from "@/lib/ideas";
import { toast } from "sonner";
import { CategoryMark } from "@/components/CategoryMark";

export const Route = createFileRoute("/ideia/$id")({
  head: () => ({
    meta: [
      { title: "Ideia — Lúcida" },
      { name: "description", content: "Um espaço onde sua ideia pode crescer." },
      { property: "og:title", content: "Ideia — Lúcida" },
      { property: "og:description", content: "Um espaço onde sua ideia pode crescer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Detail,
});

function Detail() {
  const { id } = Route.useParams();
  const { ideas, categories } = useStore();
  const nav = useNavigate();
  const idea = ideas.find((i) => i.id === id);

  if (!idea) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-muted-foreground">Ideia não encontrada.</p>
        <Link to="/" className="mt-4 inline-block text-primary underline">Voltar</Link>
      </main>
    );
  }
  const c = catOf(categories, idea.category);

  return (
    <main className="rise mx-auto max-w-3xl px-5 py-8 md:py-12">
      <div className="flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> Todas as ideias</Link>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" aria-pressed={!!idea.favorite} aria-label={idea.favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"} onClick={() => actions.update(idea.id, { favorite: !idea.favorite })}><Star className={idea.favorite ? "fill-favorite text-favorite" : ""} /></Button>
          <IdeaForm idea={idea} trigger={<Button variant="outline" size="icon" aria-label="Editar"><Pencil /></Button>} />
          <AlertDialog>
            <AlertDialogTrigger asChild><Button variant="outline" size="icon" aria-label="Excluir"><Trash2 /></Button></AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Excluir esta ideia?</AlertDialogTitle>
                <AlertDialogDescription>Essa ação não pode ser desfeita.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={() => { actions.remove(idea.id); toast("Ideia excluída"); nav({ to: "/" }); }}>Excluir</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <p className="mt-10 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"><CategoryMark category={c} /> · criada em {fmtDate(idea.createdAt)}</p>
      <h1 className="mt-2 text-4xl font-bold md:text-6xl">{idea.title}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        {idea.priority && <span className="inline-flex items-center gap-1.5">Prioridade: <PriorityDot priority={idea.priority} /></span>}
        {idea.startDate && <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-4" />Início: {fmtDay(idea.startDate)}</span>}
        {idea.dueDate && <span className="inline-flex items-center gap-1.5">Prazo: {fmtDay(idea.dueDate)} · {dueLabel(idea.dueDate)}</span>}
      </div>
      <p className="mt-5 whitespace-pre-wrap text-lg leading-relaxed text-foreground/80">{idea.description || "Sem descrição."}</p>
      {idea.attachment && <AttachmentSection key={idea.attachment.token} attachment={idea.attachment} />}

      <section className="mt-10">
        <h2 className="text-sm font-medium text-muted-foreground">Onde ela está na jornada</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <Button variant="outline" key={s.id} onClick={() => actions.update(idea.id, { status: s.id })} aria-pressed={idea.status === s.id}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${idea.status === s.id ? "border-ink bg-ink text-ink-foreground" : "bg-card hover:bg-secondary"}`}>
              <span className={`size-2 rounded-full ${s.dot}`} />{s.label}
            </Button>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border bg-card p-5">
        <h2 className="text-lg font-semibold">Anotações</h2>
        <p className="text-sm text-muted-foreground">Informações complementares, próximos passos, links…</p>
        <Textarea defaultValue={idea.notes} rows={6} className="mt-3 border-0 bg-secondary/50"
          onBlur={(e) => e.target.value !== idea.notes && actions.update(idea.id, { notes: e.target.value })}
          placeholder="Deixe a ideia crescer aqui." aria-label="Anotações" />
      </section>
    </main>
  );
}

function AttachmentSection({ attachment }: { attachment: Attachment }) {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState<string>();
  async function show() {
    setLoading(true);
    try { setUrl(await openAttachment({ data: attachment })); }
    catch (error) { toast.error(error instanceof Error ? error.message : "Não foi possível abrir o anexo."); }
    finally { setLoading(false); }
  }
  return <section className="mt-8 border-y py-5">
    <h2 className="text-lg font-semibold">Arquivo anexado</h2>
    <div className="mt-3 flex flex-wrap items-center gap-3">
      <Paperclip className="size-5 shrink-0 text-muted-foreground" />
      <div className="min-w-0 flex-1"><p className="break-all text-sm font-medium">{attachment.name}</p><p className="text-xs text-muted-foreground">{attachment.type === "image/png" ? "PNG" : attachment.type === "image/jpeg" ? "JFIF" : "PDF"} · {(attachment.size / 1024 / 1024).toFixed(2)} MB</p></div>
      <Button variant="outline" disabled={loading} onClick={show}>{loading ? <Loader2 className="animate-spin" /> : <ExternalLink />}{url ? "Atualizar acesso" : "Abrir anexo"}</Button>
    </div>
    {url && <div className="mt-4 space-y-3">
      {(attachment.type === "image/png" || attachment.type === "image/jpeg") && <img src={url} alt={attachment.name} className="max-h-96 max-w-full rounded-md object-contain" />}
      <Button asChild variant="link" className="h-auto px-0"><a href={url} target="_blank" rel="noopener noreferrer">{attachment.type === "application/pdf" ? "Visualizar PDF" : "Abrir imagem"}<ExternalLink /></a></Button>
    </div>}
  </section>;
}
