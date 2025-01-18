import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY, valueConverter } from '../../Data'
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {

  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideos_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(relatedVideos_url).then(res=>res.json()).then(data => setApiData(data.items))
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className='recommended'>
      {apiData.map((item, index) => {
        return(
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-list" key={index}>
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{valueConverter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        )
      })}
     

    </div>
  )
}

export default Recommended
