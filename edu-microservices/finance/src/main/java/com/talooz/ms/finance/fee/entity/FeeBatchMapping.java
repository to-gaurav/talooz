package com.talooz.ms.finance.fee.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "FEE_BATCH_MAPPING")
public class FeeBatchMapping implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long mappingId;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "FEE_CATEGORY_ID")
	private FeeCategory feeCategory;
	private Long batchId;
	private String batchName;

	public FeeBatchMapping(Long batchId, String batchName) {
		this.batchId = batchId;
		this.batchName = batchName;
	}

	public FeeBatchMapping() {
	}

	public Long getMappingId() {
		return mappingId;
	}

	public void setMappingId(Long mappingId) {
		this.mappingId = mappingId;
	}

	public FeeCategory getPayment() {
		return feeCategory;
	}

	public void setFeeCategory(FeeCategory feeCategory) {
		this.feeCategory = feeCategory;
	}

	public Long getBatchId() {
		return batchId;
	}

	public void setBatchId(Long batchId) {
		this.batchId = batchId;
	}

	public String getBatchName() {
		return batchName;
	}

	public void setBatchName(String batchName) {
		this.batchName = batchName;
	}
}
