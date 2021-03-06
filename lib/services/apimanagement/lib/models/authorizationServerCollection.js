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
 * Paged OAuth2 Authorization Servers list representation.
 */
class AuthorizationServerCollection extends Array {
  /**
   * Create a AuthorizationServerCollection.
   * @property {number} [count] Total record count number across all pages.
   * @property {string} [nextLink] Next page link if any.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AuthorizationServerCollection
   *
   * @returns {object} metadata of AuthorizationServerCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AuthorizationServerCollection',
      type: {
        name: 'Composite',
        className: 'AuthorizationServerCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AuthorizationServerContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'AuthorizationServerContract'
                  }
              }
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
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

module.exports = AuthorizationServerCollection;
