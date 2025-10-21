package com.barter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.barter.model.Trade;

public interface TradeRepository extends JpaRepository<Trade, Long> { }
