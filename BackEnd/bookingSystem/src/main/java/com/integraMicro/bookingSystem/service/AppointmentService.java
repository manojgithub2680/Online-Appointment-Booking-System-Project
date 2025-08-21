package com.integraMicro.bookingSystem.service;

import com.integraMicro.bookingSystem.dto.request.RequestAppointmentDto;
import com.integraMicro.bookingSystem.dto.response.ResponseAppointmentDto;
import com.integraMicro.bookingSystem.entity.Appointment;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface AppointmentService {

     void saveAppointment(RequestAppointmentDto appointmentDto);
     void deleteAppointment(long id);
    List<ResponseAppointmentDto> getAllAppointments();

    List<LocalTime> getAvailableTimeSlots(LocalDate date);

}
