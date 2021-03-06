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

/**
 * The custom options for the prediction request.
 *
 */
class PredictionRequestOptions {
  /**
   * Create a PredictionRequestOptions.
   * @property {date} [datetimeReference] The reference DateTime used for
   * predicting datetime entities.
   * @property {boolean} [overridePredictions] Whether to make the external
   * entities resolution override the predictions if an overlap occurs.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PredictionRequestOptions
   *
   * @returns {object} metadata of PredictionRequestOptions
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PredictionRequestOptions',
      type: {
        name: 'Composite',
        className: 'PredictionRequestOptions',
        modelProperties: {
          datetimeReference: {
            required: false,
            serializedName: 'datetimeReference',
            type: {
              name: 'DateTime'
            }
          },
          overridePredictions: {
            required: false,
            serializedName: 'overridePredictions',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = PredictionRequestOptions;
