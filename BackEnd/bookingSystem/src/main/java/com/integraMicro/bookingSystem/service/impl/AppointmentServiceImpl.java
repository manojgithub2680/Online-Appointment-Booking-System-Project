package com.integraMicro.bookingSystem.service.impl;

import com.integraMicro.bookingSystem.dto.request.RequestAppointmentDto;
import com.integraMicro.bookingSystem.dto.response.ResponseAppointmentDto;
import com.integraMicro.bookingSystem.entity.Appointment;
import com.integraMicro.bookingSystem.exception.EntryNotFoundException;
import com.integraMicro.bookingSystem.repo.AppointmentRepo;
import com.integraMicro.bookingSystem.service.AppointmentService;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentRepo appointmentRepo;

    @Override
    public void saveAppointment(RequestAppointmentDto appointmentDto) {

        Appointment appointment = new Appointment(
                appointmentDto.getName(),
                appointmentDto.getContact(),
                appointmentDto.getDate(),
                appointmentDto.getTime()
        );

       appointmentRepo.save(appointment);

    }

    @Override
    public void deleteAppointment(long id) {
        Optional<Appointment> selectedAppointment = appointmentRepo.findById(id);
        if(selectedAppointment.isEmpty()){
            throw new EntryNotFoundException("Not Assign Appointment");
        }
        appointmentRepo.deleteById(selectedAppointment.get().getId());
    }

    @Override
    public List<ResponseAppointmentDto> getAllAppointments() {
        List<Appointment> appointmentList = appointmentRepo.findAll();
        List<ResponseAppointmentDto> responseAppointmentDtos = new ArrayList<>();

        for (Appointment appointment:appointmentList){
            ResponseAppointmentDto responseAppointmentDto =new ResponseAppointmentDto(
                    appointment.getId(),
                    appointment.getName(),
                    appointment.getContact(),
                    appointment.getDate(),
                    appointment.getTime()
                    );
            responseAppointmentDtos.add(responseAppointmentDto);
        }
        return responseAppointmentDtos;
    }


    public List<LocalTime> getAllTimeSlots() {
        List<LocalTime> slots = new ArrayList<>();
        LocalTime start = LocalTime.of(10,0);
        LocalTime end = LocalTime.of(17,0);

        while (start.isBefore(end)){
            slots.add(start);
            start = start.plusMinutes(60);
        }
        return slots;
    }

    @Override
    public List<LocalTime> getAvailableTimeSlots(LocalDate date) {
        List<Appointment> bookedAppointments = appointmentRepo.findByDate(date);
        List<LocalTime> bookedSlots = bookedAppointments.stream()
                .map(Appointment::getTime)
                .collect(Collectors.toList());

        return getAllTimeSlots().stream()
                .filter(slot -> !bookedSlots.contains(slot))
                .collect(Collectors.toList());
    }

}
