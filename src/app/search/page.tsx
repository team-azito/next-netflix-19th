import SearchIcon from "#/icons/search/icon-search.svg";
import CloseIcon from "#/icons/search/icon-close.svg";
const SearchPage = () => {
  return (
    <>
      <div className="relative">
        <SearchIcon className="absolute left-16pxr top-15pxr" alt="돋보기 모양 아이콘" />
        <input
          className="h-52pxr w-full bg-gray-20 px-50pxr py-20pxr text-gray-30"
          placeholder="Search for a show, movie, genre, e.t.c."
        />
        <CloseIcon className="absolute right-16pxr top-18pxr" alt="검색 결과 되돌리기 아이콘" />
      </div>
      <h1>Top Searches</h1>
    </>
  );
};

export default SearchPage;
