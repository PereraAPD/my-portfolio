import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Project1 = () => {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Project 1</h2>
        <div className="mb-8">
          <Image src="/images/project1.jpg" alt="Project 1" width={800} height={600} /> 
        </div>
        <p className="text-lg text-gray-700">
          Detailed project description, your role, challenges, and outcome.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Project1;