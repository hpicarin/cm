package org.example.control_user.service;

import org.example.control_user.entity.Rol;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface RolService {
    Rol saveRol(Rol rol);

    List<Rol> getRols();

    Optional<Rol> getRol(Long id);

    void deleteRol(Long id);

    void updateRol(Rol rol);
}
