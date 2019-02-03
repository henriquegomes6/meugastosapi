import express from 'express';
import BillingCycle from '../api/billingCycle/billingCycleService';

export default function (server) {
    const router = express.Router();
    server.use('/api', router);

    router.get('/', function (req, res) {
        res.send('home');
    });

    BillingCycle.register(router, '/billingcycles');
}