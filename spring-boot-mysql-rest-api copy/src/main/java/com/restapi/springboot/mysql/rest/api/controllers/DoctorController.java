package com.restapi.springboot.mysql.rest.api.controllers;

import com.restapi.springboot.mysql.rest.api.model.Doctor;
import com.restapi.springboot.mysql.rest.api.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctors")
public class DoctorController {
    @Autowired
    DoctorService doctorService;
    @GetMapping("")
    public List<Doctor> index() {
        return doctorService.getAllDoctors();
    }

    @GetMapping("/{id}")
    public Doctor getDoctor(@PathVariable Integer id) {
        return doctorService.getDoctorById(id);
    }

    @RequestMapping(method = RequestMethod.POST, value="/create")
    @CrossOrigin( origins = "http://localhost:3306")
    public Doctor saveDoctor(@RequestBody Doctor doctor){
        return doctorService.create(doctor);
    }

    @PutMapping("/update")
    public Doctor updateDisease(@RequestBody Doctor doctor) {
        return doctorService.update(doctor);
    }

    @DeleteMapping("/delete/{id}")
    public  String deleteDoctor(@PathVariable Integer id) {
        return doctorService.deleteDoctor(id);
    }

    @GetMapping("/search")
    public List<Doctor> searchDoctors(@RequestParam("query") String query) {
        return doctorService.searchDoctors(query);
    }
}
