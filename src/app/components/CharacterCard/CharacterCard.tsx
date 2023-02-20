"use client";

import CHARACTERS_MOCK_DATA from "@/app/mock/characters";
import nextImageLoader from "@/app/utils/image/nextImageLoader";
import Image from "next/image";
import { FC } from "react";
import { TitleSubtitle } from "../TitleSubtitle";

const ONE_CHARACTER = CHARACTERS_MOCK_DATA.data.characters.results[0];

interface CharacterCardProps {
  type: "small" | "full";
}

const CharacterCard: FC<CharacterCardProps> = ({ type = "small" }) => {
  const cardDynamicStyle = {
    name: {
      small: "sm:text-3xl md:text-lg",
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
              alt={ONE_CHARACTER.name}
              loader={nextImageLoader}
              src={ONE_CHARACTER.image}
              width={800}
              height={600}
              className="object-cover"
            />
          </div>
          <div
            className={`${cardDynamicStyle.descriptionMargins[type]} flex flex-1  flex-col`}
          >
            {/* NAME */}
            <p className={`${cardDynamicStyle.name[type]}  font-mono`}>
              {ONE_CHARACTER.name}
            </p>

            <div
              className={`${cardDynamicStyle.statusesMargins[type]} flex  flex-1 flex-row`}
            >
              <div className="flex flex-1 flex-col">
                <TitleSubtitle
                  type={type}
                  title="Status:"
                  subtitle={ONE_CHARACTER.status}
                />
                <TitleSubtitle
                  type={type}
                  title="Gender:"
                  subtitle={ONE_CHARACTER.species}
                />
                <TitleSubtitle
                  type={type}
                  title="Species:"
                  subtitle={ONE_CHARACTER.species}
                />
              </div>
              <div className="flex flex-1 flex-col">
                <TitleSubtitle
                  type={type}
                  title="Location:"
                  subtitle={ONE_CHARACTER.location.name}
                />
                <TitleSubtitle
                  type={type}
                  title="Origin:"
                  subtitle={ONE_CHARACTER.origin.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
