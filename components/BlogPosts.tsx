"use client";
import "@/styles/Card.css";
import { Image } from "@heroui/image";
import { Card } from "@heroui/card";
import { CardOneConfig } from "@/config/site";
import { XLargeTitle, BaseTitle } from "@/components/Text";
import * as motion from "motion/react-client";

export const BlogPosts = () => {
  return (
    <div className="w-full">
      {CardOneConfig.map((i) => (
        <motion.div
          className=" w-full cursor-pointer"
          key={i.id}
          initial={{ opacity: 0, scale: 0.85, translateY: 40 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Card className="w-full rounded-xl bg-[#22251C] md:h-[324px] p-[16px] mb-[22px]">
            <div className="md:flex">
              <Image
                alt="picture"
                className="object-cover rounded-md md:w-[438px] w-full"
                height={292}
                src="https://heroui.com/images/album-cover.png"
                width="100%"
              />
              <div className="flex items-start justify-around flex-col flex-1 pt-[36px]  md:ml-[74px] md:pr-[54px]">
                <div>
                  <div className="mb-[22px] line-clamp-2">
                    <XLargeTitle
                      align="text-left"
                      title="The Impact of Technology on the Workplace: How Technology is Changing Changing Changing Changing Changing Changing"
                    />
                  </div>
                  <div className="line-clamp-3">
                    <BaseTitle
                      align="text-left"
                      title="hnology on thhanging Changing Chaing Changing"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="picture"
                    className="object-cover rounded-full"
                    height={36}
                    src="https://heroui.com/images/album-cover.png"
                    width={36}
                  />
                  <div className="text-base text-[#97989F] pl-[12px] pr-[20px]">
                    Mila
                  </div>
                  <div className="text-base font-medium text-[#DEFE66]">
                    March 25, 2025
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
