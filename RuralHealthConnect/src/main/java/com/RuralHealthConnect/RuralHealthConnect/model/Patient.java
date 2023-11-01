package com.RuralHealthConnect.RuralHealthConnect.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "patient")

public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "patientname")
    private String userName;

    @Column(name = "patientmobile")
    private String phoneNumber;

    @Column(name = "patientemailid")
    private String emailId;

    @Column(name = "patientpassword")
    private String password;

}
