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
 * Storage information about the data disks present in the custom image
 *
 */
class DataDiskStorageTypeInfo {
  /**
   * Create a DataDiskStorageTypeInfo.
   * @property {string} [lun] Disk Lun
   * @property {string} [storageType] Disk Storage Type. Possible values
   * include: 'Standard', 'Premium'
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataDiskStorageTypeInfo
   *
   * @returns {object} metadata of DataDiskStorageTypeInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataDiskStorageTypeInfo',
      type: {
        name: 'Composite',
        className: 'DataDiskStorageTypeInfo',
        modelProperties: {
          lun: {
            required: false,
            serializedName: 'lun',
            type: {
              name: 'String'
            }
          },
          storageType: {
            required: false,
            serializedName: 'storageType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DataDiskStorageTypeInfo;