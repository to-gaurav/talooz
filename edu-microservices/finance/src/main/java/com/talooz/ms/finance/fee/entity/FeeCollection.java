package com.talooz.ms.finance.fee.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="FEE_COLLECTION")
public class FeeCollection implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long feeCollectionId;
	private Long feeCategoryId;
	private String feeCollectionName;
	private Date startDate;
	private Date endDate;
	private Integer dueDate;
	private String paymentFrequencyId;
	private Long createdBy;
	private Long updatedBy;
	private Date creationDate;
	private Date updationDate;

	public Long getFeeCollectionId() {
		return feeCollectionId;
	}

	public void setFeeCollectionId(Long feeCollectionId) {
		this.feeCollectionId = feeCollectionId;
	}

	public Long getFeeCategoryId() {
		return feeCategoryId;
	}

	public void setFeeCategoryId(Long feeCategoryId) {
		this.feeCategoryId = feeCategoryId;
	}

	public String getFeeCollectionName() {
		return feeCollectionName;
	}

	public void setFeeCollectionName(String feeCollectionName) {
		this.feeCollectionName = feeCollectionName;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Integer getDueDate() {
		return dueDate;
	}

	public void setDueDate(Integer dueDate) {
		this.dueDate = dueDate;
	}

	public String getPaymentFrequencyId() {
		return paymentFrequencyId;
	}

	public void setPaymentFrequencyId(String paymentFrequencyId) {
		this.paymentFrequencyId = paymentFrequencyId;
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
