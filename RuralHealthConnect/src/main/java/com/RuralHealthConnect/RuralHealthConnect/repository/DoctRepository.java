package com.RuralHealthConnect.RuralHealthConnect.repository;

import com.RuralHealthConnect.RuralHealthConnect.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctRepository extends JpaRepository<Doctor, Long> {
}
