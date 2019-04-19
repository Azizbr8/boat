import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'inscription',
  templateUrl: 'inscription.html',
  styleUrls: ['inscription.scss']
})
export class InscriptionComponent implements OnInit, OnDestroy {
  unamePattern = "^[a-z]{1,25}$";
  pwdPattern = "^[a-z0-9._%+-]{6,30}$";
  numPattern = "^((\\+91?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  agePattern = "^[0-9]{1,2}$";
  userForm = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
    prenom: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
    password: ['', [Validators.required, Validators.pattern(this.pwdPattern)]],
    numTel: ['', Validators.pattern(this.numPattern)],
    email: ['', Validators.pattern(this.emailPattern)],
    age: ['', Validators.pattern(this.agePattern)],
  });
  isValidFormSubmitted = null;
  constructor(private formBuilder:FormBuilder, private router: Router) {
  }
  ngOnInit() {
    this.isValidFormSubmitted = false;
  }
  
  ngOnDestroy() {
  }

  onFormSubmit(form: NgForm) {
    console.log(this.userForm.invalid);
    console.log(this.userForm);
    
    if (!this.userForm.invalid) {
      console.log(this.userForm.value);
      
      Meteor.call('CreateUser', this.userForm.value , (err, res) => {
        console.log(err);
        console.log(res);
        
        
      });
    }
  }

  get nom() {
    return this.userForm.get('nom');
  }
  get prenom() {
    return this.userForm.get('prenom');
  }
  get password() {
      return this.userForm.get('password');
  }  
  get numTel() {
      return this.userForm.get('numTel');
  }    
  get email() {
      return this.userForm.get('email');
  }
  get age() {
    return this.userForm.get('age');
  }
  

  connexionLink() {
    this.router.navigate(['/connexion']);
  }
}
