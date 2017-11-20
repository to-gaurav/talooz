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
@Table(name="PARTICULARS_BATCH_MAPPING")
public class ParticularBatchMapping implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long mappingId;
	private Long feeCategoryId;
	private Long batchId;
	private String batchName;
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "PARTICULAR_ID")
	private FeeParticular feeParticular;

	public ParticularBatchMapping(Long feeCategoryId, Long batchId, String batchName) {
		this.feeCategoryId = feeCategoryId;
		this.batchId = batchId;
		this.batchName = batchName;
	}

	public ParticularBatchMapping() {
	}

	public Long getMappingId() {
		return mappingId;
	}

	public void setMappingId(Long mappingId) {
		this.mappingId = mappingId;
	}

	public Long getFeeCategoryId() {
		return feeCategoryId;
	}

	public void setFeeCategoryId(Long feeCategoryId) {
		this.feeCategoryId = feeCategoryId;
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

	public FeeParticular getFeeParticular() {
		return feeParticular;
	}

	public void setFeeParticular(FeeParticular feeParticular) {
		this.feeParticular = feeParticular;
	}

}
