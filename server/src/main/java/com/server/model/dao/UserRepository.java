package com.server.model.dao;

import com.server.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

//@Repository
public interface UserRepository extends JpaRepository<User, String> {
    @Query("SELECT user_id from User")
    List<String> findAllId();
}
