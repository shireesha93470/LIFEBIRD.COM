package com.restapi.springboot.mysql.rest.api.controllers;

import com.restapi.springboot.mysql.rest.api.model.Disease;
import com.restapi.springboot.mysql.rest.api.service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/diseases")
public class DiseaseController {
    @Autowired
    DiseaseService diseaseService;
    @GetMapping("")
    public List<Disease> index() {
        return diseaseService.getAllDiseases();
    }

    @GetMapping("/{id}")
    public Disease getDisease(@PathVariable Integer id) {
        return diseaseService.getDiseaseById(id);
    }

    @RequestMapping(method = RequestMethod.POST, value="/create")
    @CrossOrigin( origins = "http://localhost:3306")
    public Disease saveDisease(@RequestBody Disease disease){
        return diseaseService.create(disease);
    }

    @PutMapping("/update")
    public  Disease updateDisease(@RequestBody Disease disease) {
        return diseaseService.update(disease);
    }

    @DeleteMapping("/delete/{id}")
    public  String deleteDisease(@PathVariable Integer id) {
        return diseaseService.deleteDisease(id);
    }
}
