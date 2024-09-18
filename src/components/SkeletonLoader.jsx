const ProjectSkeletonLoader = () => {
    return (
      <div className="bg-white/10 w-full max-w-4xl h-[400px] p-8 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-pulse">
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-300"></div>
        <div className="p-6 md:w-1/2 flex flex-col justify-center">
          <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-4/5 mb-6"></div>
          <div className="h-12 bg-gray-300 rounded-full w-1/2"></div>
        </div>
      </div>
    );
  };
  
  export default ProjectSkeletonLoader;