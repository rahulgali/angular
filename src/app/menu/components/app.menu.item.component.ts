import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Menu } from "../model/app.menu.model";

@Component({
    selector:'menuItem-component',
    templateUrl:'./app.menu.item.component.html'

})
export class MenuItem{
    @Input() menuItem:Menu;
    @Output() order:EventEmitter<any>;

    quantityOfItem=[1,2,3,4,5,6,7,8,9,10];

    showDescriptionDiv:boolean=false;
    displayOrderDiv:boolean=false;

    showDescription(){
        this.showDescriptionDiv=true;
    }
    hideDescription(){
        this.showDescriptionDiv=false;
    }
    showOrderDiv(){
        this.displayOrderDiv=true;
    }

}