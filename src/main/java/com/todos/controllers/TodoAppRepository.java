package com.todos.controllers;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.todos.entities.Todos;

@RepositoryRestResource
interface TodoAppRepository extends JpaRepository<Todos, Long> {
}
