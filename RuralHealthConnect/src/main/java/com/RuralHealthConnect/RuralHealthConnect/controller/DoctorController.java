package com.RuralHealthConnect.RuralHealthConnect.controller;

import com.RuralHealthConnect.RuralHealthConnect.Exception.ResourceNotFoundException;
import com.RuralHealthConnect.RuralHealthConnect.model.Doctors;
import com.RuralHealthConnect.RuralHealthConnect.repository.DoctorRepository; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3306")
@RestController
@RequestMapping("/doctors")
public class DoctorController {
    @Autowired
    private DoctorRepository doctorRepository;

    @GetMapping
    public List<Doctors> getAllDoctors() { 
        return doctorRepository.findAll();
    }

    @PostMapping
    public Doctors createDoctor(@RequestBody Doctors doctor) { 
        return doctorRepository.save(doctor); 
    }

    @GetMapping("{id}")
    public ResponseEntity<Doctors> getDoctorById(@PathVariable long id) { 
        Doctors doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found with id: " + id));
        return ResponseEntity.ok(doctor);
    }

    @PutMapping("{id}")
    public ResponseEntity<Doctors> updateDoctor(@PathVariable long id, @RequestBody Doctors doctorDetails) { 
        Doctors existingDoctor = doctorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found with id: " + id));

      

        Doctors updatedDoctor = doctorRepository.save(existingDoctor); 
        return ResponseEntity.ok(updatedDoctor);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteDoctor(@PathVariable long id) { 
        try {
            doctorRepository.deleteById(id); 
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            throw new ResourceNotFoundException("Doctor not found with id: " + id);
        }
    }
}
