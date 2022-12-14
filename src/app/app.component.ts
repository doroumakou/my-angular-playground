import { Component, OnInit, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  public myForm: FormGroup = new FormGroup({
    myname: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.myForm.controls.myname.disable({ onlySelf: true, emitEvent: true });
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  handleClick(): void {
    this.controls.myname.markAsTouched();
  }

  isInvalid(fieldName): boolean {
    const control = this.controls[fieldName] as FormControl;
    return !control.valid && control.touched;
  }

  reset(): void {
    this.controls.myname.markAsUntouched();
  }
}
