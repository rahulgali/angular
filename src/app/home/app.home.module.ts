import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/app.home.login";
import { RegisterComponent } from "./components/app.home.register";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UserService } from "./service/app.home.service";

@NgModule({
    declarations:[
        LoginComponent,
        RegisterComponent,

    ],
    imports:[
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    exports:[
        LoginComponent
    ],
    providers:[UserService]

})
export class HomeModule{}