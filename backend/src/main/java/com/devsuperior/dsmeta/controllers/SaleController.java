package com.devsuperior.dsmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.services.SaleService;


//o cotroller vira uma api com a anotation de rest
@RestController
@RequestMapping(value = "/sales")
public class SaleController {
/**
 * O que acontece aqui é uma variação do padrão de 3 camadas:
 * 
 *              chama             chama
 * Controller =======> Service  =======> Repository
 *
 */	
	
	@Autowired //serve para injetar uma instancia da classe que está embaixo dele
	private SaleService service;
	
	@GetMapping // para o método abaixo responder usando o verbo get do http
	public List<Sale> findSales(){
		return service.findSales();
	}

}
