package com.integraMicro.bookingSystem.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ResponseAppointmentDto {
    private Long id;
    private String name;
    private String contact;
    private LocalDate date;
    private LocalTime time;

}
