import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
@Input() contact!:Contact;

@Output() onDeleteContact: EventEmitter<Contact> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteContact(contact:Contact){
    this.onDeleteContact.emit(contact);
  }

}
