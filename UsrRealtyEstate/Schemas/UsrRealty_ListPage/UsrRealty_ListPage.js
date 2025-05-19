define("UsrRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealty"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "fd4b3485-a46e-4219-b775-adef1210fe51",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "5a45c3ae-e017-801b-1c06-6f1b1f737b2d",
							"code": "PDS_UsrAreaSq",
							"caption": "#ResourceString(PDS_UsrAreaSq)#",
							"dataValueType": 32
						},
						{
							"id": "2330c2d9-8749-8ac0-c379-d5c6a7667301",
							"code": "PDS_UsrManager",
							"caption": "#ResourceString(PDS_UsrManager)#",
							"dataValueType": 10
						},
						{
							"id": "66ab58f5-346e-7d14-9d05-24af4287c95e",
							"code": "PDS_UsrOfferType",
							"caption": "#ResourceString(PDS_UsrOfferType)#",
							"dataValueType": 10
						},
						{
							"id": "2def3398-428c-17be-3fb0-cd7662b03c35",
							"code": "PDS_UsrPrice",
							"caption": "#ResourceString(PDS_UsrPrice)#",
							"dataValueType": 32
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					},
					"PDS_UsrAreaSq": {
						"modelConfig": {
							"path": "PDS.UsrAreaSq"
						}
					},
					"PDS_UsrManager": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrOfferType": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrPrice": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrRealty",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						},
						"CreatedBy": {
							"path": "CreatedBy"
						},
						"UsrAreaSq": {
							"path": "UsrAreaSq"
						},
						"UsrManager": {
							"path": "UsrManager"
						},
						"UsrOfferType": {
							"path": "UsrOfferType"
						},
						"UsrPrice": {
							"path": "UsrPrice"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});