import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CFormLabel,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CRow,
} from '@coreui/react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { cilMedicalCross, cilLockLocked } from '@coreui/icons/dist/cjs/free/cil-medical-cross'
import moment from 'moment'
import CIcon from '@coreui/icons-react'
import DatePicker from "react-datepicker";
import DateTimePicker from 'react-datetime-picker';
import "react-datepicker/dist/react-datepicker.css"
import UserService from '../../services/UserService'
import AppService from '../../services/AppService'
import { useLocalStorage } from '../../hooks/useLocalStorage'

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const localizer = momentLocalizer(moment)

const slidesLight = [
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23AAA%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23F5F5F5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23BBB%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23EEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23E5E5E5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
]

const CCalendar = () => {
  const [user, setUser] = useLocalStorage("user", null);
  const [eventsData, setEventsData] = useState([]);
  const [eventsCalendar, setEventsCalendar] = useState([]);

  const CreateModal = (props) => {
    const [visible, setVisible] = useState(false)
    const [icon, setIcon] = useState(cilMedicalCross)
    const [type, setType] = useState('new');
    const [guest, setGuest] = useState();
    const [eventdata, setEventdata] = useState(props);
    const [usersData, setusersData] = useState([]);

    const handleDatachanged = (event, typedata) => {
      //console.log(event, typedata);

      if ((typedata == 'start') || (typedata == 'end')) {
        eventdata.event[typedata] = event;
      }
      else if (typedata == 'user') {
        setGuest(event.target.value);
        eventdata.event['guest'] = event.target.value;
      } else {
        eventdata.event[typedata] = event.target.value;
      }

      setEventdata(eventdata);
    }

    const deleteApp = (id) => {
      AppService.deleteApp(id).then((res) => {
        AppService.getApps(user.idUser).then((res) => {
          setEventsData(res.data);
          setEventsCalendar(parseEvent(res.data));
        });
      });
    }

    const saveApp = () => {
      console.log('AQUI', eventdata);
      /*AppService.createApp(app).then((res) => {
        AppService.getApps().then((res) => {
          setuserData(res.data);
        });
      });*/
    }

    const updateApp = () => {
      console.log(eventdata.event);

      eventdata.event['startD'] = new Date(eventdata.event.start);
      eventdata.event['endD'] = new Date(eventdata.event.end);
      eventdata.event['guest'] = (guest === undefined ? usersData[0].idUser : guest.idUser);
      console.log(eventdata.event);

      if (user.rol.name.toLowerCase() == 'patient') {
        eventdata.event['user_d'] = { idUser: parseInt(eventdata.event.guest) };
        eventdata.event['user_p'] = { idUser: user.idUser };
      } else {
        eventdata.event['user_p'] = { idUser: parseInt(eventdata.event.guest) };
        eventdata.event['user_d'] = { idUser: user.idUser };
      }

      if (eventdata.event.type != 'new') {
        AppService.updateApp(eventdata.event).then((res) => {
          AppService.getApps(user.idUser).then((res) => {
            setEventsData(res.data);
            setEventsCalendar(parseEvent(res.data));
          });
        });
      } else {
        AppService.createApp(eventdata.event).then((res) => {
          AppService.getApps(user.idUser).then((res) => {
            setEventsData(res.data);
            setEventsCalendar(parseEvent(res.data));
          });
        });
      }
    }

    useEffect(() => {
      //console.log(eventdata.event);
      // default value for rol
      setType(props.type);

      UserService.getUsers().then((res) => {
        setusersData(res.data.filter(item => { return (item.idUser != user.idUser) & (item.rol.name.toLowerCase() != 'admin') & (item.rol.name.toLowerCase() != user.rol.name.toLowerCase()) }));
        setGuest(usersData[0]);
      });
    }, [])

    return (
      <>
        {(eventdata.event && eventdata.event.type == 'new') ?
          <div style={{ height: 25, color: 'red', fontStyle: 'italic' }} onClick={() => setVisible(!visible)} >{eventdata.title}</div>
          : <div style={{ height: 25 }} onClick={() => setVisible(!visible)} >{eventdata.title}</div>}
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>{(type == 'new') ? 'New ' : 'Edit '} {eventdata.title}</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CRow>
              <CCol md={6} >
                <CFormLabel>Start date</CFormLabel>
                <DateTimePicker value={eventdata.event.start} onChange={(date) => handleDatachanged(date, 'start')} />
              </CCol>

              <CCol md={6}>
                <CFormLabel>End date</CFormLabel>
                <DateTimePicker value={eventdata.event.end} onChange={(date) => handleDatachanged(date, 'end')} />
              </CCol>

              <CCol md={12}>
                <CFormLabel>User</CFormLabel>
                <CFormSelect value={guest} onChange={(e) => handleDatachanged(e, 'user')}>
                  {usersData.map((item, index) => (
                    <option value={item.idUser} key={index}> {item.name} </option>
                  ))}
                </CFormSelect>
              </CCol>

              <CCol md={12}>
                <CFormLabel>Title</CFormLabel>
                <CFormInput type="text" defaultValue={eventdata.event.title} onChange={(e) => handleDatachanged(e, 'title')} required />
              </CCol>

            </CRow>
          </CModalBody>
          <CModalFooter>
            <div className="d-flex justify-content-between w-100">
              <div className="justify-content-start">
                <CButton color="danger" onClick={() => { deleteApp(eventdata.event.idApp); setVisible(false); }}>Delete</CButton>
              </div>
              <div>
                <CButton color="secondary" className="me-md-2" onClick={() => setVisible(false)}>Close</CButton>
                {(type == 'new') ?
                  <CButton color="success" onClick={() => { saveApp(); setVisible(false); }}>Save</CButton>
                  : <CButton color="success" onClick={() => { updateApp(); setVisible(false); }}>Save</CButton>
                }
              </div>
            </div>

            {(type == 'saved') ?
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <CButton color="danger" onClick={() => { saveApp(); setVisible(false); }}>Save</CButton> </div> : <></>
            }

          </CModalFooter>
        </CModal>
      </>
    )
  }

  const onSlotChange = (slotInfo) => {
    var newEvent = {
      title: 'Test Nuevo',
      start: slotInfo.start,
      end: slotInfo.end,
      type: 'new'
    }
    var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");

    setEventsCalendar([...eventsCalendar, newEvent]);
  }

  const parseCamel = (text) => {
    if (text === undefined) {
      return '';
    } else {
      return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    }
  }

  const parseEvent = (dataApp) => {
    var dataEvent = [];
    dataApp.forEach(element => {
      //console.log(element);
      var guest = (user.idUser == element.user_p.idUser) ? element.user_d : user;
      var nelement = { title: element.title, start: element.startD, end: element.endD, type: 'saved', guest: guest, idApp: element.idApp };
      dataEvent.push(nelement);
    });
    return dataEvent;
  }

  useEffect(() => {
    AppService.getApps(user.idUser).then((res) => {
      //console.log(res.data);
      setEventsData(res.data);
      setEventsCalendar(parseEvent(res.data));
    });
    const leaves = [];
    leaves.push({
      title: 'Test 1', start: moment().subtract(3, "days").toDate(), end: moment()
        .subtract(2, "days")
        .toDate(), color: 'Blue', type: 'leave', allDay: 'true'
    })
    leaves.push({
      title: 'Test 2', start: moment().subtract(1, "days").toDate(), end: moment()
        .toDate(), color: 'Black', type: 'ah', allDay: 'true'
    })
    leaves.push({
      title: 'Test 3', start: moment().toDate(), end: moment()
        .add(1, "days")
        .toDate(), color: 'Red', type: 'leave', allDay: 'false'
    })

    //setEventsData(leaves);
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          defaultDate={new Date()}
          defaultView="month"
          onSelectSlot={(slotInfo) => onSlotChange(slotInfo)}
          selectable
          components={{
            event: CreateModal,
          }}
          events={eventsCalendar}
          //onSelectEvent={(event) => console.log(event.title)}
          style={{ height: "70vh" }}
        />
      </CCol>
    </CRow>
  )
}

export default CCalendar
