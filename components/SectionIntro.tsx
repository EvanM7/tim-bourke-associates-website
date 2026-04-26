type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  className = "",
  align = "left",
}: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-8 text-stone-700">{description}</p>
      )}
    </div>
  );
}
