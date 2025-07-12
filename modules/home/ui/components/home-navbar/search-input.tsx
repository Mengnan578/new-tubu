import { SearchIcon } from "lucide-react";


export const SearchInput = () => {

 // TODO: Add search functionality

  return (
    <form className="flex w-full max-w-[600px]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* TODO: add remove search button */}
      <button
        type="submit"
        className="px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <SearchIcon className="size-5"/>
      </button>
    </form>
  );
};

/**
 * rounded-l-full: 表示左侧圆角为全圆角
 * border: 表示边框
 * border-gray-300: 表示边框颜色为灰色
 * focus:outline-none: 表示聚焦时不显示轮廓线
 * focus:border-blue-500: 表示聚焦时边框颜色为蓝色
 * 
 * border-l-0: 表示左侧边框为0
 * disabled:opacity-50: 表示禁用时透明度为50%
 * disabled:cursor-not-allowed: 表示禁用时鼠标指针为不允许
 */
