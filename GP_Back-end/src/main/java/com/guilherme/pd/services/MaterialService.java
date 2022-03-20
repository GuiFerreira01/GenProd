package com.guilherme.pd.services;

import com.guilherme.pd.model.RawMaterial;
import com.guilherme.pd.repositories.MaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaterialService {

    @Autowired
    private MaterialRepository repository;


    public List<RawMaterial> findAll(){
        return repository.findAll();
    }

}
