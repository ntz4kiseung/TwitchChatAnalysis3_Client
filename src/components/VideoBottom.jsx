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
                labels : comments.map(comment => comment.seconds/60+"분"),
                datasets : [
                    {
                        label: null,
                        backgroundColor: 'rgba(100, 65, 164, 0.3)',
                        borderColor: 'rgb(100, 65, 164)',
                        data : comments.map(comment => comment.counting)
                    }
                ]
            }
        }
    }

    return (
    <div className="video-bottom">
        {data.video.video && <Line data={chartData}></Line>}
    </div>
)};

export default connect(store=>({
    video : store.video
}), {})(VideoBottom);