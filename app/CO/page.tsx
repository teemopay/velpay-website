"use client";
import { PageContanier } from "@/components/PageWrap";
import Image from "next/image";
import { BtnLink } from "@/components/BtnLink";
import countryObj from "@/config/country";
import {
  ViewOne,
  FirstSection,
  CardWrap,
  SecondSection,
  CountryBackground,
} from "@/components/Country";

export default function PEPage() {
  const currentObj = countryObj["CO"];
  return (
    <div>
      <div className="relative bg-[url('/images/country/co.png')] bg-cover bg-center">
        <Image
          className="w-full hidden lg:block"
          alt="aml"
          height={561}
          src="/images/country/co.png"
          width={1536}
        />
        <ViewOne defaultSelected="co" />
      </div>
      <CountryBackground>
        <PageContanier>
          <FirstSection
            country={currentObj.country}
            list={currentObj.firstObj}
          />
          <SecondSection
            sub={currentObj.second.sub}
            list={currentObj.second.list}
          />
          <CardWrap
            className="lg:max-w-[380px] xl:max-w-[500px] 2xl:max-w-[700px]"
            wrapclass="2xl:py-[40px]"
            cnt={currentObj.three.card}
          >
            <Image
              className="md:max-w-[371px] md:max-h-[232px] lg:max-w-[351px] lg:max-h-[212px] xl:max-w-[371px] xl:max-h-[232px] lg:mx-auto"
              alt="country"
              src={`/images/country/pay/co.png`}
              width={1406}
              height={880}
            />
          </CardWrap>
          <BtnLink />
        </PageContanier>
      </CountryBackground>
    </div>
  );
}
