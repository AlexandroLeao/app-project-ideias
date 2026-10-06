import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { actions, dueLabel, PRIORITIES, STATUSES, useStore, type Idea, type Priority, type Status } from "@/lib/ideas";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Paperclip, X, Loader2, CalendarIcon, Star } from "lucide-react";
import { uploadAttachment, validateAttachment } from "@/lib/attachments";
import { z } from "zod";
import { CategoryMark } from "@/components/CategoryMark";

const ideaSchema = z.object({
  title: z.string().trim().min(1, "Informe um título.").max(200, "Use até 200 caracteres no título."),
  category: z.string().min(1),
  description: z.string().trim().max(10000, "Use até 10.000 caracteres na descrição."),
  status: z.enum(["ideia", "planejando", "andamento", "concluido", "pausado"]),
  priority: z.enum(["alta", "media", "baixa"]),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Escolha a data de início."),
  dueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  favorite: z.boolean(),
}).refine((d) => !d.dueDate || d.dueDate >= d.startDate, { message: "O prazo deve ser depois da data de início." });

const today = () => format(new Date(), "yyyy-MM-dd");

export function IdeaForm({ idea, trigger }: { idea?: Idea; trigger: ReactNode }) {
  const { categories } = useStore();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(idea?.title ?? "");
  const [category, setCategory] = useState(idea?.category ?? "ideias");
  const [description, setDescription] = useState(idea?.description ?? "");
  const [status, setStatus] = useState<Status>(idea?.status ?? "ideia");
  const [priority, setPriority] = useState<Priority>(idea?.priority ?? "media");
  const [startDate, setStartDate] = useState<string>(idea?.startDate ?? today());
  const [dueDate, setDueDate] = useState<string | undefined>(idea?.dueDate);
  const [favorite, setFavorite] = useState<boolean>(idea?.favorite ?? false);
  const [file, setFile] = useState<File | null>(null);
  const [attachment, setAttachment] = useState(idea?.attachment);
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;
    const parsed = ideaSchema.safeParse({ title, category, description, status, priority, startDate, dueDate, favorite });
    if (!parsed.success) { toast.error(parsed.error.issues[0]?.message ?? "Revise os campos."); return; }
    setSaving(true);
    try {
    const data = { ...parsed.data, attachment: file ? await uploadAttachment(file) : attachment };
    if (idea) {
      actions.update(idea.id, data);
      toast.success("Ideia atualizada");
    } else {
      actions.create(data);
      toast.success("Pensamento registrado");
      setTitle(""); setDescription(""); setStatus("ideia"); setPriority("media"); setStartDate(today()); setDueDate(undefined); setFavorite(false);
      setFile(null); setAttachment(undefined);
    }
    setOpen(false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Não foi possível salvar. Tente novamente.");
    } finally { setSaving(false); }
  };

  return (
    <Dialog open={open} onOpenChange={(next) => {
      if (saving) return;
      if (next && idea) { setTitle(idea.title); setCategory(idea.category); setDescription(idea.description); setStatus(idea.status); setAttachment(idea.attachment); setFile(null); setPriority(idea.priority ?? "media"); setStartDate(idea.startDate ?? today()); setDueDate(idea.dueDate); setFavorite(idea.favorite ?? false); }
      setOpen(next);
    }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90dvh] overflow-y-auto rounded-2xl sm:max-w-lg" onInteractOutside={(e) => saving && e.preventDefault()} onEscapeKeyDown={(e) => saving && e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{idea ? "Editar ideia" : "O que temos para hoje?"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div className="field-group space-y-1.5">
            <Label htmlFor="t">Título</Label>
            <Input id="t" autoFocus value={title} maxLength={200} onChange={(e) => setTitle(e.target.value)} placeholder="Ex.: Estudar Python" required className="field-control" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="field-group space-y-1.5">
              <Label>Categoria</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="field-control"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {categories.map((c) => <SelectItem key={c.id} value={c.id}><CategoryMark category={c} /></SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="field-group space-y-1.5">
              <Label>Status</Label>
              <Select value={status} onValueChange={(v) => setStatus(v as Status)}>
                <SelectTrigger className="field-control"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {STATUSES.map((s) => <SelectItem key={s.id} value={s.id}>{s.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="field-group space-y-1.5">
            <Label>Prioridade</Label>
            <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Prioridade">
              {PRIORITIES.map((p) => (
                <Button key={p.id} type="button" variant="outline" role="radio" aria-checked={priority === p.id} onClick={() => setPriority(p.id)}
                  className={cn("field-control rounded-full transition", priority === p.id && "border-ring bg-accent font-semibold")}>
                  <span className={`size-2.5 rounded-full ${p.dot}`} aria-hidden />{p.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <DateField label="Data de início" value={startDate} onChange={(v) => v && setStartDate(v)} />
            <DateField label="Prazo" optional value={dueDate} min={startDate} onChange={setDueDate} />
          </div>
          {dueDate && <p className="pop -mt-2 text-xs text-muted-foreground">{dueLabel(dueDate)}</p>}
          <Button type="button" variant="outline" aria-pressed={favorite} onClick={() => setFavorite(!favorite)}
            className={cn("field-control w-full justify-start rounded-full transition", favorite && "border-ring bg-accent")}>
            <Star className={cn("transition", favorite && "fill-favorite text-favorite")} />{favorite ? "Nos favoritos" : "Adicionar aos favoritos"}
          </Button>
          <div className="field-group space-y-1.5">
            <Label htmlFor="d">Descrição</Label>
            <Textarea id="d" rows={4} maxLength={10000} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Escreva livremente. Ela pode simplesmente existir como ideia." className="field-control" />
          </div>
          <div className="field-group space-y-1.5">
            <Label htmlFor="attachment">Arquivo <span className="font-normal text-muted-foreground">(opcional)</span></Label>
            <Input id="attachment" type="file" accept=".png,.jfif,.pdf,image/png,image/jpeg,application/pdf" disabled={saving} className="field-control h-auto cursor-pointer py-2" onChange={async (e) => {
              const input = e.currentTarget;
              const selected = input.files?.[0];
              if (!selected) return;
              try { await validateAttachment(selected); setFile(selected); }
              catch (error) { input.value = ""; toast.error(error instanceof Error ? error.message : "Arquivo inválido."); }
            }} />
            <p className="text-xs text-muted-foreground">PNG, JFIF ou PDF · até 10 MB</p>
            {(file || attachment) && <div key={file?.name ?? attachment?.name} className="pop flex items-center gap-2 rounded-md border border-ring bg-accent px-3 py-2 text-sm">
              <Paperclip className="size-4 shrink-0 text-muted-foreground" /><span className="min-w-0 flex-1 truncate">{file?.name ?? attachment?.name}</span>
              <Button type="button" variant="ghost" size="icon" disabled={saving} aria-label="Remover anexo" onClick={() => { setFile(null); setAttachment(undefined); const input = document.getElementById("attachment"); if (input instanceof HTMLInputElement) input.value = ""; }}><X /></Button>
            </div>}
          </div>
          <Button type="submit" disabled={saving} className="w-full rounded-full h-11">{saving ? <><Loader2 className="animate-spin" /> Salvando…</> : idea ? "Salvar" : "Registrar"}</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function StatusDot({ status }: { status: Status }) {
  const s = STATUSES.find((x) => x.id === status);
  if (!s) return null;
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
      <span className={`size-2 rounded-full ${s.dot}`} aria-hidden />
      {s.label}
    </span>
  );
}

function DateField({ label, value, onChange, optional, min }: { label: string; value?: string | undefined; onChange: (v: string | undefined) => void; optional?: boolean; min?: string }) {
  const [open, setOpen] = useState(false);
  const toDate = (v: string) => { const [y, m, d] = v.split("-").map(Number); return new Date(y!, m! - 1, d!); };
  const selected = value ? toDate(value) : undefined;
  return (
    <div className="field-group space-y-1.5">
      <Label>{label} {optional && <span className="font-normal text-muted-foreground">(opcional)</span>}</Label>
      <div className="flex gap-1">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button type="button" variant="outline" className={cn("field-control min-w-0 flex-1 justify-start px-3 font-normal", !value && "text-muted-foreground")}>
              <CalendarIcon />{selected ? format(selected, "dd/MM/yyyy") : "Escolher"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" locale={ptBR} selected={selected} defaultMonth={selected ?? (min ? toDate(min) : new Date())}
              disabled={min ? { before: toDate(min) } : false}
              onSelect={(d) => { onChange(d ? format(d, "yyyy-MM-dd") : optional ? undefined : value); setOpen(false); }}
              className="p-3 pointer-events-auto" />
          </PopoverContent>
        </Popover>
        {optional && value && <Button type="button" variant="ghost" size="icon" aria-label={`Limpar ${label}`} onClick={() => onChange(undefined)}><X /></Button>}
      </div>
    </div>
  );
}

export function PriorityDot({ priority }: { priority?: Priority | undefined }) {
  const p = PRIORITIES.find((x) => x.id === priority);
  if (!p) return null;
  return <span className="inline-flex items-center gap-1.5 text-xs font-medium"><span className={`size-2 rounded-full ${p.dot}`} aria-hidden />{p.label}</span>;
}
