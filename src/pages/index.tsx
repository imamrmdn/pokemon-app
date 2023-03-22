import { Poppins } from "next/font/google";
import HomePage from "./home";

const poppins = Poppins({ weight: "200", subsets: ["latin-ext"] });

export default function Home() {
  return <HomePage />;
}
