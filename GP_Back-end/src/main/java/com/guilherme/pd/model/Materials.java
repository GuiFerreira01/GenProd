package com.guilherme.pd.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@EqualsAndHashCode
@Entity
@Table(name = "tb_materials")
public class Materials {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="materials_id")
    private Long id;


    @Column(name="name")
    private String name;

    @Column(name="amount")
    private int amount;


    public Materials() {
    }

}
