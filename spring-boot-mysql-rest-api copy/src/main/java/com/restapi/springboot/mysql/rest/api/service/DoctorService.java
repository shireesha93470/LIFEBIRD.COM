package com.restapi.springboot.mysql.rest.api.service;

import com.restapi.springboot.mysql.rest.api.model.Doctor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DoctorService {
    public Doctor create(Doctor doctor);

    public List<Doctor> getAllDoctors();

    public Doctor getDoctorById(Integer id);

    public Doctor update(Doctor doctor);

    public  String deleteDoctor(Integer id);

    public List<Doctor> searchDoctors(String query);
}
