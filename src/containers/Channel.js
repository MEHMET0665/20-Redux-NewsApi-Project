import React from 'react'
import { connect } from 'react-redux'
import {getChannel} from '../store/actions/index'

let Channel = ({ channelName, channelString,getChannel}) => (
<div className=" col-lg-2 col-md-4 col-sm-6 " onClick={()=>{getChannel(channelString)}}>
  <div className="channel-button" style= {{color:"orange"}}>
 <p>{channelName}</p>
 </div>
</div>
)
const mapStateToProps = (state) => ({
  channel: state.channel,
  
});
const mapDispatchToProps={
  getChannel:getChannel,
} 
Channel = connect(mapStateToProps,mapDispatchToProps)(Channel)
export default Channel;