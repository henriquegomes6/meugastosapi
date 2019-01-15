import express from 'express';
import BillingCycle from '../api/billingCycle/billingCycleService'

module.exports = function (server) {
    const router = express.Router();
    server.use('/api', router);

    BillingCycle.register(router, '/billingcycles');
}