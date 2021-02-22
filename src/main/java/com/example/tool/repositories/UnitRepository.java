package com.example.tool.repositories;

import com.example.tool.models.Unit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UnitRepository extends JpaRepository<Unit, Long> {
    List<Unit> findAllByActiveTrue();
}
