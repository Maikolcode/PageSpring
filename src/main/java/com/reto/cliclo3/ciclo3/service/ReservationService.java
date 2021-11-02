package com.reto.cliclo3.ciclo3.service;

import com.reto.cliclo3.ciclo3.model.Reservation;
import com.reto.cliclo3.ciclo3.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll(){
        return reservationRepository.getAll();
    }

    public Optional<Reservation> getReservation(int id){
        return reservationRepository.getReservation(id);
    }

    public Reservation save(Reservation r){
        if(r.getIdReservation() == null){
            return reservationRepository.save(r);
        }else{
            Optional<Reservation> raux = reservationRepository.getReservation(r.getIdReservation());
            if(raux.isEmpty()){
                return reservationRepository.save(r);
            }else{
                return r;
            }
        }
    }

    public Reservation update(Reservation r) {
        if (r.getIdReservation() != null) {
            Optional<Reservation> go = reservationRepository.getReservation(r.getIdReservation());
            if (!go.isEmpty()) {
                if (r.getStartDate() != null) {
                    go.get().setStartDate(r.getStartDate());
                }
                if (r.getDevolutionDate() != null) {
                    go.get().setDevolutionDate(r.getDevolutionDate());
                }
                return reservationRepository.save(go.get());
            }
        }
        return r;

    }

    public boolean deleteGama(int id) {
        Optional<Reservation> g = getReservation(id);
        if (!g.isEmpty()) {
            reservationRepository.deleteReservation(g.get());
            return true;
        }
        return false;
    }
}
