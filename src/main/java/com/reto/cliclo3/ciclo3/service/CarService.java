package com.reto.cliclo3.ciclo3.service;
import com.reto.cliclo3.ciclo3.model.Car;
import com.reto.cliclo3.ciclo3.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    public List<Car> getAll(){
        return  carRepository.getAll();
    }

    public Optional<Car> getCar(int id){
        return carRepository.getCar(id);
    }

    public Car save(Car c){
        if(c.getIdCar()==null){
            return carRepository.save(c);
        }else{
            Optional<Car> caux = carRepository.getCar(c.getIdCar());
            if(caux.isEmpty()){
                return carRepository.save(c);
            }else{
                return c;
            }
        }

    }

}
