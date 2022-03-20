package com.guilherme.pd.repositories;

import com.guilherme.pd.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByOrderByCostDesc();

}
