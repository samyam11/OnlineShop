const path = require('path');

module.exports ={

    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'s00thsayer',
        database:'android_clothing'

    
},
migrations: {
    tableName:'migrations',
    directory: path.resolve(__dirname,'./migrations'),
},
useNullAsDefault:true
};
