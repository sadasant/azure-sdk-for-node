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
 * The availability result info
 *
 */
class EventsAvailabilityResultInfo {
  /**
   * Create a EventsAvailabilityResultInfo.
   * @member {string} [name] The name of the availability result
   * @member {string} [success] Indicates if the availability result was
   * successful
   * @member {number} [duration] The duration of the availability result
   * @member {string} [performanceBucket] The performance bucket of the
   * availability result
   * @member {string} [message] The message of the availability result
   * @member {string} [location] The location of the availability result
   * @member {string} [id] The ID of the availability result
   * @member {string} [size] The size of the availability result
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventsAvailabilityResultInfo
   *
   * @returns {object} metadata of EventsAvailabilityResultInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'eventsAvailabilityResultInfo',
      type: {
        name: 'Composite',
        className: 'EventsAvailabilityResultInfo',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          success: {
            required: false,
            serializedName: 'success',
            type: {
              name: 'String'
            }
          },
          duration: {
            required: false,
            serializedName: 'duration',
            type: {
              name: 'Number'
            }
          },
          performanceBucket: {
            required: false,
            serializedName: 'performanceBucket',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
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
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          size: {
            required: false,
            serializedName: 'size',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EventsAvailabilityResultInfo;