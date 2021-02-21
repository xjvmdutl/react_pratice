import logo from './logo.svg';
import './App.css';
import Say from './Say';
import EventPracticeClass from "./EventPracticeClass";
import EventPracticeFunction from "./EventPracticeFunction";
function App() {
  return (
    //이벤트 핸들링 : 이벤트란 사용자가 웹 브라우저에서 Dom 요소들과 상호작용하는것
    //http://jsbin.com/ = HTML 테스터기
    //이벤트 이름은 카멜 표기법으로 작성 , ex)onClick,onChange,onKeyUp
    //이벤트에 실행할 자바스크림트 코드를 전달하는것이 아니라 함수형태의 값을 전달(HTML에서는 큰따옴표 안에 실행할 코드를 넣었지만 리액트에서는 함수 형태의 객체를 전달한다.)
    //DOM 요소에서만 이벤트를 설정할수 있다. ->div,button,input등 DOM요소에는 이벤트를 설정할수 있지만 우리가 직접만든 컴포넌트에는 이벤트를 자체적으로 설정할수 없다.
    //ex)<MyComponent onClick={doSomthing}>
    //myComponent에 onclick값을 설정한다면 MyComponent를 클릭할때 doSomthing함수를 실행하는 것이 아니라 그냥 이름이 onclick인 props를 myComponent에 전달할 뿐
    //하지만 전달받은 props를 컴포넌트 내부의 DOM이벤트로 설정은 할수 이따.
    //ex)<div onClick={this.props.onClick}>{/* ...*/}</div>
    /*
    <Say>
    </Say>
    */
    //리액트에서 지원하는 이벤트 종류 : Clipboard, Touch,Composition,UI,Keyboard,wheel,...등
    // <EventPracticeClass></EventPracticeClass>
     <EventPracticeFunction></EventPracticeFunction>
  );
}
export default App;
