import type { Route } from "./+types/home";
import Button from "~/components/Button"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Abby App" },
    { name: "description", content: "An interactive experience for the Abby museum in Kortrijk." },
  ];
}

export default function Home() {
  return(
    <Button arrow={false} color="green">Test</Button>
  );
}