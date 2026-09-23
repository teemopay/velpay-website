"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import InextImage from "next/image";
import {
  PrimaryTitle,
  SubTitle,
  SecondaryTitle,
  MediumTitle,
  SmallTitle,
} from "@/components/Text";
import { CardCountry } from "@/components/CardCountry";
import { Image } from "@heroui/image";
import { BtnLink } from "@/components/BtnLink";
import { CardStep } from "@/components/CardStep";
import { PageContanier } from "@/components/PageWrap";
import { Button } from "@heroui/button";
import { HomeArrow } from "@/components/icons";
import { Tabs, Tab } from "@heroui/tabs";
import { FadeIn, FadeUPText } from "@/components/Animateitem";
import { HomeIcon } from "@/components/icons/home/icons";
import ParticleNetwork from "@/components/Three/ParticleNetwork";
import NextLink from "next/link";
const hoverStyle =
  "group shadow transition-all duration-700 ease-out   hover:shadow-md hover:shadow-[#DEFE66] cursor-pointer";

const link =
  "https://www.figma.com/proto/21icNIIl4L56QQqqwnimB4/payin-demo?page-id=2258%3A15527&node-id=3041-24154&viewport=-11834%2C-12664%2C0.31&t=MLTqgZ21FPOXZSEv-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3041%3A24154";

const TitleItem = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <FadeIn>
      <div
        className={cn(
          " text-[32px] leading-[37px] md:text-[48px] md:leading-[68px] font-semibold text-center ",
          className,
        )}
      >
        {title}
      </div>
    </FadeIn>
  );
};

export default function Home() {
  return (
    <>
      <div>
        <section className="relative h-[300px] w-full overflow-hidden md:h-[clamp(528px,47.5vw,730px)]">
          <InextImage
            className="h-full w-full object-cover object-center"
            alt="Global one-stop payment experience"
            src="/images/home/bg.png"
            width={1536}
            height={720}
            priority
          />
          <div className="absolute top-0 left-0 z-2 w-full h-full bg-transparent">
            <PageContanier
              pclassName="h-full"
              className="flex items-start justify-center h-full flex-col"
            >
              <FadeUPText>
                <div className="max-w-[517px] text-[32px] leading-[37px] md:text-[48px] md:leading-[58px] font-semibold mb-[24px]">
                  Global <span className="text-[#DEFE66]">one-stop</span>{" "}
                  payment experience
                </div>
              </FadeUPText>
              <FadeUPText delay={0.1}>
                <div className="max-w-[510px] text-[16px] mb-[21px] md:mb-[64px]">
                  Connect to the global payment network to provide enterprises
                  with efficient, convenient and secure one-stop payment
                  solutions.
                </div>
              </FadeUPText>
              <FadeUPText delay={0.2}>
                <NextLink
                  className="flex items-center justify-center w-[131px] h-[30px] md:w-[180px] md:h-[45px] text-[12px] md:text-[20px] text-[#1A1A18] bg-[linear-gradient(180deg,#DEFE66_0%,#B0D840_100%)] font-normal rounded-full transition-transform duration-300 hover:scale-[1.03]"
                  href="/Touch"
                  target="_self"
                >
                  Get in touch
                </NextLink>
              </FadeUPText>
            </PageContanier>
          </div>
        </section>
        <PageContanier pclassName="relative pt-[56px] md:pt-[67px] pb-[60px]  md:pb-[128px]">
          <CountryItem />
          <WordWide />
          <PaymentDemo />
          <div className="home-step">
            <section className="mb-[27px] md:mb-[72px]">
              <FadeIn>
                <div className="mb-[22px] md:mb-[20px] font-semibold w-full text-[32px] leading-[37px] md:text-[48px] md:leading-[54px] text-center  text-white  cursor-pointer ">
                  How to <span className="text-[#DEFE66]">start</span>
                </div>
              </FadeIn>
              <FadeIn>
                <SubTitle
                  className="mb-[27px]  md:mb-[36px]"
                  align="text-center"
                  title="Our simple, clear process brings success to your business."
                />
              </FadeIn>
            </section>
            <CardStep />
          </div>
        </PageContanier>
        <TrustedItem />
        <PageContanier pclassName="relative">
          <BtnLink />
        </PageContanier>
      </div>
    </>
  );
}

