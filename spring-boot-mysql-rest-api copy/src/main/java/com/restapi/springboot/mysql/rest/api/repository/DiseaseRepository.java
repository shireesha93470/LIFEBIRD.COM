package com.restapi.springboot.mysql.rest.api.repository;

import com.restapi.springboot.mysql.rest.api.model.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiseaseRepository extends JpaRepository<Disease, Integer> {
}
