package com.talooz.ms.finance.common.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PAYMENT_FREQUENCY")
public class PaymentFrequency implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	private Integer frequencyId;
	private String paymentFrequencyId;
	private String description;
	private Integer numberOfMonths;

	public Integer getFrequencyId() {
		return frequencyId;
	}

	public void setFrequencyId(Integer frequencyId) {
		this.frequencyId = frequencyId;
	}

	
	public String getPaymentFrequencyId() {
		return paymentFrequencyId;
	}

	public void setPaymentFrequencyId(String paymentFrequencyId) {
		this.paymentFrequencyId = paymentFrequencyId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getNumberOfMonths() {
		return numberOfMonths;
	}

	public void setNumberOfMonths(Integer numberOfMonths) {
		this.numberOfMonths = numberOfMonths;
	}
}
