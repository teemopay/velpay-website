import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const list = [
  {
    id: 1,
    data: [
      {
        t: "Supported Integration Modes",
        list: [
          "RESTful API",
          "Hosted Checkout Page (Redirect or iframe embed)",
        ],
      },
      {
        t: "Authentication",
        list: ["HMAC signature (default)", "RSA signature (optional)"],
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        t: "Compatibility",
        list: [
          "Supported languages: Java, PHP, Python, Node.js, Go",
          "Protocol: HTTPS + JSON (UTF-8 encoding)",
          "Response format: Structured JSON with error codes & timestamps",
        ],
      },
      {
        t: "Tooling & Documentation",
        list: [
          "Postman Collection and sample payloads",
          "Sandbox account & test keys",
          "SDKs and webhook samples available upon request",
        ],
      },
    ],
  },
  {
    id: 3,
    data: [
      {
        t: "Implementation Recommendations",
        list: [
          " Enable webhook endpoints for transaction and risk event handling",
          "Support logging and retry mechanisms",
          "Validate signatures on callback events",
          "Implement proper timezone handling for reconciliation alignment",
        ],
      },
    ],
  },
];

const Carousel = () => {
  const shouldLoop = list.length > 4;
  const swiperRef: any = useRef(null);
  const swiperWebRef: any = useRef(null);
  const handlePrev = () => {
    if (swiperWebRef.current) {
      swiperWebRef.current.swiper.slidePrev(); // 向前切换
    }
  };

  const handleNext = () => {
    if (swiperWebRef.current) {
      swiperWebRef.current.swiper.slideNext(); // 向后切换
    }
  };
  return (
    <>
      <div className="hidden lg:flex Carousel  items-center justify-between">
        <div onClick={handlePrev}>
          <LeftArrow />
        </div>
        <Swiper
          ref={swiperWebRef}
          className="flex-1"
          spaceBetween={0}
          slidesPerView={1}
          modules={[Autoplay]}
          loop={shouldLoop}
          rewind={!shouldLoop}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {list.map((i, index) => {
            return (
              <SwiperSlide key={i.id}>
                <div className="flex items-center justify-start" key={index}>
                  <Image
                    className="flex-1 max-w-[50%]"
                    src={`/images/int/c${i.id}.png`}
                    alt="c1"
                    width={978}
                    height={620}
                  />
                  <div className="flex-1 lg:pl-[20px]  xl:pl-[41px]">
                    {i.data.map((s, sIndex) => {
                      return (
                        <div key={sIndex}>
                          <div className="font-medium text-[14px] leading-[18px]  xl:text-[24px] xl:leading-[36px] mb-[12px] xl:mb-[19px]">
                            {s.t}
                          </div>
                          <ul
                            className={`list-disc text-[14px] leading-[21px]  pl-[20px] xl:mb-[26px] ${sIndex === 0 ? "mb-[12px]" : "mb-0"}`}
                          >
                            {s.list.map((l, lIndex) => {
                              return <li key={lIndex}>{l}</li>;
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div onClick={handleNext}>
          <RightArrow />
        </div>
      </div>
      <div className="lg:hidden">
        <Swiper
          className="mobile-swiper"
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay]}
          loop={shouldLoop}
          rewind={!shouldLoop}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {list.map((i, index) => {
            return (
              <SwiperSlide key={i.id}>
                <div className="relative" key={index}>
                  <Image
                    src={`/images/int/c${i.id}.png`}
                    alt="c1"
                    width={978}
                    height={620}
                  />
                  <div className="flex flex-row items-center justify-center mt-[18px]">
                    {list.map((_, o) => {
                      return (
                        <div
                          key={o}
                          className={`mobile-swiper-line ${o === index ? "bg-[#DEFE66]" : "bg-[#d9d9d9]"}`}
                        ></div>
                      );
                    })}
                  </div>
                  <div className="mt-[37px]">
                    {i.data.map((s, sIndex) => {
                      return (
                        <div key={sIndex}>
                          <div className="font-medium text-[16px] sm:text-[20px] mb-[10px]">
                            {s.t}
                          </div>
                          <ul
                            className={`list-disc text-[14px] leading-[21px] pl-[20px] ${sIndex === 0 ? "mb-[12px]" : "mb-0"}`}
                          >
                            {s.list.map((l, lIndex) => {
                              return <li key={lIndex}>{l}</li>;
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

const LeftArrow = () => {
  return (
    <svg
      className="mr-[20px] cursor-pointer"
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="button">
        <rect
          x={1}
          y={1}
          width={46}
          height={46}
          rx={23}
          stroke="url(#paint0_linear_4588_26054)"
          strokeWidth={2}
        />
        <g id="navigate_next">
          <path
            id="Vector"
            d="M27.0005 18.7117C27.3905 19.1017 27.3905 19.7317 27.0005 20.1217L23.1205 24.0017L27.0005 27.8817C27.3905 28.2717 27.3905 28.9017 27.0005 29.2917C26.6105 29.6817 25.9805 29.6817 25.5905 29.2917L21.0005 24.7017C20.6105 24.3117 20.6105 23.6817 21.0005 23.2917L25.5905 18.7017C25.9705 18.3217 26.6105 18.3217 27.0005 18.7117Z"
            fill="url(#paint1_linear_4588_26054)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4588_26054"
          x1={24}
          y1={0}
          x2={24}
          y2={48}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4588_26054"
          x1="24.0005"
          y1="18.418"
          x2="24.0005"
          y2="29.5842"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const RightArrow = () => {
  return (
    <svg
      className="ml-[20px]"
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="button">
        <rect
          x={1}
          y={1}
          width={46}
          height={46}
          rx={23}
          stroke="url(#paint0_linear_4588_26057)"
          strokeWidth={2}
        />
        <g id="navigate_next">
          <path
            id="Vector"
            d="M20.9995 18.7117C20.6095 19.1017 20.6095 19.7317 20.9995 20.1217L24.8795 24.0017L20.9995 27.8817C20.6095 28.2717 20.6095 28.9017 20.9995 29.2917C21.3895 29.6817 22.0195 29.6817 22.4095 29.2917L26.9995 24.7017C27.3895 24.3117 27.3895 23.6817 26.9995 23.2917L22.4095 18.7017C22.0295 18.3217 21.3895 18.3217 20.9995 18.7117Z"
            fill="url(#paint1_linear_4588_26057)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4588_26057"
          x1={24}
          y1={0}
          x2={24}
          y2={48}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4588_26057"
          x1="23.9995"
          y1="18.418"
          x2="23.9995"
          y2="29.5842"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Carousel;
