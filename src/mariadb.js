const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '123coder',
        database: 'coderhouse'
    },
    pool: { min: 0, max: 7 }
}

export default options;