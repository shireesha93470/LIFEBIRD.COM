package com.RuralHealthConnect.RuralHealthConnect.controller;

import com.RuralHealthConnect.RuralHealthConnect.Exception.ResourceNotFoundException;
import com.RuralHealthConnect.RuralHealthConnect.model.Doctor;
import com.RuralHealthConnect.RuralHealthConnect.repository.DoctRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3306")

@RestController
@RequestMapping("doctors")
public class DoctController {
    @Autowired
    private DoctRepository doctRepository;

    @GetMapping
    public List<Doctor> getAllDoctors(){
        return doctRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value="")
    @ResponseBody

    public Doctor createDocots(@RequestBody Doctor doctor){
        return doctRepository.save(doctor);
    }

    @GetMapping("{id}")
    public ResponseEntity<Doctor> getDoctorId(@PathVariable long id){
        Doctor doctor = doctRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("doctor not exist :" +id));
        return ResponseEntity.ok(doctor);
    }
    @PutMapping("{id}")
    public ResponseEntity<Doctor> Updatedoctor(@PathVariable long id,@RequestBody Doctor doctorDetails){
        Doctor Updatedoctor = doctRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("doctor id not exist:" +id));


        doctRepository.save(Updatedoctor);
        return ResponseEntity.ok(Updatedoctor);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteDoctor(@PathVariable long id){
        Doctor doctor = doctRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("doctor not exist id : "+id));
        doctRepository.delete(doctor);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

