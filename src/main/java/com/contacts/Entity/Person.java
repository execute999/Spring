package com.contacts.Entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "TablePerson")
public class Person implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int IdContact;
	private String Name;
	private String LastName;
	private String Phone;
	private String EmailAddres;
	
	public int getIdContact() {
		return IdContact;
	}
	public void setIdContact(int idContact) {
		IdContact = idContact;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getPhone() {
		return Phone;
	}
	public void setPhone(String phone) {
		Phone = phone;
	}
	public String getEmailAddress() {
		return EmailAddres;
	}
	public void setEmailAddress(String emailAddress) {
		EmailAddres = emailAddress;
	}
	
}
