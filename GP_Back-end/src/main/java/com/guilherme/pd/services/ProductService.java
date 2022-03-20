package com.guilherme.pd.services;

import com.guilherme.pd.model.Product;
import com.guilherme.pd.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;


    public List<Product> findProducts() {
        return repository.findByOrderByCostDesc();
    }


    public Optional<Product> findById(Long id) {
        return repository.findById(id);
    }


    public Product saveProduct(Product product){
        return repository.save(product);
    }

}
