import React, { useState } from "react";
//함수형 컴포넌트에서 useState사용하기
//리액트 16.8이전 버전에선 함수형 컴포넌트에 state를 사용할수 없었다.
//하지만 이후 useState라는 함수를 사용하여 함수형 컴포넌트에서도 state를 사용할수 있게 되었다.
//이과정서 Hooks를 사용하게 되는데 여러종류중 useState만 알아보자.
//배열 비구조화 할당 => 배열안에 들어있는 값을 쉽게 추출가능
//ex) const array = [1,2];
//    const one = array[0];
//    const two = array[1];
//    =>
//    const [one,twp] = [1,2];
// const Say = () => {
//     const [message, setMessage] = useState('');//useState함수의 인자에는 상태의 초깃값을 넣어준다. 값을 형태는 자유(반드시 객체 아니여도 된다.)
//                                                // 함수 호출시 객체를 반환 첫번쨰 원소는 현재 상태, 두번쨰 원소는 상태를 바꾸어 주는 함수(세터함수)
//                                                // 배열 비구조화 할당을 통해 값을 자유롭게 정해줄 수 있다.
//     const onClickEnter = () => {
//         setMessage('안녕하세요!');
//     }
//     const onClickLeave = () => {
//         setMessage('안녕히 가세요!');
//     }
//     return(
//         <div>
//             <button onClick={onClickEnter}>입장</button>
//             <button onClick={onClickLeave}>퇴장</button>
//             <h1>{message}</h1>
//         </div>
//     )
// };
// export default Say;

//한 컴포넌트에서 useState여러번 사용하기
const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => {
        setMessage('안녕하세요!');
    }
    const onClickLeave = () => {
        setMessage('안녕히 가세요!');
    }
    const [color,setColor] = useState('black');
    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick={() => {
                setColor('red');
            }}>빨간색</button>
            <button style={{color:'green'}} onClick={() => {
                setColor('green');
            }}>초록색</button>
            <button style={{color:'blue'}} onClick={() => {
                setColor('blue');
            }}>파란색</button>
        </div>
    )
};

export default Say;

//state 사용시 주의사항
//state값을 바꾸어 줄떄는 setState또는 useState를 통해 전달받은 세터함수를 사용해야 한다.
//잘못된 예시 
//클래스형 컴포넌드
//this.state.number = this.state.number+1;
//this.state.array = this.array.push(2);
//this.state.object.value = 5;
//함수형 컴포넌트
//const [object,setObject] = useState({a:1,b:1});
//object.b = 2;
//만약 배열이나 객체를 업데이트 할 경우에는 배열이나 객체 사본을 만들고 그 사본값을 업데이트 한 후 사본의 상태를 setState또는 세터함수를 통해 업데이트 한다.
//ex)
//객체 다루기
//const object = {a:1,b:2,c:3};
//const nextObject = {...object,b:2};
//객체 사본을 만들떄에는 spread연산자라는 ...을 사용하여 처리
//배열 다루기
//const array = [
//  {id: 1,value : true},
//  {id: 2,value : true},
//  {id: 3,value : false},
//];
//let nextArray = array.concat({id:4});// 새항목 추가
//nextArray.filter(item=>item.id !== 2);//id 2인 항목 제거
//nextArray.map(item=>(item.id === 1 ? {...item,value:false} : item));//id가 1인 항목의 value를 false로 변경
//배열사본을 만들때는 배열의 내장함수 활용
