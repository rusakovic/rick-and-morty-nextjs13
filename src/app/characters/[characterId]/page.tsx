import { CharacterCard } from "@/app/components/CharacterCard";
import { GradientButtonWithText } from "@/app/components/GradientButtonWithText";
import { Suspense } from "react";

const CharacterPage = async ({
  params: { characterId },
}: {
  params: { characterId: string };
}) => {
  const characterData = await getCharacter(Number(characterId));

  return (
    <div className="flex flex-1 justify-center mt-20">
      <div className="w-11/12  md:w-2/3 max-w-screen-md">
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

export async function generateMetadata({
  params: { characterId },
}: {
  params: { characterId: string };
}) {
  const characterData = await getCharacter(Number(characterId));
  const pageTitle = characterData?.name
    ? `${characterData.name} - ${characterData.location.name} - Rick & Morty character description`
    : "Rick & Morty character description";

  return { title: pageTitle };
}

export default CharacterPage;
