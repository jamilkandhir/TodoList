package com.todos.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Todos {

    @Id
    @GeneratedValue
    private Long id;
    private String taskName;
    private boolean isCompleted;

    public Todos() {}
    
    

	public Todos(String taskName, boolean isCompleted) {
		super();
		this.taskName = taskName;
		this.isCompleted = isCompleted;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

    
}