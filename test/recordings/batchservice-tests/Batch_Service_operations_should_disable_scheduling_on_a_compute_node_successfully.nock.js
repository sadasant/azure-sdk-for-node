// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z/disablescheduling?api-version=2018-08-01.7.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '30419b15-4a2e-4dac-9930-8bd28f4c102c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z/disablescheduling',
  date: 'Tue, 21 Aug 2018 20:23:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z/disablescheduling?api-version=2018-08-01.7.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '30419b15-4a2e-4dac-9930-8bd28f4c102c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z/disablescheduling',
  date: 'Tue, 21 Aug 2018 20:23:11 GMT',
  connection: 'close' });
 return result; }]];