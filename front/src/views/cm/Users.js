import React, { useState, useEffect } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CAvatar,
    CProgress,
    CModal,
    CModalBody,
    CModalHeader,
    CModalTitle,
    CModalFooter,
    CFormLabel,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CFormSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilHospital, cilUser, cilLockLocked } from '@coreui/icons/dist/cjs/free'
import UserService from '../../services/UserService'
import { cilX } from '@coreui/icons/dist/cjs/free/cil-x'
import { cilPen } from '@coreui/icons/dist/cjs/free/cil-pen'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { cilMedicalCross } from '@coreui/icons/dist/cjs/free/cil-medical-cross'
import RolService from '../../services/RolService'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/7.jpg'
import avatar8 from 'src/assets/images/avatars/8.jpg'
import avatar9 from 'src/assets/images/avatars/9.jpg'

const Users = () => {
    const [userData, setuserData] = useState([]);
    const [rolData, setrolData] = useState([]);
    const [user, setUser] = useLocalStorage("user", null);

    const avatarData = [
        'avatar1',
        'avatar2',
        'avatar3',
        'avatar4',
        'avatar5',
        'avatar6',
        'avatar7',
        'avatar8',
        'avatar9'
    ]

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

    const deleteUser = (id) => {
        UserService.deleteUser(id).then(res => {
            UserService.getUsers().then((res) => {
                setuserData(res.data);
            });
        });
    }

    const CreateModal = (props) => {
        const [visible, setVisible] = useState(false)
        const [icon, setIcon] = useState(cilMedicalCross)
        const [type, setType] = useState('new');
        const [user, setUser] = useState({ rol: { idRol: 0 }, avatar: 'avatar1' });
        const [idrol, setIdRol] = useState(0);
        const [avatar, setAvatar] = useState('avatar1');

        const handleDatachanged = (event, typedata) => {
            const val = event.target.value;
            if (typedata == 'rol') {
                user[typedata] = { idRol: parseInt(val) };
                setIdRol(parseInt(val));
            }
            else {
                user[typedata] = val;
                if (typedata == 'avatar') {
                    setAvatar(val);
                }
            }
            setUser(user);
        }

        const saveUser = () => {
            user['createdAt'] = new Date();
            user['rol'] = { idRol: parseInt(user.rol.idRol) };
            UserService.createUser(user).then((res) => {
                UserService.getUsers().then((res) => {
                    setuserData(res.data);
                });
            });
        }

        const updateUser = () => {
            UserService.updateUser(user).then(res => {
                UserService.getUsers().then((res) => {
                    setuserData(res.data);
                });
            });
        }

        useEffect(() => {
            // default value for rol
            setType(props.type);
            if (props.type == 'edit') {
                setIcon(cilPen)
                setUser(props.data);
                setIdRol(props.data.rol.idRol);
                setAvatar(props.data.avatar);
            } else {
                setIcon(cilMedicalCross);
                if (props.rols && props.rols.length > 0) {
                    user['rol']['idRol'] = props.rols[0].idRol;
                }
            }
        }, [])


        return (
            <>
                {(type == 'new') ?
                    <CIcon color="primary" icon={icon} onClick={() => setVisible(!visible)} title="Add user" style={{ cursor: "pointer", color: "blue" }} />
                    : <CIcon size="xl" icon={icon} onClick={() => setVisible(!visible)} title="Edit user" style={{ marginRight: 10, cursor: "pointer", color: "green" }} />
                }
                <CModal visible={visible} onClose={() => setVisible(false)}>
                    <CModalHeader>
                        <CModalTitle>{(type == 'new') ? 'New ' : 'Edit '}user</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CRow>
                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom01">Name</CFormLabel>
                                <CFormInput type="text" id="validationCustom01" defaultValue={parseCamel(user.name)} onChange={(e) => handleDatachanged(e, 'name')} required />
                            </CCol>

                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom02">Lastname</CFormLabel>
                                <CFormInput type="text" id="validationCustom02" defaultValue={parseCamel(user.lastname)} onChange={(e) => handleDatachanged(e, 'lastname')} required />
                            </CCol>

                            <CCol md={6}>
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
                                </CInputGroup>
                            </CCol>

                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
                                <CFormInput type="text" id="validationCustom03" defaultValue={user.country} onChange={(e) => handleDatachanged(e, 'country')} required />
                            </CCol>

                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom04">Avatar</CFormLabel>
                                <CFormSelect id="validationCustom04" value={avatar} onChange={(e) => handleDatachanged(e, 'avatar')}>
                                    {avatarData.map((item, index) => (
                                        <option value={item} key={index} >
                                            {item}
                                        </option>
                                    ))}
                                </CFormSelect>
                            </CCol>

                            <CCol md={6}>
                                <CFormLabel htmlFor="validationCustom05">Rol</CFormLabel>
                                <CFormSelect id="validationCustom05" value={idrol} onChange={(e) => handleDatachanged(e, 'rol')}>
                                    {rolData.map((item, index) => (
                                        <option value={item.idRol} key={index}> {item.name} </option>
                                    ))}
                                </CFormSelect>
                            </CCol>
                        </CRow>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
                        {(type == 'new') ?
                            <CButton color="success" onClick={() => { saveUser(); setVisible(false); }}>Save</CButton>
                            : <CButton color="success" onClick={() => { updateUser(); setVisible(false); }}>Save</CButton>
                        }
                    </CModalFooter>
                </CModal>
            </>
        )
    }

    useEffect(() => {
        RolService.getRols().then((res) => {
            //console.log(res.data);
            setrolData(res.data);
        });

        UserService.getUsers().then((res) => {
            //setuserData(res.data);
            if (user.rol.name.toLowerCase() == 'admin') {
                setuserData(res.data);
            } else {
                setuserData(res.data.filter(item => { return (item.rol.name.toLowerCase() != 'admin') & (item.rol.name.toLowerCase() != user.rol.name.toLowerCase()) }));
            }

        });
    }, [])

    return (
        <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead className="text-nowrap">
                <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                        {(user.rol.name.toLowerCase() == 'admin') ?
                            <CreateModal type={'new'} rols={rolData}></CreateModal> :
                            <></>
                        }
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                        State
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">Rol</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">Action</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {userData.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell className="text-center">
                            <CAvatar size="md" src={eval(item.avatar)} />
                        </CTableDataCell>
                        <CTableDataCell>
                            <div>{parseCamel(item.name) + ' ' + parseCamel(item.lastname)}</div>
                            <div className="small text-body-secondary text-nowrap">
                                <span>{item.rol.name}</span> | Registered:{' '}
                                {parseDate(item.createdAt)}
                            </div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                            {item.country}
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                            <CIcon size="xl" icon={item.rol.name.toLowerCase() == 'patient' ? cilUser : cilHospital} />
                        </CTableDataCell>
                        <CTableDataCell colSpan={3} className="text-center">
                            <CreateModal type={'edit'} data={item} ></CreateModal>
                            <CIcon size="xl" icon={cilX} onClick={() => deleteUser(item.idUser)} title="Remove user" style={{ cursor: "pointer", color: "red" }} />
                        </CTableDataCell>
                    </CTableRow>
                ))}
            </CTableBody>
        </CTable>
    )
}

export default Users
