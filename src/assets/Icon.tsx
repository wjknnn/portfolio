export const Icon = ({ name, size = 24 }: { name: string; size?: number }) => {
  return (
    <svg width={size} height={size}>
      <use href={`/coolicons-sprite.svg#${name}`} />
    </svg>
  );
};
