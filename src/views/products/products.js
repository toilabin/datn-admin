import React, { useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilPencil,
  cilTrash,
  cilObjectGroup,
  cilLibraryAdd,
  cilFilterSquare,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/blank.jpg'
import avatar2 from 'src/assets/images/avatars/blank.jpg'
import avatar3 from 'src/assets/images/avatars/blank.jpg'
import avatar4 from 'src/assets/images/avatars/blank.jpg'
import avatar5 from 'src/assets/images/avatars/blank.jpg'
import avatar6 from 'src/assets/images/avatars/blank.jpg'
import { Modal, Button, Form, Table } from 'react-bootstrap'
import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Navs = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const [modalShow, setModalShow] = useState(false);

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Watch 1',
        new: true,
        registered: 'Jan 1, 2021',
      },
      id: '123456789',
      cost: '250$',
      quan: '10',
      price: '300$',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Watch 2',
        new: false,
        registered: 'Jan 1, 2021',
      },
      id: '123456789',
      cost: '250$',
      quan: '20',
      price: '200$',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Watch 3', new: true, registered: 'Jan 1, 2021' },
      id: '123456789',
      cost: '250$',
      quan: '30',
      price: '300$',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Watch 4', new: true, registered: 'Jan 1, 2021' },
      id: '123456789',
      cost: '250$',
      quan: '40',
      price: '400$',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Watch 5',
        new: true,
        registered: 'Jan 1, 2021',
      },
      id: '123456789',
      cost: '250$',
      quan: '50',
      price: '500$',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Watch 6',
        new: true,
        registered: 'Jan 1, 2021',
      },
      id: '123456789',
      cost: '250$',
      quan: '60',
      price: '300$',
    },
  ]
  return (
    <CRow>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add new product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Product name</Form.Label>
                <Form.Control placeholder="Enter product name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Product price</Form.Label>
                <Form.Control placeholder="Enter product price" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control placeholder="Enter product quantity" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file"/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Create new product
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalShow(false)}>
              Close
            </Button>
            <Button variant="primary">Accept</Button>
          </Modal.Footer>
        </Modal>

        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
                <CRow>
                    <CCol className='col-md-auto'>
                        {/* Branch dropdown button */}
                        <CRow>
                        <CCol className="col-md-auto">
                        <select className="form-select" style={{width: '120px'}} aria-label="Default select example">
                            <option selected>All Branch</option>
                            <option value="1">Branch 1</option>
                            <option value="2">Branch 2</option>
                            <option value="3">Branch 3</option>
                            <option value="4">Branch 4</option>
                        </select>
                        </CCol>
                        <CCol className="col-md-auto">
                        <select className="form-select" style={{width: '140px'}} aria-label="Default select example">
                            <option selected>All Products</option>
                            <option value="1">Rings</option>
                            <option value="2">Necklaces</option>
                            <option value="3">Watches</option>
                            <option value="4">Handbags</option>
                        </select>
                        </CCol>
                        <CCol className="col-md-auto">
                            <CButton onClick={() => setModalShow(true)} style={{backgroundColor:"#656565", borderColor:"#656565"}}>
                                <CIcon icon={cilLibraryAdd} /> New Product
                            </CButton>
                        </CCol>
                        </CRow>
                    </CCol>
                    <CCol></CCol>
                    <CCol className='col-md-auto'>
                        <CRow>
                            <CCol className='col-md-auto'>
                                <CFormInput style={{width:120}} placeholder="Name" aria-label="First name"/>
                            </CCol>
                            <CCol className='col-md-auto'>
                                <CFormInput style={{width:120}} placeholder="Id" aria-label="Last name"/>
                            </CCol>
                            <CCol className="col-md-auto">
                                <CButton style={{backgroundColor:"#656565", borderColor:"#656565"}}>
                                    <CIcon icon={cilFilterSquare} /> Filter
                                </CButton>
                            </CCol>
                        </CRow>
                    </CCol>
                </CRow>
                </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>ID</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">In Stock</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Cost Price</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Sell Price</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Edit</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                      </CTableDataCell>
                      <CTableDataCell>{item.id}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">{item.quan}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">{item.cost}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">{item.price}</CTableDataCell>
                      <CTableDataCell className="text-center">
                          <CIcon style={{color:"#1ab6d9", cursor: 'pointer', marginRight:'10px'}} icon={cilPencil} />
                          <CIcon style={{color:"red", cursor: 'pointer'}} icon={cilTrash} />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    
  )
}

export default Navs
