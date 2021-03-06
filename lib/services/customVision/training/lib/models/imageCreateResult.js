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
 * Class representing a ImageCreateResult.
 */
class ImageCreateResult {
  /**
   * Create a ImageCreateResult.
   * @property {string} [sourceUrl] Source URL of the image.
   * @property {string} [status] Status of the image creation. Possible values
   * include: 'OK', 'OKDuplicate', 'ErrorSource', 'ErrorImageFormat',
   * 'ErrorImageSize', 'ErrorStorage', 'ErrorLimitExceed',
   * 'ErrorTagLimitExceed', 'ErrorRegionLimitExceed', 'ErrorUnknown',
   * 'ErrorNegativeAndRegularTagOnSameImage'
   * @property {object} [image] The image.
   * @property {uuid} [image.id] Id of the image.
   * @property {date} [image.created] Date the image was created.
   * @property {number} [image.width] Width of the image.
   * @property {number} [image.height] Height of the image.
   * @property {string} [image.resizedImageUri] The URI to the (resized) image
   * used for training.
   * @property {string} [image.thumbnailUri] The URI to the thumbnail of the
   * original image.
   * @property {string} [image.originalImageUri] The URI to the original
   * uploaded image.
   * @property {array} [image.tags] Tags associated with this image.
   * @property {array} [image.regions] Regions associated with this image.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageCreateResult
   *
   * @returns {object} metadata of ImageCreateResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageCreateResult',
      type: {
        name: 'Composite',
        className: 'ImageCreateResult',
        modelProperties: {
          sourceUrl: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'sourceUrl',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          image: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'image',
            type: {
              name: 'Composite',
              className: 'Image'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageCreateResult;
