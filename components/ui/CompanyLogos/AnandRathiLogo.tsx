export function AnandRathiLogo({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1280 290"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <mask id="anand-rathi-mask">
          <image
            href="/companies/anand-rathi.png"
            x="0"
            y="0"
            width="1280"
            height="290"
            preserveAspectRatio="none"
          />
        </mask>
      </defs>

      <rect
        width="1280"
        height="290"
        fill="currentColor"
        mask="url(#anand-rathi-mask)"
      />
    </svg>
  );
}