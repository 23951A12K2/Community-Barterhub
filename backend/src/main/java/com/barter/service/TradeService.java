package com.barter.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.barter.model.Trade;
import com.barter.repository.TradeRepository;
import java.util.List;

@Service
public class TradeService {
    @Autowired
    private TradeRepository tradeRepository;

    public List<Trade> getAllTrades() { return tradeRepository.findAll(); }
    public Trade createTrade(Trade trade) { return tradeRepository.save(trade); }
}
