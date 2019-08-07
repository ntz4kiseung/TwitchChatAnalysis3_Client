import React from 'react';
import {connect} from 'react-redux';
import {Bar, Line} from 'react-chartjs-2';

const VideoBottom = ({video}) => {
    const data = {video};

    if(data.video.video){
        console.log('로드 완료');
        if(data.video.type==='FoundVideo'){
            const comments = data.video.video.comments;
            var chartData = {
                labels : comments.map(comment => comment.seconds),
                datasets : [
                    {
                        label: null,
                        backgroundColor: 'rgb(255,0,0)',
                        borderColor: 'rgba(1,99,132,1)',
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data : comments.map(comment => comment.counting)
                    }
                ]
            }
        }
    }

    return (
    <div className="video-bottom">
        {data.video.video && <Bar data={chartData}></Bar>}
    </div>
)};

export default connect(store=>({
    video : store.video
}), {})(VideoBottom);