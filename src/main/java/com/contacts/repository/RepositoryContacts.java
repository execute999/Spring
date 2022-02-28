package com.contacts.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.contacts.Entity.Person;

@Repository
public interface RepositoryContacts extends CrudRepository<Person, Integer>{
	
}
