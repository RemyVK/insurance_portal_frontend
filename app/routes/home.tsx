import HomePage from "../pages/home-page";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "InsureCompare" },
    { name: "description", content: "Welcome to Insurance Comparison Portal!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
