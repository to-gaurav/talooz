package com.talooz.ms.finance.fee.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.talooz.ms.finance.fee.entity.FeeBatchMapping;

@Repository
public interface FeeBatchMappingRespository extends CrudRepository<FeeBatchMapping, Long> {
	
	@Query("select new com.talooz.ms.finance.fee.entity.FeeBatchMapping(fbm.batchId,fbm.batchName) from FeeBatchMapping fbm where fbm.feeCategory.feeCategoryId=?1")
	List<FeeBatchMapping> findBatchesByFeeCategoryId(Long paymentId);
}
