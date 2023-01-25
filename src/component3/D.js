
const D = () => {

    const {state, action} = useContext(UserContext);
    const input1 = useRef(null);
    const input2 = useRef(null);
    const handleClick = () => {
   
    //contextAPI의 action의 사용
    action.setUser({id:input1.current.value, name: input2.current.value});
    }

    return (
        <>
        <h3>A컴포넌트</h3>
            컨텍스트 안의 값: { state.id } <br />
            컨텍스트 안의 값: { state.name }<br/>

            <div>
                <input type="text" ref={input1}/><br/>
                <input type="text"ref={input2}/><br/>
                <button onClick={handleClick}>컨텍스트 데이터 변경</button>
            </div>
        </>

    )
}

export default D;