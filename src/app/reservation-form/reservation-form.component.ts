import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{

  // properties
  reservationForm: FormGroup = new FormGroup({});  


  // dependency injection of FormBuilder called formBuilder.
  constructor(private formBuilder: FormBuilder){

  }

  // methods
  ngOnInit(): void {
      this.reservationForm = this.formBuilder.group({
        checkInDate: ['', Validators.required],
        checkOutDate: ['', Validators.required],
        guestName: ['', Validators.required],
        guestEmail: ['', [Validators.required, Validators.email]],
        roomNumber: ['', Validators.required]  
      })
  }



  onSubmit() {
    if(this.reservationForm.valid){
      alert("valid");
    }else{
      alert("Not valid");
    }
  }// end onSubmit



}
