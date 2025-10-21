package com.barter.model;

import jakarta.persistence.*;

@Entity
@Table(name = "trades")
public class Trade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tradeId;

    @ManyToOne
    @JoinColumn(name = "offered_item_id")
    private Item offeredItem;

    @ManyToOne
    @JoinColumn(name = "requested_item_id")
    private Item requestedItem;

    private String status;

    // Getters and Setters
}
