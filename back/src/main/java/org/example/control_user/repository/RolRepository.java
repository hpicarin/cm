package org.example.control_user.repository;

import jakarta.transaction.Transactional;
import org.example.control_user.entity.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RolRepository extends JpaRepository<Rol,Long> {


    @Modifying(clearAutomatically = true, flushAutomatically = true)
    @Transactional
    @Query("update Rol r set r.name=:name,r.description=:description where r.idRol=:id")
    void updateRol(@Param(value = "id") Long id,
                    @Param(value = "name") String name,
                    @Param(value = "description") String description);
}
