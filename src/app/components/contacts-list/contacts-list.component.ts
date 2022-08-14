import { Component, OnInit } from '@angular/core';
import { ContactsApiService } from 'src/app/services/contacts-api.service';
import { Contact } from 'src/app/models/contact';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
filter:string='';
contacts:Contact[]=[];


  constructor(private contactsApi:ContactsApiService) { }

  ngOnInit(): void {
    this.contactsApi.getContacts().subscribe(contacts=>this.contacts=contacts)
  }

  addContact(contact:Contact){
    this.contactsApi.addContacts(contact).subscribe(contact=>this.contacts.push(contact))
  }
  deleteContact(contact:Contact){
    console.log('delete meh')
    this.contactsApi.deleteContact(contact).subscribe(()=>this.contacts = this.contacts.filter((c) => c.id !== contact.id))
  }

}
