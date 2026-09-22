"use client";
import { useRef } from "react";
import Image from "next/image";
import { Image as HerImage } from "@heroui/image";
import { Card, CardFooter } from "@heroui/card";
import { CardCountryConfig } from "@/config/site";
import { Tabs, Tab } from "@heroui/tabs";
import { FadeUPScrollgroup } from "@/components/Animateitem";
import NextLink from "next/link";

const desktopCountries = [
  [
    { title: "Brazil", code: "BR", icon: "br" },
    { title: "Argentina", code: "ARS", icon: "ar" },
    { title: "Colombia", code: "CO", icon: "co" },
  ],
  [
    { title: "India", code: "INDIA", icon: "in" },
    { title: "Korea", code: "KR", icon: "ko" },
  ],
  [
    { title: "Indonesia", code: "ID", icon: "id" },
    { title: "Vietnam", code: "VN", icon: "vn" },
    { title: "Cambodia", code: "KH", icon: "kh" },
  ],
];

export const CardCountry = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStateRef.current.isDown = true;
    dragStateRef.current.startX =
      e.pageX - (scrollRef.current?.offsetLeft || 0);
    dragStateRef.current.scrollLeft = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    dragStateRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    dragStateRef.current.isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragStateRef.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - dragStateRef.current.startX) * 1; // 滚动速度，乘以1就是同步
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = dragStateRef.current.scrollLeft - walk;
    }
  };
  return (
    <div className="min-w-0">
      <div className="mx-auto hidden w-full max-w-[500px] lg:block 2xl:max-w-[600px]">
        <div className="grid grid-cols-3 gap-[14px]">
          {desktopCountries[0].map((country, index) => (
            <DesktopCountryCard
              country={country}
              delay={index * 0.08}
              key={country.code}
            />
          ))}
          <div className="col-span-3 grid grid-cols-6 gap-[14px]">
            {desktopCountries[1].map((country, index) => (
              <div
                className={
                  index === 0 ? "col-span-2 col-start-2" : "col-span-2"
                }
                key={country.code}
              >
                <DesktopCountryCard
                  country={country}
                  delay={(index + 3) * 0.08}
                />
              </div>
            ))}
          </div>
          {desktopCountries[2].map((country, index) => (
            <DesktopCountryCard
              country={country}
              delay={(index + 5) * 0.08}
              key={country.code}
            />
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <Tabs
          aria-label="Options"
          classNames={{
            base: "w-full flex items-center justify-center",
            tabList: "gap-[34px]  relative rounded-none",
            cursor: "w-full bg-[#DEFE66]",
            tab: "max-w-fit px-0 h-[30px]",
            tabContent:
              "group-data-[selected=true]:text-[#DEFE66] text-[24px] font-semibold text-[#fff]",
          }}
          variant="underlined"
        >
          <Tab key="photos" title="LATAM">
            <div className=" relative w-full  scroll-mask  box-content">
              <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="hide-scrollbar flex grid-cols-5 gap-x-[17px] overflow-x-auto"
              >
                {CardCountryConfig[0].map((i, index) => (
                  <NextLink
                    key={i.id}
                    className="block"
                    href={`/${i.code}`}
                    target="_self"
                  >
                    <Card className="figure min-w-[187px]  w-[187px] h-[224px] relative cursor-pointer rounded-2xl">
                      <HerImage
                        removeWrapper
                        alt="Card background"
                        className="figure-img z-0 w-full h-full object-cover"
                        classNames={{
                          img: "w-[187px] h-[224px]",
                        }}
                        src={`/images/home/${i.code}.png`}
                      />
                      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(0deg,#DEFE66_0%,rgba(222,254,102,0)_100%)]" />
                      <CardFooter className="absolute  bottom-0 border-zinc-100/50 z-10 p-[12px]">
                        <div className="w-full flex items-center">
                          <HerImage
                            className="rounded-full"
                            alt="country"
                            classNames={{
                              img: "w-[24px] h-[24px] min-w-[24px] min-h-[24px]",
                            }}
                            height={24}
                            src={`/images/country/${i.icon}-icon.png`}
                            width={24}
                          />
                          <div className="flex-1 px-[7px] text-left">
                            {i.title}
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </NextLink>
                ))}
              </div>
            </div>
          </Tab>
          <Tab key="music" title="Asia">
            <div className=" relative w-full  scroll-mask  box-content">
              <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="hide-scrollbar flex grid-cols-4 gap-x-[17px] overflow-x-auto"
              >
                {CardCountryConfig[1].map((i) => (
                  <Card
                    key={i.id}
                    className="figure min-w-[187px]  w-[187px] h-[224px] relative cursor-pointer rounded-2xl"
                  >
                    {[6, 7, 9].includes(i.id) ? (
                      <NextLink href={`/${i.code}`} target="_self">
                        <HerImage
                          removeWrapper
                          alt="Card background"
                          className="figure-img z-0 w-full h-full object-cover"
                          classNames={{
                            img: "w-[187px] h-[224px]",
                          }}
                          src={`/images/home/${i.code}.png`}
                        />
                        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(0deg,#DEFE66_0%,rgba(222,254,102,0)_100%)]" />
                        <CardFooter className="absolute  bottom-0 border-zinc-100/50 z-10 p-[12px]">
                          <div className="w-full flex items-center">
                            <HerImage
                              className="rounded-full"
                              alt="country"
                              classNames={{
                                img: "w-[24px] h-[24px] min-w-[24px] min-h-[24px]",
                              }}
                              height={24}
                              src={`/images/country/${i.icon}-icon.png`}
                              width={24}
                            />
                            <div className="flex-1 px-[7px] text-left">
                              {i.title}
                            </div>
                          </div>
                        </CardFooter>
                      </NextLink>
                    ) : (
                      <>
                        <HerImage
                          removeWrapper
                          alt="Card background"
                          className="figure-img z-0 w-full h-full object-cover"
                          classNames={{
                            img: "w-[187px] h-[224px]",
                          }}
                          src={`/images/home/${i.code}.png`}
                        />
                        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(0deg,#DEFE66_0%,rgba(222,254,102,0)_100%)]" />
                        <CardFooter className="absolute  bottom-0 border-zinc-100/50 z-10 p-[12px]">
                          <div className="w-full flex items-center">
                            <HerImage
                              className="rounded-full"
                              alt="country"
                              classNames={{
                                img: "w-[24px] h-[24px] min-w-[24px] min-h-[24px]",
                              }}
                              height={24}
                              src={`/images/country/${i.icon}-icon.png`}
                              width={24}
                            />
                            <div className="flex-1 px-[7px] text-left">
                              {i.title}
                            </div>
                          </div>
                        </CardFooter>
                      </>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

const DesktopCountryCard = ({
  country,
  delay,
}: {
  country: { title: string; code: string; icon: string };
  delay: number;
}) => {
  return (
    <FadeUPScrollgroup className="overflow-hidden" delay={delay}>
      <NextLink className="block" href={`/${country.code}`} target="_self">
        <Card className="group relative aspect-[155/186] cursor-pointer overflow-hidden rounded-[14px] bg-black">
          <Image
            alt={country.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            src={`/images/home/${country.code}.png`}
            width={558}
            height={669}
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(0deg,#DEFE66_0%,rgba(222,254,102,0)_100%)]" />
          <CardFooter className="absolute bottom-0 z-10 p-[10px] lg:p-[12px]">
            <div className="flex w-full items-center text-[#1A1A18]">
              <Image
                className="h-[18px] w-[18px] rounded-full lg:h-[20px] lg:w-[20px]"
                alt={`${country.title} flag`}
                height={20}
                src={`/images/country/${country.icon}-icon.png`}
                width={20}
              />
              <div className="flex-1 px-[6px] text-left text-[12px] font-medium lg:text-[16px]">
                {country.title}
              </div>
            </div>
          </CardFooter>
        </Card>
      </NextLink>
    </FadeUPScrollgroup>
  );
};
