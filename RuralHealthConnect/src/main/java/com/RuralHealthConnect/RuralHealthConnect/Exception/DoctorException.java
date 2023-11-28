package com.RuralHealthConnect.RuralHealthConnect.Exception; 
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class DoctorException extends RuntimeException {

    public DoctorException(String message) {
        super(message);
    }
}
