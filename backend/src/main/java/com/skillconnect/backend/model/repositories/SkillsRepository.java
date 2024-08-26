package com.skillconnect.backend.model.repositories;

import com.skillconnect.backend.model.Skill;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillsRepository extends MongoRepository<Skill, String> {
}
