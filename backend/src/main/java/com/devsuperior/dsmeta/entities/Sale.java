package com.devsuperior.dsmeta.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name = "tb_sales")
public class Sale {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String sellerName;
	private Integer visited;
	private Integer deals;
	private Double amount;
	private LocalDate date;
	
	public Sale() {
		
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getSallerName() {
		return sellerName;
	}


	public void setSallerName(String sallerName) {
		this.sellerName = sallerName;
	}


	public Integer getVisited() {
		return visited;
	}


	public void setVisited(Integer visited) {
		this.visited = visited;
	}


	public Integer getDeals() {
		return deals;
	}


	public void setDeals(Integer deals) {
		this.deals = deals;
	}


	public Double getAmount() {
		return amount;
	}


	public void setAmount(Double amount) {
		this.amount = amount;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
	
}
