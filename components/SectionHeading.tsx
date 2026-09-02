const SectionHeading = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center gap-6">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#A855F7]">
        // {label}
      </p>

      <div className="h-px flex-1 bg-gradient-to-r from-[#A855F7]/30 to-transparent" />
    </div>
  );
};

export default SectionHeading;
