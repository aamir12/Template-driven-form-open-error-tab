import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BasePeriodsComponent } from './base-periods/base-periods.component';
import { ContractService } from './contract.service';
import { Project } from './model';

@Component({
  selector: 'app-component',
  templateUrl: './app-component.html',
  providers: [ContractService],
})
export class AppComponent implements OnInit {
  @ViewChild('contractForm') contractForm!: NgForm;
  project = new Project();
  baseActive = 0;
  modificationActive = 0;
  isSubmitted: boolean = false;

  @ViewChild(BasePeriodsComponent)
  basePeriods: BasePeriodsComponent;

  constructor(
    private contractService: ContractService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.mointerIsSubmit();
  }

  mointerIsSubmit() {
    this.contractService.isSubmitted$.subscribe((isSubmit) => {
      this.isSubmitted = isSubmit;
    });
  }

  onSubmit() {
    this.contractService.setFormSubmitted(true);
    if (this.contractForm.invalid) {
      setTimeout(() => {
        this.openInvalidTab();
      }, 0);
      return;
    }
    console.log('aamir', this.project);
  }

  openInvalidTab() {
    const allBasePeriods = this.document.querySelectorAll('app-base-period');
    if (allBasePeriods.length > 0) {
      for (let i = 0; i < allBasePeriods.length; i++) {
        let invalidInputs = allBasePeriods[i].querySelectorAll('.invalid');
        if (invalidInputs.length > 0) {
          this.basePeriods.baseActive = i;
          const allModifications =
            allBasePeriods[i].querySelectorAll('app-modification');
          if (allModifications.length > 0) {
            for (let j = 0; j < allModifications.length; j++) {
              const invalidModification =
                allModifications[j].querySelectorAll('.invalid');
              if (invalidModification.length > 0) {
                this.basePeriods.basePeriod.get(
                  i
                ).modifications.modificationActive = j;

                break;
              }
            }
          }
          break;
        }
      }
    }
  }
}
