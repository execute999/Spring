import React , { Component } from 'react';
import './App.css';
import "primereact/resources/primereact.min.css"; 
import "primereact/resources/themes/lara-light-teal/theme.css";  
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Menubar } from 'primereact/menubar';
import { Panel } from 'primereact/panel';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './App.css';
import { PersonService } from './service/Contact'
import { PrimeIcons } from 'primereact/api';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default class App extends Component{
  constructor() {
    super();
    this.state = { // calling state to my main variables
      visible : false,
      person: { // this person is dinamic when i am filling the form
        idContact : null,
        name : null,
        lastName : null,
        emailAddress : null,
        phone : null,
      },
      selectedContact : { // is important when i want to update !!!!!!
        idContact : null,
        name : null,
        lastName : null,
        emailAddress : null,
        phone : null,
      },
      
    }
   
    this.PersonService = new PersonService(); // Calling to /Service/Contact.js/Class

    // define methods
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);

    this.items = [ // options 
      {
        label : 'NEW CONTACT',
        icon: PrimeIcons.PLUS ,
        command : () => { this.ShowSaveDialog()}
      },
      {
        label : 'DELETE',
        icon : PrimeIcons.TRASH,
        command : () => { this.delete() }
      },
      {
        label : 'UPDATE',
        icon :  PrimeIcons.PENCIL ,
        command : () => { this.ShowEditDialog() }
      },
    ]

    this.footer = ( // a simple button, called when is necesary
      <div>
        <Button label ="SAVE" onClick = {this.save} />
      </div>
    )

  }

  componentDidMount() { 
    // allows me to execute the react when the component 
    //is already placed in the Document Object Model DOM
    this.PersonService.getAll().then(data => this.setState({contacts : data}));
    this.PersonService.getAll().then(data => {
      console.log(data); // showing in conosle
    });
    this.setState({
      
    });
  }

  save() {
    this.PersonService.save(this.state.person).then( data => {
      console.log("-------SAVING---------");
      console.log(data);
      console.log("----------------");
      this.setState({
        visible : false,
      })
    });
    this.PersonService.getAll().then(data => {this.setState({ contacts : data })});
  }

  delete() {
    if(window.confirm("Are you sure of delete this contact?")) {
      this.PersonService.delete(this.state.selectedContact.idContact).then(data => {
        console.log("THIS IS MY DATA, I'M DELETING!!!!");
        console.log(data);
      })
    }
    this.PersonService.getAll().then(data => {this.setState({ contacts : data })});
  }

  render() {
   return (
     <div>
        
        <Panel header = "USERS" style = {{ width : '90%' , margin : '30px auto 0px'}}>
            <Menubar model = {this.items} />
            <br></br>
            <DataTable value={this.state.contacts} selectionMode = "single" selection = {this.state.selectedContact} onSelectionChange = {e => this.setState({ selectedContact: e.value } )} > 
                <Column field = "idContact" header= "ID"></Column>
                <Column field = "name" header= "Name"></Column>
                <Column field = "lastName" header= "LastName"></Column>
                <Column field = "emailAddress" header= "Email Address"></Column>
                <Column field = "phone" header= "Phone"></Column>
            </DataTable>
        </Panel>

        <Dialog header = "Register a new Contact" footer = {this.footer} visible = {this.state.visible} style = {{width : '60%'}} modal = {true} onHide ={()=>this.setState({visible: false})}>          
          
          <span className='p-float-label'>
            <InputText value = {this.state.person.name} id="name" onChange={(e) => this.setState(prevState => {
              let person = Object.assign({} , prevState.person);
              person.name = e.target.value
              return {person} ;
            })}  />
            <label htmlFor='Name'>Name</label>
          </span>
      
          <br></br>

          <span className='p-float-label'>
            <InputText value = {this.state.person.lastName} id="lastname" onChange={(e) => this.setState(prevState => {
              let person = Object.assign({} , prevState.person);
              person.lastName = e.target.value
              return {person} ;
            })}  />
            <label htmlFor='Last Name'>Last Name</label>
          </span>
          
          <br></br>
          <span className='p-float-label'>
            <InputText value = {this.state.person.emailAddress } id="emailAddres" onChange={(e) => this.setState(prevState => {
              let person = Object.assign({} , prevState.person);
              person.emailAddress = e.target.value
              console.log(this.state.selectedContact);
              return {person} ;
            })}  />
            <label htmlFor='Email Address'>Email Address</label>
          </span>

          <br></br>
          <span className='p-float-label'>
            <InputText value = {this.state.person.phone } id="phone" onChange={(e) => this.setState(prevState => {
              let person = Object.assign({} , prevState.person);
              person.phone = e.target.value
              console.log(this.state.person);
              return {person} ;
            })}  />
            <label htmlFor='Phone'>Phone</label>
          </span>
        </Dialog>
     </div>
   );
  }

  ShowSaveDialog() {
    this.setState({
      visible : true,
      person: {
        idContact : null,
        name : null,
        lastName : null,
        emailAddress : null,
        phone : null,
      }
    })
  }

  ShowEditDialog() {
    this.setState({
      visible : true,

      person: {
        idContact : this.state.selectedContact.idContact,
        name : this.state.selectedContact.name,
        lastName : this.state.selectedContact.lastName,
        emailAddress : this.state.selectedContact.emailAddress,
        phone : this.state.selectedContact.phone,
      },

    })
  }
}