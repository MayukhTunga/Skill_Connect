package com.skillconnect.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Document(collection = "mentors")
public class MentorProfile {
    @Id
    String _id;
    String userId;
    List<String> skills;
    String calendlyUrl;
    List<Map<String, Date>> availableSlots;
    Double rating;
    Date createdAt;
    Date updatedAt;

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public String getCalendlyUrl() {
        return calendlyUrl;
    }

    public void setCalendlyUrl(String calendlyUrl) {
        this.calendlyUrl = calendlyUrl;
    }

    public List<Map<String, Date>> getAvailableSlots() {
        return availableSlots;
    }

    public void setAvailableSlots(List<Map<String, Date>> availableSlots) {
        this.availableSlots = availableSlots;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
