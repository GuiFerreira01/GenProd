package com.guilherme.pd.contrroller;


import com.guilherme.pd.model.Materials;
import com.guilherme.pd.model.RawMaterial;
import com.guilherme.pd.repositories.MaterialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping (value = "/api/v1")
public class MaterialsController {

    @Autowired
    MaterialsRepository repository;

    @GetMapping("/materials/allmaterials")
    public List<Materials> listAllMaterials() {
        return repository.findAll();
    }

    @GetMapping("/materials/material/{id}")
    public Optional<Materials> findById(@PathVariable(value = "id") Long id) {
        return repository.findById(id);
    }

    @PostMapping("/materials/addmaterial")
    public Materials saveMaterial(@RequestBody Materials materials){
        return repository.save(materials);
    }

    @DeleteMapping("/materials/deletematerial/{id}")
    public void deleteMaterial(@PathVariable(value = "id") Long id){
        repository.deleteById(id);
    }

    @PutMapping("/materials/editmaterial")
    public Materials changeMaterial(@RequestBody Materials materials){
        return repository.save(materials);
    }
}
