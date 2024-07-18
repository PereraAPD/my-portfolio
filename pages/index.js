import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const Home = () => {
  // Example project data
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1",
      image: "/images/project1.jpg", // Path to your image in the 'public' folder
      link: "/projects/project1"
    },
    // Add more projects
  ];

  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My design portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />

      <section className="container mx-auto px-4 py-16"> 
        <h2 className="text-3xl font-bold mb-8 text-center">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <motion.div 
              key={project.title} 
              whileHover={{ scale: 1.05 }} 
              className="transform transition duration-300 ease-in-out" // Add Tailwind classes for the hover effect
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;