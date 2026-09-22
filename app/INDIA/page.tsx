"use client";
import { PageContanier } from "@/components/PageWrap";
import { Image } from "@heroui/image";
import InextImage from "next/image";
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
  const currentObj = countryObj["India"];
  return (
    <div>
      <div className="relative bg-[url('/images/country/in.png')] bg-cover bg-center">
        <InextImage
          className="w-full hidden lg:block"
          alt="aml"
          height={561}
          src="/images/country/in.png"
          width={1536}
        />
        <ViewOne defaultSelected="in" />
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
            className="lg:max-w-[400px] xl:max-w-[541px] 2xl:max-w-[800px]"
            wrapclass="2xl:py-[40px] md:px-[38px] -tracking-[0.8px]"
            cnt={currentObj.three.card}
          >
            <Image
              className="md:max-w-[298px] md:max-h-[208px]  lg:mx-auto    lg:ml-[30px]"
              alt="country"
              src={`/images/country/pay/in.png`}
            />
          </CardWrap>
          <BtnLink />
        </PageContanier>
      </CountryBackground>
    </div>
  );
}
