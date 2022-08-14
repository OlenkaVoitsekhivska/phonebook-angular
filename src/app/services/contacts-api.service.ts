import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ContactsApiService {
baseUrl = 'http://localhost:3000/contacts';

  constructor(private http:HttpClient) { }

  getContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.baseUrl)
  }
addContacts(body:Contact):Observable<Contact>{
  return this.http.post<Contact>(this.baseUrl, body, httpOptions)
}

deleteContact(contact:Contact):Observable<Contact>{
  const urlDelete=`${this.baseUrl}/${contact.id}`
  return this.http.delete<Contact>(urlDelete)
}
}
