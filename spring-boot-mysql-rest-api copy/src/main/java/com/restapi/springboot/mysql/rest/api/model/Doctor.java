// package com.restapi.springboot.mysql.rest.api.model;

// import javax.persistence.Column;
// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Id;
// import javax.persistence.Table;

// @Entity
// @Table(name="Doctorsdata")
// public class Doctor {

//     @Id
//     @GeneratedValue(strategy = GenerationType.AUTO)
//     private int id;

//     @Column
//     private String image;

//     @Column
//     private String name;

//     @Column
//     private String specialization;

//     @Column
//     private String experience;

//     @Column
//     private int phone_number;

   

//     public int getId() {
//         return id;
//     }

//     public void setId(int id) {
//         this.id = id;
//     }

//     public String getimage() {
//         return image;
//     }

//     public void setimage(String image) {
//         this.image = image;
//     }

//     public String getname() {
//         return name;
//     }

//     public void setname(String name) {
//         this.name = name;
//     }

//     public String getspecialization() {
//         return specialization;
//     }

//     public void setspecialization(String specialization) {
//         this.specialization = specialization;
//     }

//     public String getexperience() {
//         return experience;
//     }

//     public void setexperience(String experience) {
//         this.experience = experience;
//     }

//     public int getPhone_number() {
//         return phone_number;
//     }

//     public void setPhone_mobile(String phone_number) {
//         this.phone_number = phone_number;
//     }

   
// }
package com.restapi.springboot.mysql.rest.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="doctorsdata")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String image;

    @Column
    private String name;

    @Column
    private String specialization;

    @Column
    private String experience;

    @Column
    private String phonenumber;

    // Getter and setter methods for other properties...

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getphonenumber() {
        return phonenumber;
    }

    public void setPhone_number(String phonenumber) {
        this.phonenumber = phonenumber;
    }
}
