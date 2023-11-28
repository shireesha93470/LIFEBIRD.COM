package com.restapi.springboot.mysql.rest.api.service.doctorimpl;

import com.restapi.springboot.mysql.rest.api.model.Doctor;
import com.restapi.springboot.mysql.rest.api.repository.DoctorRepository;
import com.restapi.springboot.mysql.rest.api.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {
    @Autowired
    DoctorRepository doctorRepository;

    @Override
    public Doctor create(Doctor doctor){
        return doctorRepository.save(doctor);
    }

    @Override
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor getDoctorById(Integer id) {
        return doctorRepository.findById(id).get();
    }

    @Override
    public Doctor update(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    public String deleteDoctor(Integer id) {
        doctorRepository.deleteById(id);
        return "user is deleted successfully from the database";
    }

    @Override
    public List<Doctor> searchDoctors(String searchText) {
        List<Doctor> al = doctorRepository.searchDoctors(searchText);
        return al;
    }
}
