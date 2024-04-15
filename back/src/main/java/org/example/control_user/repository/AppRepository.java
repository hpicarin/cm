package org.example.control_user.repository;

import org.example.control_user.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AppRepository extends JpaRepository<Appointment,Long> {

    @Query("select a from Appointment a where a.user_p.idUser = :id or a.user_d.idUser = :id")
    List<Appointment> findByUser(@Param(value = "id") Long id);
}
