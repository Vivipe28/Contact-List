import { Component } from '@angular/core';
import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedContact:Contact = new Contact();

  contactArray:Contact[] = [
    {
      id: 1,
      name:'Pedro',
      phone:'3138621560',
      birthdate: '1988-09-02',
      address:'Calle Luna',
      mail: 'moon@gmail.com'
  },
  {
    id: 2,
    name:'Laura',
    phone:'3132287717',
    birthdate: '1996-03-15',
    address:'Calle Sol',
    mail: 'sun@gmail.com'
}
  ];

  saveOrEdit(){
    if(this.selectedContact.id === 0){
      this.selectedContact.id = this.contactArray.length + 1;
      this.contactArray.push(this.selectedContact);
    }
    
    this.selectedContact = new Contact();
  }

  clickEdit(contact:Contact){
    this.selectedContact = contact;
  }

  delete(){
    if(confirm('Estas seguro(a) de eliminar tu contacto?')){
      this.contactArray = this.contactArray.filter(contact => contact != this.selectedContact);
      this.selectedContact = new Contact;
    }
  }
}
