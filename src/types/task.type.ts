type Task = {
  id: number;
  title: string;
  description: string;
  priority: "Baixa" | "Média" | "Alta";
  status: "Pendente" | "Em Progresso" | "Concluída";
  conclusionDate?: string;
};

type TaskCategory = "Trabalho" | "Pessoal" | "Estudos";
type TaskPriority = "Baixa" | "Média" | "Alta";

export type { Task, TaskCategory, TaskPriority };
