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
 * A Disk.
 *
 * @extends models['UpdateResource']
 */
class DiskFragment extends models['UpdateResource'] {
  /**
   * Create a DiskFragment.
   * @property {string} [diskType] The storage type for the disk (i.e.
   * Standard, Premium). Possible values include: 'Standard', 'Premium'
   * @property {number} [diskSizeGiB] The size of the disk in Gibibytes.
   * @property {string} [leasedByLabVmId] The resource ID of the VM to which
   * this disk is leased.
   * @property {string} [diskBlobName] When backed by a blob, the name of the
   * VHD blob without extension.
   * @property {string} [diskUri] When backed by a blob, the URI of underlying
   * blob.
   * @property {string} [hostCaching] The host caching policy of the disk (i.e.
   * None, ReadOnly, ReadWrite).
   * @property {string} [managedDiskId] When backed by managed disk, this is
   * the ID of the compute disk resource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DiskFragment
   *
   * @returns {object} metadata of DiskFragment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiskFragment',
      type: {
        name: 'Composite',
        className: 'DiskFragment',
        modelProperties: {
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
          diskType: {
            required: false,
            serializedName: 'properties.diskType',
            type: {
              name: 'String'
            }
          },
          diskSizeGiB: {
            required: false,
            serializedName: 'properties.diskSizeGiB',
            type: {
              name: 'Number'
            }
          },
          leasedByLabVmId: {
            required: false,
            serializedName: 'properties.leasedByLabVmId',
            type: {
              name: 'String'
            }
          },
          diskBlobName: {
            required: false,
            serializedName: 'properties.diskBlobName',
            type: {
              name: 'String'
            }
          },
          diskUri: {
            required: false,
            serializedName: 'properties.diskUri',
            type: {
              name: 'String'
            }
          },
          hostCaching: {
            required: false,
            serializedName: 'properties.hostCaching',
            type: {
              name: 'String'
            }
          },
          managedDiskId: {
            required: false,
            serializedName: 'properties.managedDiskId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DiskFragment;