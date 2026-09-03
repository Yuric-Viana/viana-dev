import { useId } from "react";

const Logo = () => {
  const gradientId = useId();

  return (
    <svg
      width="45"
      height="26"
      viewBox="0 0 45 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="45"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5A75F6" />
          <stop offset="1" stopColor="#8D60F7" />
        </linearGradient>
      </defs>

      {/* Y */}
      <path
        d="M0 0H7L11 8L15 0H22L14 14V25H8V14L0 0Z"
        fill={`url(#${gradientId})`}
      />

      {/* V */}
      <path
        d="M23 0H30L34.5 17L39 0H45L37 25H31L23 0Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default Logo;