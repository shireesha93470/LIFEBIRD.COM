package com.RuralHealthConnect.RuralHealthConnect.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "doctor")
public class Doctors {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "DoctorImage")
    private String image;

    @Column(name = "DoctorName")
    private String name;

    @Column(name = "Doctorspecialization")
    private String specialization;

    @Column(name = "DoctorExperience")
    private String Experience;

    @Column(name="DoctorMobile")
    private String mobile;

    @Column(name="DoctorLocation")
    private String location;
    
}
