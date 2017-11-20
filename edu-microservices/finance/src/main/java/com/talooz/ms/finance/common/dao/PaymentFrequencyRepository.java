package com.talooz.ms.finance.common.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.talooz.ms.finance.common.entity.PaymentFrequency;

@Repository
@RepositoryRestResource(collectionResourceRel = "frequencies", path = "frequencies", itemResourceRel="frequencies")
public interface PaymentFrequencyRepository extends CrudRepository<PaymentFrequency, String> {

}
