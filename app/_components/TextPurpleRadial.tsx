interface TextPurpleRadialProps {
    text: string
    className?: string
}

const TextPurpleRadial = ({ text, className }: TextPurpleRadialProps) => {
  return (
    <span className={`bg-linear-to-l from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent ${className}`}>
      {text}
    </span>
  );
};

export default TextPurpleRadial;
