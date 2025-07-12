import { Sidebar , SidebarContent} from "@/components/ui/sidebar";
import { MainSection } from "./main-section";
import { Separator } from "@/components/ui/separator";
import { PersonalSection } from "./personal-section";

export const HomeSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-none" collapsible="icon">
        <SidebarContent className="bg-background">
            {/* 侧边栏主要内容区 */}
            <MainSection/>
            <Separator/>
            <PersonalSection/>
        </SidebarContent>
    </Sidebar>
  );
};

// collapsible="icon": 表示折叠的时候显示图标
