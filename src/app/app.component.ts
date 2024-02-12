import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: any;

  ngOnInit(): void {
    this.form = new FormGroup({
      ContactNos: new FormArray([
        new FormControl('id : '),
        new FormControl('name : '),
      ])
    });
  }

  getContactControl(index: number): FormControl {
    const contactNosArray = this.form.get('ContactNos') as FormArray;
    return contactNosArray.at(index) as FormControl;
  }

  addContactNo(): void {
    (this.form.get('ContactNos') as FormArray).push(new FormControl());
  }

  setPreset(): void {
    const presetValues = ['435345', '5435645'];
    const contactNosArray = this.form.get('ContactNos') as FormArray;
    contactNosArray.patchValue(presetValues);
  }

  onsubmit(): void {
    console.log(this.form.get('ContactNos')?.value);
    console.log(this.form.value);
  }

  title = 'NestedFormArrayInAngular16';
}
