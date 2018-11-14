import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import contact from '../../models/contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts:Array<contact>;
  selectedContact:number;
  step:number;

  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.contacts=[];
    this.step=-1;
  }

  newContact(){
    this.openDialog("add",new contact('',null,''));
  }
  addContact(contact){
    this.contacts.push(contact);
  }
  updateContact(contact,index:number){
    this.contacts[index] = contact;
  }
  deleteContact(index:number){
    if(index===0){
      this.contacts.shift();
    }else if(index<this.contacts.length-1){
      this.contacts=[...this.contacts.splice(0,index),...this.contacts.splice(index)]
    }else{
      this.contacts.pop();
    }
    this.setStep(-1)
  }

  edit(contact:contact,index:number){
    this.selectedContact=index;
    this.openDialog('update',contact);
  }
  openDialog(operation:string,contact?:contact): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '250px',
      data: contact
    });
    const sub = dialogRef.componentInstance.onAdd.subscribe((contact: any) => {
      if(operation==='update'){
        this.updateContact(contact,this.selectedContact);
      }else{
        this.addContact(contact)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      sub.unsubscribe();
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


}
