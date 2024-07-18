import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Link href={link} passHref>
      <div className="w-72 m-4 bg-white shadow-md rounded-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 ease-in-out"> 
        
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;