import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

    private reservations: Reservation[] = [];
    
    constructor(){
      let savedReservations = localStorage.getItem("reservations");
      this.reservations = savedReservations? JSON.parse(savedReservations) : [];
    }

    //CRUD

    //get all reservations
    getReservations(): Reservation[] {
      return this.reservations;
    }// end getReservations

    // get specific reservation by Id 
    getReservationById(id: string): Reservation | undefined{    
      return this.reservations.find(res => res.id == id);
    }// end getReservationById

    // add a reservation
    addReservation(reservation: Reservation): void {
        this.reservations.push(reservation);
       localStorage.setItem("reservations", JSON.stringify(this.reservations));    
    }// end addReservation


    // delete a reservation 
    deleteReservation(id: string): void {
      let index = this.reservations.findIndex(res => res.id === id);      
        if (index > -1) {
          this.reservations.splice(index, 1);
          localStorage.setItem("reservations", JSON.stringify(this.reservations));
        }  
        
         
    }// end deleteReservation

    updateReservation(updatedReservation: Reservation): void {
      let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
      this.reservations[index] = updatedReservation;

      localStorage.setItem("reservations", JSON.stringify(this.reservations)); 
    }// end updateReservation
    

}
