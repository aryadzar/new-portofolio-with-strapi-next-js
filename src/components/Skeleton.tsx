// components/Skeleton.js
const Skeleton = ({ className } : {className : string} ) => {
    return (
      <div
        className={`animate-pulse bg-gray-300 dark:bg-gray-700 rounded-lg ${className}`}
      ></div>
    );
  };
  
  export default Skeleton;
  