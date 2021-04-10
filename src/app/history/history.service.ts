import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HistoryOperation } from './history.operation';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private history: HistoryOperation[] = [];
  private historySubject = new BehaviorSubject<HistoryOperation[]>([]);

  constructor() { }

  getHistory() {
    return this.historySubject.asObservable();
  }

  addOperationToHistory({...operation} : HistoryOperation) {
    this.updateHistory([...this.history, operation])
  }

  clearHistory() {
    this.updateHistory([]);
  }

  private updateHistory(history: HistoryOperation[]) {
    this.history = history;
    this.historySubject.next(this.history);
  }
}
