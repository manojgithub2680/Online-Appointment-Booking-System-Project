package com.integraMicro.bookingSystem.service.impl;

import com.integraMicro.bookingSystem.dto.request.RequestUserDto;
import com.integraMicro.bookingSystem.entity.User;
import com.integraMicro.bookingSystem.repo.UserRepo;
import com.integraMicro.bookingSystem.service.UserService;
import com.integraMicro.bookingSystem.util.JWTUtils;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JWTUtils jwtUtils;
    private final AuthenticationManager authenticationManager;

    @Override
    public String signup(RequestUserDto userDto) {
        User user = new User(

                userDto.getFullName(),
                userDto.getEmail(),
                userDto.getRole(),
                passwordEncoder.encode(userDto.getPassword())
        );

        userRepo.save(user);
        return user.getFullName() + " saved";
    }


    @Override
    public String login(RequestUserDto userDto) {
        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(userDto.getEmail(),
                        userDto.getPassword()));

        User user = userRepo.findByEmail(userDto.getEmail()).orElseThrow(() -> new RuntimeException("User not found"));

        String jwt = jwtUtils.generateToken(user);
        return jwt;
    }

    }
