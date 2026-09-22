"use client";
import { useEffect, useState } from "react";
import { motion, Variants } from "motion/react";
type Props = {
  className?: string;
  value?: number;
};
export function useIsAndroid() {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsAndroid(/Android/i.test(navigator.userAgent));
    }
  }, []);

  return isAndroid;
}
export const MinProgress = ({ value = 0 }: Props) => {
  const r = 17.7369;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference - (circumference * value) / 100;
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      className="w-[39px] h-[39px] comment-progress"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        id="Ellipse 254"
        cx="19.4244"
        cy="19.4283"
        r="17.7369"
        stroke="#E5E5E5"
        strokeWidth={3}
        fill="none"
      />
      <motion.circle
        cx="19.4244"
        cy="19.4283"
        r={r}
        fill="none"
        stroke="#DEFE66"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        initial={{ strokeDashoffset: circumference }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        whileInView={{ strokeDashoffset }}
      />

      <g id="Frame">
        <path
          id="Vector"
          d="M25.0545 17.9548H13.793M13.793 16.7603V21.8039C13.793 22.5472 13.793 22.9189 13.9157 23.2028C14.0237 23.4525 14.196 23.6556 14.4079 23.7828C14.6488 23.9275 14.9641 23.9275 15.5948 23.9275H23.2526C23.8833 23.9275 24.1987 23.9275 24.4396 23.7828C24.6515 23.6556 24.8238 23.4525 24.9317 23.2028C25.0545 22.9189 25.0545 22.5472 25.0545 21.8039V16.7603C25.0545 16.017 25.0545 15.6453 24.9317 15.3614C24.8238 15.1117 24.6515 14.9086 24.4396 14.7814C24.1987 14.6367 23.8833 14.6367 23.2526 14.6367H15.5948C14.9641 14.6367 14.6488 14.6367 14.4079 14.7814C14.196 14.9086 14.0237 15.1117 13.9157 15.3614C13.793 15.6453 13.793 16.017 13.793 16.7603Z"
          stroke="#DEFE66"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="rotate(-90 ,19.5, 19.5)"
        />
      </g>
    </motion.svg>
  );
};
