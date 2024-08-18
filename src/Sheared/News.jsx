import PropTypes from "prop-types";
import { useState } from "react";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

export const News = ({ data }) => {
  const [readMore, setReadMore] = useState(200);
  const [seeLess, setSeeLess] = useState(false)
  const handleSeeLess = () =>{
    setReadMore(200)
    setSeeLess(!seeLess)
  }

  const handleReadMore = () =>{
    setReadMore(1000)
    setSeeLess(!seeLess)
  }
  return (
    <div className="border rounded mb-5">
      <div className="p-4 flex justify-between items-center bg-slate-100 mb-4">
        <div className="flex items-center gap-2"> 
          <div>
            <img className="w-10 rounded-full" src={data.author.img} alt="" />
          </div>
          <div>
          <p>{data.author.name}</p>
          <p>{data.author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2 text-lg">
          <CiShare2></CiShare2>
          <CiBookmark></CiBookmark>
        </div>
      </div>
      <div className="mb-5 px-4">
        <p className="text-md font-bold mb-4">{data.title}</p>
        <img src={data.image_url} alt="" />
        <p className="mt-3">{data.details.slice(0, readMore)}</p>
        {
          seeLess ? <button onClick={handleSeeLess} className="text-orange-400 font-bold text-xl mb-3">See less</button>:<button onClick={handleReadMore} className="text-orange-400 font-bold text-xl mb-3">Read More</button> 
        }
        
        
        <div className="border-t">
          <div className="flex justify-between items-center my-3">
            <p className="flex items-center gap-1 text-orange-500"><CiStar></CiStar><CiStar></CiStar><CiStar></CiStar><CiStar></CiStar><span className="text-black ml-2">{data.rating.number}</span></p>
            <p className="flex items-center gap-2"><FaRegEye></FaRegEye>{data.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
News.propTypes = {
  data: PropTypes.object,
};
