 

 
const Table = ({lcard, handlePreparing,cook }) => {
 
   
  return (
    <div className="overflow-x-auto border lg:w-[700px] w-96 rounded-xl h-full ">
     
      <div>
        <h1 className="lexend text-xl text-center font-semibold mt-3">
          Want to cook :{lcard.length}
        </h1>
        <hr className="mt-4 w-96 lg:ml-40" />
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th  className="font-black">Name</th>
            <th  className="font-black">Time</th>
            <th  className="font-black">Calories</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            lcard.map((item, index)=>(
              <>
                <tr className="bg-base-200 mb-4">
              <th>{index+1}</th>
              <td>{item.r_name}</td>
              <td>{item.p_time} </td>
              <td>{item.calories}</td>
              <button onClick={()=>handlePreparing(item.id,item)} className=" rounded-full bg-[#0BE58A] border-none   lg:w-20 h-10 mt-1">
                 Preparing
              </button>
            </tr>
              </>
            ))
          }
        </tbody>
      </table>
      <div className="text-center lexend font-semibold text-xl mb-5 mt-8">
        <h1>Currently cooking : {cook.length} </h1>
        <hr className="mt-4 w-96 lg:ml-40" />
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th  className="font-black">Name</th>
            <th  className="font-black">Time</th>
            <th  className="font-black">Calories</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
         
          {
            cook.map((item,index)=>(
              <>
               <tr className="bg-base-200">
              <th>{index+1}</th>
              <td>{item.r_name}</td>
              <td>{item.p_time}</td>
              <td>{item.calories}</td>
              </tr>
              </>
              
            ))
          }
        
        </tbody>
      </table>
    </div>
  );
};

export default Table;
