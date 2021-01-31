import logo from './logo.svg';//SVG import 
import './App.css';//css import
import { Fragment } from 'react';
/*****************************
 JSX란? 자바스크립트의 확장문법(XML유사) , 가독성 증가 작성 용이
 => 브라우저 실행전 코드가 번들링 되는 과정에서 바벨을 사용하여 일반 자바스크립트 코드로 변환
 ex) functio App(){
       return (
        <div>
        Hello<b>react</b>
        </div>
  ) 
  변형 후 function App(){
    return React.createElement("div",null,"Hello ",React.createElement("b",null,"react"));
  }
 }
 *****************************/
// function App() {//App 컴포넌트 생성 -> JSX 코드
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// function App() {//에러 코드 why? JSX는 요소 여러개가 부모요소 하나에 감싸져 있지 않기 떄문
//   return (
//     <h1>리액트 안녕</h1>
//     <h2>잘 동작하니?</h2>
//   );
// }
//export default App;
//div로 감싸서 해결 가능 (왜 div로 감싸야 되는걸까?)
//  virtualDOM 에서 컴포너트 변화를 감지해낼떄 효율적으로 비교 가능하게 컴포넌트 내부는 하나의 DOM트리구조로 이루어져야되는 규칙이 존재하기 떄문
// function App() {
//   return (
//     <div>
//       <h1>리액트 안녕</h1>
//       <h2>잘 동작하니?</h2>
//     </div>
//   );
// }
// export default App;
//div를 사용하고 싶지 않을경우에는 Fragment 기능 사용(react v16이상)
// function App() {
//   return (
//     <Fragment>
//       <h1>리액트 안녕</h1>
//       <h2>잘 동작하니?</h2>
//     </Fragment>
//   );
// }
// export default App;

//JSX을 자바 스크립트 표현
// function App() {
//   const name = 'Hello 리액트';//한번 선언시 변경이 불가능한 상수 선언
//   //let : 동적인 변수를 담을때 사용하는 키워드, var : scope가 함수단위
//   function myFunc(){
//     var a = 'hello';
//     if(true){
//       var a = 'bye';
//       console.log(a);//bye
//     }
//     console.log(a);//bye
//     //if문 내부에서 새로선언 했음에도 if문 밖에서 a 조회시 변경된 값이 나온다.
//     //let, const로 해결
//   }
//   myFunc();
//   function  myFunc2(){
//     let a =1;
//     if(true){
//       let a= 2;
//       console.log(a);//2
//     }
//     console.log(a);//1
//     //if문 내부에서 선언된 값이 if문 밖에서 변경 x
//     //let a = 1;
//     //let a = 2;
//     //const a = 1;
//     //const a = 2;
//     //불가능
//   }
//   myFunc2();
//   return (
//     <>
//       <h1>{name}</h1>
//       <h2>잘 동작하니?</h2>
//     </>
//   );
// }
// export default App;
// if문 대신 조건부 연산자
//JSX내부의 자바스크립트는 if문 사용 불가능 -> JSX 밖에서 if문을 사용하여 사전 값을 설정하거나, {}안에 조건부 연산자를 사용
// function App() {
//   // const name = '리액트';
//   const name = '리웹트';
//   return (
//     <div>
//       {name === '리액트' ? (
//         <h1>리액트입니다.</h1>
//       ) : (
//         <h2>리액트가 아닙니다.</h2>
//       )}
//     </div>
//   );
// }
// export default App;

//AND 연산자(&&)를 사용한 조건부 렌더링
// function App() {
//   const name = '리웹트';
//   //null  랜더링시 아무것도 보여주지 않는다.
//   return (
//     <div>
//       {name === '리액트' ? 
//         <h1>리액트입니다.</h1> : null}
//     </div>
//   );
// }
// export default App;
// function App() {
//   //false 를 렌더링시 null과 같이 아무것도 나타나지 x , 단) 0은 예외적으로 화면에 나타난다
//   const name = '리웹트';
//   const number = 0;
//   return (
//     <div>
//       {name === '리액트' && <h1>리액트입니다.</h1>}
//       {number && <h1>내용.</h1>}
//     </div>
//   );
// }
// export default App;

