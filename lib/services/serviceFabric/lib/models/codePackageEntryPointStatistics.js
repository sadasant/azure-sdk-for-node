/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the CodePackageEntryPointStatistics class.
 * @constructor
 * @member {number} [lastExitCode]
 * 
 * @member {string} [lastActivationTime]
 * 
 * @member {string} [lastExitTime]
 * 
 * @member {string} [lastSuccessfulActivationTime]
 * 
 * @member {string} [lastSuccessfulExitTime]
 * 
 * @member {number} [activationFailureCount]
 * 
 * @member {number} [continuousActivationFailureCount]
 * 
 * @member {number} [exitFailureCount]
 * 
 * @member {number} [continuousExitFailureCount]
 * 
 * @member {number} [activationCount]
 * 
 * @member {number} [exitCount]
 * 
 */
function CodePackageEntryPointStatistics() {
}

/**
 * Defines the metadata of CodePackageEntryPointStatistics
 *
 * @returns {object} metadata of CodePackageEntryPointStatistics
 *
 */
CodePackageEntryPointStatistics.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CodePackageEntryPointStatistics',
    type: {
      name: 'Composite',
      className: 'CodePackageEntryPointStatistics',
      modelProperties: {
        lastExitCode: {
          required: false,
          serializedName: 'LastExitCode',
          type: {
            name: 'Number'
          }
        },
        lastActivationTime: {
          required: false,
          serializedName: 'LastActivationTime',
          type: {
            name: 'String'
          }
        },
        lastExitTime: {
          required: false,
          serializedName: 'LastExitTime',
          type: {
            name: 'String'
          }
        },
        lastSuccessfulActivationTime: {
          required: false,
          serializedName: 'LastSuccessfulActivationTime',
          type: {
            name: 'String'
          }
        },
        lastSuccessfulExitTime: {
          required: false,
          serializedName: 'LastSuccessfulExitTime',
          type: {
            name: 'String'
          }
        },
        activationFailureCount: {
          required: false,
          serializedName: 'ActivationFailureCount',
          type: {
            name: 'Number'
          }
        },
        continuousActivationFailureCount: {
          required: false,
          serializedName: 'ContinuousActivationFailureCount',
          type: {
            name: 'Number'
          }
        },
        exitFailureCount: {
          required: false,
          serializedName: 'ExitFailureCount',
          type: {
            name: 'Number'
          }
        },
        continuousExitFailureCount: {
          required: false,
          serializedName: 'ContinuousExitFailureCount',
          type: {
            name: 'Number'
          }
        },
        activationCount: {
          required: false,
          serializedName: 'ActivationCount',
          type: {
            name: 'Number'
          }
        },
        exitCount: {
          required: false,
          serializedName: 'ExitCount',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = CodePackageEntryPointStatistics;