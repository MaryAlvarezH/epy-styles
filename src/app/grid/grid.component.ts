import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  deskOneDisplay: boolean = false;
  deskTwoDisplay: boolean = false;
  deskThreeDisplay: boolean = false;
  deskFourDisplay: boolean = false;
  deskFiveDisplay: boolean = false;
  deskSixDisplay: boolean = false;
  deskSevenDisplay: boolean = false;
  deskEightDisplay: boolean = false;
  deskNineDisplay: boolean = false;
  deskTenDisplay: boolean = false;
  deskElevenDisplay: boolean = false;
  deskTwelveDisplay: boolean = false;

  deskOffsetOneDisplay: boolean = false;
  deskOffsetTwoDisplay: boolean = false;
  deskOffsetThreeDisplay: boolean = false;
  deskOffsetFourDisplay: boolean = false;
  deskOffsetFiveDisplay: boolean = false;
  deskOffsetSixDisplay: boolean = false;
  deskOffsetSevenDisplay: boolean = false;
  deskOffsetEightDisplay: boolean = false;
  deskOffsetNineDisplay: boolean = false;
  deskOffsetTenDisplay: boolean = false;
  deskOffsetElevenDisplay: boolean = false;

  tabletOneDisplay: boolean = false;
  tabletTwoDisplay: boolean = false;
  tabletThreeDisplay: boolean = false;
  tabletFourDisplay: boolean = false;
  tabletFiveDisplay: boolean = false;
  tabletSixDisplay: boolean = false;
  tabletSevenDisplay: boolean = false;
  tabletEightDisplay: boolean = false;

  tabletOffsetOneDisplay: boolean = false;
  tabletOffsetTwoDisplay: boolean = false;
  tabletOffsetThreeDisplay: boolean = false;
  tabletOffsetFourDisplay: boolean = false;
  tabletOffsetFiveDisplay: boolean = false;
  tabletOffsetSixDisplay: boolean = false;
  tabletOffsetSevenDisplay: boolean = false;

  mobileOneDisplay: boolean = false;
  mobileTwoDisplay: boolean = false;
  mobileThreeDisplay: boolean = false;
  mobileFourDisplay: boolean = false;

  mobileOffsetOneDisplay: boolean = false;
  mobileOffsetTwoDisplay: boolean = false;
  mobileOffsetThreeDisplay: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
