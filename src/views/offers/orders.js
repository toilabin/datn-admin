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
import { cilFilterSquare } from '@coreui/icons';

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
       <CButtonGroup style={{marginBottom:10}} aria-label="Basic example">
          <CFormInput style={{width:180, marginRight:10}} placeholder="ID" aria-label="First name"/>
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
              <CCol sm={2} style={{marginRight:10}} className="d-none d-md-block">
                <Form.Group>
                  <Form.Control type="date" /></Form.Group>
              </CCol>
              <CFormInput style={{marginRight:10}} placeholder="Price" aria-label="First name"/>
          <CCol style={{marginRight:10}} className="col-md-auto" variant = "outline">
                  <select className="form-select"  aria-label="Default select example">
                      <option selected>Checkout type</option>
                      <option value="1">MOMO</option>
                      <option value="2">VNPAY</option>
                      <option value="3">VISA</option>
                      <option value="4">COD</option>
                  </select>
                  
                  </CCol>
                  <CCol className="col-md-auto">
                    <CButton style={{backgroundColor:"#656565", borderColor:"#656565"}}>
                      <CIcon icon={cilFilterSquare} /> Filter
                    </CButton>
                  </CCol>
                  
          
        </CButtonGroup>
        {/* <CCol className="col-md-auto">
                  <select className="form-select"  aria-label="Default select example">
                      <option selected>Manipulation</option>
                      <option value="1">Branch 1</option>
                      <option value="2">Branch 2</option>
                      <option value="3">Branch 3</option>
                      <option value="4">Branch 4</option>
                  </select>
                  </CCol> */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
        
          <TableRow>
          <StyledTableCell padding="checkbox">
          <Checkbox color='secondary'/>
        </StyledTableCell>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell>Order day</StyledTableCell>
            <StyledTableCell>Checkout type</StyledTableCell>
            <StyledTableCell>Total price</StyledTableCell>
            <StyledTableCell>Detail</StyledTableCell>
            <StyledTableCell>Accept/Decline</StyledTableCell>
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
