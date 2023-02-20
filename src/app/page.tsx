import Image from "next/image";
import { Inter } from "@next/font/google";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { SearchBar } from "@/app/components/SearchBar";
import { SearchResultScreen } from "@/app/screens/SearchResultScreen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen">
        <Hero />
        <div className="bg-searchresult bg-cover h-screen ">
          <div className="mt-10  px-10">
            <SearchBar />
            <SearchResultScreen />
          </div>
        </div>
      </div>
    </main>
  );
}
