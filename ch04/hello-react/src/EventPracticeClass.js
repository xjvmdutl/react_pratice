import React,{Component} from 'react';

class EventPracticeClass extends Component {
    state ={
        message:'',
        username :''
    }
    //임의의 메소드 만들기 : 함수를 미리 준비하여 전달하는 방법(성능은 비슷하지만 가독성이 좋다)
    /*
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({
            message : e.target.value
        });
    }
    handleClick() {
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }
    
    */
    //메소드 바인딩은 생성자 메소드에서 하는것이 정석이다.(단, 새 메소드를 만들떄마다 constructor를 수정해야 하는 단점이 존재)
    //->따라서 바벨의 transrorm-class-properties 문법을 사용하여 화살표 함수 형태로 정의해서 간략화 할수 있다.
    /*
    handleChange= (e) =>{
        this.setState({
            message : e.target.value
        });
    }
    handleClick = ()=>{
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }
    */
   handleChange= (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
        //객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가르키는 실제값이 key값으로 사용된다.
        
    }
    handleClick = ()=>{
        alert(this.state.username + ': '+this.state.message);
        this.setState({
            username : '',
            message : ''
        });
    }
    //여러개의 input일 경우
    //event객체를 활용 => e.target.name값을 활용한다. 
    //onChange에서의 e.target.name은 해당 인풋의 name을 가리킨다.
    
    //onKeyPress 이벤트 핸들링
    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                {/**
                 * onchange 이벤트 설정 
                 */}
                 
                <input
                    type='text'
                    name='message'
                    placeholder='아무거나 입력해 주세요'
                    onChange={
                        (e) => {
                            //console.log(e);
                            //해당 콘솔에 이벤트를 출력(e= SyntheticEvent로 웹브라우저의 네이티브 이벤트를 감싸는 객체(네이티브 이벤트와 인터페이스가 같으므로 순수 자바스크립트에서 HTML이벤트를 다룰떄와 똑같이 사용))
                            //SyntheticEvent는 네이티브 이벤트와 달리 이벤트가끝나고 나면 이벤트가 초기화 되어 정보를 참조할수 없다.
                            //ex)0.5초뒤에 더이상 e객체 참조 불가능->비동기적으로 객체참조 하고 싶을 경우 e.persist() 함수를 호출해야 한다.
                            //console.log(e.target.value);//바뀌는 값을 콘솔에 출력
                        }
                    }               
                />
                <br/>
                <input
                     type='text'
                     name='message'
                     placeholder='아무거나 입력해 주세요'
                     value={this.state.message}
                     onChange={//이벤트 핸들링 함수 내부에서 this.setState메소드를 호출하여 state업데이트
                         (e)=>{
                            this.setState({
                                message:e.target.value
                            })
                        }
                    }
                />
                <button
                    onClick={
                        ()=>{//버튼 클릭시 현재 commnet값을 출력후 comment 공백으로 설정
                            alert(this.state.message);
                            this.setState({
                                message : ''
                            });
                        }
                    }>
                    확인
                </button>
                <br/>
                <input
                     type='text'
                     name='message'
                     placeholder='아무거나 입력해 주세요'
                     value={this.state.message}
                     onChange={this.handleChange}
                     //함수가 호출될떄 this는 호출부에 따라 결정되므로 클래스의 임의 메소드가 특정 HTML요소와 이벤트로 등록되는 과정에서 메소드와 this관계가 끊어져 버린다.
                     //따라서 임의 메소드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메소드를 this와 바인딩 하는 작업이 필요하다.
                     //현재는 constructor함수에서 함수를 바인딩하는 작업을 진행한다.
                />
                <button
                    onClick={this.handleClick}>
                    확인
                </button>
                
                <br/>
                <input
                     type='text'
                     name='username'
                     placeholder='사용자명'
                     value={this.state.username}
                     onChange={this.handleChange}
                />
                 <input
                     type='text'
                     name='message'
                     placeholder='아무거나 입력해 주세요'
                     value={this.state.message}
                     onChange={this.handleChange}
                     onKeyPress={this.handleKeyPress}
                />
                <button
                    onClick={this.handleClick}>
                    확인
                </button>
                
            </div>
        );
    };
    
};
export default EventPracticeClass;