import React, {useState} from "react";

function Inputs() {
    const [txts, setTexts] = useState({
        name: "",
        email: "",
        tel: ""
    });

    const {name, email, tel} = txts;

    //num, setFunction = useState(초기값)
    
    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        // txts[id] =value; 이런방식으로는 변경이 안됨

        setTexts({...txts, //깊은복사
                [id]:value
        })
    };


    return (
        <div>
            <div><label>이름 : </label>
                <input type="text" id="name" value={name} onChange = {onChange}>

                </input>
            </div>
            <div><label>email: </label>
            <input type="e-mail" id="email" value={email} onChange={onChange}>
            </input>

            </div>
                <div><label>전화번호: </label>
                <input type="number" id="tel" value={tel} onChange={onChange}>
                </input>
            </div>


            <p>name : {name}</p>
            <p>email : {email}</p>
            <p>tel : {tel}</p>
        </div>
    )
}

export default Inputs;