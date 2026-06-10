<<<<<<< HEAD
<h1>천선우 202230334</h1>


import { useState } from "react";
import Desc from "./Desc";

function Home() {
  const [color, setColor] = useState("rgb(200, 200, 200)");

  const handleClick = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div>
      <h1>박스 배경색 변경</h1>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
        }}
      />
      <button onClick={handleClick}>색상 변경</button>
      <Desc color={color} />
    </div>
  );
}

export default Home;



function Desc({ color }) {
  return (
    <p>현재 박스의 배경색은 {color} 입니다.</p>
  );
}

export default Desc;



import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

<h3> 13 주차 </h3>
렌더링 과정의 3단계 / 스냅샷처럼 동작하는 State
<ol>
  <li>렌더링 과정은 1단계(렌더링 트리거), 2단계(React 컴포넌트 렌더링), 3단계(DOM에 변경사항 커밋)로 이루어진다.</li>
  <li>초기 렌더링은 createRoot( )와 render 메서드를 호출하여 시작된다.</li>
  <li>State가 업데이트되면 자동으로 렌더링 큐(Queue)에 추가되어 순서대로 렌더링된다.</li>
  <li>StrictMode는 개발 모드에서 잠재적인 버그와 부작용을 조기에 발견하도록 돕는 검사 도구이다.</li>
  <li>React에서의 재귀적 렌더링은 특정 컴포넌트가 더 이상 다른 컴포넌트를 호출하지 않을 때까지 렌더링을 반복한다.</li>
  <li>3단계(커밋)에서 초기 렌더링은 appendChild( ) DOM API를 사용하고, 리렌더링은 최소한의 변경만 적용한다.</li>
  <li>State는 컴포넌트의 메모리로 동작하며, React 내부에 존재한다(컴포넌트 내부 아님).</li>
  <li>state를 set 함수로 업데이트해도 이미 가지고 있는 state 값은 변경되지 않고, 대신 리렌더링이 트리거된다.</li>
  <li>상호작용이 발생하면 React가 컴포넌트를 다시 호출하고 스냅샷을 계산하며, 새로운 state로 이벤트 핸들러를 생성하고 다음 상호작용을 기다린다.</li>
</ol>
< 실습 1 >
렌더링 3단계 확인 (main.jsx)
<ol>
  <li>createRoot(document.getElementById('root')).render( ) 구조로 초기 렌더링을 트리거한다.</li>
  <li>주석 처리 시 화면 출력이 사라진다.</li>
</ol>
import { StrictMode } from 'react'<br />
import { createRoot } from 'react-dom/client'<br />
import App from './App.jsx'<br />
<br />
createRoot(document.getElementById('root')).render(<br />
&nbsp;&nbsp;&lt;StrictMode&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;App /&gt;<br />
&nbsp;&nbsp;&lt;/StrictMode&gt;<br />
)<br />

< 실습 2 >
여러 개의 state 사용 (Carousel 컴포넌트)
<ol>
  <li>하나의 컴포넌트에 여러 개의 state 변수를 사용할 수 있다.</li>
  <li>서로 연관이 없는 값은 별도의 state로 관리한다.</li>
</ol>
export default function Carousel() {<br />
&nbsp;&nbsp;const [index, setIndex] = useState(0);<br />
&nbsp;&nbsp;const [more, setMore] = useState(false);<br />
&nbsp;&nbsp;...<br />
}<br />

<!-- 12 주차 -->
<h3> 12 주차 </h3>
State Hook에 컴포넌트 상태 저장하기
<ol>
  <li>지역 변수를 사용하여 컴포넌트의 상태를 저장하는 것은 불가능하다.</li>
  <li>이벤트 핸들러로 변수 값을 변경해도 컴포넌트는 초기값을 유지하는 문제가 있다.</li>
  <li>React에서는 이를 해결하기 위해 State Hook(useState)을 제공한다.</li>
  <li>useState를 사용하려면 react에서 import해야 한다.</li>
  <li>index는 state 변수이고, setIndex는 state를 변경하는 setter 함수이다.</li>
  <li>useState(0)는 index의 초기값을 0으로 초기화한 것이다.</li>
</ol>
< 실습 1 >
Carousel 컴포넌트 제작 (State Hook 적용)
<ol>
  <li>galleryImages를 import한다.</li>
  <li>/src/components/Carousel/ 디렉토리에 Carousel.jsx 파일을 생성한다.</li>
  <li>Index 변수를 선언하고 useState(0)으로 초기화한다.</li>
  <li>handleClick 함수를 선언하고, 클릭할 때마다 1씩 증가하도록 한다.</li>
  <li>버튼을 만들고 클릭 이벤트에 handleClick을 전달한다.</li>
  <li>slide.name과 같이 slide 객체의 프로퍼티를 사용하여 화면을 구성한다.</li>
</ol>
import { useState } from 'react';<br />
<br />
const [index, setIndex] = useState(0);<br />

<!-- 11 주차 -->
<h3> 11 주차 </h3>
이벤트 전파 / 이벤트 전파 중지 / State Hook 소개
<ol>
  <li>React에서 이벤트는 자식 → 부모로 전파(bubbling)된다.</li>
  <li>e.stopPropagation()을 호출하면 이벤트가 부모로 전달되지 않는다.</li>
  <li>e.stopPropagation()과 e.preventDefault()는 다른 기능이다.</li>
  <li>State Hook은 컴포넌트의 정보를 저장하는 역할을 한다.</li>
