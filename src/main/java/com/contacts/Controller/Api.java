package com.contacts.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.contacts.Entity.Person;
import com.contacts.service.InterfaceContacts;

@RestController
@CrossOrigin (origins = {"*"})
@RequestMapping("/api")
public class Api {
	
	InterfaceContacts ContactsService;
	
	public Api(InterfaceContacts ContactsService) {
		this.ContactsService = ContactsService;
	}
	
	@GetMapping("/GetAll")
	public List<Person> GetAll() {
		return ContactsService.FindAll();
	}

	@GetMapping("/GetById/{id}")
	public Person GetById(@PathVariable Integer id) {
		return ContactsService.FindById(id);
	}
	
	@PostMapping("/NewContact")
	public void NewContact(@RequestBody Person person) {
		ContactsService.Save(person);
	}
	
	@DeleteMapping("/Delete/{id}")
	public String DeleteById(@PathVariable Integer id) {
		Person p = ContactsService.FindById(id);
		ContactsService.Delete(id);
		return p.getEmailAddress() + " erased!";
	}
	
	@PutMapping("/Update/{id}")
	public void Update(@RequestBody Person p, @PathVariable Integer id) {
		Person person = ContactsService.FindById(id);
		person.setName(p.getName());
		person.setLastName(p.getLastName());
		person.setEmailAddress(p.getEmailAddress());
		person.setPhone(p.getPhone());
		ContactsService.Save(person);
	}	
}
