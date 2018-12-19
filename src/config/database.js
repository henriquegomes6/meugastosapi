import * as mongoose from 'mongoose';

mongoose.connect('mongodb://mongodb/meusgastos', {
    useMongoClient: true,
});


