type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  className = "",
}: SectionIntroProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-8 text-stone-700">{description}</p>
      )}
    </div>
  );
}