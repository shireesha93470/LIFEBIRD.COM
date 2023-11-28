package com.RuralHealthConnect.RuralHealthConnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.RuralHealthConnect.RuralHealthConnect.Exception.ResourceNotFoundException;
import com.RuralHealthConnect.RuralHealthConnect.model.Disease;
import com.RuralHealthConnect.RuralHealthConnect.repository.DiseaseRepository;

@CrossOrigin(origins = "http://localhost:3306")
@RestController
@RequestMapping("/logos")
public class DiseaseController {
     private static final Object disease = null;
    public static Object getDisease() {
        return disease;
    }

    @Autowired
    private DiseaseRepository DiseaseRepository;

    @GetMapping
    public List<Disease> getAllDiseases() {
        return DiseaseRepository.findAll();
    }

    @PostMapping
    public Disease createDisease(@RequestBody Disease disease) {
        return DiseaseRepository.save(disease);
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getDiseaseId(@PathVariable long id) {
        Disease disease = DiseaseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("disease not found with id: " + id));
        return ResponseEntity.ok(disease);
    }

    
}