</ol>
< 실습 1 >
이벤트 전파 중지 (Bubble 컴포넌트)
<ol>
  <li>Button 컴포넌트에 e.stopPropagation()을 추가하여 이벤트 전파를 막는다.</li>
  <li>버튼 클릭 시 버튼 자신의 alert만 표시되고, 부모 nav의 onClick은 실행되지 않는다.</li>
</ol>
import style from "./Bubble.module.css";
function Button({ onClick, children }) {
  return (
    &lt;button className={style.button} onClick={e =&gt; {
      e.stopPropagation();
      onClick();
    }}&gt;
      {children}
    &lt;/button&gt;
  );
}
< 실습 2 >
로컬 변수로 캐러셀(Carousel) 구현
<ol>
  <li>로컬 변수로 index 값을 저장하고, 현재 index의 이미지를 렌더링한다.</li>
  <li>버튼 클릭 이벤트 핸들러에서 index 값을 하나씩 증가/감소시킨다.</li>
  <li>이미지 객체에는 name, artist, description, url, alt 등의 key를 추가한다.</li>
</ol>

<!-- 10 주차 -->
<h3> 10 주차 </h3>
이벤트 핸들러 함수의 전달
<ol>
  <li>이벤트 핸들러 함수는 호출하는 것이 아니라 전달하는 것이다.</li>
  <li>함수 이름만 prop 형태로 전달한다: onClick={handleClick} (올바름)</li>
  <li>onClick={handleClick()} 처럼 소괄호를 붙이면 렌더링 시 즉시 실행되어 잘못된 사용법이다.</li>
  <li>인라인으로 정의하려면 익명 함수(화살표 함수)를 사용한다.</li>
</ol>
< 실습 1 >
이벤트 핸들러 전달 방법 비교
<ol>
  <li>올바른 방법: &lt;button onClick={handleClick}&gt;</li>
  <li>잘못된 방법: &lt;button onClick={handleClick()}&gt;</li>
  <li>인라인 익명 함수: &lt;button onClick={() =&gt; alert('You clicked me!')}&gt;</li>
</ol>

<!-- 9 주차 -->
<h3> 9 주차 </h3>
UI 트리 구조 / JSX 스타일 적용
<ol>
  <li>React는 UI를 트리(Render 트리)의 형태로 모델링한다.</li>
  <li>컴포넌트를 중첩하면 부모-자식 컴포넌트 개념이 생긴다.</li>
  <li>모듈 의존성 트리는 각 파일(모듈)의 import 관계를 나타낸다.</li>
  <li>JSX에 스타일을 적용하는 방법: 일반 CSS, 인라인 스타일, CSS-in-JS, CSS 프레임워크, CSS Module</li>
</ol>
< 실습 1 >
UI를 트리 구조로 이해하기 (Render 트리 / 모듈 의존성 트리)
<ol>
  <li>App → InspirationGenerator, FancyText 구조의 Render 트리를 확인한다.</li>
  <li>모듈 의존성 트리: App.js → InspirationGenerator.js, FancyText.js, Copyright.js</li>
</ol>
< 실습 2 >
JSX에 스타일 적용하기
<ol>
  <li>일반 CSS: style.css 파일 생성 후 import하여 className으로 사용</li>
  <li>인라인 스타일: style 속성에 객체로 전달, 속성명은 camelCase 사용</li>
  <li>CSS-in-JS: styled-components, emotion 등 외부 라이브러리 사용</li>
  <li>CSS 프레임워크: Tailwind CSS는 className에 유틸리티 클래스 조합</li>
</ol>


<!-- 6 주차 -->
<h3> 6 주차 </h3>
조건부 렌더링
<ol>
  <li>컴포넌트는 조건애 따라 다른 항목을 표시해야하는 경우가 많음 </li>
  <li>React는 if문, 삼합 연산자와 같은 자바스크립트 문법을 사용하여 조건부로 JSX를 랜더링 할 수 있다. </li>
</ol>

< 실습 1 >
조건부로 JSX 반환하기
<ol>
  <li>PackingList 컴포넌트를 생성하고, item 컴포넌트를 호출하도록 한다. </li>
  <li>item 컴포넌트는 mame을 prop으로 받아서 li 태그에 넣어서 반환 </li>
  <li>App 컴포넌트를 통해서 최종 랜더링 </li>
  <li>조건부 랜더링을 통해서 리스트에 체크를 추가 </li>
</ol>








<!-- 5 주차 -->
<h3> 5 주차 </h3>


<!-- 4 주차 -->
<h3> 4 주차 </h3>


<!-- 3 주차 -->
<h3> 3 주차 </h3>
React / 컴포넌트
<ol>
  <li>React 컴포넌트는 마크업을 함께 사용할 수 있는 JavaScript 함수로 개발한다. </li>
  <li>컴포넌트는 버튼과 같이 작을 스도 있고, 전체 페이지와 같이 큰 경우도 있다. </li>
  <li>React는 컴포넌트 단위로 UI를 개발하고 레고를 조립하듯이 앱을 완성한다. </li>
  <li>일반적인 웹이나 웹 앱은 마크업인 HTML을 이용하여 UI의 구조를 만들고, CSS를 사용하여 스타일을 정의하며, 상호작용을 위한 JavaScript를 결합하여 완성한다. </li>
</ol>

< 실습 1 > <br />
이미지를 출력하는 컴포넌트 생성<br />
import reactLogo from "./assets/react.svg";

export default function App() {
  return (
    <>
      <img src={reactLogo} alt="React logo" />
    </>
  );
}











