import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'

import { ContactsComponent } from './contacts.component';

import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material';


describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatDividerModule,
        MatListModule,
        MatDialogModule
      ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: [] },],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.debugElement.componentInstance;
    component.contacts=[];
    component.step=-1;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('addContact  method should add new contact to contacts array', () => {
    component.addContact(testContact);
    expect(component.contacts.length).toEqual(1);
    expect(component.contacts[0]).toEqual(testContact);
  });

  it('updateContact  method should update contact to contacts array', () => {
    component.contacts=[testContact];
    component.updateContact(testContact2,0);
    expect(component.contacts.length).toEqual(1);
    expect(component.contacts[0]).toEqual(testContact2);
  });

  it('deleteContact method should delete element at zero when index is 0', () => {
    component.contacts=[testContact,testContact2,testContact3];
    component.deleteContact(0);
    expect(component.contacts.length).toEqual(2);
    expect(component.contacts[0]).toEqual(testContact2);
  });

  it('deleteContact method should delete element at the end when index is one less length of the array', () => {
    component.contacts=[testContact,testContact2,testContact3];
    component.deleteContact(2);
    expect(component.contacts.length).toEqual(2);
    expect(component.contacts[0]).toEqual(testContact);
  });


  it('deleteContact method should delete element  when index is not 0 or one less than the length of the array', () => {
  
    component.contacts=[testContact,testContact2,testContact3];
    component.deleteContact(1);
    expect(component.contacts.length).toEqual(2);
    expect(component.contacts[1]).toEqual(testContact3);
  });

  it('setStep function should set the step value', () => {
    component.step = 0;
    component.setStep(3);
    expect(component.step).toEqual(3)
   });

  it('prevStep function should set the step value', () => {
    component.step = 2;
    component.prevStep();
    expect(component.step).toEqual(1)
   });

   it('nextStep function should set the step value', () => {
    component.step = 0;
    component.nextStep();
    expect(component.step).toEqual(1)
   });

});

const testContact={
  name:"dkslkfjlkds",
  phone:9984,
  email:"djlfsh@dsjfjsa"
}
const testContact2={
  name:"lsdjlksfj",
  phone:4834579,
  email:"sldkjflj@ljfdls"
}

const testContact3={
  name:"dkfsdj",
  phone:999999,
  email:"sdljflsj@djlsfkj"
}