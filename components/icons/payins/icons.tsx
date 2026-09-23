"use client";
import { motion, Variants } from "motion/react";
const iconDraw: Variants = {
  hidden: { scale: 0.2 },
  visible: {
    scale: 1,
    transition: { duration: 0.7, delay: 0.1 },
  },
};
export const PayinOne = ({ ...props }) => {
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135214">
        <ellipse
          id="Ellipse 304"
          cx="45.9665"
          cy="45.6357"
          rx="45.9665"
          ry="45.6357"
          fill="url(#paint0_linear_4362_24033)"
        />
        <motion.g variants={iconDraw} id="Frame">
          <path
            id="Vector"
            d="M52.5381 58.8836C50.681 54.3438 51.7127 49.185 55.2207 45.677C56.4588 44.4389 57.9033 43.6135 59.3478 42.9944C59.9668 42.7881 60.3796 42.169 60.3796 41.55V30.2006C60.5859 27.7244 58.5224 25.8672 56.2525 25.8672H29.8393C27.363 25.8672 25.5059 27.7244 25.5059 30.2006V60.5344C25.5059 62.8043 27.363 64.8678 29.8393 64.8678H57.2843C57.4906 64.8678 57.4906 64.6615 57.2843 64.4551C55.2207 63.217 53.5699 61.1535 52.5381 58.8836ZM34.9981 58.8836C33.5536 58.8836 32.5219 57.8518 32.5219 56.4074C32.5219 54.9629 33.76 53.9311 34.9981 53.9311C36.4426 53.9311 37.4743 54.9629 37.4743 56.4074C37.4743 57.6455 36.4426 58.8836 34.9981 58.8836ZM34.9981 51.4549C33.5536 51.4549 32.5219 50.4231 32.5219 48.9787C32.5219 47.5342 33.76 46.5024 34.9981 46.5024C36.4426 46.5024 37.4743 47.5342 37.4743 48.9787C37.4743 50.4231 36.4426 51.4549 34.9981 51.4549ZM44.6967 58.8836C43.2522 58.8836 42.0141 57.6455 42.0141 56.4074C42.0141 54.9629 43.2522 53.9311 44.4904 53.9311C45.9348 53.9311 46.9666 54.9629 46.9666 56.4074C47.1729 57.6455 45.9348 58.8836 44.6967 58.8836ZM44.6967 51.4549C43.2522 51.4549 42.2205 50.4231 42.2205 48.9787C42.2205 47.5342 43.4586 46.5024 44.6967 46.5024C46.1412 46.5024 47.1729 47.5342 47.1729 48.9787C47.1729 50.4231 45.9348 51.4549 44.6967 51.4549ZM34.9981 41.1373C33.3473 41.1373 32.1092 39.6928 32.1092 38.042V34.534C32.3155 33.0895 33.5536 31.8514 34.9981 31.8514H51.0937C52.7445 31.8514 53.9826 33.0895 53.9826 34.7403V38.4547C53.7763 39.8992 52.5381 41.1373 51.0937 41.1373H34.9981Z"
            fill="#0C2E21"
          />
          <path
            id="Vector_2"
            d="M68.2208 44.2317C64.0938 42.5808 59.3476 43.4062 56.2523 46.5015C53.157 49.5968 52.1253 54.1366 53.7761 58.2636C55.4269 62.3907 59.554 64.8669 63.8874 64.8669C69.8717 64.8669 74.8241 60.1208 74.8241 54.1366C75.0305 50.0095 72.3479 46.0888 68.2208 44.2317ZM69.2526 57.8509H65.5382C65.3319 57.8509 65.3319 57.8509 65.3319 58.0573V61.1526C65.3319 61.5653 65.1255 61.7716 64.7128 61.978H64.3001C64.0938 61.978 63.8874 61.978 63.6811 61.7716C63.4747 61.5653 63.2684 61.3589 63.2684 60.9462V57.8509C63.2684 57.6446 63.2684 57.6446 63.062 57.6446H59.554C59.1413 57.6446 58.7286 57.4382 58.5222 57.0255C58.3159 56.6128 58.5222 56.2001 58.9349 55.9937C59.1413 55.7874 59.3476 55.7874 59.7603 55.7874H63.4747V54.3429H59.9667C59.554 54.3429 59.3476 54.1366 59.1413 53.9302C58.9349 53.7239 58.9349 53.5175 58.9349 53.1048C58.9349 52.6921 59.3476 52.2794 59.9667 52.2794H63.062L59.3476 48.7714C58.9349 48.3587 58.9349 47.946 59.1413 47.5333C59.3476 47.3269 59.554 47.1206 59.7603 47.1206C59.9667 47.1206 60.3794 47.1206 60.5858 47.3269L60.7921 47.5333L64.5065 51.0413C65.7446 49.8032 66.9827 48.7714 68.2208 47.5333C68.6335 47.3269 68.8399 47.1206 69.2526 47.3269C69.6653 47.3269 69.8717 47.7396 70.078 47.946C70.2844 48.3587 70.078 48.5651 69.8717 48.9778C69.459 49.3905 69.0462 49.8032 68.6335 50.0095L65.9509 52.4858H69.0462C69.6653 52.4858 70.078 52.6921 70.078 53.3112C70.078 53.5175 70.078 53.9302 69.8717 54.1366C69.6653 54.3429 69.4589 54.5493 69.2526 54.5493H65.3319V55.9937H69.0462C69.459 55.9937 69.8717 56.4064 70.078 56.8192C69.8717 57.2319 69.6653 57.6446 69.2526 57.8509Z"
            fill="#0C2E21"
          />
        </motion.g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4362_24033"
          x1="45.9665"
          y1={0}
          x2="45.9665"
          y2="91.2713"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export const PayinTwo = ({ ...props }) => {
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135215">
        <ellipse
          id="Ellipse 305"
          cx="45.9665"
          cy="45.9664"
          rx="45.9665"
          ry="45.9664"
          fill="url(#paint0_linear_4362_24050)"
        />
        <motion.g
          id="Frame"
          variants={iconDraw}
          clipPath="url(#clip0_4362_24050)"
        >
          <path
            id="Vector"
            opacity="0.01"
            d="M21.8281 21.8242H69.4481V69.444H21.8281V21.8242Z"
            fill="#0C2E21"
          />
          <path
            id="Vector_2"
            d="M48.581 23.1785C48.4701 23.0673 48.3287 22.9915 48.1747 22.9607C48.0207 22.9299 47.8611 22.9455 47.7159 23.0055C47.5708 23.0655 47.4467 23.1672 47.3594 23.2977C47.2721 23.4283 47.2255 23.5818 47.2254 23.7388V34.5215H33.7331C33.5226 34.5215 33.3208 34.6051 33.1719 34.754C33.0231 34.9028 32.9395 35.1047 32.9395 35.3152V43.2518C32.9395 43.4623 33.0231 43.6642 33.1719 43.813C33.3208 43.9619 33.5226 44.0455 33.7331 44.0455H67.5322C67.6892 44.0454 67.8427 43.9988 67.9733 43.9115C68.1038 43.8242 68.2055 43.7001 68.2655 43.555C68.3255 43.4099 68.3411 43.2502 68.3103 43.0962C68.2795 42.9422 68.2037 42.8008 68.0925 42.6899L48.581 23.1785Z"
            fill="#0C2E21"
          />
          <path
            id="Vector_3"
            d="M43.1619 68.0897C43.2728 68.2008 43.4142 68.2766 43.5682 68.3074C43.7222 68.3382 43.8819 68.3226 44.027 68.2626C44.1721 68.2026 44.2962 68.1009 44.3835 67.9704C44.4708 67.8399 44.5174 67.6864 44.5175 67.5293V56.7466H58.0098C58.2203 56.7466 58.4222 56.663 58.571 56.5142C58.7199 56.3653 58.8035 56.1634 58.8035 55.953V48.0163C58.8035 47.8058 58.7199 47.604 58.571 47.4551C58.4222 47.3063 58.2203 47.2227 58.0098 47.2227H24.2091C24.052 47.2224 23.8982 47.2688 23.7675 47.356C23.6367 47.4431 23.5347 47.5672 23.4746 47.7124C23.4144 47.8576 23.3986 48.0174 23.4294 48.1715C23.4601 48.3257 23.536 48.4672 23.6472 48.5782L43.1619 68.0912V68.0897Z"
            fill="#0C2E21"
          />
        </motion.g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4362_24050"
          x1="45.9665"
          y1={0}
          x2="45.9665"
          y2="91.9327"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <clipPath id="clip0_4362_24050">
          <rect
            width="47.6199"
            height="47.6198"
            fill="white"
            transform="translate(21.8281 21.8242)"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export const PayinThree = ({ ...props }) => {
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135216">
        <ellipse
          id="Ellipse 306"
          cx="45.9665"
          cy="45.6357"
          rx="45.9665"
          ry="45.6357"
          fill="url(#paint0_linear_4362_24042)"
        />
        <g id="Frame">
          <motion.path
            variants={iconDraw}
            id="Vector"
            d="M44.8221 25.4648L60.5092 30.3657C60.9467 30.5023 61.3291 30.7752 61.6006 31.1445C61.8721 31.5138 62.0184 31.9602 62.0182 32.4185V36.2124H66.3172C66.8873 36.2124 67.434 36.4388 67.8371 36.8419C68.2403 37.2451 68.4667 37.7918 68.4667 38.3619V42.6609H40.5231V38.3619C40.5231 37.7918 40.7495 37.2451 41.1526 36.8419C41.5557 36.4388 42.1025 36.2124 42.6726 36.2124H57.7192V33.9984L44.8221 29.9659L31.925 33.9984V49.9133C31.9247 51.2293 32.2265 52.5278 32.8071 53.7088C33.3877 54.8897 34.2317 55.9217 35.2739 56.7251L35.6802 57.0174L44.8221 63.251L52.9515 57.7074H42.6726C42.1025 57.7074 41.5557 57.481 41.1526 57.0778C40.7495 56.6747 40.5231 56.128 40.5231 55.5579V46.9599H68.4667V55.5579C68.4667 56.128 68.2403 56.6747 67.8371 57.0778C67.434 57.481 66.8873 57.7074 66.3172 57.7074L59.3958 57.7096C58.5639 58.8058 57.5536 59.7731 56.3865 60.5684L44.8221 68.4549L33.2577 60.5706C31.522 59.3872 30.1017 57.7977 29.1202 55.9403C28.1387 54.083 27.6258 52.014 27.626 49.9133V32.4185C27.6262 31.9605 27.7728 31.5146 28.0442 31.1457C28.3156 30.7769 28.6978 30.5043 29.1349 30.3679L44.8221 25.4648Z"
            fill="#0C2E21"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4362_24042"
          x1="45.9665"
          y1={0}
          x2="45.9665"
          y2="91.2713"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export const PayinFour = ({ ...props }) => {
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135217">
        <ellipse
          id="Ellipse 307"
          cx="45.9665"
          cy="45.9664"
          rx="45.9665"
          ry="45.9664"
          fill="url(#paint0_linear_4362_24060)"
        />
        <g id="Group">
          <motion.path
            variants={iconDraw}
            id="Vector"
            d="M64.8769 43.6227H59.3886C57.933 43.6227 56.5371 44.201 55.5078 45.2302C54.4786 46.2594 53.9003 47.6554 53.9003 49.111C53.9003 50.5666 54.4786 51.9625 55.5078 52.9918C56.5371 54.021 57.933 54.5992 59.3886 54.5992H64.8769V60.0875C64.8769 60.8153 64.5878 61.5133 64.0731 62.0279C63.5585 62.5425 62.8605 62.8316 62.1327 62.8316H29.2031C28.4753 62.8316 27.7773 62.5425 27.2627 62.0279C26.7481 61.5133 26.459 60.8153 26.459 60.0875V38.1345C26.459 37.7741 26.53 37.4173 26.6679 37.0843C26.8058 36.7514 27.0079 36.4489 27.2627 36.1941C27.5175 35.9393 27.8201 35.7371 28.153 35.5992C28.4859 35.4613 28.8428 35.3903 29.2031 35.3903H62.1327C62.4931 35.3903 62.8499 35.4613 63.1829 35.5992C63.5158 35.7371 63.8183 35.9393 64.0731 36.1941C64.328 36.4489 64.5301 36.7514 64.668 37.0843C64.8059 37.4173 64.8769 37.7741 64.8769 38.1345V43.6227ZM55.2724 25.8929V32.6462H30.5752L51.4141 23.3848C51.832 23.1992 52.2895 23.1209 52.7453 23.157C53.2011 23.1932 53.6406 23.3427 54.0239 23.5918C54.4072 23.841 54.7222 24.182 54.9402 24.5839C55.1583 24.9858 55.2725 25.4357 55.2724 25.8929ZM59.3886 46.3669H64.8769C65.2373 46.3668 65.5942 46.4377 65.9271 46.5756C66.2601 46.7135 66.5627 46.9156 66.8175 47.1704C67.0724 47.4253 67.2746 47.7278 67.4125 48.0608C67.5504 48.3937 67.6214 48.7506 67.6214 49.111C67.6214 49.4714 67.5504 49.8282 67.4125 50.1612C67.2746 50.4942 67.0724 50.7967 66.8175 51.0515C66.5627 51.3063 66.2601 51.5085 65.9271 51.6463C65.5942 51.7842 65.2373 51.8552 64.8769 51.8551H59.3886C59.0282 51.8552 58.6713 51.7842 58.3383 51.6463C58.0054 51.5085 57.7028 51.3063 57.4479 51.0515C57.1931 50.7967 56.9909 50.4942 56.853 50.1612C56.715 49.8282 56.6441 49.4714 56.6441 49.111C56.6441 48.7506 56.715 48.3937 56.853 48.0608C56.9909 47.7278 57.1931 47.4253 57.4479 47.1704C57.7028 46.9156 58.0054 46.7135 58.3383 46.5756C58.6713 46.4377 59.0282 46.3668 59.3886 46.3669Z"
            fill="#0C2E21"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4362_24060"
          x1="45.9665"
          y1={0}
          x2="45.9665"
          y2="91.9327"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export const PayinFive = ({ ...props }) => {
  const iconDraw: Variants = {
    hidden: { opacity: 0, scale: 0.5, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 180,
      transition: { duration: 1, delay: 0.1 },
    },
  };
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      width={137}
      height={137}
      viewBox="0 0 137 137"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="web3" clipPath="url(#clip0_4362_23934)">
        <g id="Group">
          <path
            id="accent"
            d="M14.8047 10.168H121.397C127.225 10.168 131.956 14.8995 131.956 20.7266V31.2852H4.24609V20.7266C4.24609 14.8995 8.97761 10.168 14.8047 10.168Z"
            fill="url(#paint0_linear_4362_23934)"
            stroke="url(#paint1_linear_4362_23934)"
            strokeWidth="8.49212"
          />
          <path
            id="glass"
            d="M0 35.3125H136.202V115.257C136.202 123.429 129.569 130.062 121.397 130.062H14.8046C6.63244 130.062 0 123.429 0 115.257V35.3125Z"
            fill="#889A44"
          />
        </g>
        <motion.g variants={iconDraw} id="group">
          <g id="Vector" filter="url(#filter1_i_4362_23934)">
            <path
              d="M92.5151 91.4875L71.121 79.4529L92.5151 67.4183C92.8425 67.2185 93.0796 66.8994 93.1764 66.5283C93.2732 66.1571 93.2222 65.7629 93.0342 65.4287C92.8461 65.0944 92.5357 64.8461 92.1682 64.7362C91.8008 64.6263 91.405 64.6632 91.0642 64.8393L69.5828 76.9228V52.8047C69.5828 52.412 69.4269 52.0355 69.1492 51.7578C68.8716 51.4802 68.495 51.3242 68.1024 51.3242C67.7097 51.3242 67.3332 51.4802 67.0555 51.7578C66.7779 52.0355 66.6219 52.412 66.6219 52.8047V76.9228L45.1405 64.8393C44.7998 64.6632 44.404 64.6263 44.0365 64.7362C43.6691 64.8461 43.3586 65.0944 43.1706 65.4287C42.9825 65.7629 42.9315 66.1571 43.0284 66.5283C43.1252 66.8994 43.3623 67.2185 43.6897 67.4183L65.0837 79.4529L43.6897 91.4875C43.4048 91.6482 43.1812 91.8986 43.0537 92.1997C42.9262 92.5008 42.902 92.8357 42.9848 93.1521C43.0677 93.4684 43.2529 93.7484 43.5117 93.9484C43.7704 94.1483 44.0881 94.257 44.4151 94.2574C44.6689 94.2578 44.9184 94.192 45.139 94.0665L66.6219 81.983V106.101C66.6219 106.494 66.7779 106.87 67.0555 107.148C67.3332 107.426 67.7097 107.582 68.1024 107.582C68.495 107.582 68.8716 107.426 69.1492 107.148C69.4269 106.87 69.5828 106.494 69.5828 106.101V81.983L91.0642 94.0665C91.2853 94.1922 91.5354 94.2581 91.7897 94.2574C92.1168 94.2573 92.4347 94.1489 92.6937 93.949C92.9527 93.7492 93.1382 93.4692 93.2212 93.1528C93.3043 92.8363 93.2802 92.5013 93.1527 92.2001C93.0252 91.8988 92.8 91.6482 92.5151 91.4875Z"
              fill="#E2F4A5"
            />
          </g>
          <foreignObject x="9.7465" y="21.0981" width="116.71" height="116.71">
            <div
              style={{
                backdropFilter: "blur(25.48px)",
                clipPath: "url(#bgblur_2_4362_23934_clip_path)",
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <g
            id="accent_2"
            filter="url(#filter2_i_4362_23934)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M68.1015 86.8553C66.6375 86.8553 65.2063 86.4212 63.989 85.6078C62.7717 84.7945 61.8229 83.6384 61.2627 82.2858C60.7024 80.9332 60.5558 79.4449 60.8415 78.009C61.1271 76.573 61.8321 75.2541 62.8673 74.2189C63.9025 73.1836 65.2215 72.4786 66.6574 72.193C68.0933 71.9074 69.5816 72.054 70.9342 72.6142C72.2868 73.1745 73.4429 74.1233 74.2563 75.3406C75.0696 76.5579 75.5038 77.989 75.5038 79.4531C75.5014 81.4155 74.7208 83.297 73.3331 84.6847C71.9454 86.0724 70.064 86.853 68.1015 86.8553Z"
              fill="#E2F4A5"
            />
          </g>
          <foreignObject x="33.433" y="7.77385" width="116.71" height="116.71">
            <div
              style={{
                backdropFilter: "blur(25.48px)",
                clipPath: "url(#bgblur_3_4362_23934_clip_path)",
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <g
            id="glass_2"
            filter="url(#filter3_i_4362_23934)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M91.788 73.5311C95.8762 73.5311 99.1903 70.217 99.1903 66.1288C99.1903 62.0407 95.8762 58.7266 91.788 58.7266C87.6999 58.7266 84.3857 62.0407 84.3857 66.1288C84.3857 70.217 87.6999 73.5311 91.788 73.5311Z"
              fill="#E2F4A5"
            />
          </g>
          <g id="Vector_2" filter="url(#filter4_i_4362_23934)">
            <path
              d="M91.7881 94.2576C91.3954 94.2576 91.0189 94.1016 90.7412 93.8239C90.4636 93.5463 90.3076 93.1697 90.3076 92.7771V66.1289C90.3076 65.7363 90.4636 65.3597 90.7412 65.0821C91.0189 64.8044 91.3954 64.6484 91.7881 64.6484C92.1807 64.6484 92.5573 64.8044 92.8349 65.0821C93.1126 65.3597 93.2685 65.7363 93.2685 66.1289V92.7771C93.2685 93.1697 93.1126 93.5463 92.8349 93.8239C92.5573 94.1016 92.1807 94.2576 91.7881 94.2576Z"
              fill="#E2F4A5"
            />
          </g>
          <foreignObject x="33.433" y="34.4223" width="116.71" height="116.71">
            <div
              style={{
                backdropFilter: "blur(25.48px)",
                clipPath: "url(#bgblur_4_4362_23934_clip_path)",
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <g
            id="glass_3"
            filter="url(#filter5_i_4362_23934)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M91.788 100.18C95.8762 100.18 99.1903 96.8654 99.1903 92.7773C99.1903 88.6891 95.8762 85.375 91.788 85.375C87.6999 85.375 84.3857 88.6891 84.3857 92.7773C84.3857 96.8654 87.6999 100.18 91.788 100.18Z"
              fill="#E2F4A5"
            />
          </g>
          <g id="Vector_3" filter="url(#filter6_i_4362_23934)">
            <path
              d="M68.1011 107.583C67.774 107.583 67.4561 107.475 67.1971 107.275C66.9381 107.075 66.7526 106.795 66.6696 106.479C66.5865 106.162 66.6106 105.827 66.7381 105.526C66.8656 105.225 67.0893 104.974 67.3742 104.814L91.0615 91.4894C91.4023 91.3134 91.798 91.2764 92.1655 91.3863C92.5329 91.4963 92.8434 91.7445 93.0314 92.0788C93.2195 92.4131 93.2705 92.8073 93.1737 93.1784C93.0768 93.5495 92.8398 93.8686 92.5124 94.0684L68.8251 107.392C68.6045 107.518 68.3549 107.584 68.1011 107.583Z"
              fill="#E2F4A5"
            />
          </g>
          <foreignObject x="9.7465" y="47.7465" width="116.71" height="116.71">
            <div
              style={{
                backdropFilter: "blur(25.48px)",
                clipPath: "url(#bgblur_5_4362_23934_clip_path)",
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <g
            id="glass_4"
            filter="url(#filter7_i_4362_23934)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M68.1015 113.504C72.1897 113.504 75.5038 110.19 75.5038 106.101C75.5038 102.013 72.1897 98.6992 68.1015 98.6992C64.0133 98.6992 60.6992 102.013 60.6992 106.101C60.6992 110.19 64.0133 113.504 68.1015 113.504Z"
              fill="#E2F4A5"
            />
          </g>
          <g id="Vector_4" filter="url(#filter8_i_4362_23934)">
            <path
              d="M68.099 107.583C67.8452 107.584 67.5957 107.518 67.3751 107.392L43.6878 94.0684C43.3604 93.8686 43.1233 93.5495 43.0265 93.1784C42.9296 92.8073 42.9806 92.4131 43.1687 92.0788C43.3567 91.7445 43.6672 91.4963 44.0346 91.3863C44.4021 91.2764 44.7979 91.3134 45.1386 91.4894L68.8259 104.814C69.1108 104.974 69.3345 105.225 69.462 105.526C69.5895 105.827 69.6136 106.162 69.5305 106.479C69.4475 106.795 69.262 107.075 69.003 107.275C68.744 107.475 68.4261 107.583 68.099 107.583Z"
              fill="#E2F4A5"
            />
          </g>
          <foreignObject x="-13.943" y="34.4223" width="116.71" height="116.71">
            <div
              style={{
                backdropFilter: "blur(25.48px)",
                clipPath: "url(#bgblur_6_4362_23934_clip_path)",
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <g
            id="glass_5"
            filter="url(#filter9_i_4362_23934)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M44.412 100.18C48.5002 100.18 51.8143 96.8654 51.8143 92.7773C51.8143 88.6891 48.5002 85.375 44.412 85.375C40.3239 85.375 37.0098 88.6891 37.0098 92.7773C37.0098 96.8654 40.3239 100.18 44.412 100.18Z"
              fill="#E2F4A5"
            />
          </g>
          <g id="Vector_5" filter="url(#filter10_i_4362_23934)">
            <path
              d="M44.415 94.2576C44.0224 94.2576 43.6458 94.1016 43.3682 93.8239C43.0905 93.5463 42.9346 93.1697 42.9346 92.7771V66.1289C42.9346 65.7363 43.0905 65.3597 43.3682 65.0821C43.6458 64.8044 44.0224 64.6484 44.415 64.6484C44.8077 64.6484 45.1842 64.8044 45.4619 65.0821C45.7395 65.3597 45.8955 65.7363 45.8955 66.1289V92.7771C45.8955 93.1697 45.7395 93.5463 45.4619 93.8239C45.1842 94.1016 44.8077 94.2576 44.415 94.2576Z"
              fill="#E2F4A5"
            />
          </g>
          <foreignObject x="-13.943" y="7.77385" width="116.71" height="116.71">
            <div
              style={{
                backdropFilter: "blur(25.48px)",
                clipPath: "url(#bgblur_7_4362_23934_clip_path)",
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <g
            id="glass_6"
            filter="url(#filter11_i_4362_23934)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M44.412 73.5311C48.5002 73.5311 51.8143 70.217 51.8143 66.1288C51.8143 62.0407 48.5002 58.7266 44.412 58.7266C40.3239 58.7266 37.0098 62.0407 37.0098 66.1288C37.0098 70.217 40.3239 73.5311 44.412 73.5311Z"
              fill="#E2F4A5"
            />
          </g>
          <g id="Vector_6" filter="url(#filter12_i_4362_23934)">
            <path
              d="M44.4146 67.6076C44.0875 67.6075 43.7696 67.4991 43.5106 67.2993C43.2516 67.0994 43.0661 66.8194 42.9831 66.503C42.9 66.1866 42.9241 65.8515 43.0516 65.5503C43.1791 65.249 43.4028 64.9984 43.6877 64.8377L67.375 51.5136C67.5447 51.41 67.7336 51.3417 67.9303 51.3127C68.127 51.2837 68.3275 51.2946 68.5199 51.3448C68.7123 51.395 68.8927 51.4835 69.0501 51.6049C69.2076 51.7263 69.339 51.8782 69.4365 52.0514C69.534 52.2247 69.5956 52.4159 69.6176 52.6135C69.6396 52.8111 69.6215 53.0112 69.5645 53.2017C69.5076 53.3922 69.4128 53.5692 69.2859 53.7223C69.1589 53.8754 69.0025 54.0013 68.8258 54.0926L45.1386 67.4167C44.9179 67.5422 44.6684 67.608 44.4146 67.6076Z"
              fill="#E2F4A5"
            />
          </g>
          <foreignObject x="9.7465" y="-5.55037" width="116.71" height="116.71">
            <div
              style={{
                backdropFilter: "blur(25.48px)",
                clipPath: "url(#bgblur_8_4362_23934_clip_path)",
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <g
            id="glass_7"
            filter="url(#filter13_i_4362_23934)"
            data-figma-bg-blur-radius="50.9527"
          >
            <path
              d="M68.1015 60.2069C72.1897 60.2069 75.5038 56.8928 75.5038 52.8046C75.5038 48.7165 72.1897 45.4023 68.1015 45.4023C64.0133 45.4023 60.6992 48.7165 60.6992 52.8046C60.6992 56.8928 64.0133 60.2069 68.1015 60.2069Z"
              fill="#E2F4A5"
            />
          </g>
          <g id="Vector_7" filter="url(#filter14_i_4362_23934)">
            <path
              d="M86.219 61.3011L68.8251 51.5168C68.4844 51.3407 68.0886 51.3037 67.7212 51.4137C67.3537 51.5236 67.0433 51.7719 66.8552 52.1061C66.6672 52.4404 66.6162 52.8346 66.713 53.2058C66.8098 53.5769 67.0469 53.8959 67.3743 54.0957L84.7696 63.8816C85.0724 62.9319 85.5656 62.0539 86.219 61.3011Z"
              fill="#E2F4A5"
            />
          </g>
        </motion.g>
      </g>
      <defs>
        <filter
          id="filter0_i_4362_23934"
          x="-39.109"
          y="-36.148"
          width="134.476"
          height="113.749"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <clipPath
          id="bgblur_1_4362_23934_clip_path"
          transform="translate(39.109 36.148)"
        >
          <path d="M17.7656 26.6484C21.0361 26.6484 23.6874 23.9971 23.6874 20.7265C23.6874 17.456 21.0361 14.8047 17.7656 14.8047C14.4951 14.8047 11.8438 17.456 11.8438 20.7265C11.8438 23.9971 14.4951 26.6484 17.7656 26.6484Z" />
          <path d="M38.4921 26.6484C41.7627 26.6484 44.4139 23.9971 44.4139 20.7265C44.4139 17.456 41.7627 14.8047 38.4921 14.8047C35.2214 14.8047 32.5702 17.456 32.5702 20.7265C32.5702 23.9971 35.2214 26.6484 38.4921 26.6484Z" />
        </clipPath>
        <filter
          id="filter1_i_4362_23934"
          x="42.9365"
          y="51.3242"
          width="50.333"
          height="73.2421"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <filter
          id="filter2_i_4362_23934"
          x="9.7465"
          y="21.0981"
          width="116.71"
          height="116.71"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <clipPath
          id="bgblur_2_4362_23934_clip_path"
          transform="translate(-9.7465 -21.0981)"
        >
          <path d="M68.1015 86.8553C66.6375 86.8553 65.2063 86.4212 63.989 85.6078C62.7717 84.7945 61.8229 83.6384 61.2627 82.2858C60.7024 80.9332 60.5558 79.4449 60.8415 78.009C61.1271 76.573 61.8321 75.2541 62.8673 74.2189C63.9025 73.1836 65.2215 72.4786 66.6574 72.193C68.0933 71.9074 69.5816 72.054 70.9342 72.6142C72.2868 73.1745 73.4429 74.1233 74.2563 75.3406C75.0696 76.5579 75.5038 77.989 75.5038 79.4531C75.5014 81.4155 74.7208 83.297 73.3331 84.6847C71.9454 86.0724 70.064 86.853 68.1015 86.8553Z" />
        </clipPath>
        <filter
          id="filter3_i_4362_23934"
          x="33.433"
          y="7.77385"
          width="116.71"
          height="116.71"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <clipPath
          id="bgblur_3_4362_23934_clip_path"
          transform="translate(-33.433 -7.77385)"
        >
          <path d="M91.788 73.5311C95.8762 73.5311 99.1903 70.217 99.1903 66.1288C99.1903 62.0407 95.8762 58.7266 91.788 58.7266C87.6999 58.7266 84.3857 62.0407 84.3857 66.1288C84.3857 70.217 87.6999 73.5311 91.788 73.5311Z" />
        </clipPath>
        <filter
          id="filter4_i_4362_23934"
          x="90.3076"
          y="64.6484"
          width="2.96094"
          height="46.5936"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <filter
          id="filter5_i_4362_23934"
          x="33.433"
          y="34.4223"
          width="116.71"
          height="116.71"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <clipPath
          id="bgblur_4_4362_23934_clip_path"
          transform="translate(-33.433 -34.4223)"
        >
          <path d="M91.788 100.18C95.8762 100.18 99.1903 96.8654 99.1903 92.7773C99.1903 88.6891 95.8762 85.375 91.788 85.375C87.6999 85.375 84.3857 88.6891 84.3857 92.7773C84.3857 96.8654 87.6999 100.18 91.788 100.18Z" />
        </clipPath>
        <filter
          id="filter6_i_4362_23934"
          x="66.6211"
          y="91.3242"
          width="26.6006"
          height="33.2421"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <filter
          id="filter7_i_4362_23934"
          x="9.7465"
          y="47.7465"
          width="116.71"
          height="116.71"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <clipPath
          id="bgblur_5_4362_23934_clip_path"
          transform="translate(-9.7465 -47.7465)"
        >
          <path d="M68.1015 113.504C72.1897 113.504 75.5038 110.19 75.5038 106.101C75.5038 102.013 72.1897 98.6992 68.1015 98.6992C64.0133 98.6992 60.6992 102.013 60.6992 106.101C60.6992 110.19 64.0133 113.504 68.1015 113.504Z" />
        </clipPath>
        <filter
          id="filter8_i_4362_23934"
          x="42.9785"
          y="91.3242"
          width="26.6006"
          height="33.2421"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <filter
          id="filter9_i_4362_23934"
          x="-13.943"
          y="34.4223"
          width="116.71"
          height="116.71"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <clipPath
          id="bgblur_6_4362_23934_clip_path"
          transform="translate(13.943 -34.4223)"
        >
          <path d="M44.412 100.18C48.5002 100.18 51.8143 96.8654 51.8143 92.7773C51.8143 88.6891 48.5002 85.375 44.412 85.375C40.3239 85.375 37.0098 88.6891 37.0098 92.7773C37.0098 96.8654 40.3239 100.18 44.412 100.18Z" />
        </clipPath>
        <filter
          id="filter10_i_4362_23934"
          x="42.9346"
          y="64.6484"
          width="2.96094"
          height="46.5936"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <filter
          id="filter11_i_4362_23934"
          x="-13.943"
          y="7.77385"
          width="116.71"
          height="116.71"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <clipPath
          id="bgblur_7_4362_23934_clip_path"
          transform="translate(13.943 -7.77385)"
        >
          <path d="M44.412 73.5311C48.5002 73.5311 51.8143 70.217 51.8143 66.1288C51.8143 62.0407 48.5002 58.7266 44.412 58.7266C40.3239 58.7266 37.0098 62.0407 37.0098 66.1288C37.0098 70.217 40.3239 73.5311 44.412 73.5311Z" />
        </clipPath>
        <filter
          id="filter12_i_4362_23934"
          x="42.9346"
          y="51.2969"
          width="26.6914"
          height="33.2967"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <filter
          id="filter13_i_4362_23934"
          x="9.7465"
          y="-5.55037"
          width="116.71"
          height="116.71"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="12.7382" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <clipPath
          id="bgblur_8_4362_23934_clip_path"
          transform="translate(-9.7465 5.55037)"
        >
          <path d="M68.1015 60.2069C72.1897 60.2069 75.5038 56.8928 75.5038 52.8046C75.5038 48.7165 72.1897 45.4023 68.1015 45.4023C64.0133 45.4023 60.6992 48.7165 60.6992 52.8046C60.6992 56.8928 64.0133 60.2069 68.1015 60.2069Z" />
        </clipPath>
        <filter
          id="filter14_i_4362_23934"
          x="66.665"
          y="51.3516"
          width="19.5547"
          height="29.5155"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="16.9842" />
          <feGaussianBlur stdDeviation="8.49212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4362_23934"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4362_23934"
          x1="68.101"
          y1="5.92187"
          x2="68.101"
          y2="35.531"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4362_23934"
          x1="68.101"
          y1="5.92187"
          x2="68.101"
          y2="35.531"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEFE66" />
          <stop offset={1} stopColor="#B0D840" />
        </linearGradient>
        <clipPath id="clip0_4362_23934">
          <rect width="136.202" height="136.202" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export const PayinSix = ({ ...props }) => {
  const iconDraw: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay: 0.1 },
    },
  };
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 224 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135196">
        <g id="Group 1410135195">
          <g
            id="Vector"
            filter="url(#filter0_d_1729_438)"
            data-figma-bg-blur-radius={25}
          >
            <motion.path
              variants={iconDraw}
              d="M102.212 100.404C104.7 98.9673 107.523 98.211 110.396 98.211C113.269 98.211 116.092 98.9673 118.58 100.404L144.737 115.496C147.225 116.932 149.292 118.999 150.728 121.487C152.165 123.975 152.921 126.798 152.922 129.671V159.887C152.921 162.761 152.165 165.583 150.728 168.071C149.292 170.56 147.225 172.626 144.737 174.063L118.58 189.138C116.092 190.575 113.269 191.331 110.396 191.331C107.523 191.331 104.7 190.575 102.212 189.138L76.0546 174.046C73.5663 172.61 71.5 170.543 70.0634 168.055C68.6267 165.567 67.8703 162.744 67.8703 159.871V129.655C67.8703 126.781 68.6267 123.959 70.0634 121.471C71.5 118.982 73.5663 116.916 76.0546 115.479L102.212 100.42V100.404ZM4 33.0635C4.00294 30.1931 4.76067 27.3739 6.19717 24.8888C7.63366 22.4036 9.69842 20.3399 12.1843 18.9047L38.3413 3.81286C40.8297 2.37622 43.6523 1.61988 46.5256 1.61988C49.3989 1.61988 52.2216 2.37622 54.7099 3.81286L80.8669 18.9047C83.3552 20.3413 85.4215 22.4076 86.8582 24.8959C88.2948 27.3841 89.0512 30.2067 89.0512 33.0799V63.2963C89.0512 66.1696 88.2948 68.9921 86.8582 71.4804C85.4215 73.9687 83.3552 76.0349 80.8669 77.4715L54.7099 92.5634C52.2216 94 49.3989 94.7564 46.5256 94.7564C43.6523 94.7564 40.8297 94 38.3413 92.5634L12.1843 77.4552C9.69602 76.0186 7.62972 73.9523 6.19308 71.464C4.75644 68.9758 4.00007 66.1532 4 63.28V33.0635ZM134.949 33.0635C134.949 30.1903 135.705 27.3677 137.142 24.8795C138.579 22.3912 140.645 20.3249 143.133 18.8883L169.29 3.79649C171.778 2.35985 174.601 1.60352 177.474 1.60352C180.348 1.60352 183.17 2.35985 185.659 3.79649L211.816 18.8883C214.304 20.3249 216.37 22.3912 217.807 24.8795C219.244 27.3677 220 30.1903 220 33.0635V63.28C220 66.1532 219.244 68.9758 217.807 71.464C216.37 73.9523 214.304 76.0186 211.816 77.4552L185.659 92.547C183.17 93.9837 180.348 94.74 177.474 94.74C174.601 94.74 171.778 93.9837 169.29 92.547L143.133 77.4552C140.645 76.0186 138.579 73.9523 137.142 71.464C135.705 68.9758 134.949 66.1532 134.949 63.28V33.0635Z"
              fill="#889A45"
            />
          </g>
          <path
            id="Vector_2"
            d="M102.211 2.19298C104.7 0.756334 107.522 0 110.396 0C113.269 0 116.092 0.756334 118.58 2.19298L173.087 33.6534C175.576 35.09 177.642 37.1563 179.078 39.6446C180.515 42.1328 181.272 44.9554 181.272 47.8286V110.782C181.272 113.655 180.515 116.478 179.078 118.966C177.642 121.455 175.576 123.521 173.087 124.957L118.58 156.402C116.092 157.838 113.269 158.595 110.396 158.595C107.522 158.595 104.7 157.838 102.211 156.402L47.7038 124.974C45.2156 123.537 43.1493 121.471 41.7126 118.983C40.276 116.494 39.5196 113.672 39.5195 110.799V47.8286C39.5196 44.9554 40.276 42.1328 41.7126 39.6446C43.1493 37.1563 45.2156 35.09 47.7038 33.6534L102.211 2.20935V2.19298Z"
            fill="#DEFE66"
          />
        </g>
        <path
          id="API"
          d="M96.712 85.184H82.744L80.344 92H74.632L86.584 58.592H92.92L104.872 92H99.112L96.712 85.184ZM95.176 80.72L89.752 65.216L84.28 80.72H95.176ZM133.397 68.576C133.397 70.272 132.997 71.872 132.197 73.376C131.397 74.88 130.117 76.112 128.357 77.072C126.597 78 124.341 78.464 121.589 78.464H115.541V92H110.069V58.64H121.589C124.149 58.64 126.309 59.088 128.069 59.984C129.861 60.848 131.189 62.032 132.053 63.536C132.949 65.04 133.397 66.72 133.397 68.576ZM121.589 74C123.669 74 125.221 73.536 126.245 72.608C127.269 71.648 127.781 70.304 127.781 68.576C127.781 64.928 125.717 63.104 121.589 63.104H115.541V74H121.589ZM144.088 58.64V92H138.616V58.64H144.088Z"
          fill="#889A45"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1729_438"
          x={-21}
          y="-23.3965"
          width={266}
          height="239.728"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1729_438"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1729_438"
            result="shape"
          />
        </filter>
        <clipPath
          id="bgblur_0_1729_438_clip_path"
          transform="translate(21 23.3965)"
        >
          <path d="M102.212 100.404C104.7 98.9673 107.523 98.211 110.396 98.211C113.269 98.211 116.092 98.9673 118.58 100.404L144.737 115.496C147.225 116.932 149.292 118.999 150.728 121.487C152.165 123.975 152.921 126.798 152.922 129.671V159.887C152.921 162.761 152.165 165.583 150.728 168.071C149.292 170.56 147.225 172.626 144.737 174.063L118.58 189.138C116.092 190.575 113.269 191.331 110.396 191.331C107.523 191.331 104.7 190.575 102.212 189.138L76.0546 174.046C73.5663 172.61 71.5 170.543 70.0634 168.055C68.6267 165.567 67.8703 162.744 67.8703 159.871V129.655C67.8703 126.781 68.6267 123.959 70.0634 121.471C71.5 118.982 73.5663 116.916 76.0546 115.479L102.212 100.42V100.404ZM4 33.0635C4.00294 30.1931 4.76067 27.3739 6.19717 24.8888C7.63366 22.4036 9.69842 20.3399 12.1843 18.9047L38.3413 3.81286C40.8297 2.37622 43.6523 1.61988 46.5256 1.61988C49.3989 1.61988 52.2216 2.37622 54.7099 3.81286L80.8669 18.9047C83.3552 20.3413 85.4215 22.4076 86.8582 24.8959C88.2948 27.3841 89.0512 30.2067 89.0512 33.0799V63.2963C89.0512 66.1696 88.2948 68.9921 86.8582 71.4804C85.4215 73.9687 83.3552 76.0349 80.8669 77.4715L54.7099 92.5634C52.2216 94 49.3989 94.7564 46.5256 94.7564C43.6523 94.7564 40.8297 94 38.3413 92.5634L12.1843 77.4552C9.69602 76.0186 7.62972 73.9523 6.19308 71.464C4.75644 68.9758 4.00007 66.1532 4 63.28V33.0635ZM134.949 33.0635C134.949 30.1903 135.705 27.3677 137.142 24.8795C138.579 22.3912 140.645 20.3249 143.133 18.8883L169.29 3.79649C171.778 2.35985 174.601 1.60352 177.474 1.60352C180.348 1.60352 183.17 2.35985 185.659 3.79649L211.816 18.8883C214.304 20.3249 216.37 22.3912 217.807 24.8795C219.244 27.3677 220 30.1903 220 33.0635V63.28C220 66.1532 219.244 68.9758 217.807 71.464C216.37 73.9523 214.304 76.0186 211.816 77.4552L185.659 92.547C183.17 93.9837 180.348 94.74 177.474 94.74C174.601 94.74 171.778 93.9837 169.29 92.547L143.133 77.4552C140.645 76.0186 138.579 73.9523 137.142 71.464C135.705 68.9758 134.949 66.1532 134.949 63.28V33.0635Z" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export const PayinSeven = ({ ...props }) => {
  const item = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 },
    },
  };
  const item2 = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 },
    },
  };
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 216 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="swap-exchange 5">
        <motion.path
          variants={item}
          id="accent"
          d="M211.499 171.005H31.5004V157.506C31.5007 156.658 31.2615 155.827 30.8102 155.109C30.3589 154.391 29.714 153.815 28.9497 153.448C28.1855 153.081 27.333 152.937 26.4905 153.033C25.6481 153.129 24.8499 153.461 24.188 153.991L1.68809 171.991C1.1514 172.423 0.720421 172.972 0.427985 173.596C0.135549 174.22 -0.0106249 174.902 0.000600986 175.591C0.0182036 176.446 0.278871 177.278 0.752096 177.989C0.884196 178.191 1.03485 178.379 1.20209 178.552C1.37725 178.742 1.56845 178.917 1.77359 179.074L24.1925 197.015C24.8541 197.544 25.6515 197.875 26.4928 197.97C27.3342 198.066 28.1854 197.922 28.9487 197.555C29.712 197.189 30.3563 196.614 30.8077 195.898C31.2591 195.181 31.4992 194.352 31.5004 193.505V180.005H211.499C212.693 180.005 213.837 179.531 214.681 178.687C215.525 177.844 215.999 176.699 215.999 175.505C215.999 174.312 215.525 173.167 214.681 172.323C213.837 171.48 212.693 171.005 211.499 171.005Z"
          fill="#DEFE66"
        />
        <motion.path
          variants={item2}
          id="accent_2"
          d="M215.895 39.5476C215.675 38.5383 215.116 37.6348 214.311 36.9871L191.811 18.9872C191.149 18.4572 190.351 18.1251 189.509 18.029C188.666 17.9329 187.814 18.0768 187.05 18.4441C186.285 18.8114 185.64 19.3872 185.189 20.1051C184.738 20.823 184.499 21.6537 184.499 22.5017V36.0016H4.49997C3.30651 36.0016 2.16192 36.4757 1.31801 37.3196C0.474103 38.1635 0 39.3081 0 40.5016C0 41.695 0.474103 42.8396 1.31801 43.6835C2.16192 44.5274 3.30651 45.0015 4.49997 45.0015H184.499V58.5014C184.498 59.3498 184.736 60.1811 185.187 60.8997C185.638 61.6182 186.283 62.1947 187.048 62.5625C187.812 62.9304 188.665 63.0747 189.508 62.9788C190.351 62.8829 191.149 62.5506 191.811 62.0204L214.23 44.1015C214.771 43.6888 215.211 43.159 215.517 42.5518C215.823 41.9447 215.988 41.276 215.999 40.5961C216.005 40.2437 215.97 39.8919 215.895 39.5476Z"
          fill="#DEFE66"
        />
        <path
          id="accent_3"
          d="M108.002 153.004C132.856 153.004 153.004 132.856 153.004 108.002C153.004 83.148 132.856 63 108.002 63C83.148 63 63 83.148 63 108.002C63 132.856 83.148 153.004 108.002 153.004Z"
          fill="url(#paint0_linear_1729_422)"
        />
        <g
          id="glass"
          filter="url(#filter0_i_1729_422)"
          data-figma-bg-blur-radius={24}
        >
          <path
            d="M108 189C152.735 189 189 152.735 189 108C189 63.2649 152.735 27 108 27C63.2649 27 27 63.2649 27 108C27 152.735 63.2649 189 108 189Z"
            fill="#889A45"
          />
          <path
            d="M108 27.5996C152.404 27.5996 188.4 63.5963 188.4 108C188.4 152.404 152.404 188.4 108 188.4C63.5963 188.4 27.5996 152.404 27.5996 108C27.5996 63.5963 63.5963 27.5996 108 27.5996Z"
            stroke="url(#paint1_linear_1729_422)"
            strokeOpacity="0.1"
            strokeWidth="1.2"
          />
        </g>
        <path
          id="detail"
          d="M107.993 170.315C142.405 170.315 170.301 142.419 170.301 108.007C170.301 73.5953 142.405 45.6992 107.993 45.6992C73.5816 45.6992 45.6855 73.5953 45.6855 108.007C45.6855 142.419 73.5816 170.315 107.993 170.315Z"
          fill="#DEFE66"
        />
        <path
          id="Vector"
          d="M108 137C106.901 137 105.848 136.563 105.071 135.786L80.213 110.929C79.4363 110.152 79 109.098 79 108C79 106.901 79.4363 105.847 80.213 105.071L105.071 80.213C105.848 79.4363 106.901 79 108 79C109.099 79 110.152 79.4363 110.929 80.213L135.787 105.071C136.564 105.847 137 106.901 137 108C137 109.098 136.564 110.152 135.787 110.929L110.929 135.786C110.152 136.563 109.099 137 108 137Z"
          fill="#889A45"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1729_422"
          x={3}
          y={3}
          width={210}
          height={210}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={8} />
          <feGaussianBlur stdDeviation={6} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1729_422"
          />
        </filter>
        <clipPath id="bgblur_0_1729_422_clip_path" transform="translate(-3 -3)">
          <path d="M108 189C152.735 189 189 152.735 189 108C189 63.2649 152.735 27 108 27C63.2649 27 27 63.2649 27 108C27 152.735 63.2649 189 108 189Z" />
        </clipPath>
        <linearGradient
          id="paint0_linear_1729_422"
          x1="66.7501"
          y1="81.0007"
          x2="164.861"
          y2="94.6273"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8AE6CF" />
          <stop offset={1} stopColor="#7C3AE7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1729_422"
          x1="32.0625"
          y1="34.3636"
          x2={189}
          y2="34.3636"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8A6FF" />
          <stop offset={1} stopColor="#69CFB5" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export const PayinEight = ({ ...props }) => {
  const item = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: 360,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 },
    },
  };
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      {...props}
      viewBox="0 0 216 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="decentralize-api-sdk 5" clipPath="url(#clip0_1729_429)">
        <path
          id="accent"
          d="M206.544 18.8397C206.557 15.326 205.584 11.8792 203.735 8.89147C201.886 5.90369 199.235 3.4949 196.085 1.93917C192.934 0.383446 189.41 -0.256756 185.914 0.09141C182.417 0.439576 179.089 1.76213 176.307 3.90859C173.525 6.05505 171.402 8.93924 170.178 12.233C168.955 15.5267 168.68 19.0978 169.386 22.5398C170.092 25.9819 171.749 29.1567 174.171 31.7032C176.592 34.2496 179.679 36.0653 183.081 36.9437V59.1303L165.686 76.5258C165.237 76.9586 164.88 77.4764 164.634 78.049C164.388 78.6215 164.259 79.2372 164.253 79.8603C164.248 80.4834 164.366 81.1013 164.602 81.678C164.838 82.2547 165.187 82.7787 165.627 83.2193C166.068 83.6599 166.592 84.0083 167.169 84.2442C167.745 84.4802 168.363 84.5989 168.986 84.5935C169.609 84.5881 170.225 84.4586 170.798 84.2127C171.37 83.9668 171.888 83.6093 172.321 83.1611L191.091 64.3907C191.971 63.5109 192.466 62.3175 192.466 61.073V36.9437C196.484 35.9064 200.044 33.5672 202.591 30.2917C205.138 27.0161 206.528 22.989 206.544 18.8397Z"
          fill="#889A45"
        />
        <path
          id="accent_2"
          d="M50.3116 76.5258L32.9161 59.1303V36.9437C37.3397 35.8016 41.1948 33.0854 43.7589 29.3042C46.323 25.523 47.42 20.9364 46.8443 16.4043C46.2687 11.8721 44.0598 7.70544 40.6319 4.68534C37.2039 1.66523 32.7921 -0.000976562 28.2236 -0.000976562C23.655 -0.000976562 19.2432 1.66523 15.8152 4.68534C12.3873 7.70544 10.1784 11.8721 9.60278 16.4043C9.02711 20.9364 10.1241 25.523 12.6882 29.3042C15.2523 33.0854 19.1074 35.8016 23.531 36.9437V61.0731C23.5312 62.3175 24.0258 63.5109 24.9059 64.3907L43.6763 83.1611C44.5613 84.0159 45.7467 84.4889 46.977 84.4782C48.2074 84.4675 49.3844 83.974 50.2544 83.104C51.1245 82.2339 51.618 81.0569 51.6287 79.8266C51.6394 78.5962 51.1664 77.4108 50.3116 76.5258Z"
          fill="#889A45"
        />
        <path
          id="Vector"
          d="M122.075 0.0673828H93.9192C92.6746 0.0673828 91.481 0.56178 90.601 1.44181C89.721 2.32184 89.2266 3.51542 89.2266 4.75998V32.9155C89.2266 34.1601 89.721 35.3537 90.601 36.2337C91.481 37.1137 92.6746 37.6081 93.9192 37.6081H103.304V46.9933C103.304 48.2379 103.799 49.4315 104.679 50.3115C105.559 51.1915 106.752 51.6859 107.997 51.6859C109.241 51.6859 110.435 51.1915 111.315 50.3115C112.195 49.4315 112.69 48.2379 112.69 46.9933V37.6081H122.075C123.319 37.6081 124.513 37.1137 125.393 36.2337C126.273 35.3537 126.767 34.1601 126.767 32.9155V4.75998C126.767 3.51542 126.273 2.32184 125.393 1.44181C124.513 0.56178 123.319 0.0673828 122.075 0.0673828Z"
          fill="#889A45"
        />
        <path
          id="Vector_2"
          d="M201.846 178.388H192.461V154.925C192.461 153.68 191.966 152.487 191.086 151.607L172.316 132.837C171.431 131.982 170.245 131.509 169.015 131.52C167.785 131.53 166.608 132.024 165.738 132.894C164.868 133.764 164.374 134.941 164.363 136.171C164.353 137.402 164.826 138.587 165.681 139.472L183.076 156.868V178.388H173.691C172.446 178.388 171.253 178.882 170.373 179.762C169.493 180.642 168.998 181.836 168.998 183.08V211.236C168.998 212.481 169.493 213.674 170.373 214.554C171.253 215.434 172.446 215.929 173.691 215.929H201.846C203.091 215.929 204.285 215.434 205.165 214.554C206.045 213.674 206.539 212.481 206.539 211.236V183.08C206.539 181.836 206.045 180.642 205.165 179.762C204.285 178.882 203.091 178.388 201.846 178.388Z"
          fill="#889A45"
        />
        <path
          id="Vector_3"
          d="M50.3116 139.472C51.1663 138.587 51.6393 137.402 51.6286 136.171C51.6179 134.941 51.1244 133.764 50.2544 132.894C49.3843 132.024 48.2074 131.53 46.977 131.52C45.7466 131.509 44.5613 131.982 43.6762 132.837L24.9058 151.607C24.0257 152.487 23.5312 153.68 23.5309 154.925V178.388H14.1457C12.9012 178.388 11.7076 178.882 10.8276 179.762C9.94752 180.642 9.45313 181.836 9.45312 183.08V211.236C9.45313 212.481 9.94752 213.674 10.8276 214.554C11.7076 215.434 12.9012 215.929 14.1457 215.929H42.3013C43.5458 215.929 44.7394 215.434 45.6195 214.554C46.4995 213.674 46.9939 212.481 46.9939 211.236V183.08C46.9939 181.836 46.4995 180.642 45.6195 179.762C44.7394 178.882 43.5458 178.388 42.3013 178.388H32.9161V156.868L50.3116 139.472Z"
          fill="#889A45"
        />
        <path
          id="accent_3"
          d="M112.69 179.053V169.001C112.69 167.757 112.195 166.563 111.315 165.683C110.435 164.803 109.242 164.309 107.997 164.309C106.752 164.309 105.559 164.803 104.679 165.683C103.799 166.563 103.304 167.757 103.304 169.001V179.053C98.8809 180.195 95.0258 182.911 92.4617 186.692C89.8976 190.473 88.8006 195.06 89.3762 199.592C89.9519 204.124 92.1607 208.291 95.5887 211.311C99.0166 214.331 103.428 215.997 107.997 215.997C112.566 215.997 116.977 214.331 120.405 211.311C123.833 208.291 126.042 204.124 126.618 199.592C127.193 195.06 126.096 190.473 123.532 186.692C120.968 182.911 117.113 180.195 112.69 179.053Z"
          fill="#889A45"
        />
        <motion.path
          variants={item}
          id="glass"
          d="M185.225 95.85L162.951 94.23C161.607 88.8129 159.464 83.626 156.593 78.84L171.172 61.9677C171.842 61.193 172.194 60.1933 172.156 59.1698C172.119 58.1463 171.695 57.1751 170.97 56.4516L159.517 44.9982C158.794 44.2755 157.824 43.853 156.803 43.8155C155.781 43.7779 154.783 44.1281 154.009 44.7957L137.154 59.4C132.369 56.52 127.183 54.3662 121.765 53.0091L120.145 30.726C120.063 29.709 119.601 28.7603 118.85 28.0695C118.099 27.3787 117.115 26.9968 116.095 27H99.896C98.8706 26.9974 97.8824 27.3838 97.1308 28.0813C96.3791 28.7789 95.9201 29.7356 95.8463 30.7584L94.2263 53.0415C88.8105 54.3884 83.6243 56.5312 78.8372 59.4L61.9577 44.82C61.1836 44.1524 60.1856 43.8022 59.1641 43.8398C58.1426 43.8773 57.173 44.2998 56.45 45.0225L44.9972 56.4759C44.2723 57.1994 43.8484 58.1706 43.8108 59.1941C43.7732 60.2176 44.1248 61.2173 44.7948 61.992L59.3983 78.84C56.5156 83.6241 54.3617 88.8111 53.0077 94.23L30.7339 95.85C29.7155 95.9297 28.7648 96.3913 28.0724 97.1424C27.3799 97.8934 26.9969 98.8784 27 99.9V116.1C26.9975 117.127 27.385 118.116 28.0842 118.868C28.7835 119.62 29.7421 120.078 30.7663 120.15L53.0401 121.77C54.3863 127.186 56.529 132.373 59.3983 137.16L44.8191 154.04C44.1515 154.815 43.8013 155.813 43.8389 156.834C43.8764 157.856 44.2989 158.825 45.0215 159.548L56.4743 171.002C57.1973 171.724 58.1669 172.147 59.1884 172.185C60.2099 172.222 61.2079 171.872 61.982 171.204L78.8372 156.6C83.6221 159.481 88.8084 161.634 94.2263 162.991L95.8463 185.266C95.9259 186.284 96.3875 187.235 97.1385 187.928C97.8896 188.62 98.8745 189.003 99.896 189H116.095C117.122 189.002 118.111 188.615 118.863 187.916C119.615 187.216 120.073 186.258 120.145 185.233L121.765 162.958C127.181 161.612 132.367 159.469 137.154 156.6L154.033 171.18C154.808 171.848 155.806 172.198 156.827 172.16C157.849 172.123 158.818 171.7 159.541 170.977L170.994 159.524C171.717 158.801 172.139 157.831 172.177 156.81C172.214 155.788 171.864 154.79 171.196 154.016L156.593 137.16C159.473 132.375 161.627 127.188 162.983 121.77L185.257 120.15C186.276 120.07 187.226 119.609 187.919 118.858C188.611 118.107 188.994 117.122 188.991 116.1V99.9C188.994 98.8732 188.606 97.8838 187.907 97.132C187.208 96.3801 186.249 95.9219 185.225 95.85ZM107.996 132.3C103.19 132.3 98.4919 130.875 94.496 128.205C90.5001 125.535 87.3857 121.739 85.5465 117.299C83.7074 112.859 83.2262 107.973 84.1638 103.259C85.1014 98.5456 87.4156 94.2157 90.8138 90.8173C94.2121 87.4189 98.5417 85.1045 103.255 84.1669C107.969 83.2293 112.854 83.7105 117.294 85.5497C121.734 87.3889 125.529 90.5035 128.199 94.4996C130.869 98.4958 132.294 103.194 132.294 108C132.294 114.445 129.734 120.626 125.177 125.183C120.62 129.74 114.44 132.3 107.996 132.3Z"
          fill="#DEFE66"
        />
        <circle id="Ellipse 309" cx={108} cy={108} r={26} fill="#889A45" />
      </g>
      <defs>
        <clipPath id="clip0_1729_429">
          <rect width={216} height={216} fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export const PayinNine = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="100%"
      height="100%"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1410135194">
        <circle
          id="Ellipse 5"
          cx="48.5724"
          cy="47.7109"
          r="22.6138"
          transform="rotate(-76.1663 48.5724 47.7109)"
          fill="#DEFE66"
        />
        <circle
          id="Ellipse 4"
          opacity="0.7"
          cx="24.3357"
          cy="24.132"
          r="22.6138"
          transform="rotate(86.9831 24.3357 24.132)"
          fill="#B0D840"
        />
      </g>
    </svg>
  );
};
