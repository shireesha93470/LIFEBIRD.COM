package com.restapi.springboot.mysql.rest.api.repository;

import com.restapi.springboot.mysql.rest.api.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DoctorRepository extends JpaRepository<Doctor,Integer> {
    @Query("select s from Doctor s where s.name like %?1%")
    List<Doctor> searchDoctors(String searchText);
}
