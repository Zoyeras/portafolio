const ProjectCard = ({
  title,
  description,
  image,
  technologies,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}) => {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-black rounded-xl overflow-hidden border border-purple-700 shadow-xl transform transition-transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-green-400 mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-800 text-green-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
