/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the USqlSecret class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL secret item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [secretName] Gets or sets the name of the secret.
 * 
 * @member {date} [creationTime] Gets or sets the creation time of the
 * credential object. This is the only information returned about a secret
 * from a GET.
 * 
 * @member {string} [uri] Gets or sets the URI identifier for the secret in
 * the format <hostname>:<port>
 * 
 * @member {string} [password] Gets or sets the password for the secret to
 * pass in
 * 
 */
function USqlSecret() {
  USqlSecret['super_'].call(this);
}

util.inherits(USqlSecret, models['CatalogItem']);

/**
 * Defines the metadata of USqlSecret
 *
 * @returns {object} metadata of USqlSecret
 *
 */
USqlSecret.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'USqlSecret',
    type: {
      name: 'Composite',
      className: 'USqlSecret',
      modelProperties: {
        computeAccountName: {
          required: false,
          serializedName: 'computeAccountName',
          type: {
            name: 'String'
          }
        },
        version: {
          required: false,
          serializedName: 'version',
          type: {
            name: 'String'
          }
        },
        databaseName: {
          required: false,
          serializedName: 'databaseName',
          type: {
            name: 'String'
          }
        },
        secretName: {
          required: false,
          serializedName: 'secretName',
          type: {
            name: 'String'
          }
        },
        creationTime: {
          required: false,
          serializedName: 'creationTime',
          type: {
            name: 'DateTime'
          }
        },
        uri: {
          required: false,
          serializedName: 'uri',
          type: {
            name: 'String'
          }
        },
        password: {
          required: false,
          serializedName: 'password',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = USqlSecret;