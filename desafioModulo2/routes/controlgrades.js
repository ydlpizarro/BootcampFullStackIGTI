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

        await fs.writeFile(global.fileName, JSON.stringify(data))
        res.send('OK')
        res.end();
    } catch (error) {
        res.status(400).send(error.message);
    }

});

/* route.put('/atualizar-grade')
 */
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
export default router;