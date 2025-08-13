const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  onClick,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  onClick: () => void;
}) => {
  return (
    <div
      className="bg-gradient-to-br from-purple-900 to-black rounded-xl overflow-hidden border border-purple-700 shadow-xl transform transition-transform hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <span className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium">
            Ver detalles
          </span>
        </div>
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
