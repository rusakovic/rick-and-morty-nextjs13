const SearchBar = () => {
  return (
    <div className="flex h-12 w-full">
      {/* DROPDOWN SELECTOR  */}
      <select
        id="selector"
        className="border w-1/5 pl-3 bg-transparent border-gray-700 placeholder-gray-400 text-gray-400  focus:border-gray-500 outline-none"
      >
        <option value="episodes">Episodes</option>
        <option value="characters">Characters</option>
        <option value="locations">Locations</option>
      </select>

      {/* SEARCH INPUT */}
      <div className="w-full flex">
        <input
          type="search"
          id="search-dropdown"
          className="h-full w-full pl-5 text-sm  bg-transparent border border-r  border-gray-700 placeholder-gray-400 text-white focus:border-gray-500 outline-none "
          placeholder="What are you looking for?"
          required
        />
        <button
          type="submit"
          className="flex w-14 items-center justify-center text-sm font-medium text-white  rounded-r-lg border border-gray-700 hover:border-gray-600 focus:ring-4 focus:outline-none "
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
