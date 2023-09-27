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

function createData(No, Username, StopDate, AccountState) {
  return { No, Username, StopDate, AccountState };
}

const rows = [
  createData('상담사1', '상담자1', '2023.09.23~', '연결 해제'),
  createData('상담사2', '상담자2', '2023.09.24~', '연결 해제'),
  createData('상담사1', '상담자1', '2023.09.25~', '연결 해제'),
  createData('멘토1', '멘티1', '2023.09.26~', '연결 해제'),
  createData('멘토2', '멘티2', '2023.09.27~', '연결 해제'),
];

export default function CustomizedTables() {
  const theme = useTheme(); // 테마 가져오기
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">상담사/멘토</StyledTableCell>
            <StyledTableCell align="center">상담자/멘티</StyledTableCell>
            <StyledTableCell align="center">연결 기간</StyledTableCell>
            <StyledTableCell align="center">연결 관리</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.No}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.No}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Username}</StyledTableCell>
              <StyledTableCell align="center">{row.StopDate}</StyledTableCell>
              <StyledTableCell align="center">{row.AccountState}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}