import styled, { keyframes } from 'styled-components'

const round = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-40px) translateY(-40px);
  }
  50% {
    transform: translateX(-80px) translateY(0);
  }
  75% {
    transform: translateX(-40px) translateY(40px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
`
export const Main = styled.section`
  height: ${window.innerHeight - 320}px;
  display: flex;
  flex-direction: column;
  padding: 320px 80px 0;
  gap: 120px;
`
export const Introduce = styled(Main)`
  height: ${window.innerHeight - 120}px;
  gap: 0;
  padding: 120px 80px 0;
`
export const Blur = styled.div`
  background: rgba(255, 255, 255, 0.24);
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  backdrop-filter: blur(60px);
`
export const Circle = styled.div<{ time?: number; color?: string }>`
  width: 240px;
  height: 240px;
  border-radius: 100%;
  background-color: ${(props) => props.color || '#0044ff'};
  position: absolute;
  z-index: -2;
  right: 16%;
  animation: ${round} infinite ${(props) => props.time || 5}s;
`
export const BottomFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`
