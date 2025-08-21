package com.integraMicro.bookingSystem.service;

import com.integraMicro.bookingSystem.dto.request.RequestUserDto;

public interface UserService {
    public String signup(RequestUserDto userDto);
    public String login(RequestUserDto userDto);
}
