import { CharacterCard } from "@/app/components/CharacterCard";
import { Pagination } from "@/app/components/Pagination";
import { CharacterRequest } from "@/types/api.types";
import Link from "next/link";
import { FC } from "react";

interface SearchResultScreenProps {
  data: CharacterRequest;
  currentPage: number;
  gender: string | undefined;
}

const SearchResultScreen: FC<SearchResultScreenProps> = ({
  currentPage,
  data: {
    results,
    info: { pages },
  },
  gender,
}) => {
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((character) => {
          return (
            <Link href={`/characters/${character.id}`} key={character.id}>
              <CharacterCard type="small" character={character} />
            </Link>
          );
        })}
      </div>

      {/* PAGINATION */}
      <div className="flex py-20 justify-center ">
        <Pagination
          currentPage={currentPage}
          totalPages={pages}
          gender={gender}
        />
      </div>
    </div>
  );
};

export default SearchResultScreen;
