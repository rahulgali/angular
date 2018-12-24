import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const Menu_Service_URL="http://localhost:8081/restaurant/menu/";

@Injectable()
export class MenuService{
    constructor(private httpClient:HttpClient){}

    getAllItems(){
       return this.httpClient.get(Menu_Service_URL + "getAllItems");
    }


}