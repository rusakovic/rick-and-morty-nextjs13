import { Hero } from "@/app/components/Hero";
import { SearchBar } from "@/app/components/SearchBar";
import { SearchResultScreen } from "@/app/screens/SearchResultScreen";
import { getCharacters } from "@/utils/fetch/getCharacters";

export default async function Home({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const pageNumber = Number(searchParams?.page) || 1;
  const data = await getCharacters(pageNumber);

  return (
    <main>
      <div className="w-screen h-screen">
        <Hero />
        <div className="bg-searchresult bg-cover h-screen ">
          <div className="mt-10  px-10">
            <SearchBar />
            <SearchResultScreen data={data} currentPage={pageNumber} />
          </div>
        </div>
      </div>
    </main>
  );
}
