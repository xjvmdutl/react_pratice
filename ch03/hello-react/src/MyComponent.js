import React, { Component } from 'react';
import PropTypes from 'prop-types';//PropsTypes를 사용하기 위한 import


//일반 함수의 경우 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.
function twice(value) {
    return value*2;
}
const triple = (value) => value *3;
//같은 의미
//rsc를 입력하면 컴포넌트 코드를 쉽게 생성가능


// const MyComponent = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };
// //다른 파일에서 이파일을 import 할떄 MyComponent 클래스를 불러오도록 설정하는 코드
// export default MyComponent;


//props = properties 를 줄인 표현으로 컴포넌트 속성을 설정할 떄 사용하는 요소
//해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정 가능
//props 값은 컴포넌트 함수의 파라미터로 받아 와서 사용할수 있다.
// const MyComponent = props => {
//     return (
//         <div>
//             안녕하세요 제 이름은 {props.name}입니다.
//             {/*
//                 children 값을 출력 하기 위해서는 위와같이 사용하여야 한다.
//             */}
//             <br />
//             children값은 {props.children}입니다.
//         </div>
//     );
// };
//비구조화 할당 문법을 통해 props 내부값 추출
//객체에서 값을 추출하는 문법이면 구조분해 문법이라고도 부른다.
// 함수의 파라미터 부분에서도  사용 가능.
// const MyComponent = props => {
//     const { name, children} = props;
//     return (
//         <div>
//             안녕하세요 제 이름은 {name}입니다.
//             <br />
//             children값은 {children}입니다.
//         </div>
//     );
// };
//함수의 파라미터가 객체라면 그값을 바로 비구조화하여 사용하는것
// const MyComponent = ({name,children,favoriteNumber}) => {
//     return (
//         <div>
//             안녕하세요 제 이름은 {name}입니다.
//              <br />
//              children값은 {children}입니다.
//              <br />
//              제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//         </div>
//     );
//  }
// //propsTypes를 통한 props검증
// //컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할떄 사용
// MyComponent.propTypes = {
//     name : PropTypes.string//name값은 반드시 문자열 형태로 전달
//     ,favoriteNumber : PropTypes.number.isRequired//propsTypes를 지정하지 않았을때 경고 메시지를 띄어준다.
// };

// //default props
// MyComponent.defaultProps = {
//     name : '기본 이름' 
// };
// export default MyComponent;
// 클래스형 컴포넌트로 변경
// class MyComponent extends Component {
//     render(){
//         const {name,favoriteNumber,children} = this.props;//비구조화 할당
//         return (
//             <div>
//                안녕하세요 제 이름은 {name}입니다.
//               <br />
//               children값은 {children}입니다.
//               <br />
//               제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//             </div>
//         );
//     }
// }
// MyComponent.defaultProps = {
//     name : '기본 이름'
// };
// MyComponent.propTypes = {
//     name : PropTypes.string,
//     favoriteNumber : PropTypes.number.isRequired
// };
// export default MyComponent;
//클래스형 컴포넌트에서 props사용=> 내부에서 사용
class MyComponent extends Component {
    static defaultProps = {
        name : '기본 이름'
    };
    static propTypes ={
        name : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    };
    render(){
        const {name,favoriteNumber,children} = this.props;//비구조화 할당
        return (
            <div>
               안녕하세요 제 이름은 {name}입니다.
              <br />
              children값은 {children}입니다.
              <br />
              제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}
export default MyComponent;

