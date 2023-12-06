import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Txt } from './Txt'

const navigation = ['Introduce', 'Project', 'Contect']

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false)

  const updateScroll = () => {
    setScroll(window.scrollY >= 1)
  }

  useEffect(() => {
    console.log('scrolling!')
    window.addEventListener('scroll', updateScroll)
    return () => {
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])
  return (
    <Frame scroll={scroll}>
      <Txt point typo='mp1'>
        ChoiSeungWoo
      </Txt>
      <TextFrame>
        {navigation.map((value) => (
          <TextBox key={value}>
            <Txt typo='mp2'>{value}</Txt>
            <UnderLine />
          </TextBox>
        ))}
      </TextFrame>
    </Frame>
  )
}

export default Header

const TextFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`
const UnderLine = styled.div`
  width: 0;
  height: 2px;
  background-color: black;
  border-radius: 2px;
  transition: 0.4s;
`
const TextBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover > div {
    background-color: #0044ff;
    width: 100%;
  }
  &:hover > span {
    color: #0044ff;
  }
`
const Frame = styled.header<{ scroll: boolean }>`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(60px);
  width: calc(100% - 160px);
  padding: 0 80px;
  z-index: 2;
  box-shadow: 0 0 ${(props) => (props.scroll ? '40px' : 0)} rgba(0, 0, 0, 0.04);
  transition: 0.2s;
`
