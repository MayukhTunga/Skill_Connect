package com.skillconnect.backend.controller;

import com.skillconnect.backend.model.Skill;
import com.skillconnect.backend.model.repositories.SkillsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@Service
@RequestMapping("/api/skills")
public class SkillsController {
    @Autowired
    private SkillsRepository skillsRepository;

    @GetMapping("")
    List<Skill> findAllSkills() {
        return skillsRepository.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void createSkill(@RequestBody Skill skill) {
        skill.setCreatedAt(new Date());
        skill.setUpdatedAt(new Date());
        skillsRepository.save(skill);
    }

}
