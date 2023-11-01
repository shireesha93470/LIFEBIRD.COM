package com.RuralHealthConnect.RuralHealthConnect.controller;

import com.RuralHealthConnect.RuralHealthConnect.Exception.ResourceNotFoundException;
import com.RuralHealthConnect.RuralHealthConnect.model.Patient;
import com.RuralHealthConnect.RuralHealthConnect.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3306")
@RestController
@RequestMapping("/details")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @GetMapping
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @PostMapping
    public Patient createPatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    @GetMapping("{id}")
    public ResponseEntity<Patient> getPatientId(@PathVariable long id) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with id: " + id));
        return ResponseEntity.ok(patient);
    }

    @PutMapping("{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable long id, @RequestBody Patient patientDetails) {
        Patient existingPatient = patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with id: " + id));

        
        // Save the updated patient
        Patient updatedPatient = patientRepository.save(existingPatient);
        return ResponseEntity.ok(updatedPatient);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deletePatient(@PathVariable long id) {
        try {
            patientRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            throw new ResourceNotFoundException("Patient not found with id: " + id);
        }
    }
}
