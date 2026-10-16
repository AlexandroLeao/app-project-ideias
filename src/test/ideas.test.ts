import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const KEY = "lucida:v1";
const loadModule = async () => {
  vi.resetModules();
  return import("@/lib/ideas");
};
const base = {
  title: "Estudar Rust",
  category: "estudos",
  description: "Livro oficial",
  status: "ideia" as const,
  attachment: undefined,
  priority: "alta" as const,
  startDate: "2026-10-01",
  dueDate: undefined,
  favorite: false,
};

beforeEach(() => localStorage.clear());
afterEach(() => vi.useRealTimers());

describe("datas e prazos", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 9, 15, 21, 30));
  });

  it("conta dias restantes, hoje e atraso", async () => {
    const { daysLeft } = await loadModule();
    expect(daysLeft("2026-10-27")).toBe(12);
    expect(daysLeft("2026-10-16")).toBe(1);
    expect(daysLeft("2026-10-15")).toBe(0);
    expect(daysLeft("2026-10-14")).toBe(-1);
  });

  it("conta corretamente entre meses e anos", async () => {
    const { daysLeft } = await loadModule();
    expect(daysLeft("2026-11-01")).toBe(17);
    expect(daysLeft("2027-01-01")).toBe(78);
  });

  it("gera os rótulos de prazo no singular e plural", async () => {
    const { dueLabel } = await loadModule();
    expect(dueLabel("2026-10-27")).toBe("12 dias restantes");
    expect(dueLabel("2026-10-16")).toBe("1 dia restante");
    expect(dueLabel("2026-10-15")).toBe("Prazo hoje");
    expect(dueLabel("2026-10-14")).toBe("Atrasado 1 dia");
    expect(dueLabel("2026-10-10")).toBe("Atrasado 5 dias");
  });

  it("formata a data do dia sem deslocamento de fuso", async () => {
    const { fmtDay } = await loadModule();
    const text = fmtDay("2026-10-01");
    expect(text).toMatch(/^01/);
    expect(text).toContain("2026");
  });
});

describe("prioridades, status e categorias", () => {
  it("encontra prioridade e status ou usa padrão", async () => {
    const m = await loadModule();
    expect(m.priorityOf("alta")?.label).toBe("Alta");
    expect(m.priorityOf(undefined)).toBeUndefined();
    expect(m.statusOf("andamento").label).toBe("Em andamento");
    expect(m.statusOf("x" as never).id).toBe("ideia");
  });

  it("resolve cor da categoria e categoria desconhecida", async () => {
    const m = await loadModule();
    expect(m.categoryColor({ id: "estudos", label: "Estudos" })).toBe("orange");
    expect(m.categoryColor({ id: "nova", label: "Nova" })).toBe("gray");
    expect(m.catOf(m.DEFAULT_CATEGORIES, "sumiu")).toEqual({
      id: "sumiu",
      label: "Outros",
      color: "gray",
    });
  });
});

describe("persistência das ideias", () => {
  it("começa vazio com as categorias padrão", async () => {
    const m = await loadModule();
    m.actions.create(base);
    const saved = JSON.parse(localStorage.getItem(KEY)!);
    expect(saved.ideas).toHaveLength(1);
    expect(saved.categories).toHaveLength(10);
  });

  it("cria, atualiza, favorita e exclui", async () => {
    const m = await loadModule();
    const idea = m.actions.create(base);
    expect(idea.notes).toBe("");
    m.actions.update(idea.id, { favorite: true, status: "concluido", priority: "baixa" });
    let saved = JSON.parse(localStorage.getItem(KEY)!).ideas[0];
    expect(saved).toMatchObject({ favorite: true, status: "concluido", priority: "baixa" });
    m.actions.remove(idea.id);
    saved = JSON.parse(localStorage.getItem(KEY)!).ideas;
    expect(saved).toEqual([]);
  });

  it("coloca a ideia mais nova primeiro", async () => {
    const m = await loadModule();
    m.actions.create({ ...base, title: "Primeira" });
    m.actions.create({ ...base, title: "Segunda" });
    const titles = JSON.parse(localStorage.getItem(KEY)!).ideas.map((i: { title: string }) => i.title);
    expect(titles).toEqual(["Segunda", "Primeira"]);
  });

  it("mantém ideias após reabrir o app", async () => {
    (await loadModule()).actions.create(base);
    const m = await loadModule();
    m.actions.create({ ...base, title: "Outra" });
    expect(JSON.parse(localStorage.getItem(KEY)!).ideas).toHaveLength(2);
  });

  it("remove só os exemplos s1, s2 e s3 ao carregar", async () => {
    localStorage.setItem(
      KEY,
      JSON.stringify({
        categories: [{ id: "estudos", label: "Estudos" }],
        ideas: ["s1", "s2", "s3", "minha"].map((id) => ({ ...base, id })),
      }),
    );
    const m = await loadModule();
    m.actions.update("minha", { notes: "ok" });
    const saved = JSON.parse(localStorage.getItem(KEY)!);
    expect(saved.ideas.map((i: { id: string }) => i.id)).toEqual(["minha"]);
    expect(saved.categories[0].color).toBe("orange");
  });

  it("move ideias para Outros ao remover a categoria", async () => {
    const m = await loadModule();
    const cat = m.actions.addCategory("Viagens", "lime");
    const idea = m.actions.create({ ...base, category: cat.id });
    m.actions.removeCategory(cat.id);
    const saved = JSON.parse(localStorage.getItem(KEY)!);
    expect(saved.categories.some((c: { id: string }) => c.id === cat.id)).toBe(false);
    expect(saved.ideas.find((i: { id: string }) => i.id === idea.id).category).toBe("outros");
  });

  it("ignora dados corrompidos e recomeça vazio", async () => {
    localStorage.setItem(KEY, "{quebrado");
    const m = await loadModule();
    m.actions.create(base);
    expect(JSON.parse(localStorage.getItem(KEY)!).ideas).toHaveLength(1);
  });
});
