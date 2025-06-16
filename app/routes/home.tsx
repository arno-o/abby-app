import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Abby App" },
    { name: "description", content: "An interactive experience for the Abby museum in Kortrijk." },
  ];
}

export default function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/live", { viewTransition: true });
  }, [navigate]);
  
  return;
}