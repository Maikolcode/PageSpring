package com.reto.cliclo3.ciclo3.repository;

import com.reto.cliclo3.ciclo3.model.Gama;
import com.reto.cliclo3.ciclo3.repository.crud.GamaCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class GamaRepository {

    @Autowired
    private GamaCrudRepository gamaCrudRepository;

    public List<Gama> getAll(){
        return (List<Gama>) gamaCrudRepository.findAll();
    }

    public Optional<Gama> getGama(int id){
        return gamaCrudRepository.findById(id);
    }

    public Gama save(Gama g){
        return gamaCrudRepository.save(g);
    }

    public void deleteGama(Gama g){
        gamaCrudRepository.delete(g);
    }

}
