import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { IdeaForm } from "@/components/IdeaForm";
import { actions, catOf, fmtDate, STATUSES, useStore } from "@/lib/ideas";
import { toast } from "sonner";

export const Route = createFileRoute("/ideia/$id")({
  head: () => ({
    meta: [
      { title: "Ideia — Lúcida" },
      { name: "description", content: "Um espaço onde sua ideia pode crescer." },
      { property: "og:title", content: "Ideia — Lúcida" },
      { property: "og:description", content: "Um espaço onde sua ideia pode crescer." },
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

      <p className="mt-10 text-sm text-muted-foreground">{c.emoji} {c.label} · criada em {fmtDate(idea.createdAt)}</p>
      <h1 className="mt-2 text-4xl font-bold md:text-6xl">{idea.title}</h1>
      <p className="mt-5 whitespace-pre-wrap text-lg leading-relaxed text-foreground/80">{idea.description || "Sem descrição."}</p>

      <section className="mt-10">
        <h2 className="text-sm font-medium text-muted-foreground">Onde ela está na jornada</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <button key={s.id} onClick={() => actions.update(idea.id, { status: s.id })} aria-pressed={idea.status === s.id}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${idea.status === s.id ? "border-ink bg-ink text-ink-foreground" : "bg-card hover:bg-secondary"}`}>
              <span className={`size-2 rounded-full ${s.dot}`} />{s.label}
            </button>
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
