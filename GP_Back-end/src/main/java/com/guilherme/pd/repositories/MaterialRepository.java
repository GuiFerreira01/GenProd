package com.guilherme.pd.repositories;

import com.guilherme.pd.model.RawMaterial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MaterialRepository extends JpaRepository<RawMaterial, Long> {

    Optional <RawMaterial> findById(Long id);
    Optional <RawMaterial> findByName(String string);
}
