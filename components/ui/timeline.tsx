"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 30%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full  dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      

      <div ref={ref} className="relative max-w-5xl mx-auto pb-30">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex items-start py-10 md:py-20 md:gap-10"
          >
            <div className="absolute left-3 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-black">
              <div className="w-3 h-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
            </div>
            <div className="ml-16 md:ml-24 flex-shrink-0 w-full">
              <h3 className="text-2xl mb-4 font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div className="absolute left-8 top-0 w-[2px]">
          <div
            style={{ height: height + "px" }}
            className="absolute top-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
