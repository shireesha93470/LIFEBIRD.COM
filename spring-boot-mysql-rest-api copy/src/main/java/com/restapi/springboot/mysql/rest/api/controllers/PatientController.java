package com.restapi.springboot.mysql.rest.api.controllers;

import com.restapi.springboot.mysql.rest.api.model.Patient;
import com.restapi.springboot.mysql.rest.api.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {
    @Autowired
    PatientService patientService;
    @GetMapping("")
    public List<Patient> index() {
        return patientService.getAllPatients();
    }

    @GetMapping("/{id}")
    public Patient getPatient(@PathVariable Integer id) {
        return patientService.getPatientById(id);
    }

    @RequestMapping(method = RequestMethod.POST, value="/create")
    @CrossOrigin( origins = "http://localhost:3306")
    public Patient savePatient(@RequestBody Patient patient){
        return patientService.create(patient);
    }

    @PutMapping("/update")
    public Patient updatePatient(@RequestBody Patient patient) {
        return patientService.update(patient);
    }

    @DeleteMapping("/delete/{id}")
    public  String deletePatient(@PathVariable Integer id) {
        return patientService.deletePatient(id);
    }

    @GetMapping("/search")
    public List<Patient> searchPatients(@RequestParam("query") String query) {
        return patientService.searchPatients(query);
    }
}
