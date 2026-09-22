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
} from "@/components/Country";

export default function MXPage() {
  const currentObj = countryObj["CH"];
  return (
    <div>
      <div className="relative mb-[46px] md:mb-[58px] bg-[url('/images/country/ch.png')]  bg-cover bg-center">
        <Image
          className="w-full hidden lg:block"
          alt="aml"
          height={561}
          src="/images/country/ch.png"
          width={1536}
        />
        <ViewOne defaultSelected="ch" />
      </div>
      <PageContanier>
        <FirstSection country={currentObj.country} list={currentObj.firstObj} />
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
            className="lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[700px]"
          >
            <Image
              className="md:max-w-[367px] md:max-h-[109px] lg:max-w-[347px] lg:max-h-[89px] xl:max-w-[367px] xl:max-h-[109px]  lg:mx-auto"
              alt="country"
              src={`/images/country/pay/ch.png`}
              width={1405}
              height={415}
            />
          </CardWrap>
        </FadeIn>
        <BtnLink />
      </PageContanier>
    </div>
  );
}
