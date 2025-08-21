package com.integraMicro.bookingSystem.adviser;

import com.integraMicro.bookingSystem.exception.EntryNotFoundException;
import com.integraMicro.bookingSystem.util.StandardResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AppWiderExceptionHandler {
    @ExceptionHandler(EntryNotFoundException.class)
    public ResponseEntity<StandardResponse> handleEntryNotFoundException(EntryNotFoundException e) {
        return new ResponseEntity<>(
                new StandardResponse(404, e.getMessage(), e),
                HttpStatus.NOT_FOUND
        );
    }
}

