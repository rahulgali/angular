import { Component, OnChanges, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../service/app.home.service";
import { Observable } from "rxjs";
import {debounceTime} from 'rxjs/internal/operators';
import 'rxjs';


@Component({
    selector:'register-component',
    templateUrl:'./app.home.register.html',
    styleUrls:['./app.home.login.css']

})
export class RegisterComponent implements OnInit{
    signUpForm:FormGroup;
    isEmailRegistered:boolean;
    show:boolean=false;
    
    name:string="rahul";
    constructor(private userService:UserService){}

    ngOnInit(){
        this.signUpForm = new FormGroup({
            
            userName:       new FormControl(null,[this.nameCannotBeRahul.bind(this)],),
            userEmail:      new FormControl(null,[Validators.email],[this.emailValidationUsingObservable.bind(this)]),
            'userPassword':   new FormControl(null,[this.validatePassword]),
            'userPhone':      new FormControl(null),
            'userIsAdmin':    new FormControl(null,[],[])
        })
    }

    registerUser(){
        console.log(this.signUpForm);
        this.userService.registerUser(this.signUpForm.value).subscribe();
        
    }

    nameCannotBeRahul(control:FormControl):{[errorMessage:string]:boolean}{
        if(this.name===control.value){
            return {invalidName:true};
        }
        return null;
    }
    showMethod(){
        this.show=true;
    }
    cancelMethod(){
        if(this.signUpForm.touched){
            console.log("FOrm Touched");
        }
        else{
            console.log("Form not touched");
        }
    }

    // unamePattern = "^[a-z0-9_-]{8,15}$";
    // use property binding of pattern on password field as below.
    //  Works same as synchronous validator validatePassword
    // [pattern]="unamePattern"

    // Synchronous validator. 
    // This can also be written in app.home.validations.ts file
    validatePassword(control:FormControl): {[s:string] : boolean} {
        let passwordEntered: string = control.value;
        
        if(passwordEntered != null && passwordEntered != "") {
            let pattern="^[a-zA-Z0-9#!]{9,15}$";
            // 
            if(!passwordEntered.match(pattern)) {
               return {patternNotMatched:true}
               //return null;
            } else {
                return null;
            }
        } else {
            return null;
        }

    }

    // Asynchronous validator using Promise
    emailValidationUsingPromise(control:FormControl):Promise<any> | Observable<any>{
        let emailTaken:boolean;
        const promise = new Promise<any>((resolve,reject)=>{
            this.userService.checkIfEmailRegistered(control.value).subscribe((response:boolean)=>{emailTaken=response});
            setTimeout(()=>{
                if(emailTaken===true){
                    // check type and value
                    this.isEmailRegistered=true;
                    // console.log("Email already Registered? "+ this.isEmailRegistered +"So, use another email")
                    resolve ({'emailAlreadyRegistered':true});
                }else{
                    // console.log("Can use this email");
                    this.isEmailRegistered=true;
                    return null;
                }
                
            },1000);
        });
        return promise;
    }

    // Asynchronous validator using Observable
    emailValidationUsingObservable(control: FormControl) {    
        const observable = new Observable(() => {
            this.userService.checkIfEmailRegistered(control.value).pipe(debounceTime(1000)).
            subscribe((emailTaken: boolean) => {
                if(emailTaken) {
                    this.isEmailRegistered=true;
                    console.log("Email already Registered? "+ this.isEmailRegistered +"So, use another email")
                    return {'emailTaken': true};
                } else {
                    this.isEmailRegistered=false;
                    console.log("Email already Registered? "+ this.isEmailRegistered+"Can use this email");
                    return null;
                }
            })
        });
        return observable;
    }
    // emailValidationUsingObservable(control:FormControl):Observable<any> | Promise<any>{
    //     let emailUsed:boolean;
    //     const observable = new Observable<any>(()=>{
    //         this.userService.checkIfEmailRegistered(control.value).pipe(debounceTime(1000))
    //             .subscribe((response:boolean)=>{emailUsed=response});
    //         if(emailUsed=true){
    //             return ({'emailAlreadyRegisteredObs':true});
    //         }
    //         else 
    //         return null;
    //     });
    //     return observable;
    // }
}