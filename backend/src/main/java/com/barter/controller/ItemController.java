package com.barter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.barter.model.Item;
import com.barter.service.ItemService;
import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/api/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public List<Item> getAllItems() { return itemService.getAllItems(); }

    @PostMapping
    public Item addItem(@RequestBody Item item) {
        return itemService.addItem(item);
    
    }
}
