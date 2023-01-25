import { Fragment, useState } from "react"
import ColorContext from "../contexts/ContextAPI";


const ColorComponent = () => {
    const [color, setColor] = useState();
    setColor('green');

    return (

        <Fragment>
            {/* 일단 컴포넌트 형태로 가져오기 */}
            <ColorContext.Consumer>
                {/* 사용할 곳: Consumer - 함수의 return구문에 화면을 처리할 내용을 작성함  */}
                {
                    (value) => (
                        <div>
                            ContextAPI의 사용<br />
                            값 : {value.color}
                        </div>
                    )
                }

            </ColorContext.Consumer>
        </Fragment>

    )

}

export default ColorComponent;