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
      className="project-card group relative h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05020f]"
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } }}
      role="button"
      tabIndex={0}
      aria-label={`${detailsLabel}: ${title}`}
    >
      {/* Imagen */}
      <div className="relative h-52 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05020f] via-black/25 to-transparent" />

        {/* Pill de detalle — solo aparece en hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
          <span
            className="bg-green-400 text-black px-5 py-2 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 shadow-xl shadow-black/40"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {detailsLabel}
          </span>
        </div>

        {/* Badge de tecnologías */}
        <div
          className="absolute top-3 right-3 bg-black/65 backdrop-blur-sm border border-purple-500/40 text-purple-200/90 text-[10px] px-2.5 py-1 rounded-full font-semibold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {technologies.length} tech
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3
          className="text-lg font-semibold text-green-400 mb-3 tracking-tight group-hover:text-green-300 transition-colors duration-200 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
        <p className="text-purple-300/60 mb-5 leading-relaxed line-clamp-3 min-h-[4.5rem] text-sm font-light">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-[11px] rounded-full border"
              style={{
                background: "rgb(124 58 237 / 0.1)",
                borderColor: "rgb(124 58 237 / 0.22)",
                color: "rgb(167 139 250 / 0.85)",
                fontFamily: "var(--font-display)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Flecha */}
        <div className="flex justify-end">
          <span className="text-purple-300/70 group-hover:text-green-400 transition-all duration-250 group-hover:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
