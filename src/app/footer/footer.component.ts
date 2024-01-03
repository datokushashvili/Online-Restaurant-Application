import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private fb: FormBuilder){}
  footerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  })

  onSubmit(){
    console.log(this.footerForm.value)
  }
}
