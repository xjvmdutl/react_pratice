import React, {Component} from 'react';
//state = 컴포넌트 내부에서 바뀔수 있는 값 
// props 같은 경우 컴포넌트가 사용되는 과정에서 부모컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할수 있다.
// 즉 props를 바꾸기 위해서는 부모 컴포넌트에서 바꿔 주어야 한다
//예를 들어 App컴포넌트에서 MyComponent를 사용할때 props를 바꿔주어야 값이 변경될수 있다.-> mycomponet에서 전달받은 값을 변경할수 없다.
//state는 두종류가 존재하는데 
//1. 클래스형 컴포넌트가 지닌 state 2. 함수형컴포넌트에서의 useState 함수를 통해 사용되는 state
// class Counter extends Component {
//     constructor(props){//컴포넌트에 state설정 할떄 사용하는 메소드 
//                        //컴포넌트 생성자 메소드로서 클래스형 컴포넌트에서 위 메소드를 호출시 반드시 super(props)를 호출하여야 한다.
//       super(props);//이 함수를 호출시 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출한다
//       //state 초깃값 설정
//       this.state = {//state는 객체형식이어야 한다.
//           number : 0
//       };
//     }
//     render(){
//         const {number} = this.state;//state를 조회할떄는 this.state로 조회
//         return(
//             <div>
//                 <h1>{number}</h1>
//                 <button
//                     //onclick을 통해 버튼이 클릭되었을떄 호출할 함수를 지정
//                     //이벤트 설정
//                     onClick={()=>{
//                         //this.setState를 사용하여 state에 새로운 값 넣을수 있다
//                         this.setState({number: number+1});
//                 }}>
//                 +1
//                 </button>
//             </div>
//         );
//     };
// }
// export default Counter;

// class Counter extends Component {
//     constructor(props){
//       super(props);
//       this.state = {
//           number : 0,
//           fixedNumber : 0
//       };
//     }
//     render(){
//         const {number,fixedNumber} = this.state;
//         return(
//             <div>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값 : {fixedNumber}</h2>
//                 {/* 
//                 *   버튼이 클릭될떄 fixedNumber값 변경 x =>this.setState에서 인자로 fixedNumber는 넣지 않았다..
//                 *   this.setState 함수는 인자로 전달된 객체만 변경
//                 */}
//                 <button
//                     onClick={()=>{
//                         this.setState({number: number+1});
//                 }}>
//                 +1
//                 </button>
//             </div>
//         );
//     };
// }
// export default Counter;
//constructor 밖에서 state초기값 설정
// class Counter extends Component {
//     state = {//constructor를 선언하지 않고도 state 초기값 설정 가능
//         number : 0,
//         fixedNumber : 0
//     }
//     render(){
//         const {number,fixedNumber} = this.state;
//         return(
//             <div>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값 : {fixedNumber}</h2>
//                 <button
//                     onClick={()=>{
//                         this.setState({number: number+1});
//                 }}>
//                 +1
//                 </button>
//             </div>
//         );
//     };
// }
//export default Counter;

//this.setState에 객체대신 함수인자 전달
//this.setState를 사용하여 state값을 업데이트 할때는 상태가 비동기적으로 업데이트 된다.
// class Counter extends Component {
//     state = {
//         number : 0,
//         fixedNumber : 0
//     }
//     render(){
//         const {number,fixedNumber} = this.state;
//         return(
//             <div>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값 : {fixedNumber}</h2>
//                 <button
//                     onClick={()=>{
//                         //만약 onclick내에서 this.setState를 두번 호출하게 될경우에도 버튼을 클릭하여도 값은 하나만 증가
//                         //why?this.setState를 해도 값이 바로 바뀌지 않기 떄문에
//                         //해결책은 this.setState함수를 사용할때 객체대신에 함수를 인자로 넣어주는것
//                         //this.setState({number: number+1});
//                         //this.setState({number: this.state.number+1});
//                         // this.setState((prevState,props)=>{//prevState는 기존 상태, props는 현재 지니고 있는 props를 가리킨다.
//                         //     return {
//                         //         //업데이트 하고 싶은 내용
//                         //     }
//                         // })
//                         this.setState(prevState=>{
//                             return {
//                                 number:prevState.number +1
//                             }
//                         });
//                         //위 코드와 아래 코드는 완전히 똑같은 기능을 한다.
//                         //아래 코드는 함수에서 바로 객체를 반환한다는 뜻
//                         this.setState(prevState=>({
//                             number:prevState.number +1
//                         }));//화살표 함수에서 값을 바로 반환하고 싶다면 코드블록{}을 생략하면된다.
//                         //ex) const sum = (a,b)=>a+b;
//                         //화살표 함수에서 바로 객체를 반환하도록 했기떄문에 ({ })와 같은 형태로 코드가 이루어짐
//                 }}>
//                 +1
//                 </button>
//             </div>
//         );
//     };
// }
// export default Counter;

//this.setState가 끝난 후 특정 작업 실행
//setState를 사용하여 값을 업데이트 한 뒤 특정 작업을 하고 싶을 경우 setState의 두번째 파라미터로 콜백함수를 등록하여 작업을 처리할수 있다.
class Counter extends Component {
    state = {
        number : 0,
        fixedNumber : 0
    }
    render(){
        const {number,fixedNumber} = this.state;
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    onClick={()=>{
                        this.setState({
                            number:number+1
                        },()=>{
                            console.log('방금 setState가 호출되었습니다.');
                            console.log(this.state);
                        });
                }}>
                +1
                </button>
            </div>
        );
    };
}
export default Counter;