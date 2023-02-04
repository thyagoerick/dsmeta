package com.devsuperior.dsmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	public Page<Sale> findSales(
//         Page<> cria uma lista por página com 20 objetos por página
			
			@RequestParam(value="minDate", defaultValue ="") String minDate, 
//      Nome do parâmetro na web <-/         \-> Caso o minDate não seja usado no envio da requisição
			
			@RequestParam(value="maxDate", defaultValue ="")String maxDate, 
			
			Pageable pageable){
		
		return service.findSales(minDate, maxDate, pageable);
		
		/*O Pageable é uma abstração de paginação, ou seja, se tem um objeto
		 * que assume a paginação do objeto da lista quando passado por parâmetro
		 */
	}

}
