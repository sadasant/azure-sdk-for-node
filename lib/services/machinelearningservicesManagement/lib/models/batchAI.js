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
 * A Machine Learning compute based on Azure BatchAI.
 *
 * @extends models['Compute']
 */
class BatchAI extends models['Compute'] {
  /**
   * Create a BatchAI.
   * @member {object} [properties] BatchAI properties
   * @member {string} [properties.vmSize] Virtual Machine Size
   * @member {string} [properties.vmPriority] Virtual Machine priority
   * @member {object} [properties.scaleSettings] Scale settings for BatchAI
   * @member {number} [properties.scaleSettings.maxNodeCount] Max number of
   * nodes to use
   * @member {number} [properties.scaleSettings.minNodeCount] Min number of
   * nodes to use
   * @member {boolean} [properties.scaleSettings.autoScaleEnabled] Enable or
   * disable auto scale
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BatchAI
   *
   * @returns {object} metadata of BatchAI
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BatchAI',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'computeType',
          clientName: 'computeType'
        },
        uberParent: 'Compute',
        className: 'BatchAI',
        modelProperties: {
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          createdOn: {
            required: false,
            readOnly: true,
            serializedName: 'createdOn',
            type: {
              name: 'DateTime'
            }
          },
          modifiedOn: {
            required: false,
            readOnly: true,
            serializedName: 'modifiedOn',
            type: {
              name: 'DateTime'
            }
          },
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          provisioningErrors: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningErrors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MachineLearningServiceErrorElementType',
                  type: {
                    name: 'Composite',
                    className: 'MachineLearningServiceError'
                  }
              }
            }
          },
          computeType: {
            required: true,
            serializedName: 'computeType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'BatchAIProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = BatchAI;