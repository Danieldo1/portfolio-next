const mongoose = require('mongoose');
require('dotenv').config();

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
  project_link: { type: String, required: true },
  key_features: [String],
  technical_highlights: [String]
});

// Create the Project model
const Project = mongoose.model('Project', projectSchema);


const projectsData = [
  {
    name: "UniLink",
    description:
      "UniLinks is a web application that centralizes all your social media and professional links into a single, easy-to-share profile, providing an efficient way to manage and present your online presence. It features a customizable interface with secure login, real-time analytics, and a user-friendly admin panel for profile personalization and link management.",
    tags: [
      {
        name: "Next.js",
        color: "yellow-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "AWS S3",
        color: "purple-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "custom-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
    ],
    key_features: [
      "Centralized platform for managing multiple social media and professional links",
      "Customizable user profiles with personalized themes",
      "Secure user authentication and profile management",
      "Real-time analytics for tracking link performance and visitor engagement",
      "User-friendly admin panel for easy profile and link management",
      "Mobile-responsive design for seamless access across devices",
    ],
    technical_highlights: [
      "Next.js framework for server-side rendering and optimized performance",
      "MongoDB database for flexible and scalable data storage",
      "AWS S3 integration for efficient storage of user profile images",
      "Tailwind CSS for rapid, responsive UI development",
      "React for building a dynamic and interactive user interface",
      "JavaScript for client-side functionality and enhanced user experience",
    ],
    image: "unilinkw",
    source_code_link: "https://github.com/Danieldo1/make-a-link",
    project_link: "https://uni-links.vercel.app/",
  },

  {
    name: "StyleSync",
    description:
      "Introducing Stylesync – your go-to SaaS platform for seamless outfit coordination! Say goodbye to fashion dilemmas as our cutting-edge AI technology transforms your wardrobe into endless styling possibilities. Simply upload your clothing items, receive personalized outfit suggestions, and enjoy unlimited access with our subscription model. Elevate your style effortlessly with Stylesync – where convenience meets chic sophistication.",
    tags: [
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Next-auth",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "red-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "purple-text-gradient",
      },
      {
        name: "Shadcn",
        color: "seafoam-mint-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },
      {
        name: "Replicate",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAi",
        color: "chocolate-gold-text-gradient",
      },
      {
        name: "Stripe",
        color: "custom-text-gradient",
      },
      {
        name: "AWS S3",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/stylesync.jpg",
    source_code_link: "https://github.com/Danieldo1/style-sync",
    project_link: "https://style-sync.vercel.app/",
    key_features: [
      "AI-powered outfit coordination",
      "Personalized style suggestions",
      "Wardrobe management system",
      "Subscription-based model",
      "User-friendly interface",
      "Replicate API for background removal",
    ],
    technical_highlights: [
      "Next.js for server-side rendering and routing",
      "MongoDB for efficient data storage",
      "Tailwind CSS for responsive design",
      "Integration with OpenAI for intelligent suggestions",
      "Stripe integration for secure payments",
      "AWS S3 for scalable image storage",
    ],
  },
  {
    name: "PetPlus+ ",
    description:
      "PetPlus is an e-commerce platform designed to offer a seamless shopping experience for pet owners. With a user-friendly interface, an accessible admin dashboard for efficient management, and a wide range of high-quality products, PetPlus aims to cater to the needs of all pet enthusiasts. From food and toys to grooming supplies and bedding, PetPlus is your one-stop shop for all things pets!",
    tags: [
      {
        name: "Next.js",
        color: "red-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "custom-text-gradient",
      },
      {
        name: "Stripe",
        color: "purple-text-gradient",
      },
      {
        name: "AWS S3",
        color: "yellow-text-gradient",
      },
      {
        name: "Next-Auth",
        color: "blue-text-gradient",
      },
      {
        name: "Zod",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    key_features: [
      "User-friendly e-commerce interface for pet products",
      "Comprehensive admin dashboard for efficient management",
      "Wide range of pet products including food, toys, and grooming supplies",
      "Secure payment processing with Stripe integration",
      "User authentication and account management",
      "Responsive design for seamless shopping on all devices",
    ],
    technical_highlights: [
      "Next.js framework for server-side rendering and optimized performance",
      "MongoDB database for flexible and scalable data storage",
      "Tailwind CSS for rapid and responsive UI development",
      "AWS S3 integration for efficient product image storage and retrieval",
      "Next-auth for secure and customizable authentication",
      "Zod for robust data validation and type safety",
    ],
    image: "/images/stylesync.jpg",
    source_code_link: "https://github.com/Danieldo1/e-depo-admin",
    project_link: "https://pet-plus-us.vercel.app/",
  },
  {
    name: "AIterImage",
    description:
      "AIterImage is an innovative web application that harnesses the power of artificial intelligence to transform users' portrait photos into stunning pieces of art. By integrating with the Replicate AI API, AIterImage offers users the ability to reimagine their portraits with a variety of styles and backgrounds, providing a unique and personalized experience.",
    tags: [
      {
        name: "Next.js",
        color: "red-text-gradient",
      },
      {
        name: "Shadcn",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "purple-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "custom-text-gradient",
      },
      {
        name: "Clerk",
        color: "blue-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "yellow-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "orange-text-gradient",
      },
    ],
    key_features: [
      "AI-powered portrait transformation into diverse art styles",
      "Integration with Replicate AI API for advanced image processing",
      "User-friendly interface for uploading and editing portraits",
      "Multiple artistic style options for personalized results",
      "Secure user authentication and profile management",
      "Gallery feature to showcase and share transformed images",
    ],
    technical_highlights: [
      "Next.js framework for efficient server-side rendering and routing",
      "Shadcn UI components for a sleek and consistent user interface",
      "MongoDB database for flexible storage of user data and image metadata",
      "Tailwind CSS for responsive and customizable styling",
      "Clerk integration for robust authentication and user management",
      "Cloudinary for optimized image storage and manipulation",
    ],
    image: "/images/editit.jpg",
    source_code_link: "https://github.com/Danieldo1/edit-it",
    project_link: "https://alter-image.vercel.app/",
  },
  {
    name: "3035 Lounge Bar",
    description:
      "3035 Lounge is a custom e-menu platform for a hookah lounge, designed to facilitate easy menu browsing on mobile devices while enabling staff to update offerings in real-time through an advanced admin panel. This paid solution elevates the customer experience and simplifies menu management for the business.Since its a real project admin panel details are not provided.",
    tags: [
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "purple-text-gradient",
      },

      {
        name: "Next-auth",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Sortable.js",
        color: "custom-text-gradient",
      },
    ],
    key_features: [
      "Mobile-optimized e-menu for easy browsing on smartphones",
      "Real-time menu updates through an advanced admin panel",
      "Customizable menu categories and item listings",
      "Intuitive interface for customers to explore menu offerings",
      "Secure staff access for menu management",
      "Drag-and-drop functionality for menu item reordering",
    ],
    technical_highlights: [
      "Next.js framework for server-side rendering and optimized performance",
      "MongoDB database for flexible and scalable menu data storage",
      "Tailwind CSS for rapid, responsive UI development",
      "Next-auth integration for secure staff authentication",
      "React for building a dynamic and interactive user interface",
      "Sortable.js implementation for drag-and-drop menu organization",
    ],
    image: "bar.jpg",
    source_code_link: "https://github.com/Danieldo1/code3035",
    project_link: "https://code3035.vercel.app/",
  },
  {
    name: "SurprizeUs",
    description:
      "Surprize.us is an innovative online gaming platform where players participate in community-driven games with fair play and transparent prize pools. Offering unique games like Piggy Bank, Picture Pick, and the new Answer Rush, Surprize.us provides an exciting and equitable gaming experience. The platform combines elements of chance, skill, and community engagement, creating a dynamic environment where players can compete, interact, and win rewards. With its commitment to transparency and fair play, Surprize.us aims to revolutionize online gaming by fostering a trustworthy and entertaining space for players from all backgrounds. The integration of cutting-edge technology ensures smooth gameplay, secure transactions, and an ever-evolving selection of games to keep the community engaged and entertained.",
    tags: [
      {
        name: "Next.js",
        color: "orange-text-gradient",
      },
      {
        name: "Convex",
        color: " green-text-gradient",
      },
      {
        name: "Auth0",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "red-text-gradient",
      },
      {
        name: "AWS S3",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAi",
        color: "yellow-text-gradient",
      },
      {
        name: "Stripe/Plisio",
        color: "purple-text-gradient",
      },
      {
        name: "Shadcn",
        color: "custom-text-gradient",
      },
    ],
    key_features: [
      "Community-driven online gaming platform",
      "Transparent and fair prize pool system",
      "Multiple game types including Piggy Bank, Picture Pick, and Answer Rush",
      "Real-time gameplay and interaction",
      "Secure user authentication and account management",
      "Integrated payment systems like Stripe and Crypto for easy transactions",
    ],
    technical_highlights: [
      "Next.js for server-side rendering and optimized performance",
      "Convex for real-time database and state management",
      "Auth0 integration for robust user authentication",
      "Tailwind CSS and Shadcn for responsive and customizable UI",
      "AWS S3 and Cloudflare for efficient storage of design assets",
      "OpenAI integration for some AI-powered game elements",
    ],
    image: "surprizeus",
    source_code_link: "https://github.com/Danieldo1/surprize",
    project_link: "https://surprize.us",
  },
];

async function seedProjects() {
    try {
        await mongoose.connect(MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
    
        for (const projectData of projectsData) {
          const existingProject = await Project.findOne({ name: projectData.name });
          if (existingProject) {
            console.log(`Project '${projectData.name}' already exists in the database.`);
            continue;
          }
    
          const newProject = new Project(projectData);
          await newProject.save();
          console.log(`Project '${projectData.name}' has been added to the database.`);
        }
    
        console.log("All projects have been seeded successfully.");
      } catch (error) {
        console.error("Error seeding projects:", error);
      } finally {
        await mongoose.connection.close();
      }
}

seedProjects();
