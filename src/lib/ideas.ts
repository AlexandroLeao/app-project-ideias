import { useSyncExternalStore } from "react";

export type Status = "ideia" | "planejando" | "andamento" | "concluido" | "pausado";

export const STATUSES: { id: Status; label: string; dot: string }[] = [
  { id: "ideia", label: "Ideia", dot: "bg-status-idea" },
  { id: "planejando", label: "Planejando", dot: "bg-status-plan" },
  { id: "andamento", label: "Em andamento", dot: "bg-status-doing" },
  { id: "concluido", label: "Concluído", dot: "bg-status-done" },
  { id: "pausado", label: "Pausado", dot: "bg-status-paused" },
];

export type Category = { id: string; label: string; emoji: string; custom?: boolean };

export const DEFAULT_CATEGORIES: Category[] = [
  { id: "programacao", label: "Programação", emoji: "💻" },
  { id: "estudos", label: "Estudos", emoji: "📚" },
  { id: "carreira", label: "Carreira", emoji: "💼" },
  { id: "projetos", label: "Projetos", emoji: "🚀" },
  { id: "financeiro", label: "Financeiro", emoji: "💰" },
  { id: "pessoal", label: "Pessoal", emoji: "🏠" },
  { id: "hobby", label: "Hobby", emoji: "🎨" },
  { id: "saude", label: "Saúde", emoji: "🏃" },
  { id: "ideias", label: "Ideias", emoji: "💭" },
  { id: "outros", label: "Outros", emoji: "⚙️" },
];

export type Idea = {
  id: string;
  title: string;
  category: string;
  description: string;
  status: Status;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

type State = { ideas: Idea[]; categories: Category[] };

const KEY = "lucida:v1";
const now = () => new Date().toISOString();
const seed: State = {
  categories: DEFAULT_CATEGORIES,
  ideas: [
    { id: "s1", title: "Estudar Python", category: "programacao", description: "Quero aprender Python para futuramente desenvolver APIs, automações e projetos de backend.", status: "planejando", notes: "", createdAt: now(), updatedAt: now() },
    { id: "s2", title: "Iniciar na academia", category: "saude", description: "Pesquisar academias próximas, definir horários e criar uma rotina.", status: "ideia", notes: "", createdAt: now(), updatedAt: now() },
    { id: "s3", title: "Criar sistema de chamados", category: "projetos", description: "Desenvolver uma aplicação para organização e acompanhamento de chamados de suporte técnico.", status: "andamento", notes: "", createdAt: now(), updatedAt: now() },
  ],
};

const EMPTY: State = { ideas: [], categories: DEFAULT_CATEGORIES };
let state: State | null = null;
const listeners = new Set<() => void>();

function load(): State {
  if (state) return state;
  try {
    const raw = localStorage.getItem(KEY);
    state = raw ? JSON.parse(raw) : seed;
  } catch {
    state = seed;
  }
  return state!;
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
  create(data: Pick<Idea, "title" | "category" | "description" | "status">) {
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
  addCategory(label: string, emoji: string) {
    const s = load();
    const c: Category = { id: crypto.randomUUID(), label, emoji: emoji || "🏷️", custom: true };
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

export const statusOf = (id: Status) => STATUSES.find((s) => s.id === id)!;
export const catOf = (cats: Category[], id: string) =>
  cats.find((c) => c.id === id) ?? { id, label: "Outros", emoji: "⚙️" };
export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
