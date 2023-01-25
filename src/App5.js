import { Fragment, useState } from "react"
import ColorComponent from "./component3/ColorComponent";
import ColorContext from "./contexts/ContextAPI";


const App = () => {


    /*

        p.495
        1. ContextAPI 외부에 선언 createContext() 훅 사용
        2. 자식 컴포넌트 consumer로 데이터를 받기
        3. 부모 컴포넌트 provider 데이터를 전달(변경)
        
    */

    //select 태그를 만들어서 state를 활용해서 color값을 변경

    const [color, setColor] = useState('');

    const handleChange = (e) =>{
        setColor(e.target.value);
    }

    return (

        <ColorContext.Provider value={{color: color}}>
            {/* Provider는 사용할 root 컴포넌트에 선언한다 */}
            {/* <ColorComponent/> */}
        
        <select onChange={handleChange} >
            <option value='yellow'>노랑</option>
            <option value='red'>빨강</option>
            <option value='blue'>파랑</option>
        </select>

        <div>
            {color}
        </div>

        </ColorContext.Provider>

    )
}

export default App;