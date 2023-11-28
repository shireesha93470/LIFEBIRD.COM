package com.restapi.springboot.mysql.rest.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String doctor_image;

    @Column
    private String doctor_name;

    @Column
    private String doctor_specialisation;

    @Column
    private String doctor_experience;

    @Column
    private String doctor_mobile;

    @Column
    private String doctor_location;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDoctor_image() {
        return doctor_image;
    }

    public void setDoctor_image(String doctor_image) {
        this.doctor_image = doctor_image;
    }

    public String getDoctor_name() {
        return doctor_name;
    }

    public void setDoctor_name(String doctor_name) {
        this.doctor_name = doctor_name;
    }

    public String getDoctor_specialisation() {
        return doctor_specialisation;
    }

    public void setDoctor_specialisation(String doctor_specialisation) {
        this.doctor_specialisation = doctor_specialisation;
    }

    public String getDoctor_experience() {
        return doctor_experience;
    }

    public void setDoctor_experience(String doctor_experience) {
        this.doctor_experience = doctor_experience;
    }

    public String getDoctor_mobile() {
        return doctor_mobile;
    }

    public void setDoctor_mobile(String doctor_mobile) {
        this.doctor_mobile = doctor_mobile;
    }

    public String getDoctor_location() {
        return doctor_location;
    }

    public void setDoctor_location(String doctor_location) {
        this.doctor_location = doctor_location;
    }
}
