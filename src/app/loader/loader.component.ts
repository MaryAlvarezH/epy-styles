import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
  public botLoader: boolean;
  public barLoader: boolean;
  public gridLoader: boolean;
  public statLoader: boolean;
  public statLoader2: boolean;
  public divideLoader: boolean;
  public campaignLoader: boolean;
  public progressLoader: boolean;

  constructor() {}

  ngOnInit() {}
}
