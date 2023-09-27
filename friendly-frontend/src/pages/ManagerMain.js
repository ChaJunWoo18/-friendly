import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container, { containerClasses } from "@mui/material/Container";
import Button from "@mui/material/Button";
import styled from "styled-components";
import ManagerProfile from "./ManagerProfile";
import ManagerHeader from "../components/layouts/ManagerHeader";
import ManagerCategory from "./ManagerCategory";
import ManagementMatch from "./ManagementMatch";
import ManagementChat from "./ManagementChat";
import ManagementUserList from './MangementUserList';
import ManagementConnect from './ManagementConnect';
import ManagementQnA from './ManagementQnA';

function ManagerMain() {
  return (
    <div>
      <ManagerHeader />

      <ViewWrapper>
      <ProfileWrapper>
        <ManagerProfile />
      </ProfileWrapper>

      {/* <ManagementMatch /> */} 
      {/* <ManagementChat/>/ */}
      {/* <ManagementUserList/> */}
      {/* <ManagementConnect/> */}
      <ManagementQnA/>


      </ViewWrapper>
      
    </div>
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