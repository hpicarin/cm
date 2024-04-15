import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import RolService from '../../services/RolService'
import { cilMedicalCross } from '@coreui/icons/dist/cjs/free/cil-medical-cross';
import CIcon from '@coreui/icons-react';
import { CFormLabel } from '@coreui/react/dist/cjs/components/form/CFormLabel';
import { CFormInput } from '@coreui/react/dist/cjs/components/form/CFormInput';
import { cilPen } from '@coreui/icons/dist/cjs/free/cil-pen';
import { cilX } from '@coreui/icons/dist/cjs/free/cil-x';

const Roles = () => {
  const [rolsData, setrolsData] = useState([]);

  const parseCamel = (text) => {
    if (text === undefined) {
      return '';
    } else {
      return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    }
  }

  const parseDate = (time) => {
    return new Date(time).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  const deleteRol = (id) => {
    RolService.deleteRol(id).then(res => {
      RolService.getRols().then((res) => {
        setrolsData(res.data);
      });
    });
  }

  const CreateModal = (props) => {
    const [visible, setVisible] = useState(false)
    const [icon, setIcon] = useState(cilMedicalCross)
    const [title, setTitle] = useState('New rol');
    const [type, setType] = useState('new');
    const [rol, setRol] = useState({});

    const handleDatachanged = (event, typedata) => {
      const val = event.target.value;
      rol[typedata] = val;
      setRol(rol);
    }

    const saveRol = () => {
      console.log(rol);
      RolService.createRol(rol).then((res) => {
        RolService.getRols().then((res) => {
          setrolsData(res.data);
        });
      });
    }

    const updateRol = () => {
      RolService.updateRol(rol).then(res => {
        RolService.getRols().then((res) => {
          setrolsData(res.data);
        });
      });
    }

    useEffect(() => {
      setType(props.type);
      if (props.type == 'edit') {
        setIcon(cilPen)
        setRol(props.data);
      } else {
        setIcon(cilMedicalCross);
      }
    }, [])


    return (
      <>
        <CIcon className="d-flex" color="primary" icon={icon} size="xl" onClick={() => setVisible(!visible)} style={{ cursor: "pointer", color: "blue" }} />
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>{(type == 'new') ? 'New ' : 'Edit '}rol</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormLabel htmlFor="validationCustom01">Name</CFormLabel>
            <CFormInput type="text" id="validationCustom01" defaultValue={parseCamel(rol.name)} onChange={(e) => handleDatachanged(e, 'name')} required />
            <CFormLabel htmlFor="validationCustom02">Description</CFormLabel>
            <CFormInput type="text" id="validationCustom02" defaultValue={parseCamel(rol.description)} onChange={(e) => handleDatachanged(e, 'description')} required />
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            {(type == 'new') ?
              <CButton color="success" onClick={() => { saveRol(); setVisible(false); }}>Save</CButton>
              : <CButton color="success" onClick={() => { updateRol(); setVisible(false); }}>Save</CButton>
            }
          </CModalFooter>
        </CModal>
      </>
    )
  }

  useEffect(() => {
    RolService.getRols().then((res) => {
      setrolsData(res.data);
    });
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between">
            <strong>Roles</strong>
            <CreateModal type={'new'}></CreateModal>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {rolsData.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{item.name}</CTableDataCell>
                    <CTableDataCell>{item.description}</CTableDataCell>
                    {(['patient', 'admin', 'doctor'].includes(item.name.toLowerCase()) ?
                      <CTableDataCell></CTableDataCell> :
                      <CTableDataCell colSpan={2} className="text-center d-flex justify-content-center">
                        <CreateModal type={'edit'} data={item} ></CreateModal>
                        <CIcon size="xl" icon={cilX} onClick={() => deleteRol(item.idRol)} title="Remove rol" style={{ marginLeft: 10, cursor: "pointer", color: "red" }} />
                      </CTableDataCell>)}
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

export default Roles
