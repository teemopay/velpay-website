import { cn } from "@/lib/utils";
import InextImage from "next/image";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const list = Array(2).fill([1, 2, 3]).flat();
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden  [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {list.map((i, index) => {
              return (
                <div
                  key={index}
                  className="flex even:justify-end odd:justify-start"
                >
                  <InextImage
                    alt="picture"
                    src={`/images/payout/swiper-${i}.png`}
                    width="266"
                    height="78"
                  />
                </div>
              );
            })}
          </div>
        ))}
    </div>
  );
}
