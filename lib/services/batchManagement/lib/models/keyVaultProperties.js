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
 * Class representing a KeyVaultProperties.
 */
class KeyVaultProperties {
  /**
   * Create a KeyVaultProperties.
   * @property {string} [keyIdentifier] Full path to the versioned secret.
   * Example
   * https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053
   */
  constructor() {
  }

  /**
   * Defines the metadata of KeyVaultProperties
   *
   * @returns {object} metadata of KeyVaultProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'KeyVaultProperties',
      type: {
        name: 'Composite',
        className: 'KeyVaultProperties',
        modelProperties: {
          keyIdentifier: {
            required: false,
            serializedName: 'keyIdentifier',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = KeyVaultProperties;