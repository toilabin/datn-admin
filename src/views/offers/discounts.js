import React from 'react'
import { Form} from 'react-bootstrap'
import {
  CButton,
  CButtonGroup,
  CRow,
  CCol,
  CFormInput,
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
import { cilLibrary } from '@coreui/icons';

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
      <CButtonGroup aria-label="Basic example" style={{marginBottom:10}}>
          <CButton variant="secondary">All</CButton>
          <CButton variant="secondary">On promotion</CButton>
          <CButton variant="secondary">Coming promotion</CButton>
          <CButton variant="secondary">Not activated</CButton>
          <CButton variant="secondary">Stop promotion</CButton>
        </CButtonGroup>
       <CButtonGroup style={{marginBottom:10}} aria-label="Basic example">
          <CFormInput style={{width:200}} placeholder="ID" aria-label="First name"/>
            <CCol sm={1} className="gy-2" >
                <p style={{marginLeft:"30px"}}>From</p>
              </CCol>
              <CCol sm={2} className="d-none d-md-block">
                <Form.Group>
                  <Form.Control type="date" /></Form.Group>
              </CCol>
              <CCol sm={1} className="gy-2" >
                <p style={{marginLeft:"50px"}}>To</p>
              </CCol>
              <CCol sm={2} className="d-none d-md-block">
                <Form.Group>
                  <Form.Control type="date" /></Form.Group>
              </CCol>
          <CFormInput style={{marginLeft:10, marginRight:10, width:200}} placeholder="Program" aria-label="First name"/>
          <CCol className="col-md-auto" variant = "outline" style={{marginLeft:10, marginRight:10}}>
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
        <CButton style={{backgroundColor:"#656565", borderColor:"#656565"}}>
                                <CIcon icon={cilLibrary} /> Import by Excel file
                            </CButton>
                  </CCol>
        <CCol className="col-md-auto">
                  <select className="form-select"  aria-label="Default select example">
                      <option selected>Manipulation</option>
                      <option value="1">Detail</option>
                      <option value="2">Edit</option>
                      <option value="3">Delete</option>
                  </select>
                  </CCol>
      <CCol style={{marginBottom:"10px"}} className="col-md-auto"> <CButton  variant="contained">  Discount setting</CButton></CCol>
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
