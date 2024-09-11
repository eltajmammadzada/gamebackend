'use strict';

/**
 * tending service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tending.tending');
