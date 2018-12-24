import { Component, OnInit } from "@angular/core";
import { Menu } from "../model/app.menu.model";
import { MenuService } from "../service/app.menu.service";

@Component({
    selector:'menu-component',
    templateUrl:'./app.menu.smart.component.html'

})
export class MenuComponent implements OnInit{
    menuList:Menu[];
    errorMessage: string;
    
    constructor(private menuService:MenuService){}
    ngOnInit(){
        this.menuService.getAllItems().subscribe(
            (response:Menu[])=>{this.menuList=response},
            (error) => {this.errorMessage = error;
            console.log(error)}
        );
    }

}