package org.example.control_user.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Timestamp;
import java.util.Date;

@Entity
@Data
@Table(name = "appointment")
@AllArgsConstructor
@NoArgsConstructor
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idApp;

    private String title;

    @DateTimeFormat
    @Column(name = "start_date", nullable = false)
    private Timestamp startD;

    @DateTimeFormat
    @Column(name = "end_date", nullable = false)
    private Timestamp endD;

    @ManyToOne
    @JoinColumn(name="id_user_p", nullable = false)
    private User user_p;

    @ManyToOne
    @JoinColumn(name="id_user_d", nullable = false)
    private User user_d;
}
