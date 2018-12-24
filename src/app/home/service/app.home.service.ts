import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/app.home.user.model";

const User_Service_URL="http://localhost:8080/restaurant/";
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': ''
    })
  };
@Injectable()
export class UserService{

    constructor(private httpClient:HttpClient){}

    checkIfValidUser(email, password){
       return this.httpClient.get(User_Service_URL +"validateUser/"+ email +"/" +password);
    }

    checkIfEmailRegistered(email){
        return this.httpClient.get(User_Service_URL + "checkIfEmailRegistered/" + email);
    }
    registerUser(user:User){
        return this.httpClient.post(User_Service_URL + "registerUser",user,httpOptions);
    }

}