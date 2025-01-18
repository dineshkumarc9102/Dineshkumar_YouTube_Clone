import React, { useEffect, useState } from 'react'
import './Player.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import share from '../../assets/share.svg'
import save from '../../assets/save.svg'
import {API_KEY, valueConverter} from '../../Data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const Player = () => {

    const {videoId} = useParams();
    const [aipData, setApiData] = useState(null);
    const [chennalData, setChennalData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]))
    }

    const fetchChennalData = async () => {
        const chennalData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${aipData.snippet.channelId}&key=${API_KEY}`
        await fetch(chennalData_url).then(res=>res.json()).then(data => setChennalData(data.items[0]))

        const commentData_url =`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        await fetch(commentData_url).then(res=>res.json()).then(data => setCommentData(data.items))
    }

    useEffect(() => {
        fetchVideoData()
    },[videoId])

    useEffect(() => {
        fetchChennalData()
    },[aipData])

  return (
    <div className='player'>
       {/* <video src={video1} controls autoPlay muted></video> */}
       
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>

       <h3>{aipData ? aipData.snippet.title : "Title Here"}</h3>

       <div className="player-info">
        <p>{aipData ? valueConverter(aipData.statistics.viewCount) : "16K"} View &bull; {aipData ? moment(aipData.snippet.publishedAt).fromNow() : ""} </p>
        <div>
            <span><img src={like} alt="" />{aipData ? valueConverter(aipData.statistics.likeCount) : "200"}</span>
            <span><img src={dislike} alt="" /></span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
        </div>
       </div>
       <hr />

       <div className="publisher">
        <img src={chennalData ? chennalData.snippet.thumbnails.default.url : ""} alt="" />
        <div>
            <p>{aipData ? aipData.snippet.channelTitle: ""}</p>
            <span>{chennalData ? valueConverter(chennalData.statistics.subscriberCount) : "1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
       </div>

       <div className="description">
        <p>{aipData ? aipData.snippet.description.slice(0,250) : "Description Here"}</p>
        <hr />
        <h4>{aipData ? valueConverter(aipData.statistics.commentCount) : "200"} Comments</h4>


        {commentData.map((item, index) => {
            return(
            <div className="comment" key={index}>
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                    <img src={like} alt="" /><span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt="" /><span></span>
                </div>
            </div>
            </div>
            )
        })}
        

        
        
       </div>
    </div>
  )
}

export default Player
