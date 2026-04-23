const express = require('express');
const router = express.Router();

const {createPatient, getPatients, deletePatient} = require('../controllers/patientController');

router.post('/patients', async(req, res) => {
    try {
        const result = await createPatient(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

router.get ('/patients', async(req, res) => {
    try {
        const result = await getPatients();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

router.delete ('/patients/:id', async(req, res) => {
    try {
        const result = await deletePatient (req.params.id);
        res.status(200).json({
            message:result
        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = router;