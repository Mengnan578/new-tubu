"use client";

import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

/**
 * @typedef FilterCarouselProps
 * @property {string | null} [value] - 当前选中的筛选值
 * @property {boolean} [isLoading] - 是否处于加载状态
 * @property {(value: string | null) => void} [onSelect] - 选中筛选器时的回调函数
 * @property {{label: string; value: string}[]} [data] - 筛选器数据源
 */
interface FilterCarouselProps {
  value?: string | null;
  isLoading?: boolean;
  onSelect?: (value: string | null) => void;
  data?: {
    label: string;
    value: string;
  }[];
}

/**
 * 可滚动的筛选器组件，用于展示和选择分类等。
 * @param {FilterCarouselProps} props - 组件属性
 */
export const FilterCarousel = ({
  value,
  isLoading,
  onSelect,
  data,
}: FilterCarouselProps) => {
  // Carousel 组件的 API 实例，用于控制轮播和获取状态
  const [api, setApi] = useState<CarouselApi>();
  // 当前选中的轮播项索引（从1开始）
  const [current, setCurrent] = useState<number>(0);
  // 轮播项的总数
  const [count, setcount] = useState(0);

  // 当 Carousel API 实例准备好后，初始化状态并监听事件
  useEffect(() => {
    if (!api) return;

    // 初始化当前选中的索引和总数
    setCurrent(api.selectedScrollSnap() + 1);
    setcount(api.scrollSnapList().length);

    // 监听 'select' 事件，当用户切换轮播项时更新当前索引
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]); // 依赖于 api 实例

  return (
    <div className="relative w-full">
      {/* 左侧渐变遮罩，当不在第一项时显示，提升视觉效果 */}
      <div
        className={cn(
          "absolute left-12 tob-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent",
          current === 1 && "hidden" // 当在第一项时隐藏
        )}
      />
      <Carousel
        setApi={setApi} // 将 API 实例设置到 state 中
        opts={{
          align: "start", // 从起始位置对齐
          dragFree: true, // 允许自由拖动，而不是按步进滚动
        }}
        className="w-full px-12" // 左右留出空间给按钮和渐变遮罩
      >
        <CarouselContent className="-ml-3">
          {/* “全部” 选项，当不在加载状态时显示 */}
          {!isLoading && (
            <CarouselItem className="pl-3 basis-auto" onClick={() => onSelect?.(null)}>
              <Badge
                variant={!value ? "default" : "secondary"} // 如果当前未选中任何值，则高亮显示
                className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
              >
                All
              </Badge>
            </CarouselItem>
          )}
          {/* 加载状态下的骨架屏 */}
          {isLoading &&
            Array.from({ length: 14 }).map((_, index) => (
              <CarouselItem key={index} className="pl-3 basis-auto">
                <Skeleton className="rounded-lg px-3 py-1 h-full text-sm w-[100px] font-semibold">
                  &nbsp;
                </Skeleton>
              </CarouselItem>
            ))}
          {/* 数据加载完成后的筛选项目 */}
          {!isLoading &&
            data?.map((item) => (
              <CarouselItem key={item.value} className="pl-3 basis-auto" onClick={() => onSelect?.(item.value)}>
                <Badge
                  variant={value === item.value ? "default" : "secondary"} // 如果当前项被选中，则高亮显示
                  className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
                >
                  {item.label}
                </Badge>
              </CarouselItem>
            ))}
        </CarouselContent>
        {/* 上一页/下一页按钮 */}
        <CarouselPrevious className="left-0 z-20" />
        <CarouselNext className="right-0 z-20" />
      </Carousel>
      {/* 右侧渐变遮罩，当不在最后一项时显示 */}
      <div
        className={cn(
          "absolute right-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent",
          current === count && "hidden" // 当在最后一项时隐藏
        )}
      />
    </div>
  );
};

/**
 * -ml-3: tailwindcss 解决 carousel 组件的第一个 item 被遮挡的问题
 */
