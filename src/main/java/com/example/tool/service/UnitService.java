package com.example.tool.service;


import com.example.tool.dto.UnitDto;
import com.example.tool.repositories.UnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;


@Service
public class UnitService {
    @Autowired
    UnitRepository unitRepository;

    public Set<UnitDto> getAllActiveUnits() {
        return unitRepository.findAll().stream()
                .map(UnitDto::from).collect(Collectors.toSet());
    }

}

