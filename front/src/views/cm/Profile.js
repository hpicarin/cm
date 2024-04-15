import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { cilLockLocked } from '@coreui/icons/dist/cjs/free/cil-lock-locked'
import UserService from '../../services/UserService'
import RolService from '../../services/RolService'
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [validated, setValidated] = useState(false)
  //const [user, setUser] = useState({ "id": null, "createdAt": "", "name": "", "lastname": "", "password": "", "country": "", "avatar": "", "type": "" });
  const [user, setUser] = useLocalStorage("user", null);
  const [avatar, setAvatar] = useState("");
  const [rolData, setrolData] = useState([]);
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const parseCamel = (text) => {
    return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true);
    UserService.updateUser(user);
    //window.location.reload();

    navigate("/calendar");
  }

  const handleDatachanged = (event, typedata) => {
    const val = event.target.value;
    const userChanged = user;
    userChanged[typedata] = val;
    if (typedata == 'type') {
      setType(val);
    }
    if (typedata == 'avatar') {
      setAvatar(val);
    }
    if (typedata == 'rol') {
      userChanged[typedata] = { idRol: parseInt(val) };
      //setIdRol(parseInt(val));
    }
    setUser(userChanged);
  }

  useEffect(() => {
    //console.log(user);
    RolService.getRols().then((res) => {
      //console.log(res.data);
      setrolData(res.data);
    });
  }, [])

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom01">Name</CFormLabel>
        <CFormInput type="text" id="validationCustom01" defaultValue={parseCamel(user.name)} onChange={(e) => handleDatachanged(e, 'name')} required />
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom02">Lastname</CFormLabel>
        <CFormInput type="text" id="validationCustom02" defaultValue={parseCamel(user.lastname)} onChange={(e) => handleDatachanged(e, 'lastname')} required />
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Password</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText>
            <CIcon icon={cilLockLocked} />
          </CInputGroupText>
          <CFormInput
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            id="password"
            defaultValue={user.password}
            onChange={(e) => handleDatachanged(e, 'password')}
            required
          />
          <CFormFeedback invalid>Please set a password.</CFormFeedback>
        </CInputGroup>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
        <CFormInput type="text" id="validationCustom03" defaultValue={user.country} onChange={(e) => handleDatachanged(e, 'country')} required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom04">Avatar</CFormLabel>
        <CFormSelect id="validationCustom04" value={avatar || user.avatar} onChange={(e) => handleDatachanged(e, 'avatar')}>
          <option value="avatar1">avatar1</option>
          <option value="avatar2">avatar2</option>
          <option value="avatar3">avatar3</option>
          <option value="avatar4">avatar4</option>
          <option value="avatar5">avatar5</option>
          <option value="avatar6">avatar6</option>
          <option value="avatar7">avatar7</option>
          <option value="avatar8">avatar8</option>
          <option value="avatar9">avatar9</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>

      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom05">Type</CFormLabel>
        <CFormSelect id="validationCustom05" value={user.rol.idRol} onChange={(e) => handleDatachanged(e, 'rol')}>
          {rolData.map((item, index) => (
            <option value={item.idRol} key={index}> {item.name} </option>
          ))}
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>

      <CCol xs={12} className="d-flex justify-content-end">
        <CButton color="success" type="submit">
          Save
        </CButton>
      </CCol>
    </CForm>
  )
}

export default Profile
