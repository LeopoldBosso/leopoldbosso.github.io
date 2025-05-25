import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Site de présentation" },
    { name: "description", content: "Bienvenue sur mon site de présentation" },
  ];
}

export default function Home() {
  return <Welcome />;
}