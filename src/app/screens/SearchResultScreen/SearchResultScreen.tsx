import { CharacterCard } from "@/app/components/CharacterCard";
import { Pagination } from "@/app/components/Pagination";
import CHARACTERS_MOCK_DATA from "@/app/mock/characters";
import Link from "next/link";

const SearchResultScreen = () => {
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHARACTERS_MOCK_DATA.data.characters.results.map((character) => {
          return (
            <Link href="/characters/1" key={character.name}>
              <CharacterCard type="small" />
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
