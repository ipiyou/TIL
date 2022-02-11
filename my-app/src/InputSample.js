import React,{useState} from "react";

function InputSample() {
    const [Inputs, setInputs] = useState({
        name: '',
        nickname:'',
    });

    const {name , nickname} = Inputs;

    const onChange = (e)  => {
        const { value ,name} = e.target;
        setInputs({
            ...Inputs,
            [name]: value
        });
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
    };
    return (
        <div>
            <input name = "name" placeholder="이름" onChange={onChange} value = {name}/>
            <input name = "nickname" placeholder="닉네임" onChange={onChange} value = {nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name}({nickname})</b>
                </div> 
        </div>
    );
}

export default InputSample;