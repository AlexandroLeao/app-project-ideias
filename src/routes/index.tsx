import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Plus, Search, X, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IdeaForm, StatusDot } from "@/components/IdeaForm";
import { actions, catOf, fmtDate, STATUSES, useStore } from "@/lib/ideas";

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
          (!cat || i.category === cat) &&
          (!st || i.status === st) &&
          (i.title + " " + i.description).toLowerCase().includes(q.toLowerCase()),
      ),
    [ideas, q, cat, st],
  );
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
          {categories.map((c) => (
            <span key={c.id} className="group relative">
              <Chip active={cat === c.id} onClick={() => setCat(cat === c.id ? null : c.id)}>{c.emoji} {c.label}</Chip>
              {c.custom && (
                <button aria-label={`Remover ${c.label}`} onClick={() => actions.removeCategory(c.id)} className="absolute -right-1 -top-1 hidden rounded-full bg-ink p-0.5 text-ink-foreground group-hover:block"><X className="size-3" /></button>
              )}
            </span>
          ))}
          <NewCategory />
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((i, idx) => {
          const c = catOf(categories, i.category);
          return (
            <Link key={i.id} to="/ideia/$id" params={{ id: i.id }} style={{ animationDelay: `${idx * 40}ms` }}
              className="rise group flex flex-col rounded-2xl border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs">{c.emoji} {c.label}</span>
                <StatusDot status={i.status} />
              </div>
              <h3 className="mt-4 text-xl font-semibold group-hover:text-primary">{i.title}</h3>
              <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">{i.description || "Sem descrição."}</p>
               <span className="mt-auto flex items-center justify-between gap-2 pt-4 text-xs text-muted-foreground">{fmtDate(i.createdAt)}{i.attachment && <Paperclip className="size-4" aria-label="Com anexo" />}</span>
            </Link>
          );
        })}
        {!list.length && (
          <div className="col-span-full rounded-2xl border border-dashed p-12 text-center text-muted-foreground">
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
  const [emoji, setEmoji] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="rounded-full border border-dashed px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground">+ Categoria</button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); if (!label.trim()) return; actions.addCategory(label.trim(), emoji.trim()); setLabel(""); setEmoji(""); setOpen(false); }}>
          <Input value={emoji} onChange={(e) => setEmoji(e.target.value)} placeholder="🏷️" className="w-12 px-2 text-center" aria-label="Emoji" />
          <Input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Nome" aria-label="Nome da categoria" autoFocus />
          <Button size="icon" type="submit" aria-label="Adicionar"><Plus /></Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
