import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tooltip",
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"]
})
export class TooltipComponent implements OnInit {
  public tooltipDisplay: boolean;
  public tooltipActive: boolean;
  public tooltipActiveTwo: boolean;

  constructor() {}

  ngOnInit() {}
}
