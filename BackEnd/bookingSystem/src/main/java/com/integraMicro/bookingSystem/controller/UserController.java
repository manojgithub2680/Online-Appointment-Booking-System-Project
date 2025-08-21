package com.integraMicro.bookingSystem.controller;


import com.integraMicro.bookingSystem.dto.request.RequestUserDto;
import com.integraMicro.bookingSystem.service.impl.UserServiceImpl;
import com.integraMicro.bookingSystem.util.StandardResponse;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserServiceImpl userService;

    @PostMapping(path = "/signup")
    public ResponseEntity<StandardResponse> signup(@RequestBody RequestUserDto userDto){
        userService.signup(userDto);
        return new ResponseEntity<>(
                new StandardResponse(201,"User Created!",userDto),
                HttpStatus.CREATED
        );
    }

    @PostMapping(path = "/login")
    public ResponseEntity<StandardResponse> login(@RequestBody RequestUserDto userDto){
        String token = userService.login(userDto);

        return new ResponseEntity<>(
                new StandardResponse(200,"Successfully logged",token),
                HttpStatus.OK
        );
    }
}
