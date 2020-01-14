import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ComponentsService {
  public components: Array<any> = [
    "fonts & colors",
    "buttons",
    "inputs",
    "selects",
    "tooltips",
    "loaders",
    "grid",
    "cards",
    "icons"
  ];

  public selectedComponent: number = 0;
  public componentSource = new Subject<number>();
  public selectedComponent$ = this.componentSource.asObservable();
  constructor() {}

  selectionChange(component) {
    this.selectedComponent = component;
    this.componentSource.next(this.selectedComponent);
  }
}
