import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../../authservice.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  SignInForm= new FormGroup({

    email: new FormControl(''),
    password:new FormControl('')
  })

  constructor(private auth:AuthserviceService,private router:Router){}
  
  ngOnInit(): void {
  
    
  }
  
  token:string =''
  
  onSubmit():void{
    console.log(this.SignInForm.valid);
    const { email, password } = this.SignInForm.value;
    if(this.SignInForm.valid){
  
      this.auth.login(email,password).subscribe((result)=>{
      alert("Success")
          // console.log(result.access_token);
          console.log(result);   
          
          this.auth.setToken(result.access_token)
        //  console.log( this.auth.getToken());
          this.router.navigate(['main']);
  
      
         
      },
      (err:Error)=>{
        console.log(err);
        (err.message);
      }
  
      )
    }
    
  
  }
  }
  