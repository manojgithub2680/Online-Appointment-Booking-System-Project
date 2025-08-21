package com.integraMicro.bookingSystem.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RequestUserDto {

    private String fullName;
    private String email;
    private String password;
    private String role;
}
