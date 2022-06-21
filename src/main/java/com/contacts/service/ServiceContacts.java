package com.contacts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.contacts.Entity.Person;
import com.contacts.repository.RepositoryContacts;

@Service
public class ServiceContacts implements InterfaceContacts {

	RepositoryContacts ContactsService;
	
	public ServiceContacts(RepositoryContacts ContactsService) {
		this.ContactsService = ContactsService;
	}
	
	@Override
	public List<Person> FindAll() {
		return (List<Person>) ContactsService.findAll();
	}

	@Override
	public Person FindById(Integer id) {
		return ContactsService.findById(id).orElse(null);
	}

	@Override
	public void Save(Person person) {
		ContactsService.save(person);
	}

	@Override
	public void Delete(Integer id) {
		ContactsService.deleteById(id);
	}

	
}
