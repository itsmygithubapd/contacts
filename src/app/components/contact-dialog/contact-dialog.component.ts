import { Component, Inject,EventEmitter} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import contact from '../../models/contact';
@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent{
  onAdd = new EventEmitter();
  newContact:contact;
  constructor( public dialogRef: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA)  private contact: contact) {
      
    }

  ngOnInit() {
    this.newContact = this.contact;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSaveClick() {
    this.onAdd.emit(new contact(this.newContact.name,this.newContact.phone,this.newContact.email));
    this.newContact = new contact('',0,'')
    this.dialogRef.close();
  }
}
