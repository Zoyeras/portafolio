const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  detailsLabel,
  onClick,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  detailsLabel: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="group bg-gradient-to-br from-purple-900/95 to-black rounded-2xl overflow-hidden border border-purple-700/70 shadow-xl shadow-black/25 transform transition-all duration-300 hover:-translate-y-1.5 hover:border-green-400/70 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-950"
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${detailsLabel}: ${title}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
          <span className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg shadow-black/25">
            {detailsLabel}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-green-400 mb-3 tracking-tight">{title}</h3>
        <p className="text-gray-300 mb-5 leading-relaxed line-clamp-3 min-h-[4.5rem]">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-800 text-green-300 text-sm rounded-full border border-purple-700/70"
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
