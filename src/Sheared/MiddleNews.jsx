import  { useEffect, useState } from 'react'
import { News } from './News';

export const MiddleNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() =>{
    fetch('news.json')
    .then(res => res.json())
    .then(data => setNews(data))
  }, [])
  return (
    <div className='p-4'>
      
      <h3 className="text-xl font-bold mb-4">Dragon News Home</h3>
      {
        news.map((data, idx) => <News key={idx} data={data}></News>)
      }
    </div>
  )
}

