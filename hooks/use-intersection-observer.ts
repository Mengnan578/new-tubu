import { useEffect, useState, useRef } from "react";

// 自定义钩子，用于检测元素是否进入视口，使用 Intersection Observer API
export const useIntersectionObserver = (options: IntersectionObserverInit) => {
  // 状态：跟踪元素是否相交（可见）
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  // 引用：目标 DOM 元素
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 创建 IntersectionObserver 实例
    const observer = new IntersectionObserver(([entry]) => {
      // 更新状态基于相交信息
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (targetRef.current) {
      // 观察目标元素
      observer.observe(targetRef.current);
    }

    // 清理：组件卸载时断开观察
    return () => observer.disconnect();
  }, [targetRef, options]);

  // 返回引用和相交状态
  return { targetRef, isIntersecting };
};