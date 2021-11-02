package com.reto.cliclo3.ciclo3.service;

import com.reto.cliclo3.ciclo3.model.Gama;
import com.reto.cliclo3.ciclo3.model.Message;
import com.reto.cliclo3.ciclo3.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll(){
        return messageRepository.getAll();
    }

    public Optional<Message> getMessage(int id){
        return messageRepository.getMessage(id);
    }

    public Message save(Message m){
        if(m.getIdMessage() == null){
            return messageRepository.save(m);
        }else{
            Optional<Message> maux = messageRepository.getMessage(m.getIdMessage());
            if(maux.isEmpty()){
                return messageRepository.save(m);
            }else{
                return m;
            }
        }
    }
    public Message update(Message m) {
        if (m.getIdMessage() != null) {
            Optional<Message> go = messageRepository.getMessage(m.getIdMessage());
            if (!go.isEmpty()) {
                if (m.getMessageText() != null) {
                    go.get().setMessageText(m.getMessageText());
                }
                return messageRepository.save(go.get());
            }
        }
        return m;

    }

    public boolean deleteMessage(int id) {
        Optional<Message> m = getMessage(id);
        if (!m.isEmpty()) {
            messageRepository.deleteMessage(m.get());
            return true;
        }
        return false;
    }

}
