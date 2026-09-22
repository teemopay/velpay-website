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
  const currentObj = countryObj["ID"];
  return (
    <div>
      <div className="relative bg-[url('/images/country/id.png')] bg-cover bg-center">
        <Image
          className="w-full hidden lg:block"
          alt="aml"
          height={561}
          src="/images/country/id.png"
          width={1536}
        />
        <ViewOne defaultSelected="id" />
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
              cnt={currentObj.three.card}
              className="lg:max-w-[380px] xl:max-w-[465px]  2xl:max-w-[800px]"
            >
              <Image
                className="md:max-w-[336px] md:max-h-[109px]  lg:mx-auto"
                alt="country"
                src={`/images/country/pay/id.png`}
                width={1406}
                height={414}
              />
            </CardWrap>
          </FadeIn>
          <BtnLink />
        </PageContanier>
      </CountryBackground>
    </div>
  );
}
