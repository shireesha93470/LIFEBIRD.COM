package com.restapi.springboot.mysql.rest.api.service;

import com.restapi.springboot.mysql.rest.api.model.Patient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PatientService {
    public Patient create(Patient patient);

    public List<Patient> getAllPatients();

    public Patient getPatientById(Integer id);

    public Patient update(Patient patient);

    public  String deletePatient(Integer id);

    public List<Patient> searchPatients(String query);
}
