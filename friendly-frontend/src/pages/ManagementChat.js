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

function createData(No, Declaration, Singo, PiSingo) {
  return { No, Declaration, Singo, PiSingo };
}

const rows = [
  createData('1', '너무 불친절합니다.', '상담자1', '상담사1'),
  createData('2', '연락을 너무 받지 않습니다', '상담자2', '상담사2'),
  createData('3', '이상한 사람인 것 같습니다.', '상담자1', '상담사1'),
  createData('4', '욕설을 너무 많이 사용합니다.', '멘티1', '멘토1'),
  createData('5', '너무 불친절합니다.', '멘토2', '멘티1'),
];

export default function CustomizedTables() {
  const theme = useTheme(); // 테마 가져오기
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">No.</StyledTableCell>
            <StyledTableCell align="center">신고 내용</StyledTableCell>
            <StyledTableCell align="center">신고인</StyledTableCell>
            <StyledTableCell align="center">피신고인</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.No}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.No}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Declaration}</StyledTableCell>
              <StyledTableCell align="center">{row.Singo}</StyledTableCell>
              <StyledTableCell align="center">{row.PiSingo}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}