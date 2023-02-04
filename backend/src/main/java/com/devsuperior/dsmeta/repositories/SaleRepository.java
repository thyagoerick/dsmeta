package com.devsuperior.dsmeta.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsmeta.entities.Sale;

/** 
 * Repository = componente do sistema responsável por acessar (CRUD) o banco de dados
 */

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
	// É usado pois no jpa repository, não há uma função que recebe duas datas, por isso é implementada
	// JPQL
	@Query("SELECT obj FROM Sale obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.amount DESC")
	Page<Sale> findSales(LocalDate min, LocalDate max, Pageable pageable);
	
}
