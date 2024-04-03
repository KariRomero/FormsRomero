import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { noStateValidator } from '../../utils/validators';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private formBuilder: FormBuilder){
  };

  customerForm = this.formBuilder.group({
    email:['',[
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
      Validators.required
    ]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')]],
    address:['',[Validators.required]],
    city:['',[Validators.required]],
    state:['',[Validators.required, noStateValidator]],
    zip:['', [Validators.required, Validators.pattern('^[0-9]+$')]]
  });

  get emailControl(){
    return this.customerForm.get('email')
  };

  get passwordControl(){
    return this.customerForm.get('password')
  };

  get addressControl(){
    return this.customerForm.get('address')
  };

  get cityControl(){
    return this.customerForm.get('city')
  };

  get stateControl(){
    return this.customerForm.get('state')
  };

  get zipControl(){
    return this.customerForm.get('zip')
  };

  onSubmit() : void {
    Swal.fire({
      icon:'success',
      title:'Done',
      text:'Correct shipping information'
    })
  }

}
