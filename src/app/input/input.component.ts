import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  public lineInput: boolean = false;
  public outlineInput: boolean = false;
  public labelInput: boolean = false;
  public iconInput: boolean = false;
  public textarea: boolean = false;

  constructor() {}

  ngOnInit() {}
}
