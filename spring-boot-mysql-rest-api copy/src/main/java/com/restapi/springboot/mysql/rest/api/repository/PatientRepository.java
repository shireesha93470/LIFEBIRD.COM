package com.restapi.springboot.mysql.rest.api.repository;

import com.restapi.springboot.mysql.rest.api.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PatientRepository extends JpaRepository<Patient, Integer> {
    @Query("select s from Patient s where s.patient_name like %?1%")
    List<Patient> searchPatients(String searchText);
}
