import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDialogComponent } from './contact-dialog.component';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'


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
import {MatDialogRef} from '@angular/material';

describe('ContactDialogComponent', () => {
  let component: ContactDialogComponent;
  let fixture: ComponentFixture<ContactDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDialogComponent ],
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
      providers: [{ provide: MAT_DIALOG_DATA, useValue: [] },
      {provide: MatDialogRef, useValue: {}}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
