type SiteHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string[];
};

export function SiteHeader({ eyebrow, title, description, meta = [] }: SiteHeaderProps) {
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
        <div className="max-w-2xl space-y-2">
          <h1 className="text-2xl font-semibold tracking-[-0.045em] text-foreground sm:text-[2rem] lg:text-[2.2rem]">
            {title}
          </h1>
          <p className="max-w-xl text-balance text-sm leading-6 text-muted-foreground sm:text-[15px]">
            {description}
          </p>
        </div>
      </div>

      {meta.length ? (
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-medium text-muted-foreground">
          {meta.map((item, index) => (
            <span key={item} className="inline-flex items-center gap-3">
              {item}
              {index < meta.length - 1 ? <span className="h-1 w-1 rounded-full bg-border" /> : null}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
