import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

// 컴포넌트 선언
//방법 2가지 1. 함수형 2. class형(차이점 : 클레스형 컴포넌트인 경우 state 기능및 라이프 사이클 기능 사용 가능, 임의 메소드 정의 가능)
//ESP 6 이후부터 자바스크립트에서 클레스 선언 가능 이전에는 prototype으로 선언
//class형 컴포넌트 선언
//함수형 컴포넌트 장점 : 선언에 용이함(클래스형보다 쉬움), 메모리 자원또한 덜 사용(프로젝트 빌드 베포시에도 결과물 크기가 작지만 별 차이 없음)
//단점 state와 라이프사이클 API 사용이 불가능 => 16.8버전인 Hooks기능 도입후 해결


// class  App extends Component{
//   render(){
//     const name = 'react';
//     return <div className='react'>{name}</div>
//   }
// }

// export default App;

//모듈 불러오기
//props 값 지정하기 , name 속성값을 지정해서 줄수 있다.
// const App = () =>{
//   return <MyComponent name='React'/>;
// }

// export default App;
//default props = props 값을 따로 지정하지 않았을떄 보여주는 기본값
// const App = () =>{
//   return <MyComponent/>;
// }

// export default App;

//태그 사이의 내용을 보여주는 children
// 컴포넌트 태그 사이의 내용을 보여주는 props가존재 = children
//MyComponent 태그 사이에 작성한 리액트 문자열을  MyComponent 내부에서 보여주려면 props.children 값을 보여주어야 한다.

// const App = () =>{
//   return <MyComponent>리액트</MyComponent>;
// }
// const App = () =>{
//   //return <MyComponent name = {2}></MyComponent>;//크롬 콘솔 에러 => propsType이 문자열이 아니기 때문
//   return <MyComponent name = '리액트' favoriteNumber = {2}></MyComponent>;
// }
// export default App;
// const App = () =>{
//   return <Counter />;
// }
const App = () =>{
  return <Say />;
}
export default App;