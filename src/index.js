import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slider from './Slider/slider';

var images1=[
  'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
                'https://www.motoringresearch.com/wp-content/uploads/2019/09/01-fastest-cars.jpg',
                'https://imagescdn.dealercarsearch.com/dealerimages/16298/23793/banner.jpg',
                'https://media.evo.co.uk/image/upload/v1580998358/evo/2020/02/Used%20cars%206th%20Feb-4.jpg',
]
var images2 =[
  'https://i.ytimg.com/vi/qBB_QOZNEdc/maxresdefault.jpg',
  "https://upload.wikimedia.org/wikipedia/commons/f/f6/City_Girls_July_2018.png",
  "https://miro.medium.com/max/1200/0*vQ-nF4N1NY7sMa4X.jpg",
  "https://previews.123rf.com/images/ponomarencko/ponomarencko1804/ponomarencko180400085/100110884-two-hot-girls-posing-on-the-beach-in-body-swimsuit.jpg"

]

ReactDOM.render(
  <div>
    <Slider images={images1} index="0"/>
    <Slider images={images2} index="1"/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

