import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const myFormBuilder:FormBuilder=new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule ],
      declarations: [ LoginComponent]
      /*providers:[FormBuilder]*/
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("equal", ()=>{
    expect(component.num1).toEqual(component.num2);
  });
 /* it('should detect form is valid', ()=>{
    fixture.nativeElement.querySelector('#myButton').click();
    expect(component.login()).toEqual('invalid_form');
  });*/

  it('should validate correct user and pass',()=>{

   // let nombreInput=fixture.nativeElement.querySelector('#nameId');



    //const event = createNewEvent('input');
    component.miFormulario=myFormBuilder.group({
      email:"testValid@test.com",
      password: 'validPass'
    });

    fixture.nativeElement.querySelector('#myButton').click();


    expect(component.login()).toEqual('form_valid');

  });

});
