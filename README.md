<<<<<<< HEAD
<h1>천선우 202230334</h1>


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











