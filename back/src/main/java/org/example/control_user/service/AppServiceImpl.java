package org.example.control_user.service;

import org.example.control_user.entity.Appointment;
import org.example.control_user.repository.AppRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AppServiceImpl implements AppService{

    @Autowired
    AppRepository appRepository;

    @Override
    public List<Appointment> getAppointments(Long id_user){
        return appRepository.findByUser(id_user);
    };

    @Override
    public void deleteApp(Long id){
        appRepository.deleteById(id);
    };

    @Override
    public void updateApp(Appointment appointment){
        appRepository.save(appointment);
    };

    public Appointment saveApp(Appointment appointment){
        return appRepository.save(appointment);
    };
}
