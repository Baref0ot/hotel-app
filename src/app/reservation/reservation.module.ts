import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // used for FormGroups
    ReactiveFormsModule // for form validation in a TypeScript class
  ]
})
export class ReservationModule { }
