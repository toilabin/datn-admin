import React from 'react'
import { Form, Nav, Dropdown} from 'react-bootstrap'
import { CCard, CButton, CButtonGroup, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import { DocsCallout } from 'src/components'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

  const customRanges = {
    Today: [new Date(), new Date()],
    Yesterday: [
      new Date(new Date().setDate(new Date().getDate() - 1)),
      new Date(new Date().setDate(new Date().getDate() - 1)),
    ],
    'Last 7 Days': [
      new Date(new Date().setDate(new Date().getDate() - 6)),
      new Date(new Date()),
    ],
    'Last 30 Days': [
      new Date(new Date().setDate(new Date().getDate() - 29)),
      new Date(new Date()),
    ],
    'This Month': [
      new Date(new Date().setDate(1)),
      new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
    ],
    'Last Month': [
      new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      new Date(new Date().getFullYear(), new Date().getMonth(), 0),
    ],
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol sm={6}>
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
                  <select className="form-select" style={{width: '165px'}} aria-label="Default select example">
                      <option selected>Total Revenue</option>
                      <option value="1">Products Sold</option>
                      <option value="2">Customers Number</option>
                      <option value="3">Total Customers</option>
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
                {/* Revenue dropdown button */}
                </CRow>
                {/* <h4 id="traffic" className="card-title mb-0">
                  Products Sold
                </h4> */}
                {/* <div className="small text-medium-emphasis">January - July 2021</div> */}
              </CCol>
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
            </CRow>
            <CChartLine
              style={{ height: '300px', marginTop: '40px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                    borderColor: getStyle('--cui-info'),
                    pointHoverBackgroundColor: getStyle('--cui-info'),
                    borderWidth: 2,
                    data: [
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                    ],
                    fill: true,
                  },
                  // {
                  //   label: 'My Second dataset',
                  //   backgroundColor: 'transparent',
                  //   borderColor: getStyle('--cui-success'),
                  //   pointHoverBackgroundColor: getStyle('--cui-success'),
                  //   borderWidth: 2,
                  //   data: [
                  //     random(50, 200),
                  //     random(50, 200),
                  //     random(50, 200),
                  //     random(50, 200),
                  //     random(50, 200),
                  //     random(50, 200),
                  //     random(50, 200),
                  //     random(50, 200),
                  //     random(50, 200),
                  //     random(50, 200),
                  //     random(50, 200),
                  //     random(50, 200),
                  //   ],
                  // },
                  // {
                  //   label: 'My Third dataset',
                  //   backgroundColor: 'transparent',
                  //   borderColor: getStyle('--cui-danger'),
                  //   pointHoverBackgroundColor: getStyle('--cui-danger'),
                  //   borderWidth: 1,
                  //   borderDash: [8, 5],
                  //   data: [65, 65, 65, 65, 65, 65, 65, 80, 80, 80, 90, 46],
                  // },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      drawOnChartArea: false,
                    },
                  },
                  y: {
                    ticks: {
                      beginAtZero: true,
                      maxTicksLimit: 5,
                      stepSize: Math.ceil(250 / 5),
                      max: 250,
                    },
                  },
                },
                elements: {
                  line: {
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                  },
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={8}>
        <CCard className="mb-4">
          <CCardHeader>Bar Chart</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December'],
                datasets: [
                  {
                    label: 'Products sold',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 50, 60, 70],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={4}>
        <CCard className="mb-4">
          <CCardHeader>Pie Chart</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['January - March', 'April - June', 'July - September', 'October - December'],
                datasets: [
                  {
                    data: [30, 50, 40, 35],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#5F8755'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#5F8755'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Line Chart</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol> */}
    </CRow>
  )
}

export default Charts
