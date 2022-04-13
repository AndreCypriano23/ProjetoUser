// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-7226b48cb220ade60e4e3d8621b331bb012cb858.cmvzwzluq8ke.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'dbmasteruser',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'ejk22+;WcodU#z))5urO_$Oi)14?9wL3'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}