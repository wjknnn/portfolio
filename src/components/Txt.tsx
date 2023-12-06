import { HTMLAttributes } from 'react'
import { keyframes, styled } from 'styled-components'

interface Props extends HTMLAttributes<HTMLSpanElement> {
  typo?: keyof typeof TYPOGRAPHY_VARIANT
  color?: string
  point?: boolean
}

export const Txt = ({
  typo = 'lh1',
  color = 'black',
  point = false,
  ...props
}: Props) => {
  return (
    <>
      {!point ? (
        <Span
          color={color}
          fontSize={TYPOGRAPHY_VARIANT[typo].fontSize}
          fontWeight={TYPOGRAPHY_VARIANT[typo].fontWeight}
          {...props}
        />
      ) : (
        <SpanPoint
          color={color}
          fontSize={TYPOGRAPHY_VARIANT[typo].fontSize}
          fontWeight={TYPOGRAPHY_VARIANT[typo].fontWeight}
          {...props}
        />
      )}
    </>
  )
}

const TYPOGRAPHY_VARIANT = {
  lh1: {
    fontSize: 64,
    fontWeight: 600,
  },
  mh1: {
    fontSize: 64,
    fontWeight: 400,
  },
  sh1: {
    fontSize: 64,
    fontWeight: 100,
  },
  lh2: {
    fontSize: 48,
    fontWeight: 600,
  },
  mh2: {
    fontSize: 48,
    fontWeight: 400,
  },
  sh2: {
    fontSize: 48,
    fontWeight: 100,
  },
  mp1: {
    fontSize: 24,
    fontWeight: 400,
  },
  mp2: {
    fontSize: 18,
    fontWeight: 400,
  },
}

const Span = styled.span<{
  color: string
  fontSize: number
  fontWeight: number
}>`
  line-height: 1.2;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  transition: 0.4s;
`

const textShine = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`

const SpanPoint = styled(Span)`
  background: linear-gradient(
    to right,
    #5f53cd 20%,
    #00affa 30%,
    #0190cd 70%,
    #4a60da 80%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: ${textShine} 4s ease-in-out infinite alternate;
`
