import { Hero } from "@/app/components/Hero";
import { SearchBar } from "@/app/components/SearchBar";
import { SearchResultScreen } from "@/app/screens/SearchResultScreen";
import { getCharacters } from "@/utils/fetch/getCharacters";

export default async function Home() {
  const data = await getCharacters();

  return (
    <main>
      <div className="w-screen h-screen">
        <Hero />
        <div className="bg-searchresult bg-cover h-screen ">
          <div className="mt-10  px-10">
            <SearchBar />
            <SearchResultScreen data={data.results} />
          </div>
        </div>
      </div>
    </main>
  );
}
