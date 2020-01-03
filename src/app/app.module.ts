import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AsideMenuComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
