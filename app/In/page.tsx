import { PageContanier } from "@/components/PageWrap";
import { PrimaryTitle, MediumTitle } from "@/components/Text";
import { Image } from "@heroui/image";
import NextLink from "next/link";
import { WorkData, JoinData } from "@/config/job";
import { BtnLink } from "@/components/BtnLink";
import { FadeIn, FadeText } from "@/components/Animateitem";

export default function InPage() {
  return (
    <div className="bg-[#1A1A18]">
      <div className="center-reveal-mask country-head-bg  max-h-[528px] md:mb-[120px] mb-[68px]  py-[140px]   bg-[url('/images/join/3.png')]">
        <PageContanier>
          <FadeText>
            <PrimaryTitle
              className="pt-[52px]"
              align="text-left"
              title="Your career."
            />
            <PrimaryTitle
              align="text-left"
              title="You  might be the perfect. "
            />
            <div className="text-[12px] leading-[18px] mt-[25px] md:text-[20px] md:leading-[36px] md:mt-[36px] max-w-[555px] text-[#D1D1D1]">
              Search jobs by category to find a position and a team where you
              can make an impact.
            </div>
          </FadeText>
        </PageContanier>
      </div>
      <PageContanier>
        <FadeIn>
          <div className="lg:flex items-center justify-between mb-[78px] md:mb-[168px]">
            <div className="flex-1  lg:min-w-[500px] lg:pr-[20px]">
              <div className="lg:max-w-[714px] mb-[15px] md:mb-[40px] ">
                <PrimaryTitle
                  align="text-left"
                  title="Shape the future of commerce with Vellpay."
                />
              </div>
              <MediumTitle
                className="lg:max-w-[671px] mb-[38px] lg:mb-0"
                align="text-left"
                title="We believe groundbreaking innovation starts with exceptional people. That’s why we provide personalized benefits supporting every life stage, empowering you to thrive at work and beyond. Ready to leave your mark? Join us in redefining what’s possible."
              />
            </div>
            <Image
              isZoomed
              classNames={{
                img: "w-full min-h-[199px]  lg:max-w-[744px] lg:max-h-[443px] rounded-none",
              }}
              alt="picture"
              height="100%"
              src="/images/join/1.png"
              width="100%"
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="lg:flex items-center justify-between mb-[78px] md:mb-[168px] flex-row-reverse">
            <div className="flex-1 lg:min-w-[500px]   lg:pl-[48px]">
              <div className="lg:max-w-[711px] mb-[15px] lg:mb-[40px]">
                <PrimaryTitle
                  align="text-left"
                  title="Employee wellness drives everything we do."
                />
              </div>
              <MediumTitle
                className="lg:max-w-[668px] mb-[38px] lg:mb-0"
                align="text-left"
                title="We invest in your holistic well-being with benefits and resources designed to help you thrive."
              />
            </div>
            <Image
              isZoomed
              classNames={{
                img: "w-full min-h-[199px] lg:max-w-[741px]  gl:max-h-[443px] rounded-none",
              }}
              alt="country"
              height="100%"
              src="/images/join/4.png"
              width="100%"
            />
          </div>
        </FadeIn>
        <MediumTitle
          align="text-left"
          className="mb-[20px] md:mb-[55px]"
          title={
            <>
              <span className="text-[#DEFE66]"> Careers/</span>
              Job category
            </>
          }
        />

        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mb-[63px] md:mb-[137px]">
            {WorkData.map((i) => (
              <div
                key={i.id}
                className="flex flex-col justify-between bg-[#22251C] rounded-2xl px-[12px] md:px-[24px] pt-[17px]  md:pt-[33px] pb-[30px] border border-[rgba(255,255,255,0.3)]"
              >
                <div>
                  <div className="font-medium text-white text-[15px] leading-[20px] md:text-[26px] md:leading-[40px] mb-[9px] md:mb-[21px]">
                    {i.title}
                  </div>
                  <div className="flex items-center flex-wrap mb-[7px] md:mb-[25px]">
                    {i.tags.map((t) => (
                      <div
                        key={t.id}
                        className="line-clamp-1 in-tag-bg mb-[8px]  text-[#1A1A18] md:px-[16px] px-[12px] py-[5px]   md:py-[4px] rounded-full text-[12px] leading-[12px] md:text-[14px] md:leading-[16px]  mr-[15px]"
                      >
                        {t.title}
                      </div>
                    ))}
                  </div>
                  {i.id !== 4 && (
                    <MediumTitle
                      className="line-clamp-3 mb-[24px] md:mb-[21px] !text-[16px]"
                      align="text-left"
                      title={i.cnt}
                    />
                  )}
                  {i.id === 4 && (
                    <div className="mb-[24px] md:mb-[21px] ">
                      <MediumTitle
                        className="line-clamp-3 !text-[16px]"
                        align="text-left"
                        title={i.cnt}
                      />
                      <MediumTitle
                        className="line-clamp-3 !text-[16px]"
                        align="text-left"
                        title={i.sub}
                      />
                    </div>
                  )}
                </div>
                <NextLink
                  className="home-hover flex items-center"
                  href={i.href}
                  key={i.id}
                >
                  <MediumTitle
                    textColor="text-[#DEFE6678] !text-[16px]"
                    align="text-left"
                    title="View more"
                    className="mr-[4px] md:mr-[10px]"
                  />
                  <svg
                    className="home-hover-text  w-[18px] h-[18px] md:w-[22px] md:h-[22px]"
                    width="100%"
                    height="100%"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Mask group">
                      <mask
                        id="mask0_1578_433"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={27}
                        height={27}
                      >
                        <rect
                          id="Rectangle 590"
                          x="0.748047"
                          y="0.9375"
                          width="25.3238"
                          height="25.3238"
                          fill="#DEFE6678"
                          stroke="#DEFE6678"
                        />
                      </mask>
                      <g mask="url(#mask0_1578_433)">
                        <g id="Group 667">
                          <path
                            id="Vector 85"
                            d="M4.19629 13.5977H21.9649"
                            stroke="#DEFE6678"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            id="Rectangle 589"
                            d="M13.5039 4.38477L22.7401 13.6209C22.7791 13.66 22.7791 13.7233 22.7401 13.7623L13.5039 22.9985"
                            stroke="#DEFE6678"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </NextLink>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="country-head-bg md:pt-[46px] md:pl-[44px]  md:max-w-[1500px] md:h-[469px] md:bg-[url('/images/join/2.png')] md:rounded-[20px]">
            <div className="font-semibold text-[32px] leading-[37px] 2xl:text-[44px] 2xl:leading-[48px] text-white md:mb-[72px]  mb-[40px]">
              <FadeText>Join now and enjoy</FadeText>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {JoinData.map((i) => (
                <div
                  key={i.id}
                  className={`flex items-start ${i.id === 2 || i.id === 4 ? "md:justify-end" : "md:justify-start"}`}
                >
                  <svg width={27} height={27} viewBox="0 0 27 27" fill="none">
                    <g id="Group 745">
                      <circle
                        id="Ellipse 244"
                        cx="13.0303"
                        cy="13.0303"
                        r="13.0303"
                        fill="url(#paint0_linear_2935_22002)"
                      />
                      <g id="Frame">
                        <path
                          id="Vector"
                          d="M8.4707 13.031L11.7283 16.2886L18.2434 9.77344"
                          stroke="#1A1A18"
                          strokeWidth="0.96"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2935_22002"
                        x1="13.0303"
                        y1={0}
                        x2="13.0303"
                        y2="26.0606"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DEFE66" />
                        <stop offset={1} stopColor="#B0D840" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="tracking-[-1px] flex-1 px-[20px] md:max-w-[228px] text-[12px]  md:text-[16px] md:leading-[18px]">
                    {i.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="block md:hidden country-head-bg  h-[105px] bg-[url('/images/join/2.png')] rounded-[20px] mt-[22px]"></div>
        </FadeIn>
        <div className="mt-[106px] md:mt-[77px] mb-[46px] md:mb-[106px]">
          <BtnLink />
        </div>
      </PageContanier>
    </div>
  );
}
