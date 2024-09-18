const mongoose = require('mongoose');
require('dotenv').config(); // This loads the .env file

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

// Define the Project schema
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ name: String, color: String }],
  image: { type: String, required: true },
  source_code_link: { type: String, required: true },
  project_link: { type: String, required: true }
});

// Create the Project model
const Project = mongoose.model('Project', projectSchema);

async function seedProject() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if the project already exists
    const existingProject = await Project.findOne({ name: "SurprizeUs" });
    if (existingProject) {
      console.log("Project 'SurprizeUs' already exists in the database.");
      return;
    }

    // Create the new project
    const newProject = new Project({
      name: "SurprizeUs",
      description: "Surprize.us is an innovative online gaming platform where players participate in community-driven games with fair play and transparent prize pools. Offering unique games like Piggy Bank, Picture Pick, and the new Answer Rush, Surprize.us provides an exciting and equitable gaming experience.",
      tags: [
        { name: "Next.js", color: "orange-text-gradient" },
        { name: "Convex", color: "green-text-gradient" },
        { name: "Auth0", color: "pink-text-gradient" },
        { name: "Tailwind CSS", color: "red-text-gradient" },
        { name: "AWS S3", color: "blue-text-gradient" },
        { name: "OpenAi", color: "yellow-text-gradient" },
        { name: "Stripe/Plisio", color: "purple-text-gradient" },
        { name: "Shadcn", color: "custom-text-gradient" },
        { name: "N", color: "transparent-color" },
      ],
      image: "/images/surprizeus.jpg", // Assuming you'll store images in a public folder
      source_code_link: "https://github.com/Danieldo1/surprize",
      project_link: "https://surprize.us",
    });

    await newProject.save();
    console.log("Project 'SurprizeUs' has been added to the database.");
  } catch (error) {
    console.error("Error seeding project:", error);
  } finally {
    await mongoose.connection.close();
  }
}

seedProject();