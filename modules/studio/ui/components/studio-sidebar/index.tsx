"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarMenuButton,
  SidebarMenu,
  SidebarGroup,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { LogOutIcon, ViewIcon } from "lucide-react";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { StudioSidebarHeader } from "./studio-siderbar-header";

export const StudioSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar className="pt-16 z-40" collapsible="icon">
      <SidebarContent className="bg-background">
        {/* 侧边栏主要内容区 */}
        <StudioSidebarHeader/>
        <Separator />
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={pathname === "/studio"}
                tooltip={"Exit studio"}
                asChild
              >
                <Link href={"/studio"}>
                  <ViewIcon className="size-5" />
                  <span className="text-sm">Content</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <Separator/>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={"Exit studio"} asChild>
                <Link href={"/"}>
                  <LogOutIcon className="size-5" />
                  <span className="text-sm">Exit studio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

// collapsible="icon": 表示折叠的时候显示图标
