import { useParams } from "react-router-dom";


const Info = () =>{

  

        const data = {
            1: {name: "홍길동", subject: "리액트라우터"},
            2: {name: "이순신", subject: "리액트props"},
            3: {name: "coding404", subject: "리액트state"},

        };
    
   
    
    /* useParams() */
    let param = useParams();
    // console.log(param); URL주소에 값을 키로 받아준다
    // console.log(param.num);

    const {name, subject} = data[param.num]
    

    return (
        <div>
            <h3>Info 페이지...</h3>

        </div>
    )

}


export default Info;