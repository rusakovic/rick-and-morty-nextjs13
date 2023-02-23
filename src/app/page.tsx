import { Hero } from "@/app/components/Hero";
import { SearchBar } from "@/app/components/SearchBar";
import { SearchResultScreen } from "@/app/screens/SearchResultScreen";
import { getCharacters } from "@/utils/fetch/getCharacters";

export default async function Home({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: Record<string, string> | URLSearchParams | undefined;
}) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const pageNumber = Number(urlSearchParams.get("page")) || 1;
  const gender = urlSearchParams.get("gender") || undefined;
  const characterName = urlSearchParams.get("name") || undefined;
  const { ok, data } = await getCharacters(pageNumber, gender, characterName);

  return (
    <main>
      <div className="w-screen">
        <Hero />
        <div className="bg-searchresult bg-cover bg-fixed bg-no-repeat h-full">
          <div className="mt-10  px-10">
            <SearchBar characterName={characterName} />
            {ok && data ? (
              <SearchResultScreen
                data={data}
                currentPage={pageNumber}
                gender={gender}
              />
            ) : (
              <div className="flex flex-1 justify-center mt-10">
                <p>Character not found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
