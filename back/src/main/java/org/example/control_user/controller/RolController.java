package org.example.control_user.controller;

import org.example.control_user.entity.Rol;
import org.example.control_user.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(path="/v1/rol")
public class RolController {

    @Autowired
    RolService rolService;

    @PostMapping(path = "/")
    public long saveRol(@RequestBody Rol rol)
    {
        return rolService.saveRol(rol).getIdRol();
    }

    @GetMapping(path="/{rolid}")
    public @ResponseBody Optional<Rol> getRolbyId(@PathVariable("rolid") Long rolid) {
        return rolService.getRol(rolid);
    }

    @GetMapping(path="/")
    public @ResponseBody List<Rol> getAllRols() {
        return rolService.getRols();
    }

    @DeleteMapping("/{rolid}")
    public void deleteRol(@PathVariable("rolid") Long rolid)
    {
        rolService.deleteRol(rolid);
    }

    @PutMapping("/")
    public void updateRol(@RequestBody Rol rol)
    {
        rolService.updateRol(rol);
    }
}
