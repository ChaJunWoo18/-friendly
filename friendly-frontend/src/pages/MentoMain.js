import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MentoHeader from "../components/layouts/MentoHeader";
import MentoProfile from "./MentoProfile";
import MentoMypage from "./MentoMypage";
import styled from "styled-components";
import MentoPastMentiList from "./MentoPastMentiList";
import MentoNowMentiList from "./MentoNowMentiList";
import MentoCalendar from "./MentoCalendar";
import MentoCertification from "./MentoCertification";

function MentoMain() {
  return (
      <div>
        <Router>
        <MentoHeader />

        <ViewWrapper>
          <ProfileWrapper>
            <MentoProfile />
          </ProfileWrapper>

          <TableWrapper>
          <Routes>
            <Route path="/" element={ <MentoMypage /> } />
            <Route path="/MentoMypage" element={ <MentoMypage /> } />
            <Route path="/MentoPastMentiList" element={ <MentoPastMentiList /> } />
            <Route path="/MentoNowMentiList" element={ <MentoNowMentiList /> } />
            <Route path="/MentoCalendar" element={ <MentoCalendar /> } />
            <Route path="/MentoCertification" element={ <MentoCertification /> } />
          </Routes>
        </TableWrapper>
        </ViewWrapper>
        </Router>
      </div>
  );
}

export default MentoMain;

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

const TableWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 1000px;

  padding-top: 100px;
`;