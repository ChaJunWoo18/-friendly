import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { createData, rows } from "./ManagementQnAData";
import { Container } from "react-bootstrap";
import styled from "styled-components";

export default function Community_write() {
  // const { State } = useParams(); // URL에서 No 매개변수를 가져옴
  const [title, setTitle] = useState(""); // 상태를 통해 제목 관리
  const [content, setContent] = useState(""); // 상태를 통해 내용 관리

  // // 선택한 No에 해당하는 데이터 찾기
  // const selectedRow = rows.find((row) => row.State === State);

  // // 선택한 데이터가 없으면 null 반환
  // if (!selectedRow) {
  //   return null;
  // }

  return (
    <div>
      {/* <Container key={selectedRow.State}> */}
        <TitleNoWrapper>아 시험기간인데 왤케 공부하기 싫지</TitleNoWrapper>
        <TitleWrapper>
          <TitleDateWrapper>작성 날짜 : XXXX.XX.XX</TitleDateWrapper>
          <TitleSingoWrapper>작성자 : 이승후 님 </TitleSingoWrapper>
        </TitleWrapper>

        <ContentTitleWrapper>
          제목           
          <div style={{ marginBottom: '10px' }}>
          <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          style={{ width: '700px' }}
        />
        </div>

          <br /><br /><br />
          내용
          <br />
          <AnswerWrapper>
          <TextField
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline
          rows={8}
          fullWidth
          variant="outlined"
          style={{ width: '1000px' }}
        />
          </AnswerWrapper>
        </ContentTitleWrapper>
      {/* </Container> */}
    </div>
  );
}

const TitleNoWrapper = styled.div`
  font-size: 30px;
  padding-bottom: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 3px solid green;
  padding-bottom: 10px;
`;

const TitleDateWrapper = styled.div`
  padding-right: 700px;
`;

const TitleSingoWrapper = styled.div``;

const AnswerWrapper = styled.div`
  font-size: 25px;
  padding-top: 30px;
`;

const ContentTitleWrapper = styled.div`
  font-size: 25px;
  padding-top: 50px;
`;

const DetailWrapper = styled.div`
  border: 1px solid green;
  font-size: 15px;
  padding: 10px;

  width: 1000px;
  height: 300px;
`;

const AnswerDetailWrapper = styled.div`
  border: 1px solid green;
  font-size: 15px;
  padding-top: 100px;

  width: 1000px;
  height: 20px;
`;
