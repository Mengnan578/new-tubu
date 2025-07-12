import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
    // TODO: Add different auth state

  return (
    <Button
      variant="outline"
      className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/2
        rounded-full shadow-none [&_svg]:size-5 hover:cursor-pointer"
    >
      <UserCircleIcon />
      Sign in
    </Button>
  );
};

/**
 * text-sm 设置字体大小
 * font-medium 设置字体粗细
 * text-blue-600 设置字体颜色
 * hover:text-blue-500 设置鼠标悬停字体颜色
 * border-blue-500/2 设置边框颜色
 * shadow-none: 不设置阴影
 * [&_svg]:size-5 设置图标大小
 */
