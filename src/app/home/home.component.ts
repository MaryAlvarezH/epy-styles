import { Component, OnInit } from "@angular/core";
import { ComponentsService } from "../services/components.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public selectedComponent: Number;
  public componentSub: Subscription;

  constructor(private compservice: ComponentsService) {}

  ngOnInit() {
    this.selectedComponent = this.compservice.components[
      this.compservice.selectedComponent
    ];
    this.componentSub = this.compservice.selectedComponent$.subscribe(
      selComp => {
        this.selectedComponent = this.compservice.components[selComp];
      }
    );
  }

  ngOnDestroy() {
    this.componentSub.unsubscribe();
  }
}
