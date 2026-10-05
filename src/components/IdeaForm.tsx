import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { actions, STATUSES, useStore, type Idea, type Status } from "@/lib/ideas";
import { toast } from "sonner";

export function IdeaForm({ idea, trigger }: { idea?: Idea; trigger: ReactNode }) {
  const { categories } = useStore();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(idea?.title ?? "");
  const [category, setCategory] = useState(idea?.category ?? "ideias");
  const [description, setDescription] = useState(idea?.description ?? "");
  const [status, setStatus] = useState<Status>(idea?.status ?? "ideia");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const data = { title: title.trim(), category, description: description.trim(), status };
    if (idea) {
      actions.update(idea.id, data);
      toast.success("Ideia atualizada");
    } else {
      actions.create(data);
      toast.success("Pensamento registrado");
      setTitle(""); setDescription(""); setStatus("ideia");
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="rounded-2xl sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{idea ? "Editar ideia" : "O que está na sua cabeça?"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="t">Título</Label>
            <Input id="t" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex.: Estudar Python" required />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Categoria</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {categories.map((c) => <SelectItem key={c.id} value={c.id}>{c.emoji} {c.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Status</Label>
              <Select value={status} onValueChange={(v) => setStatus(v as Status)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {STATUSES.map((s) => <SelectItem key={s.id} value={s.id}>{s.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="d">Descrição</Label>
            <Textarea id="d" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Escreva livremente. Ela pode simplesmente existir como ideia." />
          </div>
          <Button type="submit" className="w-full rounded-full h-11">{idea ? "Salvar" : "Registrar"}</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function StatusDot({ status }: { status: Status }) {
  const s = STATUSES.find((x) => x.id === status)!;
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
      <span className={`size-2 rounded-full ${s.dot}`} aria-hidden />
      {s.label}
    </span>
  );
}
