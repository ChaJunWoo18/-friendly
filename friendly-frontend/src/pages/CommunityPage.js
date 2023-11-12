import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagerHeader from "../components/layouts/ManagerHeader";
import CommunityCategory from "./CommunityCategory";
import Community_mentoring from "./Community_mentoring";
import Community_free from "./Community_free";
import Community_location from "./Community_location";
import Community_detail from "./Community_detail";
import styled from "styled-components";

function CommunityPage() {
  return (
      <div>
        <Router>
            <div>
                <ManagerHeader />

                <ViewWrapper>
                <ProfileWrapper>
                    <CommunityCategory />
                </ProfileWrapper>

                <TableWrapper>
                    <Routes>
                    <Route path="/Community_free" element={<Community_free />} />
                    <Route path="/Community_location" element={<Community_location />} />
                    <Route path="/Community_mentoring" element={<Community_mentoring />} />
                    <Route path="/Community_detail" element={<Community_detail />} />
                    </Routes>
                </TableWrapper>
                </ViewWrapper>
            </div>
        </Router>
      </div>
  );
}

export default CommunityPage;

const ProfileWrapper = styled.div`
  width: 380px;
  height: 800px;
  margin-top: 200px;
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