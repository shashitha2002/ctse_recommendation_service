import 'dotenv/config.js'
import app from './app.js'

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`recommendation service running on port ${PORT}`)
})