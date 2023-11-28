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
@Table(name = "disease")
public class Disease {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private long id;

    @Column(name = "DiseaseImage")
    private String image;

    @Column(name = "DiseaseName")
    private String Name;

    public Long getid(Long id){ return id;}
    public void setid(Long id){this.id=id;}

    public String getImage(){return image;}
    public void setImage(String image) {
        this.image = image;
    }

    public String getName(){return Name;}
    public void setName(String Name) {
        this.Name =Name;
    }
}
