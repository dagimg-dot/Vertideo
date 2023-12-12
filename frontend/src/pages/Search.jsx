import Default from "../layouts/Default";

const Search = () => {
  return (
    <Default>
      <div className="px-4 my-4">
        <input
          type="text"
          className="w-full placeholder:opacity-40"
          placeholder="Seach your videos . . ."
        />
      </div>
    </Default>
  );
};

export default Search;
