import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AsideMenuComponent } from "./aside-menu/aside-menu.component";
import { ButtonComponent } from "./button/button.component";
import { FontColorComponent } from "./font-color/font-color.component";
import { InputComponent } from "./input/input.component";
import { SelectComponent } from "./select/select.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideMenuComponent,
    ButtonComponent,
    FontColorComponent,
    InputComponent,
    SelectComponent,
    TooltipComponent,
    LoaderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
