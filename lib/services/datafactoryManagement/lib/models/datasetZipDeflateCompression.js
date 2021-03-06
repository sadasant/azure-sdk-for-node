/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The ZipDeflate compression method used on a dataset.
 *
 * @extends models['DatasetCompression']
 */
class DatasetZipDeflateCompression extends models['DatasetCompression'] {
  /**
   * Create a DatasetZipDeflateCompression.
   * @member {string} [level] The ZipDeflate compression level. Possible values
   * include: 'Optimal', 'Fastest'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DatasetZipDeflateCompression
   *
   * @returns {object} metadata of DatasetZipDeflateCompression
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ZipDeflate',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'DatasetCompression',
        className: 'DatasetZipDeflateCompression',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          level: {
            required: false,
            serializedName: 'level',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DatasetZipDeflateCompression;
