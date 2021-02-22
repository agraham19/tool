package com.example.tool.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public classUnitController {
    @Autowired
    UnitService unitService;

    @RequestMapping("/unit")
    ResponseEntity<Set<UnitDto>> unit() {
        return ResponseEntity.ok(unitService.getAllActiveUnits());
    }
}
