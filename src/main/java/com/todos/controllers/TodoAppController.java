package com.todos.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.todos.entities.Todos;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class TodoAppController {

	private TodoAppRepository repository;

    public TodoAppController(TodoAppRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(value="/todos", method = RequestMethod.GET)
    public Collection<Todos> todos() {
    	return this.repository.findAll();
    }
    
    @RequestMapping(value="/save", method = RequestMethod.POST)
    public Long save(@RequestBody Todos todo){
    	if(todo.getId() == null){
    		todo.setCompleted(false);
    	}
    	this.repository.save(todo);
    	return 0L;
    }
    
    @RequestMapping(value="/delete", method = RequestMethod.POST)
    public Long delete(@RequestBody Todos todo){
    	
    		this.repository.delete(todo);
    	return 0L;
    }
    
    
    

 

}