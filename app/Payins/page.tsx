"use client";
import { BgText } from "@/components/Text";
import { BtnLink } from "@/components/BtnLink";
import { CardOne } from "@/components/CardOne";
import { CardFour } from "@/components/CardFour";
import { Image as HerImage } from "@heroui/image";
import { PageContanier } from "@/components/PageWrap";
import { FadeUPText } from "@/components/Animateitem";
import ParticleNetwork from "@/components/Three/ParticleNetwork";
import InextImage from "next/image";

const FirstItem = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <InextImage
        className="block h-[300px] w-full object-cover object-center sm:h-auto"
        alt="Localized payment processing platform"
        src="/images/payins/bg.png"
        width={1536}
        height={640}
        priority
      />
      <PageContanier
        pclassName="absolute inset-0 z-10"
        className="flex h-full items-center"
      >
        <div className="max-w-[569px]">
          <FadeUPText className="mb-[22px] max-w-[469px] text-[32px] font-semibold leading-[37px] md:text-[33px] md:leading-[53px] lg:mb-[33px] xl:text-[48px] xl:leading-[68px] 2xl:max-w-[569px]">
            Localized payment processing solutions
          </FadeUPText>
          <FadeUPText
            delay={0.1}
            className="max-w-[420px] md:text-[16px] md:leading-[24px]"
          >
            We offer localized payment solutions to support your business
            growth.
          </FadeUPText>
        </div>
      </PageContanier>
    </section>
  );
};
export default function PayinsPage() {
  return (
    <div>
      <FirstItem />
      <BgText
        subClass="max-w-[972px]"
        title="Country-specific solutions"
        sub="By integrating with Vellpay, businesses can access supported local payment methods across key markets in Latin America and Asia. We provide localized payment solutions designed to streamline payment operations and support business growth across different markets."
      />
      <PageContanier pclassName="pt-[53px] mb-[49px] md:pt-[162px] md:pb-[47px]">
        <div className="flex items-center justify-center mb-[50px] md:pl-[48px]">
          <div className="w-[131px] min-w-[131px] mr-[22px] md:mr-0 md:w-[323px] flex flex-col lg:flex-row justify-start items-center  lg:items-baseline">
            <div className="text-[20px] md:text-[36px]  font-medium pr-[8px] text-center md:text-left">
              50
            </div>
            <div className="text-[12px] md:text-[18px] text-center md:text-left">
              Payment Processors
            </div>
          </div>
          <HerImage
            radius="full"
            classNames={{
              img: "w-[29px] h-[29px] md:w-[40px] md:h-[40px]",
            }}
            alt="country"
            height="100%"
            src="/images/payins/5.png"
            width="100%"
          />
          <div className="text-center sm:text-left sm:ml-[30px] lg:ml-[74px] text-[12px] leading-[14px]  md:text-[18px] md:leading-[36px] w-[149px]  sm:w-[400px] lg:w-[590px]">
            You will get the best price and the most stable channel
          </div>
        </div>
        <div className="flex items-center justify-center md:pl-[48px]">
          <div className="w-[131px] min-w-[131px] mr-[22px] md:mr-0 md:w-[323px] flex flex-col lg:flex-row justify-start items-center  lg:items-baseline">
            <div className="text-[20px] md:text-[36px]  font-medium pr-[8px] text-center md:text-left">
              200
            </div>
            <div className="text-[12px] md:text-[18px] text-center md:text-left">
              Payment Methods
            </div>
          </div>
          <HerImage
            radius="full"
            classNames={{
              img: "w-[29px] h-[29px] md:w-[40px] md:h-[40px]",
            }}
            alt="country"
            height="100%"
            src="/images/payins/5.png"
            width="100%"
          />
          <div className="text-center sm:text-left sm:ml-[30px] lg:ml-[74px] text-[12px] leading-[14px]  md:text-[18px] md:leading-[36px] w-[149px]  sm:w-[400px] lg:w-[590px]">
            Anyone can buy your product or service
          </div>
        </div>
      </PageContanier>
      <div className="relative mb-[30px]  md:mb-[134px]  md:pt-[103px] pb-[89px] overflow-hidden">
        <PageContanier>
          <CardFour />
        </PageContanier>
      </div>
      <BgText
        subClass="max-w-[972px]"
        title="Your business growth engine"
        sub="Our cloud payment platform adopts financial-grade security architecture design, supports elastic expansion and personalized configuration solutions, and creates an industry-leading API ecosystem for merchants."
      />
      <PageContanier pclassName=" relative">
        <div className="relative flow-root pt-[34px] md:pt-[122px]">
          <ParticleNetwork className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden" />
          <div className="relative z-10">
            <CardOne />
          </div>
        </div>
        <div className="mb-[46px] md:mb-[208px] mt-[40px]">
          <BtnLink />
        </div>
      </PageContanier>
    </div>
  );
}
