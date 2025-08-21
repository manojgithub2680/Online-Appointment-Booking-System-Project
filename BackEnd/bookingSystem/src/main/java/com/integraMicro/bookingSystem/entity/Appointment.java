package com.integraMicro.bookingSystem.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "appointment")
public class Appointment{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String contact;
    private LocalDate date;
    private LocalTime time;

    public Appointment(String name, String contact, LocalDate date, LocalTime time) {
        this.name = name;
        this.contact = contact;
        this.date = date;
        this.time = time;
    }
}
