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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819611\",\"not_before\":\"1459815711\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1NzExLCJuYmYiOjE0NTk4MTU3MTEsImV4cCI6MTQ1OTgxOTYxMSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.nQYd47cF86lX1pozsxWmAYkwKvUfBG02sQV34iHbvI6Y4e2x5Q5IqrX1rbuueWeqAOPrkaIXscYC_v3leHDUMUPIeEbGyW5dU2Ia3ncScQwDnOKo3mFvDXNmWO7iH_9ZbPHig0VLJQITqb-i4AdvqXB3QXy3Jy7smHR7WQC-YYZyetB8gz8xvbzAylXGa7B1Y7CGHr5sKP_gmMhg1yXA3zL9siql86xfwzt-Io4bq1_MUkVZxuV4MdIVk9drJwAsNL9zRjU2JSgHzLP_478Ns7E14pVB1xNZkOH3XKwoLZCbfpAbWixMtEQl8GijO70XdiYImqcrrQyasdvZBsv6iw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '642bc74c-a8f8-42bc-ae24-27d85e0fefe7',
  'client-request-id': '23e0b5a1-84b1-440a-8bdc-53f0ae972353',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_105',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:26:50 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819611\",\"not_before\":\"1459815711\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1NzExLCJuYmYiOjE0NTk4MTU3MTEsImV4cCI6MTQ1OTgxOTYxMSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.nQYd47cF86lX1pozsxWmAYkwKvUfBG02sQV34iHbvI6Y4e2x5Q5IqrX1rbuueWeqAOPrkaIXscYC_v3leHDUMUPIeEbGyW5dU2Ia3ncScQwDnOKo3mFvDXNmWO7iH_9ZbPHig0VLJQITqb-i4AdvqXB3QXy3Jy7smHR7WQC-YYZyetB8gz8xvbzAylXGa7B1Y7CGHr5sKP_gmMhg1yXA3zL9siql86xfwzt-Io4bq1_MUkVZxuV4MdIVk9drJwAsNL9zRjU2JSgHzLP_478Ns7E14pVB1xNZkOH3XKwoLZCbfpAbWixMtEQl8GijO70XdiYImqcrrQyasdvZBsv6iw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '642bc74c-a8f8-42bc-ae24-27d85e0fefe7',
  'client-request-id': '23e0b5a1-84b1-440a-8bdc-53f0ae972353',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_105',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:26:50 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/validateCustomDomain?api-version=2015-06-01', '*')
  .reply(200, "{\r\n  \"customDomainValidated\":true,\"message\":null,\"reason\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '65',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '1a768fb3-1da3-4807-92b0-c9e30f66e4aa',
  'x-ms-client-request-id': 'a97bf6a6-3327-4a79-80c1-cadb706fdc14',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '78df2b4a-c65a-4416-acce-a03d14891ea5',
  'x-ms-routing-request-id': 'WESTUS:20160405T002652Z:78df2b4a-c65a-4416-acce-a03d14891ea5',
  date: 'Tue, 05 Apr 2016 00:26:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/validateCustomDomain?api-version=2015-06-01', '*')
  .reply(200, "{\r\n  \"customDomainValidated\":true,\"message\":null,\"reason\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '65',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '1a768fb3-1da3-4807-92b0-c9e30f66e4aa',
  'x-ms-client-request-id': 'a97bf6a6-3327-4a79-80c1-cadb706fdc14',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '78df2b4a-c65a-4416-acce-a03d14891ea5',
  'x-ms-routing-request-id': 'WESTUS:20160405T002652Z:78df2b4a-c65a-4416-acce-a03d14891ea5',
  date: 'Tue, 05 Apr 2016 00:26:51 GMT',
  connection: 'close' });
 return result; }]];