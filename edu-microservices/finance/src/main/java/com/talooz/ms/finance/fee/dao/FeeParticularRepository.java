package com.talooz.ms.finance.fee.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.talooz.ms.finance.fee.entity.FeeParticular;

@Repository
public interface FeeParticularRepository extends CrudRepository<FeeParticular, Long> {

	@Query("select new com.talooz.ms.finance.fee.entity.FeeParticular(fp.particularId,fp.feeCategoryId,fp.name,fp.description,fp.amount,fp.createdBy,fp.updatedBy,fp.creationDate,fp.updationDate) "
			+ "from FeeParticular fp,ParticularBatchMapping pbm where fp.particularId=pbm.feeParticular.particularId and fp.feeCategoryId=pbm.feeCategoryId and fp.feeCategoryId=:feeCategoryId and pbm.batchId=:batchId")
	List<FeeParticular> findFeeParticulars(@Param("feeCategoryId") Long feeCategoryId, @Param("batchId") Long batchId);

}
