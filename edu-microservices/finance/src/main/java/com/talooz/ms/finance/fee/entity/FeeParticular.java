package com.talooz.ms.finance.fee.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="FEE_PARTICULARS")
public class FeeParticular implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long particularId;
	private Long feeCategoryId;
	private String name;
	private String description;
	private Double amount;
	private Long createdBy;
	private Long updatedBy;
	private Date creationDate;
	private Date updationDate;
	
	@OneToMany(mappedBy="feeParticular",cascade = CascadeType.ALL)
	private List<ParticularBatchMapping> particularBatchMapping;
	
	
	public FeeParticular(Long particularId, Long feeCategoryId, String name, String description, Double amount,
			Long createdBy, Long updatedBy, Date creationDate, Date updationDate) {
		this.particularId = particularId;
		this.feeCategoryId = feeCategoryId;
		this.name = name;
		this.description = description;
		this.amount = amount;
		this.createdBy = createdBy;
		this.updatedBy = updatedBy;
		this.creationDate = creationDate;
		this.updationDate = updationDate;
	}
	
	public FeeParticular() {
	}

	public Long getParticularId() {
		return particularId;
	}

	public void setParticularId(Long particularId) {
		this.particularId = particularId;
	}

	public Long getFeeCategoryId() {
		return feeCategoryId;
	}

	public void setFeeCategoryId(Long feeCategoryId) {
		this.feeCategoryId = feeCategoryId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public Long getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}

	public Long getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(Long updatedBy) {
		this.updatedBy = updatedBy;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public Date getUpdationDate() {
		return updationDate;
	}

	public void setUpdationDate(Date updationDate) {
		this.updationDate = updationDate;
	}

	public List<ParticularBatchMapping> getParticularBatchMapping() {
		return particularBatchMapping;
	}

	public void setParticularBatchMapping(List<ParticularBatchMapping> particularBatchMapping) {
		this.particularBatchMapping = particularBatchMapping;
	}

}
