import { Component, ViewChild, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "../service/app.home.service";

@Component({
    selector:`login-component`,
    templateUrl:`./app.home.login.html`,
    styleUrls:[`./app.home.login.css`]

})
export class LoginComponent implements OnInit{
    showInvalidUserMessage:boolean;
    loginForm:NgForm;
    constructor(private userService:UserService){}
    
    ngOnInit(){
       
    }
    submitLoginForm(loginForm){
        console.log(loginForm);
        console.log(loginForm.value.enteredUsername);
        console.log(loginForm.value.passwordEntered);
        this.userService.checkIfValidUser(loginForm.value.enteredUsername,loginForm.value.passwordEntered)
                .subscribe((response:boolean)=>{

                    // response ? this.showInvalidUserMessage=false: this.showInvalidUserMessage=;

                    if(response== true){
                        console.log("Valid User")
                        this.showInvalidUserMessage=false;
                    }
                    else{
                        console.log("Invalid User")
                        this.showInvalidUserMessage=true;
                    }
                    
            
                });

    }

   
}