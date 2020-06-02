import express from 'express'
import path from 'path'
import { getAllNovels, getNovelsByTitle } from './controllers/novels'


const app = express()

app.use(express.static('public'))

app.get('/api/novels', getAllNovels)

app.get('/api/novels/:id', getNovelsByTitle)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
