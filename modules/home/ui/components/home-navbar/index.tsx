import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

// 头部导航栏
export const HomeNavBar = () => {
  return (
    <nav className="fixed to-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">

        {/* 渲染菜单和logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href={"/"}>
            <div className="p-4 flex items-center gap-1">
              <Image width={50} height={50} alt="logo" src={"/logo.svg"} />
              <p className="text-xl font-semibold tracking-tight">
                New youtubo
              </p>
            </div>
          </Link>
        </div>

        {/* 顶部搜索框 */}
        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
            <SearchInput/>
        </div>

        <div className="flex-shrink-0 items-center flex gap-4">
          <AuthButton/>
        </div>
      </div>
    </nav>
  );
};

/**
 * fixed 相对于视口定位，意味着即使页面滚动，也会固定在视口的位置；对于nav 来说是很合适的
 * flex-shrink-0 作用是控制 Flex 项目（flex item）在空间不足时是否允许收缩。0 表示不收缩 1表示收缩
 * tracking-tight 设置文字间距
 * font-semibold 设置字体粗细
 */
