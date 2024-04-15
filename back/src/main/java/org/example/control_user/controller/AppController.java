package org.example.control_user.controller;

import org.example.control_user.entity.Appointment;
import org.example.control_user.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(path="/v1/app")
public class AppController {
    @Autowired
    AppService appService;

    @PostMapping(path = "/")
    public long saveApp(@RequestBody Appointment app){
        return appService.saveApp(app).getIdApp();
    }

    @GetMapping(path="/{userid}")
    public @ResponseBody List<Appointment> getAllApps(@PathVariable("userid") Long userid) {
        return appService.getAppointments(userid);
    }

    @DeleteMapping("/{appid}")
    public void deleteApp(@PathVariable("appid") Long appid)
    {
        appService.deleteApp(appid);
    }

    @PutMapping("/")
    public void updateApp(@RequestBody Appointment app){
        appService.updateApp(app);
    }
}
