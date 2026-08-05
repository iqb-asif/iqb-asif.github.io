export interface ExperimentEntry {
  slug: string;

  title: string;

  teaser: string;

  overview: string;

  problem: string;

  idea: string;

 expectedOutcome: string;

  visual: "network" | "graph" | "flow" | "database" | "nodes";

  technologies: string[];

  status:
    | "Research"
    | "Planning"
    | "Experimenting"
    | "Prototype";

  accent?: "blue" | "red" | "amber";
}