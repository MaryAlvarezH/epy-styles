import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-font-color",
  templateUrl: "./font-color.component.html",
  styleUrls: ["./font-color.component.scss"]
})
export class FontColorComponent implements OnInit {
  contentColorsDisplay: boolean = false;
  fontTypesDisplay: boolean = false;
  fontColorsDisplay: boolean = false;

  constructor() {}

  ngOnInit() {}
}
