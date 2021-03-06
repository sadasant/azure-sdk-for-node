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
 * The remediation definition.
 *
 * @extends models['BaseResource']
 */
class Remediation extends models['BaseResource'] {
  /**
   * Create a Remediation.
   * @property {string} [policyAssignmentId] The resource ID of the policy
   * assignment that should be remediated.
   * @property {string} [policyDefinitionReferenceId] The policy definition
   * reference ID of the individual definition that should be remediated.
   * Required when the policy assignment being remediated assigns a policy set
   * definition.
   * @property {string} [provisioningState] The status of the remediation.
   * @property {date} [createdOn] The time at which the remediation was
   * created.
   * @property {date} [lastUpdatedOn] The time at which the remediation was
   * last updated.
   * @property {object} [filters] The filters that will be applied to determine
   * which resources to remediate.
   * @property {array} [filters.locations] The resource locations that will be
   * remediated.
   * @property {object} [deploymentStatus] The deployment status summary for
   * all deployments created by the remediation.
   * @property {number} [deploymentStatus.totalDeployments] The number of
   * deployments required by the remediation.
   * @property {number} [deploymentStatus.successfulDeployments] The number of
   * deployments required by the remediation that have succeeded.
   * @property {number} [deploymentStatus.failedDeployments] The number of
   * deployments required by the remediation that have failed.
   * @property {string} [id] The ID of the remediation.
   * @property {string} [type] The type of the remediation.
   * @property {string} [name] The name of the remediation.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Remediation
   *
   * @returns {object} metadata of Remediation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Remediation',
      type: {
        name: 'Composite',
        className: 'Remediation',
        modelProperties: {
          policyAssignmentId: {
            required: false,
            serializedName: 'properties.policyAssignmentId',
            type: {
              name: 'String'
            }
          },
          policyDefinitionReferenceId: {
            required: false,
            serializedName: 'properties.policyDefinitionReferenceId',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          createdOn: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdOn',
            type: {
              name: 'DateTime'
            }
          },
          lastUpdatedOn: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastUpdatedOn',
            type: {
              name: 'DateTime'
            }
          },
          filters: {
            required: false,
            serializedName: 'properties.filters',
            type: {
              name: 'Composite',
              className: 'RemediationFilters'
            }
          },
          deploymentStatus: {
            required: false,
            serializedName: 'properties.deploymentStatus',
            type: {
              name: 'Composite',
              className: 'RemediationDeploymentSummary'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Remediation;
