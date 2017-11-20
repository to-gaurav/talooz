package com.talooz.ms.finance.fee.ui;

import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.talooz.ms.finance.fee.dao.FeeBatchMappingRespository;
import com.talooz.ms.finance.fee.dao.FeeParticularRepository;
import com.talooz.ms.finance.fee.dao.FeeCategoryRepository;
import com.talooz.ms.finance.fee.entity.ParticularBatchMapping;
import com.talooz.ms.finance.fee.entity.FeeCategory;
import com.talooz.ms.finance.fee.entity.FeeBatchMapping;
import com.talooz.ms.finance.fee.entity.FeeParticular;

@RestController
@RequestMapping("/fee")
public class FeeController {
	protected Logger logger = Logger.getLogger(FeeController.class.getName());

	private FeeCategoryRepository feeCategoryRepository;
	private FeeBatchMappingRespository feeBatchMappingRespository;
	private FeeParticularRepository feeParticularRepository;

	@Autowired
	public FeeController(FeeCategoryRepository feeCategoryRepository, FeeBatchMappingRespository feeBatchMappingRespository, FeeParticularRepository feeParticularRepository) {
		this.feeCategoryRepository = feeCategoryRepository;
		this.feeBatchMappingRespository=feeBatchMappingRespository;
		this.feeParticularRepository=feeParticularRepository;
	}

	@RequestMapping(method=RequestMethod.GET)
	public FeeCategory[] listAll() {
		logger.info("finance-microservice, listAll() invoked");
		List<FeeCategory> payments = feeCategoryRepository.findFeeCategories();
		return payments.toArray(new FeeCategory[payments.size()]);
	}
	
	@RequestMapping(value="/{feeCategoryId}", method=RequestMethod.GET)
	public @ResponseBody FeeCategory byId(@PathVariable("feeCategoryId") Long id) {
		logger.info("finance-microservice, byId() : " + id);
		FeeCategory feeCategory = feeCategoryRepository.findOne(id);
		feeCategory.setFeeBatchMapping(null);
		List<FeeBatchMapping> mappings = feeBatchMappingRespository.findBatchesByFeeCategoryId(feeCategory.getFeeCategoryId());
		feeCategory.setFeeBatchMapping(mappings);
		return feeCategory;
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody FeeCategory saveOrUpdate(@RequestBody FeeCategory feeCategory){
		List<FeeBatchMapping> batchMapping = feeCategory.getFeeBatchMapping();
		for(int i=0;i<batchMapping.size();i++){
			batchMapping.get(i).setFeeCategory(feeCategory);
		}
		feeCategory.setCreationDate(new Date());
		feeCategory.setUpdationDate(new Date());
		feeCategoryRepository.save(feeCategory);
		feeCategory.setFeeBatchMapping(null);
		List<FeeBatchMapping> mappings = feeBatchMappingRespository.findBatchesByFeeCategoryId(feeCategory.getFeeCategoryId());
		feeCategory.setFeeBatchMapping(mappings);
		return feeCategory;
	}
	
	@RequestMapping(value="/batches/{feeCategoryId}",method=RequestMethod.GET)
	public FeeBatchMapping[] getBatchesByFeeCategoryId(@PathVariable("feeCategoryId") Long id) {
		logger.info("finance-microservice, getBatchesByPaymentId() invoked");
		List<FeeBatchMapping> mappings = feeBatchMappingRespository.findBatchesByFeeCategoryId(id);
		return mappings.toArray(new FeeBatchMapping[mappings.size()]);
	}
	
	@RequestMapping(value="/particulars/{feeCategoryId}/{batchId}",method=RequestMethod.GET)
	public FeeParticular[] getPaymentParticularsByPaymentId(@PathVariable("feeCategoryId") Long feeCategoryId,@PathVariable("batchId") Long batchId) {
		logger.info("finance-microservice, listPayments() invoked");
		List<FeeParticular> particulars = feeParticularRepository.findFeeParticulars(feeCategoryId, batchId);
		return particulars.toArray(new FeeParticular[particulars.size()]);
	}
	
	@RequestMapping(value="/particular",method=RequestMethod.POST)
	public @ResponseBody FeeParticular saveOrUpdateParticulars(@RequestBody FeeParticular feeParticular){
		List<ParticularBatchMapping> batchMapping = feeParticular.getParticularBatchMapping();
		for(int i=0;i<batchMapping.size();i++){
			batchMapping.get(i).setFeeParticular(feeParticular);
		}
		feeParticular.setCreationDate(new Date());
		feeParticular.setUpdationDate(new Date());
		feeParticularRepository.save(feeParticular);
		feeParticular.setParticularBatchMapping(null);
		return feeParticular;
	}
}
