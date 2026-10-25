import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  organizer: { type: String, required: true },
  date: { type: String, required: true },
  venue: { type: String, required: true },
  capacity: { type: Number, required: true, min: 0 },
  registrations: { type: Number, required: true, min: 0 }
}, { timestamps: true, versionKey: false });
export default mongoose.model('Event', schema);
