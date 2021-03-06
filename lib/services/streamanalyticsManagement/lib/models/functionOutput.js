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
 * Describes the output of a function.
 *
 */
class FunctionOutput {
  /**
   * Create a FunctionOutput.
   * @member {string} [dataType] The (Azure Stream Analytics supported) data
   * type of the function output. A list of valid Azure Stream Analytics data
   * types are described at
   * https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
   */
  constructor() {
  }

  /**
   * Defines the metadata of FunctionOutput
   *
   * @returns {object} metadata of FunctionOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FunctionOutput',
      type: {
        name: 'Composite',
        className: 'FunctionOutput',
        modelProperties: {
          dataType: {
            required: false,
            serializedName: 'dataType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FunctionOutput;