const TrustedItem = () => {
  return (
    <div className={cn("relative pt-[60px]  md:pt-[48px] ")}>
      <PageContanier pclassName="relative z-10">
        <div className="text-[32px] leading-[37px] md:text-[48px] md:leading-[58px] font-semibold mb-[24px] md:mb-[14px] text-center">
          <span className="text-[#DEFE66]">Trusted</span> by
        </div>
        <FadeIn>
          <div className="text-[12px] leading-[18px] md:text-[16px] md:leading-[21px]  text-center">
            Anytime, Anywhere. Ensuring seamless transactions for our clients
            worldwide.
          </div>
        </FadeIn>
        <FadeIn>
          <InextImage
            className="mx-auto"
            alt="aml"
            height={824}
            src="/images/home/bg1.png"
            width={1536}
          ></InextImage>
        </FadeIn>
      </PageContanier>
    </div>
  );
};

const WordWide = () => {
  return (
    <section
      id="world-wide-reach"
      className="relative isolate pt-[43px] pb-[96px] md:pb-[171px]"
    >
      <ParticleNetwork className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden" />
      <div className="relative z-10">
        <FadeIn>
          <div className="mb-[22px] md:mb-[20px] font-semibold w-full text-[32px] leading-[37px] md:text-[48px] md:leading-[54px] text-center  text-white  cursor-pointer ">
            World wide <span className="text-[#DEFE66]">reach</span>
          </div>
        </FadeIn>
        <div className="flex justify-center mb-[33px]  md:mb-[37px]">
          <FadeIn>
            <SubTitle
              className="md:max-w-[660px] "
              align="text-center"
              title="Easily access intelligent routing to optimize fund paths and make transactions efficient and transparent. Quickly receive funds from customers and send payments to your partners."
            />
          </FadeIn>
        </div>

        <div className="relative">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-[22px] gap-y-[20px]  mb-[20px]">
            <FadeIn>
              <NextLink className="block" href="/Payins">
                <div
                  className={cn(
                    "relative flex flex-col justify-between home-word-bg overflow-hidden p-[24px] md:p-[35px] rounded-[16px] min-h-[252px] md:min-h-[368px]",
                    hoverStyle,
                  )}
                >
                  <div className="relative z-10 mb-[42px] md:mb-0">
                    <SecondaryTitle
                      align="text-left"
                      className="md:max-w-[310px]"
                      title="Localized solution for payment processing"
                    />
                  </div>
                  <div className="home-hover relative z-10 flex items-center">
                    <MediumTitle
                      title="Payins"
                      textColor="text-[#fff]"
                      align="text-left"
                      className="mr-[20px] home-hover-border "
                    />
                    <HomeArrow className="home-hover-text" />
                  </div>
                  <InextImage
                    className="pointer-events-none absolute bottom-[37px] right-[36px] z-[1] h-auto  max-w-[250px]   md:max-w-[358px]"
                    alt="aml"
                    height={478}
                    src="/images/home/bg2.png"
                    width={716}
                  ></InextImage>
                </div>
              </NextLink>
            </FadeIn>
            <FadeIn>
              <NextLink className="block" href="/Payouts">
                <div
                  className={cn(
                    "relative flex flex-col justify-between home-word-bg overflow-hidden p-[24px] md:p-[35px] rounded-[16px] min-h-[252px] md:min-h-[368px]",
                    hoverStyle,
                  )}
                >
                  <div className="relative z-10">
                    <SecondaryTitle
                      align="text-left"
                      className="md:max-w-[500px]"
                      title="Vellpay Payout"
                    />
                  </div>
                  <div className="home-hover relative z-10 flex items-center">
                    <MediumTitle
                      title="Payouts"
                      textColor="text-[#fff]"
                      align="text-left"
                      className="mr-[20px] home-hover-border"
                    />
                    <HomeArrow className="home-hover-text" />
                  </div>
                  <InextImage
                    className="pointer-events-none absolute bottom-[37px] right-[36px] z-[1] h-auto  max-w-[150px]   md:max-w-[225px]"
                    alt="aml"
                    height={225}
                    src="/images/home/bg3.png"
                    width={225}
                  ></InextImage>
                </div>
              </NextLink>
            </FadeIn>
          </div>
          <Image
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-screen max-w-[1536px] -translate-x-1/2 -translate-y-1/2 object-contain object-center"
            alt=""
            aria-hidden="true"
            height={914}
            src="/images/payins/flur.png"
            width={1536}
          />
          <FadeIn>
            <div
              className={cn(
                "home-word-bg overflow-hidden rounded-2xl lg:flex lg:flex-row lg:items-center",
                hoverStyle,
              )}
            >
              <div className="flex-1 md:min-w-[471px] p-[24px] md:px-[35px] flex flex-col justify-between">
                <div className="mb-[10px] md:mb-[31px] pt-[23px] md:pt-0 lg:mt-[-40px]">
                  <SecondaryTitle
                    className="md:max-w-[358px]"
                    align="text-left"
                    title="Precise information for payment operations"
                  />
                </div>
                <SmallTitle title="Managing worldwide settlements has never been easier" />
              </div>
              <div className="flex items-end pt-[35px] pl-[34px] ">
                <video
                  className="w-full object-cover rounded-tl-[8px] 2xl:max-w-[800px]"
                  autoPlay={true}
                  loop
                  muted
                  playsInline
                  poster={"/images/action.png"}
                >
                  <source src="/images/action1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const PaymentDemo = () => {
  const [selected, setSelected] = useState<string | number>("step1");
  return (
    <div className="pt-[28px] pb-[60px] md:pb-[119px]">
      <FadeIn>
        <PrimaryTitle className="mb-[7px]" title="Payment Flow demo" />
      </FadeIn>
      <FadeIn className="mb-[29px]  md:mb-[52px]">
        <SubTitle
          className="max-w-[659px]  mx-auto"
          align="text-center"
          title="Explore a simple online payment process through a demonstration that clearly reveals its key steps."
        />
      </FadeIn>

      <FadeIn className="lg:flex mb-[29px]  lg:mb-[98px] home-bg-demo border border-[#DEFE66]  p-[15px] pt-[25px] lg:p-[20px] rounded-[28px]">
        <div className="flex-1 lg:px-[29px] flex items-start justify-center flex-col">
          <div className="font-bold text-[14px]  lg:text-[36px] text-[#fff] lg:max-w-[280px] mb-[16px] lg:mb-[39px] 2xl:max-w-full">
            Payment Guide Video
          </div>
          <div className="text-[12px] lg:text-[16px] text-[#fff] lg:max-w-[314px] 2xl:max-w-[500px] mb-[30px] lg:mb-0">
            Watch our step-by-step video tutorial to learn how to complete
            payments seamlessly with VELLPAY.
          </div>
        </div>
        <NextLink
          className="relative block"
          target="_blank"
          href="https://drive.google.com/drive/folders/1PPM2Dq_-7-ITnLxPVxaTtEZ9R5u71hb_?usp=sharing"
        >
          <InextImage
            className=" lg:max-w-[561px] 2xl:max-w-[800px] rounded-[20px]"
            alt="aml"
            height={744}
            src="/images/home/demo.png"
            width={1122}
          ></InextImage>
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="relative w-[56px]  md:w-[102px] ripple-css">
              <div className="ripple-css-ripple">
                <i></i>
              </div>
              <svg
                className="relative z-[2] w-full"
                viewBox="0 0 102 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 1410135567">
                  <circle
                    id="Ellipse 336"
                    cx="51"
                    cy="51"
                    r="51"
                    fill="#DEFE66"
                  />
                  <path
                    id="Polygon 9"
                    d="M71 49.268C72.3333 50.0378 72.3333 51.9623 71 52.7321L42.5 69.1865C41.1667 69.9563 39.5 68.9941 39.5 67.4545L39.5 34.5455C39.5 33.0059 41.1667 32.0437 42.5 32.8135L71 49.268Z"
                    fill="#1A1A18"
                  />
                </g>
              </svg>
            </div>
          </div>
        </NextLink>
      </FadeIn>
      <div className="w-full flex items-center justify-center">
        <Tabs
          selectedKey={selected}
          aria-label="Options"
          isVertical={false}
          onSelectionChange={(val) => {
            if (val !== null) setSelected(val);
          }}
          radius="full"
          classNames={{
            tabWrapper: "w-full",
            base: "w-full block",
            tabList: " w-full relative bg-transparent gap-[20px] p-0",
            cursor: "w-full in-tag-bg",
            tab: "px-[10px] h-[26px] sm:h-[52px] md:h-[68px] bg-[#22251C] first:max-w-[43.5%]",
            tabContent: "text-[12px] sm:text-[16px] lg:text-[22px] font-medium",
            panel: "py-[22px]",
          }}
        >
          <Tab
            key="step1"
            title={
              <>
                <span
                  className={`${
                    selected === "step1" ? "text-[#000000]" : "text-[#fff]"
                  } md:pr-[5px]`}
                >
                  Step 1
                </span>
                <span
                  className={`${
                    selected === "step1" ? "text-[#000000]" : "text-[#fff]"
                  } hidden md:inline`}
                >
                  Select a country
                </span>
              </>
            }
          >
            <div className="bg-[#22251C] rounded-[16px]">
              <div className="py-[21px]">
                <div className="max-w-[358px] sm:max-w-[606px] md:max-w-[736px] mx-auto grid grid-cols-5 gap-x-[7px] md:gap-x-[14px] gap-y-[11px]">
                  <PaymentCountry />
                </div>
              </div>
              <div className="flex items-center justify-between flex-col md:flex-row  bg-[#495043] py-[15px] md:py-[18px] px-[15px] md:px-[29px] rounded-b-[16px]">
                <div className="md:max-w-[581px] 2xl:max-w-full text-[12px] leading-[16px] mb-[12px] md:mb-0 sm:text-[16px] sm:leading-[21x] md:mr-[45px]">
                  Select the country you want to access in the Demo and start
                  your journey.
                </div>
                <div className=" w-full md:w-auto flex items-center justify-end">
                  <NextLink href={link} target="_blank">
                    <Button
                      className=" w-[114px] h-[23px]  sm:w-[200px] lg:w-[312px] sm:h-[46px] text-[#1A1A18] in-tag-bg  text-[12px] sm:text-[20px]"
                      radius="full"
                    >
                      Comfirm
                    </Button>
                  </NextLink>
                </div>
              </div>
            </div>
          </Tab>
          <Tab
            key="step2"
            title={
              <>
                <span
                  className={`${
                    selected === "step2" ? "text-[#000000]" : "text-[#fff]"
                  } md:pr-[5px]`}
                >
                  Step 2
                </span>
                <span
                  className={`${
                    selected === "step2" ? "text-[#000000]" : "text-[#fff]"
                  } hidden md:inline`}
                >
                  Choice of payment method
                </span>
              </>
            }
          >
            <div className="bg-[#22251C] rounded-[16px]">
              <div className="pt-[17px] pb-[25px] md:pt-[30px] md:pb-[22px] px-[12px] md:px-[50px] min-h-[325px]">
                <InextImage
                  className="mx-auto"
                  alt="aml"
                  height={258}
                  src="/images/home/step-2.png"
                  width={796}
                ></InextImage>
              </div>
              <div className="flex items-center justify-between flex-col md:flex-row  bg-[#495043] py-[15px] md:py-[18px] px-[15px] md:px-[29px] rounded-b-[16px]">
                <div className="max-w-[581px] 2xl:max-w-full text-[12px] leading-[16px] mb-[12px] md:mb-0 sm:text-[16px] sm:leading-[21x] md:mr-[45px]">
                  We will open multiple financial channels and choose payment
                  paths accurately.
                </div>
                <div className="w-full md:w-auto flex items-center justify-end">
                  <NextLink href={link} target="_blank">
                    <Button
                      className=" w-[114px] h-[23px]  sm:w-[200px] lg:w-[312px] sm:h-[46px] text-[#1A1A18] bg-[#DEFE66] text-[12px] sm:text-[20px]"
                      radius="full"
                    >
                      Comfirm
                    </Button>
                  </NextLink>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

const PaymentCountry = () => {
  const list = [
    [
      {
        title: "Brazil",
        id: "br-icon",
      },
      {
        title: "Argentina",
        id: "ar-icon",
      },
      {
        title: "Colombia",
        id: "co-icon",
      },
      {
        title: "India",
        id: "in-icon",
      },
      {
        title: "Korea",
        id: "ko-icon",
      },
    ],
    [
      {
        title: "Indonesia",
        id: "id-icon",
      },
      {
        title: "Vietnam",
        id: "vn-icon",
      },
      {
        title: "Cambodia",
        id: "kh-icon",
      },
    ],
  ];

  return (
    <>
      {list[0].map((i, index) => {
        return (
          <NextLink
            target="_blank"
            href={link}
            key={index}
            className="group flex items-center justify-center flex-col w-[66px] h-[65px] sm:w-[110px] sm:h-[110px] md:w-[136px] md:h-[136px] border border-[#fff] rounded-[12px] bg-[#22251C] hover:bg-[linear-gradient(180deg,#DEFE66_0%,#B0D840_100%)] cursor-pointer hover:border-[#DEFE66]"
          >
            <Image
              className="mb-[10px] max-w-[19px] max-h-[19px] sm:max-w-[39px] sm:max-h-[39px]"
              alt="country"
              height={39}
              src={`/images/country/${i.id}.png`}
              width={39}
              radius="full"
            />
            <div className="text-[12px] sm:text-[18px] md:text-[20px] md:leading-[36px] text-[#fff] group-hover:text-[#232323]">
              {i.title}
            </div>
          </NextLink>
        );
      })}
      <div className="col-span-5 flex justify-center gap-x-[7px] md:gap-x-[14px]">
        {list[1].map((i, index) => {
          return (
            <NextLink
              href={link}
              target="_blank"
              key={index}
              className="group flex items-center justify-center flex-col w-[66px] h-[65px] sm:w-[110px] sm:h-[110px] md:w-[136px] md:h-[136px] border border-[#fff] rounded-[12px] bg-[#22251C] hover:bg-[linear-gradient(180deg,#DEFE66_0%,#B0D840_100%)] cursor-pointer hover:border-[#DEFE66]"
            >
              <Image
                className="mb-[10px] max-w-[19px] max-h-[19px] sm:max-w-[39px] sm:max-h-[39px]"
                alt="country"
                height={39}
                src={`/images/country/${i.id}.png`}
                width={39}
                radius="full"
              />
              <div className="text-[12px] sm:text-[18px] md:text-[20px] md:leading-[36px] text-[#fff] group-hover:text-[#232323]">
                {i.title}
              </div>
            </NextLink>
          );
        })}
      </div>
    </>
  );
};

const CountryItem = () => {
  return (
    <div className="mx-auto mb-[100px] md:mb-[200px] lg:grid lg:min-h-[540px] lg:max-w-[1100px] lg:grid-cols-[minmax(280px,390px)_minmax(400px,500px)] lg:items-center lg:justify-center lg:gap-[60px] xl:gap-[90px] 2xl:max-w-[1200px] 2xl:grid-cols-[minmax(390px,430px)_600px] 2xl:gap-[100px]">
      <div className="mb-[30px] lg:mb-0">
        <div className="lg:hidden">
          <FadeIn>
            <PrimaryTitle
              className="mb-[22px]"
              title="Country-specific solutions"
              align="text-center"
            />
          </FadeIn>
          <FadeIn delay={0.02}>
            <SubTitle
              className="mx-auto"
              align="text-center"
              title="Easily expand your business with Vellpay’s professional payment solutions in countries and regions around the world."
            />
          </FadeIn>
        </div>
        <div className="hidden lg:block">
          <FadeIn>
            <div className="mb-[28px] text-[48px] font-semibold leading-[54px] text-white">
              <span className="whitespace-nowrap">Country-specific</span>
              <br />
              <span className="text-[#DEFE66]">solutions</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.02}>
            <div className="max-w-[390px] text-[16px] leading-[21px] text-white">
              Easily expand your business with Vellpay’s professional payment
              solutions in countries and regions around the world.
            </div>
          </FadeIn>
        </div>
      </div>
      <CardCountry />
    </div>
  );
};
