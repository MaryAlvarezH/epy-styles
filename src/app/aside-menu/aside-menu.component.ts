import { Component, OnInit } from "@angular/core";
import { ComponentsService } from "../services/components.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-aside-menu",
  templateUrl: "./aside-menu.component.html",
  styleUrls: ["./aside-menu.component.scss"]
})
export class AsideMenuComponent implements OnInit {
  public components: Array<any>;
  public selectedComponent: Number;
  public componentSub: Subscription;

  constructor(private compservice: ComponentsService) {}

  ngOnInit() {
    this.components = this.compservice.components;
    this.componentSub = this.compservice.selectedComponent$.subscribe(
      selComp => {
        this.selectedComponent = selComp;
      }
    );
  }

  selectElement(i) {
    this.compservice.selectionChange(i);
  }

  ngOnDestroy() {
    this.componentSub.unsubscribe();
  }
}
