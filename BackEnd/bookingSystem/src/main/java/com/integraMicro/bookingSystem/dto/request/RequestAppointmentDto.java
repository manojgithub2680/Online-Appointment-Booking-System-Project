package com.integraMicro.bookingSystem.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RequestAppointmentDto {
    private String name;
    private String contact;
    private LocalDate date;
    private LocalTime time;

}
