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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819003\",\"not_before\":\"1459815103\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1MTAzLCJuYmYiOjE0NTk4MTUxMDMsImV4cCI6MTQ1OTgxOTAwMywiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.qrv-qO7v_rGNT38WYpiV4AAGZsRx9fjL-rKrCpWHogcXc47WAm80fCHxR-6LZj3Iufhy65vIPwWNXhwn3FNApyXTKXjqr1-mv-exdchlgmNDjMYhnLnYaVh2r8InX2c5LqjrKnLzXz_RoPGXhY8ATXuhuNTG_vIrW9MrnQ8eiop30XwrBh_2XFvJCmYvi-Vz0rB1OtkP6JinY6AbCwEPKDEy0vr87fc5YNzKonp1y1_-FuDiF8-d3NtZRbEoqbGhdSV_IbhJ84moH_qbD8vk-SgNHXTN6OaaBu19kxy87weaV6cAF0B6Z5Cu_i38_QhtdQQIIW5SenlSMkKsXO4Sdg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '51c2f50b-2890-41da-bdb3-f0663c6102d4',
  'client-request-id': 'ae447fa9-d3c5-4eff-ac45-6edd99b1a5dd',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_412',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:16:42 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819003\",\"not_before\":\"1459815103\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1MTAzLCJuYmYiOjE0NTk4MTUxMDMsImV4cCI6MTQ1OTgxOTAwMywiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.qrv-qO7v_rGNT38WYpiV4AAGZsRx9fjL-rKrCpWHogcXc47WAm80fCHxR-6LZj3Iufhy65vIPwWNXhwn3FNApyXTKXjqr1-mv-exdchlgmNDjMYhnLnYaVh2r8InX2c5LqjrKnLzXz_RoPGXhY8ATXuhuNTG_vIrW9MrnQ8eiop30XwrBh_2XFvJCmYvi-Vz0rB1OtkP6JinY6AbCwEPKDEy0vr87fc5YNzKonp1y1_-FuDiF8-d3NtZRbEoqbGhdSV_IbhJ84moH_qbD8vk-SgNHXTN6OaaBu19kxy87weaV6cAF0B6Z5Cu_i38_QhtdQQIIW5SenlSMkKsXO4Sdg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '51c2f50b-2890-41da-bdb3-f0663c6102d4',
  'client-request-id': 'ae447fa9-d3c5-4eff-ac45-6edd99b1a5dd',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_412',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:16:42 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/someFakeEndpoint/purge?api-version=2015-06-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/someFakeEndpoint' under resource group 'cdnTestGroup4424' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0c4d0437-ef02-4aad-b303-4ba2a2af597f',
  'x-ms-correlation-request-id': '0c4d0437-ef02-4aad-b303-4ba2a2af597f',
  'x-ms-routing-request-id': 'WESTUS:20160405T001643Z:0c4d0437-ef02-4aad-b303-4ba2a2af597f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 05 Apr 2016 00:16:42 GMT',
  connection: 'close',
  'content-length': '188' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/someFakeEndpoint/purge?api-version=2015-06-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/someFakeEndpoint' under resource group 'cdnTestGroup4424' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0c4d0437-ef02-4aad-b303-4ba2a2af597f',
  'x-ms-correlation-request-id': '0c4d0437-ef02-4aad-b303-4ba2a2af597f',
  'x-ms-routing-request-id': 'WESTUS:20160405T001643Z:0c4d0437-ef02-4aad-b303-4ba2a2af597f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 05 Apr 2016 00:16:42 GMT',
  connection: 'close',
  'content-length': '188' });
 return result; }]];