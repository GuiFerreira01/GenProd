package com.guilherme.pd.contrroller;

import com.guilherme.pd.model.Product;
import com.guilherme.pd.model.RawMaterial;
import com.guilherme.pd.repositories.ProductRepository;
import com.guilherme.pd.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/v1")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private ProductService service;

    @GetMapping("/allproducts")
    public List<Product> listAllProducts() {
        return service.findProducts();
    }

    @GetMapping("/product/{id}")
    public Optional<Product> findById(@PathVariable(value = "id") Long id) {
        return service.findById(id);
    }

    @PostMapping("/addproduct")
    public Product saveProduct(@RequestBody Product product){
        return service.saveProduct(product);
    }

    @PutMapping("/editproduct")
    public Product changeProduct(@RequestBody Product product){
        return repository.save(product);
    }

    @DeleteMapping("/deleteproduct/{id}")
    public Product deleteProduct(@PathVariable(value = "id") Long id){
        repository.deleteById(id);
        return null;
    }
}
