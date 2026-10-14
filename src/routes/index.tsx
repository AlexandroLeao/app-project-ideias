import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AttachmentSection } from "./ideia.$id";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Plus, Search, X, Star, CalendarClock, Pencil, Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IdeaForm, PriorityDot, StatusDot } from "@/components/IdeaForm";
import { actions, catOf, daysLeft, dueLabel, categoryColor, CATEGORY_COLORS, fmtDate, fmtDay, STATUSES, priorityOf, type Idea, useStore, type CategoryColor } from "@/lib/ideas";
import { CategoryMark } from "@/components/CategoryMark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lúcida — Organize suas ideias" },
      { name: "description", content: "Tire os pensamentos da cabeça e coloque-os em ordem: ideias, planos e projetos." },
      { property: "og:title", content: "Lúcida — Organize suas ideias" },
      { property: "og:description", content: "Tire os pensamentos da cabeça e coloque-os em ordem." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { ideas, categories } = useStore();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [st, setSt] = useState<string | null>(null);

  const list = useMemo(
    () =>
      ideas.filter(
        (i) =>
          (!cat || (cat === "__fav" ? i.favorite : i.category === cat)) &&
          (!st || i.status === st) &&
          (i.title + " " + i.description).toLowerCase().includes(q.toLowerCase()),
      ),
    [ideas, q, cat, st],
  );
  const sorted = useMemo(() => [...list].sort((a, b) => PRANK[a.priority ?? "baixa"] - PRANK[b.priority ?? "baixa"]), [list]);
  const [open, setOpen] = useState<string | null>(null);
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => e.key === "Escape" && !document.querySelector("[role=dialog],[role=alertdialog]") && setOpen(null);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open]);
  const counts = (id: string) => ideas.filter((i) => i.status === id).length;

  return (
    <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
      <section className="rise grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <p className="text-sm text-muted-foreground">Olá, Alexandro.</p>
          <h1 className="mt-2 text-5xl font-bold leading-[1.02] md:text-7xl">
            O que temos<br />para <span className="text-primary">hoje</span>?
          </h1>
        </div>
        <div className="flex justify-center">
          <IdeaForm trigger={<Button size="lg" className="h-14 rounded-full px-8 text-base font-semibold"><Plus /> Nova ideia</Button>} />
        </div>
      </section>

      <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {STATUSES.map((s) => (
          <button
            key={s.id}
            onClick={() => setSt(st === s.id ? null : s.id)}
            aria-pressed={st === s.id}
            className={`rounded-xl border p-4 text-left transition hover:-translate-y-0.5 ${st === s.id ? "border-primary bg-accent" : "bg-card"}`}
          >
            <span className={`block size-2.5 rounded-full ${s.dot}`} />
            <span className="mt-3 block font-display text-3xl font-bold">{counts(s.id)}</span>
            <span className="text-sm text-muted-foreground">{s.label}</span>
          </button>
        ))}
      </section>

      <section className="mt-10 flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar pensamentos..." className="h-12 rounded-full bg-card pl-11" aria-label="Buscar" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Chip active={!cat} onClick={() => setCat(null)}>Todas</Chip>
          <Chip active={cat === "__fav"} onClick={() => setCat(cat === "__fav" ? null : "__fav")}><span className="inline-flex items-center gap-1.5"><Star className="size-3.5 fill-favorite text-favorite" />Favoritos</span></Chip>
          {categories.map((c) => (
            <span key={c.id} className="group relative">
               <Chip active={cat === c.id} onClick={() => setCat(cat === c.id ? null : c.id)}><CategoryMark category={c} /></Chip>
              {c.custom && (
                <button aria-label={`Remover ${c.label}`} onClick={() => actions.removeCategory(c.id)} className="absolute -right-1 -top-1 hidden rounded-full bg-ink p-0.5 text-ink-foreground group-hover:block"><X className="size-3" /></button>
              )}
            </span>
          ))}
          <NewCategory />
        </div>
      </section>

      <section style={{ "--n": Math.max(1, list.length) } as React.CSSProperties}
        className="mt-6 grid grid-flow-row-dense grid-cols-[repeat(min(var(--n),3),minmax(0,1fr))] items-start gap-3 sm:grid-cols-[repeat(min(var(--n),4),minmax(0,1fr))] lg:grid-cols-[repeat(min(var(--n),6),minmax(0,1fr))]">
        {sorted.map((i, idx) => (
          <IdeaCard key={i.id} idea={i} idx={idx} size={list.length === 1 ? "lg" : list.length === 2 ? "md" : "sm"}
            expanded={open === i.id} onToggle={() => setOpen(open === i.id ? null : i.id)} />
        ))}
        {!list.length && (
          <div className="col-span-full rounded-xl border border-dashed p-10 text-center text-muted-foreground">
            {ideas.length ? "Nenhuma ideia encontrada." : "Nenhuma ideia registrada ainda."}
          </div>
        )}
      </section>
    </main>
  );
}

function Chip({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-pressed={active}
      className={`rounded-full border px-3.5 py-1.5 text-sm transition ${active ? "border-ink bg-ink text-ink-foreground" : "bg-card hover:bg-secondary"}`}>
      {children}
    </button>
  );
}

