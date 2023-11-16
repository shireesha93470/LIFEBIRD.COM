package com.restapi.springboot.mysql.rest.api.service;

import com.restapi.springboot.mysql.rest.api.model.Disease;
import java.util.List;

public interface DiseaseService {
    Disease create(Disease disease);

    List<Disease> getAllDiseases();

    Disease getDiseaseById(Integer id);

    Disease update(Disease disease);

    String deleteDisease(Integer id);
}
