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
      name:'alicia gonzalez',
      phone:'3138621560',
      birthdate: '1988-09-02',
      address:'Calle Luna',
      mail: 'moon@gmail.com'
  },
  {
    id: 2,
    name:'lucio fernandez',
    phone:'3132287717',
    birthdate: '1996-03-15',
    address:'Calle Sol',
    mail: 'sun@gmail.com'
},
{
  id: 3,
  name:'maximo perez',
  phone:'3107859632',
  birthdate: '1993-04-06',
  address:'Calle Estrella',
  mail: 'star@gmail.com'
}
  ];

  filterContact:any = '';

  saveOrEdit():any{
    if(this.selectedContact.id === 0){
      this.selectedContact.id = this.contactArray.length + 1;
      this.contactArray.push(this.selectedContact);    
    }
    
    this.selectedContact = new Contact();
  }

  clickEdit(contact:Contact){
    this.selectedContact = contact;
  }

  delete(contactSelected:any){
    if(confirm('Estas seguro(a) de eliminar tu contacto?')){
      this.contactArray = this.contactArray.filter(contact => contact != contactSelected);
      this.selectedContact = new Contact;
    }
  }

  age(birthdate:any){
    const convertAge = new Date(birthdate)
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    return Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }
}
