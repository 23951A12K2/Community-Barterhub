package com.barter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.barter.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
