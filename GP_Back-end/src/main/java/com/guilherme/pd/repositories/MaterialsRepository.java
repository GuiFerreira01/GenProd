package com.guilherme.pd.repositories;

import com.guilherme.pd.model.Materials;
import com.guilherme.pd.model.RawMaterial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MaterialsRepository extends JpaRepository<Materials, Long> {

    Optional <Materials> findById(Long id);
    Optional <Materials> findByName(String string);
}
