import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact';



@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Output() onAddContact: EventEmitter<Contact> = new EventEmitter();

  name!:string;
  number!:string;

  constructor(){}

  ngOnInit(): void {
  }


  onSubmit() {
    if (!this.name) {
      alert('Please add a task!');
      return;
    }

    const newContact: Contact = {
      id:JSON.stringify(new Date()),
      name: this.name,
      number: this.number,
    };

    this.onAddContact.emit(newContact);

    this.name = '';
    this.number = '';
  }

  
}
