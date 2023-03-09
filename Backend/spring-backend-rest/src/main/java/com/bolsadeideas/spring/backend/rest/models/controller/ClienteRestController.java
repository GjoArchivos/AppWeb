package com.bolsadeideas.spring.backend.rest.models.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.bolsadeideas.spring.backend.rest.models.entity.Cliente;
import com.bolsadeideas.spring.backend.rest.models.service.IClienteService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class ClienteRestController {
	
	@Autowired
	private IClienteService clienteService;
	
	//LISTA TODOS LOS CLIENTES
	@GetMapping("/clientes")
	@ResponseStatus(HttpStatus.OK)
	public List<Cliente> index(){
		return clienteService.findAll();
	}
	
	//MUESTRA SOLO UN CLIENTE
	@GetMapping("/clientes/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<?> show(@PathVariable Long id) {
		Cliente cliente = null;
		Map<String ,Object> responder = new HashMap<>();
		
		try {
			cliente = clienteService.findById(id);
			
		} catch (DataAccessException e) {
			responder.put("mensaje", "Error al realizar la consulta en la base de datos");
			responder.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(responder, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		if(cliente == null) {
			responder.put("mensaje", "El cliente ID: ".concat(id.toString().concat(" no existe en la base de datos!")));
			return new ResponseEntity<Map<String, Object>>(responder, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
	}
	
	//CREA UN CLIENTE
	@PostMapping("/clientes")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente create(@RequestBody Cliente cliente) {
		//cliente.setCreateAt(new Date());
		return clienteService.save(cliente);
	}
	
	//ACTUALIZA UN CLIENTE
	@PutMapping("/clientes/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente update(@RequestBody Cliente cliente, @PathVariable Long id) {
		//buscar el id del cliente a actualizar
		Cliente clienteActual = clienteService.findById(id);
		//inserta datos
		clienteActual.setNombre(cliente.getNombre());
		clienteActual.setApellido(cliente.getApellido());
		clienteActual.setEmail(cliente.getEmail());
		//se envian los datos a actualzar del clienteActual
		return clienteService.save(clienteActual);			
	}
	
	@DeleteMapping("/clientes/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		clienteService.delete(id);
	}	
	
	
}
