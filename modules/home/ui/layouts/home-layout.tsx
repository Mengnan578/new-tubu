import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavBar } from "@/modules/home/ui/components/home-navbar";
import { HomeSidebar } from "@/modules/home/ui/components/home-sidebar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

// 顶部NavBar
export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        {/* 头部导航栏 */}
        <HomeNavBar />
        <div className="flex min-h-screen pt-[4rem]">
          <HomeSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

/**
 * pt-[4rem]: 顶部内边距4rem
 * min-h-screen: 将元素的最小高度设置为整个视口（viewport）的高度，确保元素至少占满整个屏幕，即使内容不足时也会撑开
 */
