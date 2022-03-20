package com.guilherme.pd.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

import javax.persistence.*;

@Setter
@Getter
@EqualsAndHashCode
@Entity
@Table(name = "tb_product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "product_id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "cost")
    private String cost;

    @Column(name = "amount")
    private int amount;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "Product_material", joinColumns = @JoinColumn( name="product_fk" ), inverseJoinColumns = @JoinColumn(name="material_fk"))
    private List<RawMaterial> material;

    public Product() {
    }



}
