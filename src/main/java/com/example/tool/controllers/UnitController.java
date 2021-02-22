package com.example.tool.controllers;

import com.example.tool.dto.UnitDto;
import com.example.tool.service.UnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;


@RestController
public class UnitController {
    @Autowired
    UnitService unitService;

    @RequestMapping("/unit")
    ResponseEntity<Set<UnitDto>> unit() {
        return ResponseEntity.ok(unitService.getAllActiveUnits());
    }
}
