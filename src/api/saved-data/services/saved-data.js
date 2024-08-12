'use strict';

/**
 * saved-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saved-data.saved-data');
