import React from 'react';//react를 불러와서 사용가능하게 한다.
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//ReactDOM.render : 컴포넌트를 페이지에 렌더링,react-dom모듈을 불러와 사용 가능 
//parameter 1 : 페이지에 랜더링할 내용(JSX형태), parameter 2 : 해당 JSX 랜더링할 document 내부요소 설정 
//<React.StrictMode> : 리액트프로젝트에서 리액트 레거시기능들을 사용하지 못하게 하는 기능 -> 문자열 ref,componentWillMount 등 나중에 완전히 사라지게될 옛 기능 사용시 경고 출력
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
