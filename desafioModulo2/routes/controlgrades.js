import express from 'express';
const router = express.Router();
import { promises as fs } from 'fs';

global.fileName = './file/grades.json'

router.post('/criar-grade', async(req, res) => {
    try {
        let information = req.body;
        const data = JSON.parse(await fs.readFile(global.fileName))
        information.id = data.nextId;
        information.timestamp = new Date()
        information = { id: information.id, ...information, timestamp: information.timestamp }
        data.nextId++;
        data.grades.push(information);

        await fs.writeFile(global.fileName, JSON.stringify(data, null, 2))
        res.send('OK')
        res.end();
    } catch (error) {
        res.status(400).send(error.message);
    }

});

router.put('/atualizar-grade', async(req, res) => {
    try {
        const information = req.body;
        const data = JSON.parse(await fs.readFile(global.fileName))
        const index = data.grades.findIndex(info => info.id === parseInt(information.id))
        data.grades[index] = information
        await fs.writeFile(global.fileName, JSON.stringify(data, null, 2))
        res.send(information)
        res.end();
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.patch('/patch-value', async(req, res) => {
    try {
        const information = req.body;
        const data = JSON.parse(await fs.readFile(global.fileName))
        const index = data.grades.findIndex(info => info.id === parseInt(information.id))
        data.grades[index].value = information.value
        await fs.writeFile(global.fileName, JSON.stringify(data, null, 2))
        res.send(data.grades[index])
        res.end();
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/obter-grade', async(req, res) => {
    try {
        const data = JSON.parse(await fs.readFile(global.fileName));
        res.send(data)
        res.end()
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/obter-grade/:id', async(req, res) => {
    try {
        const data = JSON.parse(await fs.readFile(global.fileName));
        const grade = data.grades.find(grade => grade.id === parseInt(req.params.id))
        res.send(grade)
        res.end()
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/nota-total', async(req, res) => {
    try {
        const student = req.query.student
        const subject = req.query.subject
        const data = JSON.parse(await fs.readFile(global.fileName));
        const filtrar = data.grades
            .filter(grade => grade.student === student && grade.subject === subject)
        const top = filtrar.sort((a, b) => b.value - a.value)
        const top3 = [top[0], top[1], top[2]]
        const valores = filtrar.map(grade => grade.value)

        const soma = valores.reduce((acc, val) => acc + val)
        const media = soma / (valores.length)
        res.send({
            soma,
            media,
            top3
        })
        res.end()
    } catch (error) {
        res.status(400).send(error.message);
    }
})


router.get('/media-total', async(req, res) => {
    try {
        const type = req.query.type
        const subject = req.query.subject
        const data = JSON.parse(await fs.readFile(global.fileName));
        const filtrar = data.grades
            .filter(grade => grade.type === type && grade.subject === subject)
            const top = filtrar.sort((a, b) => b.value - a.value)
        const top3 = [top[0], top[1], top[2]]
        const valores = filtrar.map(grade => grade.value)

        const soma = valores.reduce((acc, val) => acc + val)
        const media = soma / (valores.length)
        res.send({
            soma,
            media,
            top3
        })
        res.end()
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.delete('/obter-grade/:id', async(req, res) => {
    try {
        const data = JSON.parse(await fs.readFile(global.fileName));
        data.grades = data.grades.filter(grade => grade.id !== parseInt(req.params.id))
        await fs.writeFile(global.fileName, JSON.stringify(data, null, 2))
        res.send(data)
        res.end();
    } catch (error) {
        res.status(400).send(error.message);
    }
})
export default router;