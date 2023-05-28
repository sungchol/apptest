import React, {useState} from "react";

function Input() {
    const [txt, setText] = useState('');
    //num, setFunction = useState(초기값)
    
    const onChange = (e) => {
        setText(e.target.value)
    };


    return (
        <div>
            <input type="text" value={txt} onChange={onChange}></input>
            <br />
            <p>{txt}</p>
        </div>
    )
}

export default Input;