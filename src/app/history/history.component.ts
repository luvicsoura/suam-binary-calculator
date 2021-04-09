import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result:number = 0;
  selectedIndex:number = null;

  historyList:Array< {addends: Array<string>, result: string} > = [
    {addends: ['1110', '1001010', '11101'], result: '1000'},
    {addends: ['1111', '1', '111'], result: '1111111111'}
  ];

  setIndex(index: number) {
    this.selectedIndex = index;
  }

  getCalculatedResult():string {
    return this.historyList[this.selectedIndex]?.result;
  }
}
