package com.restapi.springboot.mysql.rest.api.service.diseaseimpl;

import com.restapi.springboot.mysql.rest.api.model.Disease;
import com.restapi.springboot.mysql.rest.api.repository.DiseaseRepository;
import com.restapi.springboot.mysql.rest.api.service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiseaseServiceImpl implements DiseaseService {
    @Autowired
    DiseaseRepository diseaseRepository;

    @Override
    public Disease create(Disease disease) {
        return diseaseRepository.save(disease);
    }

    @Override
    public List<Disease> getAllDiseases() {
        return diseaseRepository.findAll();
    }

    @Override
    public Disease getDiseaseById(Integer id) {
        return diseaseRepository.findById(id).orElse(null);
    }

    @Override
    public Disease update(Disease disease) {
        return diseaseRepository.save(disease);
    }

    @Override
    public String deleteDisease(Integer id) {
        diseaseRepository.deleteById(id);
        return "User is deleted successfully from the database";
    }
}
