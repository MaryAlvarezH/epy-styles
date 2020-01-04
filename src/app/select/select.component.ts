import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
  public selectOne: boolean;
  public selectTwo: boolean;
  public selectThree: boolean;
  public selectFour: boolean;
  public selectFive: boolean;
  public selectSix: boolean;
  public selectSeven: boolean;
  public selectEight: boolean;
  public selectNine: boolean;

  public optionOne: String;
  public optionTwo: String;
  public optionThree: String;
  public optionFour: String;
  public optionFive: String;
  public optionSix: String;
  public optionSeven: Number;
  public optionEight: Number;

  public options: Array<any> = [
    "maximaze revenue",
    "maximaze clicks",
    "maximaze conversions",
    "maximaze impressions",
    "maximaze profit"
  ];

  public optionsTwo: Array<any> = ["Editor", "Administrator"];

  public optionsThree: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  public optionsFour: Array<any> = [
    "blue",
    "pink",
    "red",
    "yellow",
    "black",
    "purple",
    "orange",
    "green"
  ];

  public optionsFiltered: Array<any>;
  public filter: any;
  constructor() {}

  ngOnInit() {
    this.optionsFiltered = this.optionsFour;
  }

  filterEvent(e) {
    e.stopPropagation();
  }

  onChangeFilter() {
    this.optionsFiltered = this.optionsFour.filter(opt =>
      opt.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}
