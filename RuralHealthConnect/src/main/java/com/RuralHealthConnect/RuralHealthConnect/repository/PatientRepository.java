package com.RuralHealthConnect.RuralHealthConnect.repository;

import com.RuralHealthConnect.RuralHealthConnect.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}
