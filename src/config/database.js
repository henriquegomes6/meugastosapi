import mongoose from 'mongoose';

mongoose.connect('mongodb://mongodb:27017/meusgastos', {
    useNewUrlParser: true,
    auth: {
        authdb: "admin"
    }
});

mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', () => console.log('Connection failed with - ', err));


