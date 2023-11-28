package com.RuralHealthConnect.RuralHealthConnect.Exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class DiseaseException extends RuntimeException {
    public DiseaseException(String message){
        super(message);
    }
}
