import React from 'react'
import { Txt } from './components/Txt'
import * as _ from './mainStyle'
import './app.css'
import Header from './components/Header'
import { ArrowDown } from './icons/ArrowDown'

function App() {
  return (
    <>
      <Header />
      <_.Main>
        <_.Blur />
        <_.Circle />
        <_.Circle time={4} color='#00eeff' />
        <Txt typo='sh1'>
          <Txt point>사용자 경험</Txt>을 중요시 하는
          <br />
          프론트엔드 개발자
          <br />
          <Txt point>최승우</Txt> 입니다.
        </Txt>
        <_.BottomFrame>
          <div
            className='scroll-down3'
            onClick={() => window.scroll(0, window.innerHeight)}>
            <ArrowDown size={42} color='#0044ff' />
          </div>
        </_.BottomFrame>
      </_.Main>
      <_.Introduce>
        <Txt typo='lh1' point>
          Introduce
        </Txt>
      </_.Introduce>
    </>
  )
}

export default App
