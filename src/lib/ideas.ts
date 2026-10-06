import { useSyncExternalStore } from "react";
import type { Attachment } from "./attachments";

export type Status = "ideia" | "planejando" | "andamento" | "concluido" | "pausado";

export const STATUSES: { id: Status; label: string; dot: string }[] = [
  { id: "ideia", label: "Ideia", dot: "bg-status-idea" },
  { id: "planejando", label: "Planejando", dot: "bg-status-plan" },
  { id: "andamento", label: "Em andamento", dot: "bg-status-doing" },
  { id: "concluido", label: "Concluído", dot: "bg-status-done" },
  { id: "pausado", label: "Pausado", dot: "bg-status-paused" },
];

export const CATEGORY_COLORS = ["green", "orange", "blue", "violet", "gold", "rose", "pink", "teal", "cyan", "gray", "lime", "red"] as const;
export type CategoryColor = typeof CATEGORY_COLORS[number];
export type Category = { id: string; label: string; color?: CategoryColor; emoji?: string; custom?: boolean };

export const DEFAULT_CATEGORIES: Category[] = [
  { id: "programacao", label: "Programação", color: "green" },
  { id: "estudos", label: "Estudos", color: "orange" },
  { id: "carreira", label: "Carreira", color: "blue" },
  { id: "projetos", label: "Projetos", color: "violet" },
  { id: "financeiro", label: "Financeiro", color: "gold" },
  { id: "pessoal", label: "Pessoal", color: "rose" },
  { id: "hobby", label: "Hobby", color: "pink" },
  { id: "saude", label: "Saúde", color: "teal" },
  { id: "ideias", label: "Ideias", color: "cyan" },
  { id: "outros", label: "Outros", color: "gray" },
];

export const categoryColor = (category: Category): CategoryColor =>
  category.color ?? DEFAULT_CATEGORIES.find((c) => c.id === category.id)?.color ?? "gray";

export type Idea = {
  id: string;
  title: string;
  category: string;
  description: string;
  status: Status;
  notes: string;
  attachment?: Attachment | undefined;
  createdAt: string;
  updatedAt: string;
};

type State = { ideas: Idea[]; categories: Category[] };

const KEY = "lucida:v1";
const now = () => new Date().toISOString();
const EMPTY: State = { ideas: [], categories: DEFAULT_CATEGORIES };
let state: State | null = null;
const listeners = new Set<() => void>();

function load(): State {
  if (state) return state;
  try {
    const raw = localStorage.getItem(KEY);
    const saved = raw ? JSON.parse(raw) as State : EMPTY;
    const cleaned = { ...saved, categories: saved.categories.map((c, index) => ({ ...c, color: c.color ?? DEFAULT_CATEGORIES.find((d) => d.id === c.id)?.color ?? CATEGORY_COLORS[index % CATEGORY_COLORS.length] })), ideas: saved.ideas.filter((idea) => !["s1", "s2", "s3"].includes(idea.id)) };
    state = cleaned;
    if (cleaned.ideas.length !== saved.ideas.length) localStorage.setItem(KEY, JSON.stringify(cleaned));
  } catch {
    state = EMPTY;
  }
  return state ?? EMPTY;
}
function set(next: State) {
  state = next;
  localStorage.setItem(KEY, JSON.stringify(next));
  listeners.forEach((l) => l());
}

export function useStore(): State {
  return useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    load,
    () => EMPTY,
  );
}

export const actions = {
  create(data: Pick<Idea, "title" | "category" | "description" | "status" | "attachment">) {
    const s = load();
    const idea: Idea = { ...data, id: crypto.randomUUID(), notes: "", createdAt: now(), updatedAt: now() };
    set({ ...s, ideas: [idea, ...s.ideas] });
    return idea;
  },
  update(id: string, patch: Partial<Idea>) {
    const s = load();
    set({ ...s, ideas: s.ideas.map((i) => (i.id === id ? { ...i, ...patch, updatedAt: now() } : i)) });
  },
  remove(id: string) {
    const s = load();
    set({ ...s, ideas: s.ideas.filter((i) => i.id !== id) });
  },
  addCategory(label: string, color: CategoryColor) {
    const s = load();
    const c: Category = { id: crypto.randomUUID(), label, color, custom: true };
    set({ ...s, categories: [...s.categories, c] });
    return c;
  },
  removeCategory(id: string) {
    const s = load();
    set({
      categories: s.categories.filter((c) => c.id !== id),
      ideas: s.ideas.map((i) => (i.category === id ? { ...i, category: "outros" } : i)),
    });
  },
};

export const statusOf = (id: Status) => STATUSES.find((s) => s.id === id) ?? STATUSES[0];
export const catOf = (cats: Category[], id: string) =>
  cats.find((c) => c.id === id) ?? { id, label: "Outros", color: "gray" as const };
export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
