import { CharacterCard } from "@/app/components/CharacterCard";
import { GradientButtonWithText } from "@/app/components/GradientButtonWithText";
import { Suspense } from "react";

const CharacterPage = async ({
  params,
}: {
  params: { characterId: string };
}) => {
  const characterId = Number(params?.characterId);

  const characterData = await getCharacter(characterId);

  return (
    <div className="flex flex-1 justify-center mt-20">
      <div className="w-1/2">
        <GradientButtonWithText text="< back" onNavigateBackUrl="/" />
        <div className="flex flex-1 justify-center ">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="w-full">
              <CharacterCard type="full" character={characterData} />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const getCharacter = async (characterId: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`,
    { cache: "force-cache" }
  );

  const characterData = await response.json();
  return characterData;
};

export default CharacterPage;
