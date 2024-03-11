import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { BasePeriodsComponent } from './base-periods/base-periods.component';
import { ModificationsComponent } from './modifications/modifications.component';

@Injectable()
export class ContractService {
  private isSubmitted = new BehaviorSubject<boolean>(false);
  isSubmitted$ = this.isSubmitted.asObservable();

  setFormSubmitted(value: boolean) {
    this.isSubmitted.next(value);
  }
}
