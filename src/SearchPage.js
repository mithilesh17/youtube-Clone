import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow 
        image="https://th.bing.com/th/id/OIP.b3IKZc1_G_4cXRog2lUsDAHaDt?pid=ImgDet&rs=1"
        channel="acknowledge"
        verified
        subs="1.1M"
        noOfVideos={512}
        description="You can learn amazing facts and learn something new"
      />

      <hr />
      <VideoRow 
        image="https://th.bing.com/th/id/OIP.b3IKZc1_G_4cXRog2lUsDAHaDt?pid=ImgDet&rs=1"
        channel="acknowledge"
        subs="1.1M"
        views="1.6M"
        timestamp="2yrs ago"
        title="welcome to new channel of acknowledge"
        description="You can learn amazing facts and learn something new"
      />
      <VideoRow 
        image="https://tse1.mm.bing.net/th?id=OIP.d5CTEtD751bFwppzA5jlJAHaE8&pid=Api&P=0&h=180"
        channel="acknwledge"
        subs="1.6M"
        views="5.5M views"
        timestamp="3 days ago"
        title="virat kohli"
        description="know some facts"
        />
    </div>
  );
}

export default SearchPage;
