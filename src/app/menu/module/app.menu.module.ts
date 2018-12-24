import { NgModule } from "@angular/core";
import { MenuComponent } from "../components/app.menu.smart.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MenuItem } from "../components/app.menu.item.component";
import { MenuService } from "../service/app.menu.service";

@NgModule({
    declarations:[
        MenuComponent,
        MenuItem,
    ],
    imports:[
        BrowserModule,
        FormsModule
    ],
    exports:[
        MenuComponent
    ],
    providers:[
        MenuService
        
    ]
})
export class MenuModule{}