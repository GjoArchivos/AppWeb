package com.bolsadeideas.spring.backend.rest.models.dao;

import org.springframework.data.repository.CrudRepository;
import com.bolsadeideas.spring.backend.rest.models.entity.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long>{
	
}
