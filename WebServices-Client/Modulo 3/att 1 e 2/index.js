const express = require('express')
const server = express()
const router = express.Router()
const fs = require('fs')

server.use(express.json({extended: true}))

const readFile = () => {
    const content = fs.readFileSync('./data/items.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./data/items.json', updateFile, 'utf-8')
}

router.get('/', (req, res) =>{
    const content = readFile()
    res.send(content)
})

router.post('/', (req, res) => {
    const {name, category, description, author, isbn} = req.body
    const currentContent = readFile()
    const id = Math.random().toString(32).substr(2, 9)
    currentContent.push({ id, name, category, description, author, isbn  })
    writeFile(currentContent)
    res.send({name, category, description, author, isbn })
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const {name, category, description, author} = req.body
    const currentContent = readFile()
    const selectedItem = currentContent.findIndex((item) => item.id === id)
    const { id: cId, name: cName, category: cCategory, description: cDescription, author: cAuthor, isbn: cIsbn  } = currentContent[selectedItem]
    const newObject = {
        id: cId,
        name: name ? name: cName,
        category: cCategory ? category: cCategory,
        description: cDescription ? description: cDescription,
        author: cAuthor ? author: cAuthor,
        isbn: cIsbn ? isbn: cIsbn,
    }
    currentContent[selectedItem] = newObject
    writeFile(currentContent)
    res.send(newObject)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const currentContent = readFile()
    const selectedItem = currentContent.findIndex((item) => item.id === id)
    currentContent.splice(selectedItem, 1)
    writeFile(currentContent)
    res.send(true)
})

server.use(router)

server.listen(8080, () => {
    console.log('Servidor funcionando')
});