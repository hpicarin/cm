package org.example.control_user.service;

import org.example.control_user.entity.Rol;
import org.example.control_user.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class RolServiceImpl implements RolService {

    @Autowired
    RolRepository rolRepository;

    @Override
    public Rol saveRol(Rol user) {
        return rolRepository.save(user);
    }

    @Override
    public List<Rol> getRols() {
        return (List<Rol>) rolRepository.findAll();
    }

    @Override
    public Optional<Rol> getRol(Long id) {
        return rolRepository.findById(id);
    }

    @Override
    public void deleteRol(Long id) {
        rolRepository.deleteById(id);
    }

    @Override
    public void updateRol(Rol user) {
        rolRepository.updateRol(
                user.getIdRol(),
                user.getName(),
                user.getDescription());
    }
}
