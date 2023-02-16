import React from 'react'
import {
  CRow,
  CCol,
  CButton,
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
  CForm,
  CFormInput,
  CLabel,
  CInput,
  CFormText,
  CFormCheck,
  CFormSelect,

} from '@coreui/react'
import { DocsExample } from 'src/components'
import { CFormLabel } from '@coreui/react'
const Navs = () => {
  return (
    <CRow>
      <CCol sm="6">
      <CForm>
        <CFormInput
          type="first name"
          id="first name"
          label="First name"
          // placeholder="Enter your first name"
          // text="Must be 8-20 characters long."
          // aria-describedby="exampleFormControlInputHelpInline"
        />
      </CForm>
      </CCol>
      <CCol sm="6">
      <CForm>
        <CFormInput
          type="last name"
          id="last name"
          label="Last name"
          // placeholder="Enter your first name"
          // text="Must be 8-20 characters long."
          // aria-describedby="exampleFormControlInputHelpInline"
        />
      </CForm>
      </CCol>

      <CCol sm="4">
      <CForm>
        <CFormSelect
          type="last name"
          id="last name"
          label="Province"
          // placeholder="Enter your first name"
          // text="Must be 8-20 characters long."
          // aria-describedby="exampleFormControlInputHelpInline"
        />
      </CForm>
      </CCol>
      <CCol sm="4">
      <CForm>
        <CFormSelect
          type="last name"
          id="last name"
          label="District"
          // placeholder="Enter your first name"
          // text="Must be 8-20 characters long."
          // aria-describedby="exampleFormControlInputHelpInline"
        />
      </CForm>
      </CCol>
      <CCol sm="4">
      <CForm>
        <CFormSelect
          type="last name"
          id="last name"
          label="Ward"
          // placeholder="Enter your first name"
          // text="Must be 8-20 characters long."
          // aria-describedby="exampleFormControlInputHelpInline"
        />
      </CForm>
      </CCol>
      <CCol sm="12">
      <CForm>
        <CFormInput
          type="last name"
          id="last name"
          label="Address"
          // placeholder="Enter your first name"
          // text="Must be 8-20 characters long."
          // aria-describedby="exampleFormControlInputHelpInline"
        />
      </CForm>
      </CCol>
      <CCol sm="4">
      <CForm>
        <CFormSelect
          type="last name"
          id="last name"
          label="Country code"
          // placeholder="Enter your first name"
          // text="Must be 8-20 characters long."
          // aria-describedby="exampleFormControlInputHelpInline"
        />
        
      </CForm>
      </CCol>
      <CCol sm="8">
      <CForm>
        <CFormInput
          type="last name"
          id="last name"
          label="Contact Phone number"
          // placeholder="Enter your first name"
          // text="Must be 8-20 characters long."
          // aria-describedby="exampleFormControlInputHelpInline"
        />
      </CForm>
      </CCol>
      <CCol sm="4">
      <CForm>
        <CFormInput
          type="last name"
          id="last name"
          label="Customer ID"
          // placeholder="Enter your first name"
          // text="Must be 8-20 characters long."
          // aria-describedby="exampleFormControlInputHelpInline"
        />
      </CForm>
      </CCol>
      <CCol sm="8">
      <CForm>
        <CFormInput
          type="last name"
          id="last name"
          label="Products bought"
          // placeholder="Enter your first name"
          // text="Must be 8-20 characters long."
          // aria-describedby="exampleFormControlInputHelpInline"
        />
      </CForm>
      </CCol>

      <CCol sm = "4">
        Total
      </CCol>
      <CCol sm="8" >
      <CForm>
        <CFormInput
          type="last name"
          id="last name"
          label="Notes"
          // placeholder="Enter your first name"
          // text="Must be 8-20 characters long."
          // aria-describedby="exampleFormControlInputHelpInline"
        />
      </CForm>
      </CCol>
      <CCol align = "center"> 
      <CButton>Save</CButton> 
      <CButton>Cancel</CButton></CCol>
    </CRow>
  )
}

export default Navs
