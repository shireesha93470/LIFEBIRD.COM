package com.restapi.springboot.mysql.rest.api.service.patientimpl;

import com.restapi.springboot.mysql.rest.api.model.Patient;
import com.restapi.springboot.mysql.rest.api.repository.PatientRepository;
import com.restapi.springboot.mysql.rest.api.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    PatientRepository patientRepository;

    @Override
    public Patient create(Patient patient){
        return patientRepository.save(patient);
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Patient getPatientById(Integer id) {
        return patientRepository.findById(id).get();
    }

    @Override
    public Patient update(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public String deletePatient(Integer id) {
        patientRepository.deleteById(id);
        return "user is deleted successfully from the database";
    }

    @Override
    public List<Patient> searchPatients(String searchText) {
        List<Patient> al = patientRepository.searchPatients(searchText);
        return al;
    }
}
