import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='amit';
  framework='angular';
  uname=new FormControl();
  display()
  {
    alert('Welcome to Angular 16!!!!')
  }
  updateNames()
  {
    this.uname.setValue("AMITAVA")

  }

}
