const SkeletonMovies = () => {
  return (
    <div className="w-full">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="animate-pulse flex h-76pxr cursor-pointer border-b border-gray-300 bg-gray-20">
          <div className="relative h-full min-w-146pxr overflow-hidden bg-gray-50">
            <div className="inset-0 absolute animate-slide bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
          <div className="flex flex-grow items-center justify-between px-10pxr py-21pxr">
            <p className="h-6 w-full max-w-160pxr overflow-hidden bg-gray-50 text-16pxr">
              <span className="inset-0 absolute animate-slide bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonMovies;
