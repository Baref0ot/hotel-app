import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

    private reservations: Reservation[] = [];
    


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
        alert("Created reservation! Reservation Id: " + reservation.id);     
    }// end addReservation


    // delete a reservation 
    deleteReservation(id: string): void {
      let index = this.reservations.findIndex(res => res.id === id);      
        if (index > -1) {
          this.reservations.splice(index, 1);
        }     
    }// end deleteReservation

    updateReservation(updatedReservation: Reservation): void {
      let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
      this.reservations[index] = updatedReservation;
    }// end updateReservation
    

}
