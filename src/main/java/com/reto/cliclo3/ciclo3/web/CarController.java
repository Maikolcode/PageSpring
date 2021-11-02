package com.reto.cliclo3.ciclo3.web;

import com.reto.cliclo3.ciclo3.model.Car;
import com.reto.cliclo3.ciclo3.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Car")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping("/all")
    public List<Car> getCars(){
        return carService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Car> getCar(@PathVariable("id") int id){
        return carService.getCar(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Car save(@RequestBody Car c){
        return carService.save(c);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Car editCar(@RequestBody Car c){
        return carService.update(c);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean deleteCar(@PathVariable("id") int id){
        return carService.deleteCar(id);
    }

}
