'use strict';

/**
 * pross service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pross.pross');
