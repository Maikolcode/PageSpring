package com.reto.cliclo3.ciclo3.service;

import com.reto.cliclo3.ciclo3.model.Client;
import com.reto.cliclo3.ciclo3.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAll(){
        return clientRepository.getAll();
    }

    public Optional<Client> getClient(int id){
        return clientRepository.getClient(id);
    }

    public Client save(Client cl){
        if(cl.getIdClient() == null){
            return clientRepository.save(cl);
        }else{
            Optional<Client> claux = clientRepository.getClient(cl.getIdClient());
            if(claux.isEmpty()){
                return clientRepository.save(cl);
            }else{
                return cl;
            }
        }
    }
}
