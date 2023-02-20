"use client";

import CHARACTERS_MOCK_DATA from "@/app/mock/characters";
import nextImageLoader from "@/app/utils/image/nextImageLoader";
import { Character } from "@/types/api.types";
import Image from "next/image";
import { FC } from "react";
import { TitleSubtitle } from "../TitleSubtitle";

interface CharacterCardProps {
  type: "small" | "full";
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({
  type = "small",
  character,
}) => {
  const cardDynamicStyle = {
    name: {
      small: "sm:text-2xl md:text-base",
      full: "text-2xl sm:text-3xl md:text-4xl",
    },
    descriptionMargins: {
      small: "p-6  md:p-4 lg:p-4",
      full: " p-6 md:p-6 lg:p-8",
    },
    statusesMargins: {
      small: "sm:mt-5 md:mt-3 lg:mt-1 ",
      full: "mt-5 md:mt-10 lg:mt-10 ",
    },
  };

  return (
    <div className="mt-3 aspect-w-16 aspect-h-9 ">
      <div className="flex w-full justify-center  border border-gray-600 rounded-xl overflow-hidden">
        <div className="flex flex-1">
          <div className=" flex w-2/5">
            <Image
              alt={character.name}
              loader={nextImageLoader}
              src={character.image}
              width={800}
              height={600}
              className="object-cover"
            />
          </div>
          <div
            className={`${cardDynamicStyle.descriptionMargins[type]} flex flex-1  flex-col w-3/5`}
          >
            {/* NAME */}
            <div>
              <p
                className={`${cardDynamicStyle.name[type]}  font-mono truncate`}
              >
                {character.name}
              </p>
            </div>

            <div
              className={`${cardDynamicStyle.statusesMargins[type]} flex  flex-1 flex-row`}
            >
              <div className="flex flex-1 flex-col">
                <TitleSubtitle
                  type={type}
                  title="Status:"
                  subtitle={character.status}
                />
                <TitleSubtitle
                  type={type}
                  title="Gender:"
                  subtitle={character.gender}
                />
                <TitleSubtitle
                  type={type}
                  title="Species:"
                  subtitle={character.species}
                />
              </div>
              {type === "full" ? (
                <div className="flex flex-1 flex-col">
                  <TitleSubtitle
                    type={type}
                    title="Location:"
                    subtitle={character.location.name}
                  />
                  <TitleSubtitle
                    type={type}
                    title="Origin:"
                    subtitle={character.origin.name}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
