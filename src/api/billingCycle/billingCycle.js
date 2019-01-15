import restful from 'node-restful/index';

const mongoose = restful.mongoose; 


const creditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
});

const debtSchema = mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
    status: {
        type: String,
        required: false,
        uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    },
});

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 0, max: 12, required: true },
    year: { type: Number, min: 2000, max: 2019, required: true },
    credits: [creditSchema],
    debts: [debtSchema],
});


module.exports = restful.model('BillingCycle', billingCycleSchema);
