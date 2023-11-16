package com.restapi.springboot.mysql.rest.api.controllers;

import com.restapi.springboot.mysql.rest.api.model.Disease;
import com.restapi.springboot.mysql.rest.api.service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/disease")
public class DiseaseController {
    @Autowired
    DiseaseService diseaseService;
    @GetMapping
    public List<Disease> getAllDiseases() {
        return diseaseService.getAllDiseases();
    }

    @GetMapping("/{id}")
    public Disease getDisease(@PathVariable Integer id) {
        return diseaseService.getDiseaseById(id);
    }

   @PostMapping("/create")
    @CrossOrigin(origins = "http://localhost:3306/") 
    public ResponseEntity<Disease> saveDisease(@RequestBody Disease disease) {
    Disease createdDisease = diseaseService.create(disease);
    return new ResponseEntity<>(createdDisease, HttpStatus.CREATED);
}


    @PutMapping("/update")
    public  Disease updateDisease(@RequestBody Disease disease) {
        return diseaseService.update(disease);
    }

    @DeleteMapping("/delete/{id}")
    public  String deleteDisease(@PathVariable Integer id) {
        return diseaseService.deleteDisease(id);
    }
}

