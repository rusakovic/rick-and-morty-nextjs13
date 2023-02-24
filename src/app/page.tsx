import { Hero } from "@/app/components/Hero";
import { SearchBar } from "@/app/components/SearchBar";
import { SearchResultScreen } from "@/app/screens/SearchResultScreen";
import { getCharacters } from "@/utils/fetch/getCharacters";
import { Suspense } from "react";
import Loading from "./loading";

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
        <div className="h-full bg-searchresult bg-cover bg-fixed bg-no-repeat">
          <div className="mt-10  px-10">
            <SearchBar characterName={characterName} />
            <Suspense fallback={<Loading />}>
              {ok && data ? (
                <SearchResultScreen
                  data={data}
                  currentPage={pageNumber}
                  gender={gender}
                />
              ) : (
                <div className="mt-10 flex flex-1 justify-center">
                  <p>Character not found</p>
                </div>
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
