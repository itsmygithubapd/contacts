import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Component} from '@angular/core';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContactsComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 
  
});

@Component({
  selector: 'app-contacts',
  template: '<div></div>',
})
class ContactsComponent {
  constructor() {}
}