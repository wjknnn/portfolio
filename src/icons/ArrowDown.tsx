export const ArrowDown = ({
  size = 24,
  color = 'black',
}: {
  size?: number
  color?: string
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 42 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11 17L21 28L31 17'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
