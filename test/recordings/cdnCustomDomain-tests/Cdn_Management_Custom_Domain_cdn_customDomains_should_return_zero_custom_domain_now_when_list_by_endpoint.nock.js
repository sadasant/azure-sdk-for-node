// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459819772\",\"not_before\":\"1459815872\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1ODcyLCJuYmYiOjE0NTk4MTU4NzIsImV4cCI6MTQ1OTgxOTc3MiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.OhOBKmtRkC2wREwszMhAWKHntVkJVCGknyzc3MJ7FuKpic40pgysA30pkOmb1GAY_0N2JJMBfsKvpOQpH-3USiCnJQxZ1eIwD60RhjJkhKmvnMWT4Q5D1aYhWrvWWnYiWzlBnPYreEX1_ncRn9EUEVfYjFyV2FXQ0ofmr-NzkLIA_KHsX2LMQQB9-sLkYRL3Q9Cb3dCKuUpFJunyO1aTh97VryvEEQyXQPM1yEIf8YPMq1YbN37GRsZQrJHYiPKa-mf1RLC1GnScq28-X1tK8IpVhn-zdR7g7P2Lf0-Xl2BDFr_p5kewDgpqWuBkRlVsJSzPy_CC0wYfmKLTe9ERFQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '0417338b-993b-4709-8ddb-8ad86ebe16d1',
  'client-request-id': 'c9305f95-4cd2-4ef6-9939-641a1de9b903',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_127',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:29:32 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459819772\",\"not_before\":\"1459815872\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1ODcyLCJuYmYiOjE0NTk4MTU4NzIsImV4cCI6MTQ1OTgxOTc3MiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.OhOBKmtRkC2wREwszMhAWKHntVkJVCGknyzc3MJ7FuKpic40pgysA30pkOmb1GAY_0N2JJMBfsKvpOQpH-3USiCnJQxZ1eIwD60RhjJkhKmvnMWT4Q5D1aYhWrvWWnYiWzlBnPYreEX1_ncRn9EUEVfYjFyV2FXQ0ofmr-NzkLIA_KHsX2LMQQB9-sLkYRL3Q9Cb3dCKuUpFJunyO1aTh97VryvEEQyXQPM1yEIf8YPMq1YbN37GRsZQrJHYiPKa-mf1RLC1GnScq28-X1tK8IpVhn-zdR7g7P2Lf0-Xl2BDFr_p5kewDgpqWuBkRlVsJSzPy_CC0wYfmKLTe9ERFQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '0417338b-993b-4709-8ddb-8ad86ebe16d1',
  'client-request-id': 'c9305f95-4cd2-4ef6-9939-641a1de9b903',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_127',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:29:32 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '1a15252a-9be3-48a3-85b8-e35171411d86',
  'x-ms-client-request-id': 'b6b95e6c-f920-4d99-aa1d-17c32ef870fd',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '31f6380f-2b9d-4bbb-b34b-6ad1513c8e7c',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160405T002933Z:31f6380f-2b9d-4bbb-b34b-6ad1513c8e7c',
  date: 'Tue, 05 Apr 2016 00:29:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '1a15252a-9be3-48a3-85b8-e35171411d86',
  'x-ms-client-request-id': 'b6b95e6c-f920-4d99-aa1d-17c32ef870fd',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '31f6380f-2b9d-4bbb-b34b-6ad1513c8e7c',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160405T002933Z:31f6380f-2b9d-4bbb-b34b-6ad1513c8e7c',
  date: 'Tue, 05 Apr 2016 00:29:33 GMT',
  connection: 'close' });
 return result; }]];