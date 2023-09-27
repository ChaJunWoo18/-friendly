import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.light, // 연두색 배경
    color: theme.palette.common.white,
    border: '1px solid rgba(255, 255, 255, 0.12)', // 테두리 설정
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: '1px solid rgba(0, 0, 0, 0.12)', // 테두리 설정
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

}));

function createData(State, Detail, Username, Date) {
  return { State, Detail, Username, Date };
}

const rows = [
  createData('답변 대기', '문의합니다1', '상담자1', '2023.09.23'),
  createData('답변 대기', '문의합니다2', '상담자2', '2023.09.24'),
  createData('답변 대기', '문의합니다3', '상담자3', '2023.09.25'),
  createData('답변 대기', '문의합니다4', '멘티1', '2023.09.26'),
  createData('답변 대기', '문의합니다5', '멘티2', '2023.09.27'),
];

export default function CustomizedTables() {
  const theme = useTheme(); // 테마 가져오기
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">상태</StyledTableCell>
            <StyledTableCell align="center">내용</StyledTableCell>
            <StyledTableCell align="center">작성자</StyledTableCell>
            <StyledTableCell align="center">작성 날짜</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.State}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.State}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Detail}</StyledTableCell>
              <StyledTableCell align="center">{row.Username}</StyledTableCell>
              <StyledTableCell align="center">{row.Date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}