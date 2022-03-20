package com.guilherme.pd.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@EqualsAndHashCode
@Entity
@Table(name = "tb_material")
public class RawMaterial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="material_id")
    private Long id;


    @Column(name="name")
    private String name;

    @Column(name="amount")
    private int amount;


    public RawMaterial() {
    }

    public RawMaterial(Long id, String name, int amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }



}
