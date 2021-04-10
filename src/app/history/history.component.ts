import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryOperation } from './history.operation';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  result:number = 0;
  selectedIndex:number = null;

  historyList: Observable<HistoryOperation[]>;

  constructor(private historyService: HistoryService) {
    this.historyList = this.historyService.getHistory();
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }

  clear() {
    this.historyService.clearHistory();
  }
}
