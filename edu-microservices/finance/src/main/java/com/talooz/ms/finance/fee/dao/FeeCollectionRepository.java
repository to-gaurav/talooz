package com.talooz.ms.finance.fee.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.talooz.ms.finance.fee.entity.FeeCollection;

@Repository
@RepositoryRestResource(collectionResourceRel = "feeCollections", path = "feeCollections", itemResourceRel="feeCollections")
public interface FeeCollectionRepository extends CrudRepository<FeeCollection, Long> {
}
