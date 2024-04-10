export const Icon = ({
  name,
  size = 24,
  style,
  className,
}: {
  name?: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <svg width={size} height={size} style={style} className={className}>
      <use href={`/coolicons-sprite.svg#${name}`} />
    </svg>
  );
};
