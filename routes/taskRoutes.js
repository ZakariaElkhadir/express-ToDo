import express, { application } from 'express';
import Task from '../models/task.js';

const router = express.Router();

//get the created data
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// create data
router.post('/tasks', async(req, res)=> {
    try {
        const task = new Task(req.body)
        await task.save()
        res.status(201).json({message: "Added successfuly", task})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//update data
router.put('/tasks/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        const dataToUpdate = req.body;
        const task = await Task.findByIdAndUpdate(id, dataToUpdate, {new: true})
        res.status(200).json({message: "updated successfuly!", task})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//delete data
router.delete("/tasks/:id", async (request, response) => {
    try {
      const { id } = request.params;
      await Task.findByIdAndDelete(id);
      response.status(200).json({ message: "Deleted successfully!" });
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  });

export default router;