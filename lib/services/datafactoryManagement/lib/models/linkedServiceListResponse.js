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
 * A list of linked service resources.
 */
class LinkedServiceListResponse extends Array {
  /**
   * Create a LinkedServiceListResponse.
   * @member {string} [nextLink] The link to the next page of results, if any
   * remaining results exist.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LinkedServiceListResponse
   *
   * @returns {object} metadata of LinkedServiceListResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LinkedServiceListResponse',
      type: {
        name: 'Composite',
        className: 'LinkedServiceListResponse',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LinkedServiceResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'LinkedServiceResource'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LinkedServiceListResponse;