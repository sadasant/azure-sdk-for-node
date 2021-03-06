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
 * A common class for general resource information
 *
 * @extends models['Resource']
 */
class VirtualNetworkGatewayConnectionListEntity extends models['Resource'] {
  /**
   * Create a VirtualNetworkGatewayConnectionListEntity.
   * @property {string} [authorizationKey] The authorizationKey.
   * @property {object} virtualNetworkGateway1 The reference to virtual network
   * gateway resource.
   * @property {string} [virtualNetworkGateway1.id] The ID of
   * VirtualNetworkGateway or LocalNetworkGateway resource.
   * @property {object} [virtualNetworkGateway2] The reference to virtual
   * network gateway resource.
   * @property {string} [virtualNetworkGateway2.id] The ID of
   * VirtualNetworkGateway or LocalNetworkGateway resource.
   * @property {object} [localNetworkGateway2] The reference to local network
   * gateway resource.
   * @property {string} [localNetworkGateway2.id] The ID of
   * VirtualNetworkGateway or LocalNetworkGateway resource.
   * @property {string} connectionType Gateway connection type. Possible values
   * include: 'IPsec', 'Vnet2Vnet', 'ExpressRoute', 'VPNClient'
   * @property {string} [connectionProtocol] Connection protocol used for this
   * connection. Possible values include: 'IKEv2', 'IKEv1'
   * @property {number} [routingWeight] The routing weight.
   * @property {string} [sharedKey] The IPSec shared key.
   * @property {string} [connectionStatus] Virtual Network Gateway connection
   * status. Possible values include: 'Unknown', 'Connecting', 'Connected',
   * 'NotConnected'
   * @property {array} [tunnelConnectionStatus] Collection of all tunnels'
   * connection health status.
   * @property {number} [egressBytesTransferred] The egress bytes transferred
   * in this connection.
   * @property {number} [ingressBytesTransferred] The ingress bytes transferred
   * in this connection.
   * @property {object} [peer] The reference to peerings resource.
   * @property {string} [peer.id] Resource ID.
   * @property {boolean} [enableBgp] EnableBgp flag
   * @property {boolean} [usePolicyBasedTrafficSelectors] Enable policy-based
   * traffic selectors.
   * @property {array} [ipsecPolicies] The IPSec Policies to be considered by
   * this connection.
   * @property {string} [resourceGuid] The resource GUID property of the
   * VirtualNetworkGatewayConnection resource.
   * @property {string} [provisioningState] The provisioning state of the
   * VirtualNetworkGatewayConnection resource. Possible values are: 'Updating',
   * 'Deleting', and 'Failed'.
   * @property {boolean} [expressRouteGatewayBypass] Bypass ExpressRoute
   * Gateway for data forwarding
   * @property {string} [etag] Gets a unique read-only string that changes
   * whenever the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VirtualNetworkGatewayConnectionListEntity
   *
   * @returns {object} metadata of VirtualNetworkGatewayConnectionListEntity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualNetworkGatewayConnectionListEntity',
      type: {
        name: 'Composite',
        className: 'VirtualNetworkGatewayConnectionListEntity',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
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
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          authorizationKey: {
            required: false,
            serializedName: 'properties.authorizationKey',
            type: {
              name: 'String'
            }
          },
          virtualNetworkGateway1: {
            required: true,
            serializedName: 'properties.virtualNetworkGateway1',
            type: {
              name: 'Composite',
              className: 'VirtualNetworkConnectionGatewayReference'
            }
          },
          virtualNetworkGateway2: {
            required: false,
            serializedName: 'properties.virtualNetworkGateway2',
            type: {
              name: 'Composite',
              className: 'VirtualNetworkConnectionGatewayReference'
            }
          },
          localNetworkGateway2: {
            required: false,
            serializedName: 'properties.localNetworkGateway2',
            type: {
              name: 'Composite',
              className: 'VirtualNetworkConnectionGatewayReference'
            }
          },
          connectionType: {
            required: true,
            serializedName: 'properties.connectionType',
            type: {
              name: 'String'
            }
          },
          connectionProtocol: {
            required: false,
            serializedName: 'properties.connectionProtocol',
            type: {
              name: 'String'
            }
          },
          routingWeight: {
            required: false,
            serializedName: 'properties.routingWeight',
            type: {
              name: 'Number'
            }
          },
          sharedKey: {
            required: false,
            serializedName: 'properties.sharedKey',
            type: {
              name: 'String'
            }
          },
          connectionStatus: {
            required: false,
            readOnly: true,
            serializedName: 'properties.connectionStatus',
            type: {
              name: 'String'
            }
          },
          tunnelConnectionStatus: {
            required: false,
            readOnly: true,
            serializedName: 'properties.tunnelConnectionStatus',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TunnelConnectionHealthElementType',
                  type: {
                    name: 'Composite',
                    className: 'TunnelConnectionHealth'
                  }
              }
            }
          },
          egressBytesTransferred: {
            required: false,
            readOnly: true,
            serializedName: 'properties.egressBytesTransferred',
            type: {
              name: 'Number'
            }
          },
          ingressBytesTransferred: {
            required: false,
            readOnly: true,
            serializedName: 'properties.ingressBytesTransferred',
            type: {
              name: 'Number'
            }
          },
          peer: {
            required: false,
            serializedName: 'properties.peer',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          enableBgp: {
            required: false,
            serializedName: 'properties.enableBgp',
            type: {
              name: 'Boolean'
            }
          },
          usePolicyBasedTrafficSelectors: {
            required: false,
            serializedName: 'properties.usePolicyBasedTrafficSelectors',
            type: {
              name: 'Boolean'
            }
          },
          ipsecPolicies: {
            required: false,
            serializedName: 'properties.ipsecPolicies',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'IpsecPolicyElementType',
                  type: {
                    name: 'Composite',
                    className: 'IpsecPolicy'
                  }
              }
            }
          },
          resourceGuid: {
            required: false,
            serializedName: 'properties.resourceGuid',
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
          expressRouteGatewayBypass: {
            required: false,
            serializedName: 'properties.expressRouteGatewayBypass',
            type: {
              name: 'Boolean'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualNetworkGatewayConnectionListEntity;
