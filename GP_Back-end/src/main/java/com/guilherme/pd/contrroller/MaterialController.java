package com.guilherme.pd.contrroller;


import com.guilherme.pd.model.RawMaterial;
import com.guilherme.pd.repositories.MaterialRepository;
import com.guilherme.pd.services.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping (value = "/api/v1")
public class MaterialController {

    @Autowired
    MaterialRepository repository;

    @GetMapping("/allmaterials")
    public List<RawMaterial> listAllMaterials() {
        return repository.findAll();
    }

    @GetMapping("/material/{id}")
    public Optional<RawMaterial> findById(@PathVariable(value = "id") Long id) {
        return repository.findById(id);
    }

    @PostMapping("/addmaterial")
    public RawMaterial saveMaterial(@RequestBody RawMaterial rawMaterial){
        return repository.save(rawMaterial);
    }

    @DeleteMapping("/deletematerial/{id}")
    public void deleteMaterial(@PathVariable(value = "id") Long id){
        repository.deleteById(id);
    }

    @PutMapping("/editmaterial")
    public RawMaterial changeMaterial(@RequestBody RawMaterial rawMaterial){
        return repository.save(rawMaterial);
    }
}
