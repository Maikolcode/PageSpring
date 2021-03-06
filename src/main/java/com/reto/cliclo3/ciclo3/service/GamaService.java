package com.reto.cliclo3.ciclo3.service;

import com.reto.cliclo3.ciclo3.model.Gama;
import com.reto.cliclo3.ciclo3.repository.GamaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GamaService {

    @Autowired
    private GamaRepository gamaRepository;

    public List<Gama> getAll() {
        return gamaRepository.getAll();
    }

    public Optional<Gama> getGama(int id) {
        return gamaRepository.getGama(id);
    }

    public Gama save(Gama g) {
        if (g.getIdGama() == null) {
            return gamaRepository.save(g);
        } else {
            Optional<Gama> gaux = gamaRepository.getGama(g.getIdGama());
            if (gaux.isEmpty()) {
                return gamaRepository.save(g);
            } else {
                return g;
            }
        }
    }

    public Gama update(Gama g) {
        if (g.getIdGama() != null) {
            Optional<Gama> go = gamaRepository.getGama(g.getIdGama());
            if (!go.isEmpty()) {
                if (g.getName() != null) {
                    go.get().setName(g.getName());
                }
                if (g.getDescription() != null) {
                    go.get().setDescription(g.getDescription());
                }
                return gamaRepository.save(go.get());
            }
        }
        return g;

    }

    public boolean deleteGama(int id) {
        Optional<Gama> g = getGama(id);
        if (!g.isEmpty()) {
            gamaRepository.deleteGama(g.get());
            return true;
        }
        return false;
    }
}
