import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ComponentsService } from "../services/components.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-aside-menu",
  templateUrl: "./aside-menu.component.html",
  styleUrls: ["./aside-menu.component.scss"]
})
export class AsideMenuComponent implements OnInit {
  @Input() typeMenu: String;
  @Output() smallMenuActive = new EventEmitter<Boolean>();
  public smallMenuDisplay: Boolean = false;
  public components: Array<any>;
  public selectedComponent: Number;
  public componentSub: Subscription;

  constructor(private compservice: ComponentsService) {}

  ngOnInit() {
    this.components = this.compservice.components;
    this.selectedComponent = this.compservice.selectedComponent;
    this.componentSub = this.compservice.selectedComponent$.subscribe(
      selComp => {
        this.selectedComponent = selComp;
      }
    );
  }

  selectElement(i, originMenu?) {
    this.compservice.selectionChange(i);

    if (originMenu === "smallMenu") {
      this.smallMenuChange();
    }
  }

  ngOnDestroy() {
    this.componentSub.unsubscribe();
  }

  smallMenuChange() {
    this.smallMenuDisplay = !this.smallMenuDisplay;
    this.smallMenuActive.emit(this.smallMenuDisplay);
  }
}
