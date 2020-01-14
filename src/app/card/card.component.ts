import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  public cardDisplay: boolean;
  public campaignCard: boolean;

  constructor() {}

  ngOnInit() {}
}
