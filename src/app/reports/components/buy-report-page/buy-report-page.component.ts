import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ReportsService} from "../../services/reports.service";

@Component({
  selector: 'app-buy-report-page',
  templateUrl: './buy-report-page.component.html',
  styleUrls: ['./buy-report-page.component.scss']
})
export class BuyReportPageComponent {
  form = this.fb.group({
    dateFrom: ['', Validators.required],
    dateTo: ['', Validators.required],
  });
  constructor(
      private fb: FormBuilder,
      private reportsService: ReportsService
  ) {}

  onSubmit() {
    if (!this.submitButtonDisabled()) {
      this.reportsService.createBuyReport(
          this.form.value.dateFrom!,
          this.form.value.dateTo!
      );
      this.form.reset();
    }
  }

  submitButtonDisabled(): boolean {
    return (
        !this.form.valid || this.form.value.dateFrom! > this.form.value.dateTo!
    );
  }
}
