package com.barter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.barter.model.Item;



public interface ItemRepository extends JpaRepository<Item, Long> { }
