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
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/blank.jpg'
import avatar2 from 'src/assets/images/avatars/blank.jpg'
import avatar3 from 'src/assets/images/avatars/blank.jpg'
import avatar4 from 'src/assets/images/avatars/blank.jpg'
import avatar5 from 'src/assets/images/avatars/blank.jpg'
import avatar6 from 'src/assets/images/avatars/blank.jpg'
import { Modal, Button, Table } from 'react-bootstrap'

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
        name: 'Thái Đình Khả',
        new: true,
        registered: 'Jan 1, 2021',
      },
      username: { name: 'Kha123USA', flag: cifUs },
      schedule: '2,4,6',
      payment: { name: 'Manage', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Thái Đình Khả',
        new: false,
        registered: 'Jan 1, 2021',
      },
      username: { name: 'Kha123Brazil', flag: cifBr },
      schedule: '2,4,6',
      payment: { name: 'Manage', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Thái Đình Khả', new: true, registered: 'Jan 1, 2021' },
      username: { name: 'Kha123India', flag: cifIn },
      schedule: '2,4,6',
      payment: { name: 'Manage', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Thái Đình Khả', new: true, registered: 'Jan 1, 2021' },
      username: { name: 'Kha123France', flag: cifFr },
      schedule: '2,4,6',
      payment: { name: 'Sales', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Thái Đình Khả',
        new: true,
        registered: 'Jan 1, 2021',
      },
      username: { name: 'Kha123Spain', flag: cifEs },
      schedule: '2,4,6',
      payment: { name: 'Sales', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Thái Đình Khả',
        new: true,
        registered: 'Jan 1, 2021',
      },
      username: { name: 'Kha123Poland', flag: cifPl },
      schedule: '2,4,6',
      payment: { name: 'Sales', icon: cibCcAmex },
      activity: 'Last week',
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
            <Modal.Title>Schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>9h - 12h</th>
                  <th>13h - 16h</th>
                  <th>17h - 21h</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mon</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Tue</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Wed</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Thu</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Fri</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Sat</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>
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
            <CCardHeader>Employees</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Staff&apos;s Name</CTableHeaderCell>
                    <CTableHeaderCell>UserName</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Schedule</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Position</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Salary</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Edit</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>{item.username.name}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div onClick={() => setModalShow(true)} style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}}>{item.schedule}</div>
                        {/* <CProgress thin color={item.usage.color} value={item.usage.value} /> */}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{item.payment.name}</strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>300$</strong>
                      </CTableDataCell>
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
