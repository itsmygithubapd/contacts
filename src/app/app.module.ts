import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';


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

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDialogComponent,
    
  ],
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
  entryComponents: [
    ContactDialogComponent
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: [] },],
  bootstrap: [AppComponent]
})
export class AppModule { }
