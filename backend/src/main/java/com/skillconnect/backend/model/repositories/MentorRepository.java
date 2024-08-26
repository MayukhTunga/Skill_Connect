package com.skillconnect.backend.model.repositories;

import com.skillconnect.backend.model.MentorProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorRepository extends MongoRepository<MentorProfile, String> {
}
