package com.skillconnect.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class LandingPageController {
    @GetMapping("")
    String landingPage() {
        return "Skill connect backend";
    }
}