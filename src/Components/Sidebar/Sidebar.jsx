
import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.svg'
import game_icon from '../../assets/gaming.svg'
import automobile from '../../assets/automobile.svg'
import sports from '../../assets/sports.svg'
import entertainment  from '../../assets/entertainment.svg'
import tech from '../../assets/tech.svg'
import music from '../../assets/music.svg'
import blogs from '../../assets/blogs.svg'
import news from '../../assets/news.svg'
import gs from '../../assets/gs_chennal.png'
import a2d from '../../assets/a2d.png'
import tss from '../../assets/tss.png'
import vj_fitness from '../../assets/vj_fitness.png'
import he from '../../assets/he.png'


const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">

        <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
          <img src={home} alt="" /><p>Home</p>
        </div>

        <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
          <img src={music} alt="" /><p>Music</p>
        </div>

        <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
          <img src={sports} alt="" /><p>Sports</p>
        </div>

        <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
          <img src={news} alt="" /><p>News</p>
        </div>

        <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
          <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>

        <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
          <img src={tech} alt="" /><p>Technology</p>
        </div>

        <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
          <img src={game_icon} alt="" /><p>Gaming</p>
        </div>

        <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
          <img src={blogs} alt="" /><p>Blogs</p>
        </div>

        <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
          <img src={automobile} alt="" /><p>Automobiles</p>
        </div>

        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={gs} alt="" /><p>GreatStack</p>
        </div>
        
        <div className="side-link">
          <img src={a2d} alt="" /><p>A2D Channel</p>
        </div>

        <div className="side-link">
          <img src={tss} alt="" /><p>Tech SuperStar</p>
        </div>

        <div className="side-link">
          <img src={vj_fitness} alt="" /><p>VJ Fitness</p>
        </div>

        <div className="side-link">
          <img src={he} alt="" /><p>Hobby Explorer</p>
        </div>


      </div>

    </div>
  )
}

export default Sidebar