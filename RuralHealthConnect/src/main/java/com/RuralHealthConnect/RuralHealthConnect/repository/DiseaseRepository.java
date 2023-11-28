package com.RuralHealthConnect.RuralHealthConnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RuralHealthConnect.RuralHealthConnect.model.Disease;

public interface DiseaseRepository extends JpaRepository<Disease, Long> {
    
}
