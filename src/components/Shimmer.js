const Shimmer = () => {
    return (
      <div className=" flex flex-wrap shadow-lg ">
        {Array(18)
          .fill("")
          .map((e, index) => (
            <div key={index} className="h-48 w-56 m-2 p-2 shadow-lg ">
                <div className="w-40 h-24 bg-gray-200 m-2 p-2 justify-center"></div>
                <div className="h-4 w-40 m-2 p-2 bg-gray-200">
                    </div >
                    <div className="h-4 w-40 m-2 p-2 bg-gray-200">
                        </div>
            </div>
          ))}
          
      </div>
    );
  };
  
  export default Shimmer;