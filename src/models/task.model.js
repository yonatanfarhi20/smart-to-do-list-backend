import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Task title is required'],
    trim: true
  },
  period: {
    type: String,
    required: [true, 'Period is required'],
    enum: ['morning', 'afternoon', 'evening']
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // יוצר אוטומטית שדות עבור createdAt ו-updatedAt
});

const Task = mongoose.model('Task', taskSchema);

export default Task;