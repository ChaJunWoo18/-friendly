import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/banner";
import Header from "./components/layouts/Header";
import Category from "./components/category";
import Mainbanner from "./components/Mainbanner";
import Notice from "./components/notice";
import MemberList from "./pages/MemberList";
import ManagerMain from "./pages/ManagerMain";
import { Container } from "@mui/material";
import Main from "./pages/Main";
import styled from "styled-components";
import ManagementMatch from "../src/pages/ManagementMatch";
import ManagementChat from "../src/pages/ManagementChat";
import ManagementUserList from "../src/pages/ManagementUserList";
import ManagementConnect from "../src/pages/ManagementConnect";
import ManagementQnA from "../src/pages/ManagementQnA";
import ManagementMatchDetail from "../src/pages/ManagementMatchDetail";
import ManagementChatDetail from "../src/pages/ManagementChatDetail";
import ManagementUserListDetail from "../src/pages/ManagementUserListDetail";
import ManagementConnectDetail from "../src/pages/ManagementConnectDetail";
import ManagementQnADetail from "../src/pages/ManagementQnADetail";
import MentoHeader from "./components/layouts/MentoHeader";
import MentoMain from "./pages/MentoMain";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Main />  } />
            <Route path="/ManagerMain/*" element={ <ManagerMain />  } />
            <Route path="/ManagementMatch" element= {<ManagementMatch />} />
            <Route pasth="/ManagementChat" element={<ManagementChat />} />
            <Route path="/ManagementUserList" element={<ManagementUserList />} />
            <Route path="/ManagementConnect" element={<ManagementConnect />} />
            <Route path="/ManagementQnA" element={<ManagementQnA />} />
            <Route path="/ManagementMatchDetail/:No" element={<ManagementMatchDetail />} />
            <Route path="/ManagementChatDetail/:No" element={<ManagementChatDetail />} />
            <Route path="/ManagementUserListDetail/:No" element={<ManagementUserListDetail />} />
            <Route path="/ManagementConnectDetail/:No" element={<ManagementConnectDetail />} />
            <Route path="/ManagementQnADetail/:State" element={<ManagementQnADetail />} />
          </Routes>
    </BrowserRouter> */}
    <MentoMain></MentoMain>
    </div>
  );
}

export default App;

const ScreenWrapper = styled.div`
  margin-left: 260px;
  margin-right: 260px;
`;

const ProfileWrapper = styled.div`
  width: 380px;
  height: 800px;
  margin-top: 70px;
`;

const ViewWrapper = styled.div`
  display: flex;  
  flex-direction: row;

  padding-top: 10px;
`;