"use client";

import { CharacterCard } from "@/app/components/CharacterCard";
import { GradientButtonWithText } from "@/app/components/GradientButtonWithText";
import { useRouter } from "next/navigation";

const CharacterPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-1 justify-center mt-20">
      <div className="w-1/2">
        <GradientButtonWithText
          text="< back"
          onButtonPress={() => router.back()}
        />
        <div className="flex flex-1 justify-center ">
          <div className="w-full">
            <CharacterCard type="full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
