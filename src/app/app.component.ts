import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {gte} from './gte.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-validate';
  myForm = new FormGroup({
    numVal: new FormControl('', [gte])
  });

  get numVal(){
    return this.myForm.get('numVal');
  }
  onSubmit() {
    console.log(this.myForm.value);
  }
}
