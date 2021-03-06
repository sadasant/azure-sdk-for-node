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
 * Container identity information
 *
 */
class ContainerIdentityInfo {
  /**
   * Create a ContainerIdentityInfo.
   * @member {string} [uniqueName] Unique name of the container
   * @member {string} [aadTenantId] Protection container identity - AAD Tenant
   * @member {string} [servicePrincipalClientId] Protection container identity
   * - AAD Service Principal
   * @member {string} [audience] Protection container identity - Audience
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContainerIdentityInfo
   *
   * @returns {object} metadata of ContainerIdentityInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerIdentityInfo',
      type: {
        name: 'Composite',
        className: 'ContainerIdentityInfo',
        modelProperties: {
          uniqueName: {
            required: false,
            serializedName: 'uniqueName',
            type: {
              name: 'String'
            }
          },
          aadTenantId: {
            required: false,
            serializedName: 'aadTenantId',
            type: {
              name: 'String'
            }
          },
          servicePrincipalClientId: {
            required: false,
            serializedName: 'servicePrincipalClientId',
            type: {
              name: 'String'
            }
          },
          audience: {
            required: false,
            serializedName: 'audience',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerIdentityInfo;
