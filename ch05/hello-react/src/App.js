import React, { Component } from "react";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";
/*
class App extends Component {
  render() {
    return <ValidationSample />;
  }
}

 */

class App extends Component {
  render() {
    //주의 할 점 : onclick= {this.scrollBox.scrollToBottom} 같은 형식으로 작성하여도 되지만,
    //            처음 렌더링 될때 this.scrollBox값이 undefined이기 때문에 값을 읽어오는 과정에서 오류발생
    //            따라서 화살표 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 this.scrollBox.scrollToBottom 메소드를
    //            실행하게 된다면 버튼을 누를떄 값을 읽어 와서 실행하기 떄문에 오류가 발생하지 않는다.
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
