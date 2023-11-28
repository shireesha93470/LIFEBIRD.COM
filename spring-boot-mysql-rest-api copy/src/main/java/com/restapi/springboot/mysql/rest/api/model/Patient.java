package com.restapi.springboot.mysql.rest.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String patient_name;

    @Column
    private String patient_mobile_number;

    @Column
    private String patient_email_id;

    @Column
    private String patient_password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPatient_name() {
        return patient_name;
    }

    public void setPatient_name(String patient_name) {
        this.patient_name = patient_name;
    }

    public String getPatient_mobile_number() {
        return patient_mobile_number;
    }

    public void setPatient_mobile_number(String patient_mobile_number) {
        this.patient_mobile_number = patient_mobile_number;
    }

    public String getPatient_email_id() {
        return patient_email_id;
    }

    public void setPatient_email_id(String patient_email_id) {
        this.patient_email_id = patient_email_id;
    }

    public String getPatient_password() {
        return patient_password;
    }

    public void setPatient_password(String patient_password) {
        this.patient_password = patient_password;
    }
}
