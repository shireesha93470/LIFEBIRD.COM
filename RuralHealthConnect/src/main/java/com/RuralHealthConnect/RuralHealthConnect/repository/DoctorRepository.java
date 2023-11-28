package com.RuralHealthConnect.RuralHealthConnect.repository;

import com.RuralHealthConnect.RuralHealthConnect.model.Doctors;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctors, Long> {
    
}
