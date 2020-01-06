import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  containBtnDisplay: boolean = false;
  outlineBtnDisplay: boolean = false;
  linkBtnDisplay: boolean = false;
  destructiveBtnDisplay: boolean = false;
  noBorderBtnDisplay: boolean = false;
  sizesBtnDisplay: boolean = false;
  squareBtnDisplay: boolean = false;
  rectangleBtnDisplay: boolean = false;

  constructor() {}

  ngOnInit() {}
}