function NewCategory() {
  const [label, setLabel] = useState("");
  const { categories } = useStore();
  const [color, setColor] = useState<CategoryColor>("lime");
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={(next) => { if (next) setColor(CATEGORY_COLORS.find((c) => !categories.some((category) => categoryColor(category) === c)) ?? "gray"); setOpen(next); }}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-auto rounded-full border-dashed px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground"><Plus /> Categoria</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); if (!label.trim()) return; actions.addCategory(label.trim(), color); setLabel(""); setOpen(false); }}>
          <div className="flex flex-wrap gap-1" role="group" aria-label="Cor da categoria">
            {CATEGORY_COLORS.map((value, index) => <Button key={value} type="button" variant="ghost" size="icon" className="size-8 rounded-full" data-category-color={value} aria-label={`Cor ${["verde", "laranja", "azul", "violeta", "dourada", "rosa antigo", "rosa", "verde-água", "ciano", "cinza", "lima", "vermelha"][index]}`} aria-pressed={color === value} onClick={() => setColor(value)}><span className={`category-dot size-4 rounded-full ${color === value ? "ring-2 ring-foreground ring-offset-2 ring-offset-popover" : ""}`} /></Button>)}
          </div>
          <div className="flex gap-2">
          <Input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Nome" aria-label="Nome da categoria" autoFocus />
          <Button size="icon" type="submit" aria-label="Adicionar"><Plus /></Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

const PRANK = { alta: 0, media: 1, baixa: 2 } as const;
const PBORDER = { alta: "border-l-priority-high", media: "border-l-priority-medium", baixa: "border-l-priority-low" } as const;

function IdeaCard({ idea: i, idx, size, expanded, onToggle }: { idea: Idea; idx: number; size: "lg" | "md" | "sm"; expanded: boolean; onToggle: () => void }) {
  const { categories } = useStore();
  const c = catOf(categories, i.category);
  const p = priorityOf(i.priority);
  const fav = (
    <button type="button" aria-label={i.favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"} aria-pressed={!!i.favorite}
      onClick={(e) => { e.stopPropagation(); actions.update(i.id, { favorite: !i.favorite }); }}
      className="shrink-0 rounded-full p-0.5 transition hover:scale-110"><Star className={`size-3.5 ${i.favorite ? "fill-favorite text-favorite" : "text-muted-foreground"}`} /></button>
  );
  return (
    <article data-category-color={categoryColor(c)} style={{ animationDelay: `${idx * 40}ms` }}
      className={`category-card rise group relative min-w-0 rounded-xl border border-l-4 transition-all duration-300 ${i.priority ? PBORDER[i.priority] : ""} ${expanded ? "col-span-full p-5 shadow-md" : "p-3 hover:-translate-y-0.5 hover:shadow-md"}`}>
      <div role="button" tabIndex={0} aria-expanded={expanded} aria-label={expanded ? `Recolher ${i.title}` : `Expandir ${i.title}`}
        onClick={onToggle} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(); } }}
        className="cursor-pointer rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <div className="flex min-w-0 items-center justify-between gap-2">
          <span className="min-w-0 truncate text-xs"><CategoryMark category={c} /></span>
          <span className="flex shrink-0 items-center gap-1.5">
            {p && <span className={`size-2.5 rounded-full ${p.dot}`} title={`Prioridade ${p.label}`} aria-label={`Prioridade ${p.label}`} />}
            {fav}
            {expanded && <button type="button" aria-label="Fechar" onClick={(e) => { e.stopPropagation(); onToggle(); }} className="rounded-full p-0.5 hover:bg-secondary"><X className="size-4" /></button>}
          </span>
        </div>
        <h3 className={`mt-2 font-semibold leading-snug group-hover:text-primary ${expanded ? "text-2xl" : size === "sm" ? "line-clamp-2 text-sm" : "line-clamp-2 text-lg"}`}>{i.title}</h3>
        {!expanded && size !== "sm" && <>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{i.description || "Sem descrição."}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 text-xs text-muted-foreground"><PriorityDot priority={i.priority} />{fmtDate(i.createdAt)}</div>
        </>}
      </div>
      {expanded && (
        <div className="rise mt-3 space-y-4">
          <p className="whitespace-pre-wrap text-sm">{i.description || "Sem descrição."}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <StatusDot status={i.status} />
            <PriorityDot priority={i.priority} />
            {i.startDate && <span>Início: {fmtDay(i.startDate)}</span>}
            {i.dueDate && <span>Prazo: {fmtDay(i.dueDate)}</span>}
            {i.dueDate && <span className={`inline-flex items-center gap-1 ${daysLeft(i.dueDate) < 0 ? "font-semibold text-destructive" : "text-muted-foreground"}`}><CalendarClock className="size-4" />{dueLabel(i.dueDate)}</span>}
          </div>
          {i.attachment && <AttachmentSection key={i.attachment.token} attachment={i.attachment} />}
          <div className="flex flex-wrap gap-2">
            <IdeaForm idea={i} trigger={<Button variant="outline" size="sm"><Pencil /> Editar</Button>} />
            <AlertDialog>
              <AlertDialogTrigger asChild><Button variant="outline" size="sm"><Trash2 /> Excluir</Button></AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader><AlertDialogTitle>Excluir esta ideia?</AlertDialogTitle><AlertDialogDescription>Essa ação não pode ser desfeita.</AlertDialogDescription></AlertDialogHeader>
                <AlertDialogFooter><AlertDialogCancel>Cancelar</AlertDialogCancel><AlertDialogAction onClick={() => { actions.remove(i.id); toast("Ideia excluída"); }}>Excluir</AlertDialogAction></AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button asChild variant="ghost" size="sm"><Link to="/ideia/$id" params={{ id: i.id }}><ExternalLink /> Abrir página</Link></Button>
          </div>
        </div>
      )}
    </article>
  );
}
