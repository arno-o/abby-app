import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Abby App" },
    { name: "description", content: "An interactive experience for the Abby museum in Kortrijk." },
  ];
}

export default function Home() {
  return(
    <NavBar />
  );
}