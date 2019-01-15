import BillingCycle from './billingCycle';

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

export default BillingCycle;