import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app-component';
import { BasePeriodsComponent } from './base-periods/base-periods.component';
import { BasePeriodComponent } from './base-periods/base-period/base-period.component';
import {
  AP3DateAdapter,
  AP3DateParserFormatter,
} from './ap3-date-parser-formatter';
import { ModificationsComponent } from './modifications/modifications.component';
import { ModificationComponent } from './modifications/modification/modification.component';

@NgModule({
  imports: [BrowserModule, NgbModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    BasePeriodsComponent,
    BasePeriodComponent,
    ModificationsComponent,
    ModificationComponent,
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: NgbDateAdapter, useClass: AP3DateAdapter },
    { provide: NgbDateParserFormatter, useClass: AP3DateParserFormatter },
  ],
})
export class AppModule {}
