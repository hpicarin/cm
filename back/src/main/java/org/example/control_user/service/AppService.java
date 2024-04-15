package org.example.control_user.service;

import org.example.control_user.entity.Appointment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AppService {
    List<Appointment> getAppointments(Long id_user);

    void deleteApp(Long id);

    void updateApp(Appointment appointment);

    Appointment saveApp(Appointment appointment);
}
