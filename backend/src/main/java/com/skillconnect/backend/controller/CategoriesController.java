package com.skillconnect.backend.controller;

import com.skillconnect.backend.model.Category;
import com.skillconnect.backend.model.repositories.CategoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Service
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoriesController {
    @Autowired
    private CategoriesRepository categoriesRepository;

    @GetMapping("")
    List<Category> findAll() {
        return categoriesRepository.findAll();
    }
}
