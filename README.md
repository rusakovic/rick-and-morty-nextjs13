## Getting Started

1. `npm i`

2. First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Documentation

[The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. ](https://rickandmortyapi.com/)

## Known issue

1. In Next 13.2 native cache fetching was presented.
2. According to [manual](https://beta.nextjs.org/docs/data-fetching/caching#per-request-caching),
   `If a function instance with the same arguments has been called before`, but it's not true.
   The cached data stays the same, if different params were passed.
3. Functionality is working in `dev` environment, but not in `build`
4. Left a [comment into the doc](https://beta.nextjs.org/docs/data-fetching/caching#thread-id=HULdM) to clarify if it's a bug, or not correct configuration from my side.
5. For now in file `src/utils/fetch/getCharacters.ts` fetch function uses `{ cache: "no-store" }` that re-fetch data on each request. For sure, this functionality should be fixed into the future.
