import { Route, Routes } from "react-router-dom";
import Board from "./component/Board";
import BoardContent from "./component/BoardContent";
import Home from "./component/Home";
import Info from "./component/Info";
import MyPage from "./component/MyPage";
import User from "./component/User";
import Header from "./layout/Header";


function App() {

  /* 
   책 403페이지
   
     <라우터 적용방법>
      1. index.js에서 브라우저 라우터로 app을 감싸준다
      2. 각각의 컴포넌트 만든다
 
       Link컴포넌트
       - a태그를 대체한다
       - to 속성에 "라우터 주소" 적어서 이동하면 된다
 
       쿼리스트링 ? 키 = 값
       - useLocation()
       - useSearchParams()
 
       URL 파라미터
       - 라우터를 설정 /경로:값
       - useParams() 값을 받음
   */

  return (

    <Routes>
      {/* 중첩라우터 - 헤더부분처리 (Header에서 Outlet컴포넌트 표기) */}
      <Route element={<Header />}>
        < Route path="/" element={<Home />} />
        < Route path="/user" element={<User />} />  {/* 쿼리스트링 */}
        < Route path="/info/:num" element={<Info />} /> {/* URL파라미터 */}
      </Route>


      {/* 각각 다른 화면이 보임! */}
      {/* <Route path="/board" element={<Board/>}/>
        <Route path="/board/:num" element={<BoardContent/>}/> */}

      {/* 중첩 라우터 - 공통부분처리 ( Board에 가서 Outlet 컴포넌트 표기 ) */}
      < Route path="/board" element={<Board />} > {/* 공통이 되는 부분 */}
        < Route path=":num" element={<BoardContent />} />
      </Route>

        {/* navigate컴포넌트 */}
        <Route path="/mypage" element={<MyPage/>}/>



    </Routes>

  )
}

export default App;