// undefined를 렌더링 하지 않기
// function App() {
//   const name = undefined;
//   //return name;//JSX 오류
//   //return name || '값이 undefined입니다';//OR 연산자로 오류 방지
//   //return <div>값이 {name}입니다</div>;//JSX 내부에서 undefined 렌더링 가능
//   return <div>{name || '리엑트'}</div>;//undefined 일떄 표시할 값 렌더링
// }
// export default App;

//인라인 스타일링
//스타일 적용시 문자열 형태가 아니라 객체형태로 넣어줘야 한다. 또한 background-color처럼 문자에 -가 있는경우에는 카멜표기법으로 작성해야 한다
// function App() {  
//   const name = '리액트';
//   // const style = {//background-color는 카멜 표기법으로 표기
//   //   backgroundColor : 'black',
//   //   color : 'aqua',
//   //   fontSize: '48px',//font-Size
//   //   fontWeight : 'bold',//font-weight
//   //   padding : 16 //단위를 생략 하면 px
//   // };
//   // return (
//   //   <div style={style}>{name}</div>
//   // );
//   return (
//     <div style={{//미리 선언하지 않고 style 지정
//       backgroundColor : 'black',
//       color : 'aqua',
//       fontSize: '48px',//font-Size
//       fontWeight : 'bold',//font-weight
//       padding : 16 //단위를 생략 하면 px
//     }}>{name}</div>
//   );
// }
// export default App;

//class 대신 clasName
//JSX는 class 대신 className으로 설정을 해주어야 한다.
// function App() {  
//   const name = '리액트';
//   return (//클래스로 해도 동작은 하지만 console창 경고가 뜬다.
//     <div className = 'react'>{name}</div>
//   );
// }
// export default App;

//꼭 닫아야 되는 태그(닫지 않아도 되는 태그 : input 등)
// function App() {  
//   const name = '리액트'
//   return (
//     // <>
//     //   <div className='react'>{name}
//     //    <input>//리액트에선 꼭 닫지 않아도 되는 태그 사용시 오류
//     //   </div>
//     // </>
    
//     //self-closing 을 하거 나 닫아주어야 오류가 없다.
//     <>
//       <div className='react'>{name}
//         <input></input>
//         <input />
//       </div>
//     </>
    
//   );
// }
// export default App;

// //JSX 주석
// function App() {  
//   const name = '리액트';
//   return (
//     <>
//       {/* 주석 */}
//       <div
//         className='react' //시작태그를 여러줄로 할시 여기에 주석 가능
//       >
//         {name}
//       </div>
//       //단, 이런 주석이나 
//       /* 이런 주석은 페이지에 그대로 나타난다. */
//       <input />
//     </>
//   );
// }
// export default App;



//ESLint : 문법 검사 도구 , 코드를 작성시 실수 할떄 에러, 경고 메시지를 VS Code 에디터에서 바로 확인 가능하게 해줌
//Prettier : 코드 스타일 자동정리 도구 
function App() {  
  const name = '리액트';
  return (
    <>
    {/* 이러한 에러는 ESlint에서 빨간에러로 뜨며 바로 고쳐줘야한다.
    <h1>에러</h1>
    <h2></h2>
    */}
      //잘못된 주석 {/* 이러한 오류는 초록색 줄로 표기되며 고치지 않아도 된다(ESLint경고문) */}
      {/* .prettierrc 파일을 src 폴더 앞에 생성한뒤 다양한 코드스타일을 지정할수 있다 = prettier*/}
      {/* 저장할떄 자동으로 코드 정리 = 
        1. VSCODE 환경설정 (설정)
        2. format on save 검색
        3. check
      */}
    </>

  );
}
export default App;


