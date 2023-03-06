package com.bolsadeideas.spring.backend.rest.models.service;

import java.util.List;
import com.bolsadeideas.spring.backend.rest.models.entity.Cliente;

public interface IClienteService {
	
	public List <Cliente> findAll();
	
	public  Cliente findById(Long id);
	
	public Cliente save(Cliente cliente);
	
	public void delete(Long id);
	
	
}
