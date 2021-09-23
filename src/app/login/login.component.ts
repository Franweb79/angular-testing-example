import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public num1:number;
  public num2:number;

  public miFormulario:FormGroup
  constructor(_fb:FormBuilder) {

    this.num1=5;
    this.num2=5;

    this.miFormulario=_fb.group({
      email:new FormControl("test@test.com",Validators.required),
      password:new FormControl("AAAA")
    });
  // console.log( this.compare(5,5));
   }

   
   testClick(){
     console.log("tested click");
   }
  login(){

    console.log(this.miFormulario.value.email);

    if(this.miFormulario.value.email==="testValid@test.com" && this.miFormulario.value.password==="validPass" )
    {
      return "form_valid";
    }

    else{
      return "invalid_form";

    }

  }

  comparar(p_n1,p_n2){
    return p_n1===p_n2;
  }

  ngOnInit(): void {
  }

}
