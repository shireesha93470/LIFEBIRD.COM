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
@Table(name = "doctor")

public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "experience")
    private String Experience;

    @Column(name = "qualification")
    private String Qualification;

    @Column(name = "specialization")
    private String Specialization;

    @Column(name = "address")
    private String Address;

    @Column(name = "emailid")
    private String emailId;

    @Column(name = "password")
    private String password;

}
