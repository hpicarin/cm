package org.example.control_user.repository;

import jakarta.transaction.Transactional;
import org.example.control_user.entity.Rol;
import org.example.control_user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    @Query("select u from User u where u.name = :name and u.password = :pass")
    User getUsersByNameAndPassword(@Param(value = "name") String name, @Param(value = "pass") String pass);

    @Modifying(clearAutomatically = true, flushAutomatically = true)
    @Transactional
    @Query("update User u set u.name=:name,u.lastname=:lastname,u.password=:pass,u.country=:state,u.avatar=:avatar,u.rol=:idrol where u.idUser = :id")
    void updateUser(@Param(value = "id") Long id,
                    @Param(value = "name") String name,
                    @Param(value = "lastname") String lastname,
                    @Param(value = "pass") String pass,
                    @Param(value = "state") String state,
                    @Param(value = "avatar") String avatar,
                    @Param(value = "idrol") Long idrol);
}
