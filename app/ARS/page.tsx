"use client";
import { PageContanier } from "@/components/PageWrap";
import { PrimaryTitle } from "@/components/Text";
import Image from "next/image";
import { BtnLink } from "@/components/BtnLink";
import countryObj from "@/config/country";
import { FadeIn } from "@/components/Animateitem";
import {
  ViewOne,
  CardWrap,
  FirstSection,
  MinProgressItem,
  SurveyItem,
  SurveySecondItem,
  CountryBackground,
} from "@/components/Country";

export default function MXPage() {
  const currentObj = countryObj["ARS"];
  return (
    <div>
      <div className="relative  bg-[url('/images/country/ars.png')]  bg-cover bg-center">
        <Image
          className="w-full hidden lg:block"
          alt="aml"
          height={1122}
          src="/images/country/ars.png"
          width={3072}
        />
        <ViewOne defaultSelected="ars" />
      </div>
      <CountryBackground>
        <PageContanier>
          <FirstSection
            country={currentObj.country}
            list={currentObj.firstObj}
          />
          <FadeIn>
            <PrimaryTitle
              className="mb-[30px] md:mb-[92px]"
              title={currentObj.second.title}
            />
          </FadeIn>
          <section id="progress" className="mb-[10px] md:mb-[96px]">
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-[10px] md:gap-[24px] mb-[10px] md:mb-[19px]">
              <FadeIn>
                <SurveyItem id={currentObj.country} />
              </FadeIn>
              <FadeIn>
                <SurveySecondItem value={currentObj.five.count} />
              </FadeIn>
            </div>
            <MinProgressItem list={currentObj.second.list} />
          </section>
          <FadeIn>
            <CardWrap
              className="lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[800px]"
              cnt={currentObj.three.card}
            >
              <Image
                className="md:max-w-[367px] md:max-h-[109px] lg:max-w-[347px] lg:max-h-[89px]  xl:max-w-[367px] xl:max-h-[109px] lg:mx-auto"
                alt="country"
                src={`/images/country/pay/ars.png`}
                width={1405}
                height={418}
              />
            </CardWrap>
          </FadeIn>
          <BtnLink />
        </PageContanier>
      </CountryBackground>
    </div>
  );
}
