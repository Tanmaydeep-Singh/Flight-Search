const Skeleton = () => {
    return (
      <div className="animate-pulse border rounded-lg p-4 mb-4">
        <div className="flex justify-between">
          <div className="h-4 bg-gray-300 w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 w-1/4"></div>
        </div>
        <div className="h-4 bg-gray-300 w-3/4 mt-2"></div>
      </div>
    );
  };
  
  export default Skeleton;
  