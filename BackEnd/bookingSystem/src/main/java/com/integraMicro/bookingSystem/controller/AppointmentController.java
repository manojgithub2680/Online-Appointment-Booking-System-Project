package com.integraMicro.bookingSystem.controller;

import com.integraMicro.bookingSystem.dto.request.RequestAppointmentDto;
import com.integraMicro.bookingSystem.dto.response.ResponseAppointmentDto;
import com.integraMicro.bookingSystem.service.impl.AppointmentServiceImpl;
import com.integraMicro.bookingSystem.util.StandardResponse;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class AppointmentController {

    private final AppointmentServiceImpl appointmentService;

    @PostMapping(path = "/user/appointments")
    public ResponseEntity<StandardResponse> saveAppointment(@RequestBody RequestAppointmentDto appointmentDto){
        appointmentService.saveAppointment(appointmentDto);
        return new ResponseEntity<>(
                new StandardResponse(201,"Appointment Created!",appointmentDto),
                HttpStatus.CREATED
        );
    }

    @DeleteMapping("/admin/delete/appointments/{id}")
    public ResponseEntity<StandardResponse> deleteAppointment(@PathVariable(value = "id") long id){
        appointmentService.deleteAppointment(id);
        return new ResponseEntity<>(
                new StandardResponse(204, "Deleted data",id),
                HttpStatus.OK
        );
    }


    @GetMapping(path = "/admin/appointments")
    public ResponseEntity<StandardResponse> getAllAppointments() {
        List<ResponseAppointmentDto> allAppointments = appointmentService.getAllAppointments();

        return new ResponseEntity<>(
                new StandardResponse(200, "All Appointments", allAppointments),
                HttpStatus.OK
        );
    }

    @GetMapping("/admin-user/slots")
    public ResponseEntity<StandardResponse> getAvailableSlots(@RequestParam String date) {
        LocalDate localDate = LocalDate.parse(date, DateTimeFormatter.ofPattern("yyyy-MM-dd"));

        List<String> availableSlots = appointmentService.getAvailableTimeSlots(localDate)
                .stream()
                .map(LocalTime::toString)
                .toList();

        return new ResponseEntity<>(
                new StandardResponse(200, "Available Time Slots", availableSlots),
                HttpStatus.OK
        );
    }
}
