import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";

const ManageMatching = () => {
  // ManageMatching 클릭 이벤트 핸들러 구현
  // 클릭 시 해당 링크로 이동하도록 할 수 있습니다.
};

const ManageChat = () => {
  // ManageChat 클릭 이벤트 핸들러 구현
};

const ManageMember = () => {
  // ManageMember 클릭 이벤트 핸들러 구현
};

const ManageConnect = () => {
  // ManageConnect 클릭 이벤트 핸들러 구현
};

const QnA = () => {
  // QnA 클릭 이벤트 핸들러 구현
};

function ManagerHeader(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <Containers>
        <ImageWrapper>
          <img
            width="80"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </ImageWrapper>

        <LogWrapper>
          <SvgIcon
            {...props}
            sx={{
              fontSize: 40,
              border: 2,
              borderRadius: 3,
              borderColor: "#D9D9D9",
            }}
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        </LogWrapper>
      </Containers>

      <BoxWrapper>
        <CategoryWrapper>
          {/* 각 항목을 Button 요소로 래핑하고 클릭 이벤트 핸들러를 연결 */}
          <Button onClick={ManageMatching} style={{ color: 'black' }}>매칭 신청 관리</Button>
          <Button onClick={ManageChat} style={{ color: 'black' }}>채팅 관리</Button>
          <Button onClick={ManageMember} style={{ color: 'black' }}>회원 목록 관리</Button>
          <Button onClick={ManageConnect} style={{ color: 'black' }}>회원 연결 관리</Button>
          <Button onClick={QnA} style={{ color: 'black' }}>문의사항</Button>
        </CategoryWrapper>
      </BoxWrapper>
    </div>
  );
}
export default ManagerHeader;

const Containers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
  border-bottom-width: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
`;

const LogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: flex-end;
  margin-right: 24px;
  size: 100%;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
  width: 100%;
  border-bottom-width: 10px;
  border-color: black;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  background-color: white;
  //height: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid #DFEEDA;
  //border-bottom-width: 10px;
  border-color: #DFEEDA;
`;