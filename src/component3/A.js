import { useContext, useRef } from "react";
import UserContext from "../contexts/ContextAPI2";




const A = () => {
    

    //초기값을 구조분해 할당
    const {state, action} = useContext(UserContext);
    const input1 = useRef(null);
    const input2 = useRef(null);
    const handleClick = () => {
        // console.log(input1.current) 👉 사용자의 입력값
        // console.log(input2.current)

        //contextAPI의 action의 사용
        action.setUser({id:input1.current.value, name: input2.current.value});
    }
    
    return (
       
        <div>
            <h3>A컴포넌트</h3>
            컨텍스트 안의 값 : {state.id}<br/>
            컨텍스트 안의 값 : {state.name}<br/>

            <div>
                <input type="text" ref={input1}/><br/>
                <input type="text"ref={input2}/><br/>
                <button onClick={handleClick}>컨텍스트 데이터 변경</button>
            </div>

        </div>



        /*1st
        <UserConsumer>
            {
                (value) => (
                    <div>
                        <h3>A컴포넌트</h3>
                        컨텍스트 안의 값 : {value.state.id}<br/>
                        컨텍스트 안의 값 : {value.state.name}<br/>
                    </div>
                )
            }
        </UserConsumer>
        */
    )
}

export default A;