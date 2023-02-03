package com.devsuperior.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmeta.entities.Sale;

/** 
 * Repository = componente do sistema responsável por acessar (CRUD) o banco de dados
 */

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}
