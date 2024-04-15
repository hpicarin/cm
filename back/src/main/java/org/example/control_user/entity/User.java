package org.example.control_user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Entity
@Data
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idUser;

    private String name;

    private String lastname;

    private String password;

    private String country;

    private String avatar;

    private String type;

    @ManyToOne
    @JoinColumn(name="id_rol", nullable = false)
    private Rol rol;

    @CreatedDate
    @Column(name = "created_at", nullable = false,updatable = false)
    private Date createdAt;
}
