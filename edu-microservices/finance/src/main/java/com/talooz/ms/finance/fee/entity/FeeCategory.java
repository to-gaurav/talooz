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
@Table(name = "FEE_CATEGORIES")
public class FeeCategory implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long feeCategoryId;
	private String feeName;
	private String feeDescription;
	@OneToMany(mappedBy="feeCategory",cascade = CascadeType.ALL)
	private List<FeeBatchMapping> feeBatchMapping;
	private Long createdBy;
	private Long updatedBy;
	private Date creationDate;
	private Date updationDate;
	
	
	public FeeCategory(Long feeCategoryId, String feeName) {
		this.feeCategoryId = feeCategoryId;
		this.feeName = feeName;
	}

	public FeeCategory() {
	}

	public Long getFeeCategoryId() {
		return feeCategoryId;
	}

	public void setFeeCategoryId(Long feeCategoryId) {
		this.feeCategoryId = feeCategoryId;
	}

	public String getFeeName() {
		return feeName;
	}

	public void setFeeName(String feeName) {
		this.feeName = feeName;
	}

	public String getFeeDescription() {
		return feeDescription;
	}

	public void setFeeDescription(String feeDescription) {
		this.feeDescription = feeDescription;
	}

	public List<FeeBatchMapping> getFeeBatchMapping() {
		return feeBatchMapping;
	}

	public void setFeeBatchMapping(List<FeeBatchMapping> feeBatchMapping) {
		this.feeBatchMapping = feeBatchMapping;
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
}
