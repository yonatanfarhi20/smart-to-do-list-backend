import Task from '../models/task.model.js';

// שליפת כל המשימות
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// יצירת משימה חדשה
export const createTask = async (req, res) => {
  const { title, period } = req.body;
  try {
    const newTask = new Task({ title, period });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// עדכון סטטוס משימה (בוצע/לא בוצע)
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { isCompleted } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { isCompleted },
      { new: true, runValidators: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// מחיקת משימה
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};