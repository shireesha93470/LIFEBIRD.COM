package com.restapi.springboot.mysql.rest.api.service;

import com.restapi.springboot.mysql.rest.api.model.Disease;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DiseaseService {
    public Disease create(Disease disease);

    public List<Disease> getAllDiseases();

    public Disease getDiseaseById(Integer id);

    public Disease update(Disease disease);

    public  String deleteDisease(Integer id);

}
