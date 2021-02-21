import React,{Component} from 'react';
import { useState } from 'react/cjs/react.development';
const EventPracticeClass = ()=>{
    /*
    const [username,setUsername] = useState('');
    const [message,setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    //onchange함수 두개를 따로 만들어 주었다.
    const onClick = () =>{
        alert(username + ': '+message);
        setUsername('');
        setMessage('')
    }
    const onKeyPress = e =>{
        if(e.key === 'Enter'){
            onClick();
        }
    }
    */
    const [form,setForm] = useState({
        username : '',
        message : ''
    });
    const {username,message} = form;
    const onChange = e =>{
        
        const nextForm = {
            //기존 form내용을 이자리에 복사
            
            [e.target.name] : e.target.value
        };
        console.log(form);
        setForm(nextForm);
    }
    const onClick = () =>{
        alert(username + ': '+message);
        setForm({
            username : '',
            message : ''
        })
    }
    const onKeyPress = e =>{
        if(e.key === 'Enter'){            
            onClick();
        }
    }
    return (
        <div>
            <input
                    type='text'
                    name='username'
                    placeholder='사용자명'
                    value={username}
                    onChange={onChange}
            />
                <input
                    type='text'
                    name='message'
                    placeholder='아무거나 입력해 주세요'
                    value={message}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
            />
            <button
                onClick={onClick}>
                확인
            </button>
        </div>
    );
}
export default EventPracticeClass;