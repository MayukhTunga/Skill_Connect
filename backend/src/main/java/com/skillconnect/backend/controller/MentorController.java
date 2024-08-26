package com.skillconnect.backend.controller;

import com.skillconnect.backend.model.MentorProfile;
import com.skillconnect.backend.model.repositories.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@Service
@RequestMapping("/api/mentors")
public class MentorController {
    @Autowired
    private MentorRepository mentorRepository;

    @GetMapping("")
    List<MentorProfile> findAllMentors() {
        return mentorRepository.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void createMentor(@RequestBody MentorProfile mentorProfile) {
        mentorProfile.setCreatedAt(new Date());
        mentorProfile.setUpdatedAt(new Date());
        mentorRepository.save(mentorProfile);
    }
}
