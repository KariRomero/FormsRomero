import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private formBuilder: FormBuilder){
  };

  customerForm = this.formBuilder.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    address:['',[Validators.required]],
    city:['',[Validators.required]],
    state:['',[Validators.required]],
    zip:['',[Validators.required]]
  });

  get emailControler(){
    return this.customerForm.get('email')
  };

  get passwordControler(){
    return this.customerForm.get('password')
  };

  get addressControler(){
    return this.customerForm.get('address')
  };

  get cityControler(){
    return this.customerForm.get('city')
  };

  get stateControler(){
    return this.customerForm.get('state')
  };

  get zipControler(){
    return this.customerForm.get('zip')
  };

}
