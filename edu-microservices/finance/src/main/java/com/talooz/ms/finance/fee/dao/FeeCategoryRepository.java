package com.talooz.ms.finance.fee.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.talooz.ms.finance.fee.entity.FeeCategory;

@Repository
public interface FeeCategoryRepository extends CrudRepository<FeeCategory, Long> {
	
	@Query("select new com.talooz.ms.finance.fee.entity.FeeCategory(fc.feeCategoryId,fc.feeName) from FeeCategory fc")
	List<FeeCategory> findFeeCategories();
	
}
