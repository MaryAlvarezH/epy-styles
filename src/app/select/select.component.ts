import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
  public typeSelect: boolean = false;
  public variationSelect: boolean = false;
  public contentSelect: boolean = false;
  public labelSelect: boolean = false;

  public selectOne: boolean;
  public selectTwo: boolean;
  public selectThree: boolean;
  public selectFour: boolean;
  public selectFive: boolean;
  public selectSix: boolean;
  public selectSeven: boolean;
  public selectEight: boolean;
  public selectNine: boolean;
  public selectTen: boolean;
  public selectEleven: boolean;

  public optionOne: Number;
  public optionTwo: Number;
  public optionThree: Number;
  public optionFour: Number;
  public optionFive: Number;
  public optionSix: Number;
  public optionSeven: Number;
  public optionEight: String;
  public optionNine: Number;
  public optionTen: Number;
  public optionEleven: Number;

  public options: Array<any> = [1, 2, 3, 4];
  public optionsTwo: Array<any> = [
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
    this.optionsFiltered = this.optionsTwo;
  }

  filterEvent(e) {
    e.stopPropagation();
  }

  onChangeFilter() {
    this.optionsFiltered = this.optionsTwo.filter(opt =>
      opt.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}
