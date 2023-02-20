import { CharacterCard } from "@/app/components/CharacterCard";
import { Pagination } from "@/app/components/Pagination";
import { CharacterRequest } from "@/types/api.types";
import Link from "next/link";
import { FC } from "react";

interface SearchResultScreenProps {
  data: CharacterRequest["results"];
}

const SearchResultScreen: FC<SearchResultScreenProps> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((character) => {
          return (
            <Link href="/characters/1" key={character.name}>
              <CharacterCard type="small" character={character} />
            </Link>
          );
        })}
      </div>

      {/* PAGINATION */}
      <div className="flex my-20 justify-center ">
        <Pagination />
      </div>
    </div>
  );
};

export default SearchResultScreen;
