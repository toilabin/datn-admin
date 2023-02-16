import React from 'react'
import {
  CButton,
  CButtonGroup,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
  CButtonToolbar,
} from '@coreui/react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import CIcon from '@coreui/icons-react';
import { DocsExample } from 'src/components'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Navs = () => {
  return (
    <CRow>
      <CButtonGroup aria-label="Basic example">
          <CButton variant="secondary">All</CButton>
          <CButton variant="secondary">On promotion</CButton>
          <CButton variant="secondary">Coming promotion</CButton>
          <CButton variant="secondary">Not activated</CButton>
          <CButton variant="secondary">Stop promotion</CButton>
        </CButtonGroup>
       <CButtonGroup aria-label="Basic example">
          <CButton variant = "outline">ID</CButton>
          <CButton variant = "outline">Since</CButton>
          <CButton variant = "outline">To date</CButton>
          <CButton variant = "outline">Program</CButton>
          <CCol className="col-md-auto" variant = "outline">
                  <select className="form-select"  aria-label="Default select example">
                      <option selected>Status</option>
                      <option value="1">Branch 1</option>
                      <option value="2">Branch 2</option>
                      <option value="3">Branch 3</option>
                      <option value="4">Branch 4</option>
                  </select>
                  
                  </CCol>
                  <CButton variant = "outline"> Filter</CButton>
          
        </CButtonGroup>
        <CCol className="col-md-auto">
                  <select className="form-select"  aria-label="Default select example">
                      <option selected>Add promotion</option>
                      <option value="1">Branch 1</option>
                      <option value="2">Branch 2</option>
                      <option value="3">Branch 3</option>
                      <option value="4">Branch 4</option>
                  </select>
                  </CCol>
        <CCol className="col-md-auto">
                  <select className="form-select"  aria-label="Default select example">
                      <option selected>Manipulation</option>
                      <option value="1">Branch 1</option>
                      <option value="2">Branch 2</option>
                      <option value="3">Branch 3</option>
                      <option value="4">Branch 4</option>
                  </select>
                  </CCol>
      <CCol className="col-md-auto"> <CButton  variant="contained">  Discount setting</CButton></CCol>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
        
          <TableRow>
          <StyledTableCell padding="checkbox">
          <Checkbox color='secondary'/>
        </StyledTableCell>
            <StyledTableCell>Program</StyledTableCell>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Rate</StyledTableCell>
            <StyledTableCell>Duration</StyledTableCell>
            <StyledTableCell>Creator</StyledTableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
            
            <StyledTableRow>
            <Checkbox/>
              <StyledTableCell component="th" scope="row">
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              
            </StyledTableRow>

            <StyledTableRow>
            <Checkbox/>
              <StyledTableCell component="th" scope="row">
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          
            <StyledTableRow>
            <Checkbox/>
              <StyledTableCell component="th" scope="row">
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </CRow>
    
  )
}

export default Navs
