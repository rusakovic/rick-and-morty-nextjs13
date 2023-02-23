import { cache } from "react";

export const getCharacters = cache(
  async (page: number = 1, gender?: string, name?: string) => {
    var url = new URL("https://rickandmortyapi.com/api/character/");
    page && url.searchParams.set("page", page.toString());
    gender && url.searchParams.set("gender", gender);
    name && url.searchParams.set("name", name);
    console.log("🚀 ~ file: getCharacters.ts:5 ~ getCharacters ~ url:", url);

    const res = await fetch(url.href);
    console.log("🚀 ~ file: getCharacters.ts:12 ~ res:", res);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const covertToJson = await res.json();

    return {
      ok: res.ok,
      data: covertToJson,
    };
  }
);
