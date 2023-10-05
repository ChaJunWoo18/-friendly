import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagerHeader from "../components/layouts/ManagerHeader";
import ManagerProfile from "./ManagerProfile";
import ManagementMatch from "./ManagementMatch";
import ManagementChat from "./ManagementChat";
import ManagementUserList from "./MangementUserList";
import ManagementConnect from "./ManagementConnect";
import ManagementQnA from "./ManagementQnA";
import styled from "styled-components";

function ManagerMain() {
  return (
    <Router>
      <div>
        <ManagerHeader />

        <ViewWrapper>
          <ProfileWrapper>
            <ManagerProfile />
          </ProfileWrapper>

        <TableWrapper>
          <Routes>
            <Route path="/ManagementMatch" element= {<ManagementMatch />} />
            <Route path="/ManagementChat" element={<ManagementChat />} />
            <Route path="/ManagementUserList" element={<ManagementUserList />} />
            <Route path="/ManagementConnect" element={<ManagementConnect />} />
            <Route path="/ManagementQnA" element={<ManagementQnA />} />
            <Route path="/" element={ <ManagementMatch /> } />
          </Routes>
        </TableWrapper>
        </ViewWrapper>
      </div>
    </Router>
  );
}

export default ManagerMain;

const ProfileWrapper = styled.div`
  width: 380px;
  height: 800px;
  margin-top: 70px;
`;

const ViewWrapper = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: 100px;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 1000px;

  padding-top: 100px;
`;