import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ name: String, color: String }],
  image: { type: String, required: true },
  source_code_link: { type: String, required: true },
  project_link: { type: String, required: true },
  key_features: [String],
  technical_highlights: [String],
});

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;