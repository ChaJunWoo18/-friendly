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

function createData(No, Class, State, Username, Date) {
  return { No, Class, State, Username, Date };
}

const rows = [
  createData('1', '멘토링', '매칭 대기', 'ESFP', '2023.09.27'),
  createData('2', '상담', '매칭 대기', 'ESFJ', '2023.09.27'),
  createData('3', '상담', '매칭 대기', 'ESTJ', '2023.09.27'),
  createData('4', '멘토링', '매칭 대기', 'ESTP', '2023.09.28'),
  createData('5', '멘토링', '매칭 대기', 'ENFP', '2023.09.28'),
];

export default function CustomizedTables() {
  const theme = useTheme(); // 테마 가져오기
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">No.</StyledTableCell>
            <StyledTableCell align="center">분류</StyledTableCell>
            <StyledTableCell align="center">신청상태</StyledTableCell>
            <StyledTableCell align="center">신청자</StyledTableCell>
            <StyledTableCell align="center">신청날짜</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.No}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.No}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Class}</StyledTableCell>
              <StyledTableCell align="center">{row.State}</StyledTableCell>
              <StyledTableCell align="center">{row.Username}</StyledTableCell>
              <StyledTableCell align="center">{row.Date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}