package com.contacts.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.contacts.Entity.Person;

public interface InterfaceContacts {
	public List<Person> FindAll();
	public Person FindById(Integer id);
	public void Save(Person person);
	public void Delete(Integer id);
}
