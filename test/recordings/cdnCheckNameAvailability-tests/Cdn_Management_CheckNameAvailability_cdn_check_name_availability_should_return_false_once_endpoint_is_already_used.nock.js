// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038?api-version=2017-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile3038\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '404',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd022405e-2e6b-4feb-8203-417ce6a502a7',
  'x-ms-client-request-id': '3ddbf1de-403e-4b53-8805-9380668dd206',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/operationresults/fcd74c54-8991-4f88-9518-46f850e79727?api-version=2017-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '79882c2a-1bbb-4279-be1e-3964e61173e9',
  'x-ms-routing-request-id': 'CENTRALUS:20161213T212012Z:79882c2a-1bbb-4279-be1e-3964e61173e9',
  date: 'Tue, 13 Dec 2016 21:20:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038?api-version=2017-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile3038\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '404',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd022405e-2e6b-4feb-8203-417ce6a502a7',
  'x-ms-client-request-id': '3ddbf1de-403e-4b53-8805-9380668dd206',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/operationresults/fcd74c54-8991-4f88-9518-46f850e79727?api-version=2017-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '79882c2a-1bbb-4279-be1e-3964e61173e9',
  'x-ms-routing-request-id': 'CENTRALUS:20161213T212012Z:79882c2a-1bbb-4279-be1e-3964e61173e9',
  date: 'Tue, 13 Dec 2016 21:20:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/operationresults/fcd74c54-8991-4f88-9518-46f850e79727?api-version=2017-04-02')
  .reply(200, "{\r\n  \"status\":\"InProgress\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '78',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '5a03bf5e-1498-455c-84e3-23d09d953486',
  'x-ms-client-request-id': '7c791638-8481-4f97-ad87-9e69d33d5e49',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '22f6bcc9-0731-4a00-af28-a15aa0c4ad75',
  'x-ms-routing-request-id': 'CENTRALUS:20161213T212043Z:22f6bcc9-0731-4a00-af28-a15aa0c4ad75',
  date: 'Tue, 13 Dec 2016 21:20:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/operationresults/fcd74c54-8991-4f88-9518-46f850e79727?api-version=2017-04-02')
  .reply(200, "{\r\n  \"status\":\"InProgress\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '78',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '5a03bf5e-1498-455c-84e3-23d09d953486',
  'x-ms-client-request-id': '7c791638-8481-4f97-ad87-9e69d33d5e49',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '22f6bcc9-0731-4a00-af28-a15aa0c4ad75',
  'x-ms-routing-request-id': 'CENTRALUS:20161213T212043Z:22f6bcc9-0731-4a00-af28-a15aa0c4ad75',
  date: 'Tue, 13 Dec 2016 21:20:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/operationresults/fcd74c54-8991-4f88-9518-46f850e79727?api-version=2017-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'a6ce6686-89a4-48bf-8272-6afea5c9df4b',
  'x-ms-client-request-id': 'ca8a825d-003f-4f70-b640-9a25769eace9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '81fc29e4-7d02-46f2-8ce4-dd489824723f',
  'x-ms-routing-request-id': 'WESTUS2:20161213T212114Z:81fc29e4-7d02-46f2-8ce4-dd489824723f',
  date: 'Tue, 13 Dec 2016 21:21:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/operationresults/fcd74c54-8991-4f88-9518-46f850e79727?api-version=2017-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'a6ce6686-89a4-48bf-8272-6afea5c9df4b',
  'x-ms-client-request-id': 'ca8a825d-003f-4f70-b640-9a25769eace9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '81fc29e4-7d02-46f2-8ce4-dd489824723f',
  'x-ms-routing-request-id': 'WESTUS2:20161213T212114Z:81fc29e4-7d02-46f2-8ce4-dd489824723f',
  date: 'Tue, 13 Dec 2016 21:21:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038?api-version=2017-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile3038\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '35f95440-7063-4960-ac04-44c63ef84c5f',
  'x-ms-client-request-id': '39a88f4c-5aa0-4f38-8514-e6b5e71e20f4',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '01968f04-6954-4580-9c2e-5be2158eb92c',
  'x-ms-routing-request-id': 'WESTUS2:20161213T212115Z:01968f04-6954-4580-9c2e-5be2158eb92c',
  date: 'Tue, 13 Dec 2016 21:21:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038?api-version=2017-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile3038\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '35f95440-7063-4960-ac04-44c63ef84c5f',
  'x-ms-client-request-id': '39a88f4c-5aa0-4f38-8514-e6b5e71e20f4',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '01968f04-6954-4580-9c2e-5be2158eb92c',
  'x-ms-routing-request-id': 'WESTUS2:20161213T212115Z:01968f04-6954-4580-9c2e-5be2158eb92c',
  date: 'Tue, 13 Dec 2016 21:21:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038/endpoints/cdnTestEndpoint4750?api-version=2017-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestEndpoint4750\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038/endpoints/cdnTestEndpoint4750\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4750.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"somename\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '891',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '4c7e32f9-252a-464d-b61f-bd46048e8609',
  'x-ms-client-request-id': '7de8af2a-012c-4113-86b5-40241fcff216',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/operationresults/c4f6d5c4-2c4a-4fd5-af96-1bca034c32f3?api-version=2017-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '85e2369b-eedc-4b17-975f-70f9c208638f',
  'x-ms-routing-request-id': 'WESTUS2:20161213T212118Z:85e2369b-eedc-4b17-975f-70f9c208638f',
  date: 'Tue, 13 Dec 2016 21:21:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038/endpoints/cdnTestEndpoint4750?api-version=2017-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestEndpoint4750\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038/endpoints/cdnTestEndpoint4750\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4750.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"somename\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '891',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '4c7e32f9-252a-464d-b61f-bd46048e8609',
  'x-ms-client-request-id': '7de8af2a-012c-4113-86b5-40241fcff216',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/operationresults/c4f6d5c4-2c4a-4fd5-af96-1bca034c32f3?api-version=2017-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '85e2369b-eedc-4b17-975f-70f9c208638f',
  'x-ms-routing-request-id': 'WESTUS2:20161213T212118Z:85e2369b-eedc-4b17-975f-70f9c208638f',
  date: 'Tue, 13 Dec 2016 21:21:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/operationresults/c4f6d5c4-2c4a-4fd5-af96-1bca034c32f3?api-version=2017-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '280fa460-a246-4e34-a2b3-42c89492b80e',
  'x-ms-client-request-id': '2ed91614-bc4a-4ee1-ab2d-1b2b655b1e1c',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '3ec3ec5f-e302-4e95-b09d-d266e0552a85',
  'x-ms-routing-request-id': 'WESTUS2:20161213T212149Z:3ec3ec5f-e302-4e95-b09d-d266e0552a85',
  date: 'Tue, 13 Dec 2016 21:21:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/operationresults/c4f6d5c4-2c4a-4fd5-af96-1bca034c32f3?api-version=2017-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '280fa460-a246-4e34-a2b3-42c89492b80e',
  'x-ms-client-request-id': '2ed91614-bc4a-4ee1-ab2d-1b2b655b1e1c',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '3ec3ec5f-e302-4e95-b09d-d266e0552a85',
  'x-ms-routing-request-id': 'WESTUS2:20161213T212149Z:3ec3ec5f-e302-4e95-b09d-d266e0552a85',
  date: 'Tue, 13 Dec 2016 21:21:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038/endpoints/cdnTestEndpoint4750?api-version=2017-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint4750\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038/endpoints/cdnTestEndpoint4750\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4750.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"somename\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '891',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '099ca9ac-f65d-49dd-b586-95f105f744b9',
  'x-ms-client-request-id': '14801eed-6f48-4c36-bc95-3a8e0902d210',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '55ca5210-8945-4518-aaa4-7d40bc5c4f3c',
  'x-ms-routing-request-id': 'WESTUS2:20161213T212150Z:55ca5210-8945-4518-aaa4-7d40bc5c4f3c',
  date: 'Tue, 13 Dec 2016 21:21:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038/endpoints/cdnTestEndpoint4750?api-version=2017-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint4750\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup6953/providers/Microsoft.Cdn/profiles/cdnTestProfile3038/endpoints/cdnTestEndpoint4750\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4750.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"somename\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '891',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '099ca9ac-f65d-49dd-b586-95f105f744b9',
  'x-ms-client-request-id': '14801eed-6f48-4c36-bc95-3a8e0902d210',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '55ca5210-8945-4518-aaa4-7d40bc5c4f3c',
  'x-ms-routing-request-id': 'WESTUS2:20161213T212150Z:55ca5210-8945-4518-aaa4-7d40bc5c4f3c',
  date: 'Tue, 13 Dec 2016 21:21:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/providers/Microsoft.Cdn/checkNameAvailability?api-version=2017-04-02', '*')
  .reply(200, "{\r\n  \"nameAvailable\":false,\"reason\":\"Name is already in use\",\"message\":\"Name not available\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '94',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'a045c4bc-9360-4ca7-bdbe-5db47660f89e',
  'x-ms-client-request-id': 'acaa2cd2-1f37-42a4-af1d-87855e9609a9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'x-ms-correlation-request-id': '54bf4e8d-5aec-4298-b863-b03cdf06ed04',
  'x-ms-routing-request-id': 'WESTUS2:20161213T212151Z:54bf4e8d-5aec-4298-b863-b03cdf06ed04',
  date: 'Tue, 13 Dec 2016 21:21:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/providers/Microsoft.Cdn/checkNameAvailability?api-version=2017-04-02', '*')
  .reply(200, "{\r\n  \"nameAvailable\":false,\"reason\":\"Name is already in use\",\"message\":\"Name not available\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '94',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'a045c4bc-9360-4ca7-bdbe-5db47660f89e',
  'x-ms-client-request-id': 'acaa2cd2-1f37-42a4-af1d-87855e9609a9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'x-ms-correlation-request-id': '54bf4e8d-5aec-4298-b863-b03cdf06ed04',
  'x-ms-routing-request-id': 'WESTUS2:20161213T212151Z:54bf4e8d-5aec-4298-b863-b03cdf06ed04',
  date: 'Tue, 13 Dec 2016 21:21:51 GMT',
  connection: 'close' });
 return result; }]];