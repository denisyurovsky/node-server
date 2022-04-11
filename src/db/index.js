const { Pool } = require('pg')
const connectionString = 'postgres://eouhvbcv:kTrB1bdyvK5pUWO0dFT7iW4hxxSJ03dJ@hattie.db.elephantsql.com/eouhvbcv'

const pool = new Pool({
    connectionString: connectionString
})

module.exports = {
    async query (text, params) {
        const start = Date.now()
        const res = await pool.query(text,params)
        const duration = Date.now() - start

        console.log('executed query', {text, duration, rows: res.rowCount})

        return res;
    }
}