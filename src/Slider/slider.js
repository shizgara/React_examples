import React,{Component} from "react";
import "./slider.css"


class Slider extends Component{

    constructor(props){
        console.log("props===>>",props);
        super()
        this.state={
            images:props.images,
            currentImageIndex:props.index,
            isCycleMode:false,
            canGoPrev:props.index>0,
            canGoNext:props.index< props.images.length-1,
        }
        this.nextSlideHandler = this.nextSlideHandler.bind(this);
    }

    nextSlideHandler(event){
        let newIndex = this.state.currentImageIndex;
        if(event.target.dataset.direction === "next"){
            if(newIndex<this.state.images.length-1){
            newIndex = this.state.currentImageIndex + 1;
            this.setState({canGoPrev: true});
        }
        if(newIndex === this.state.images.length-1){
            this.setState({canGoNext: false});
        }
        } else{
            if(newIndex>0){
            newIndex = this.state.currentImageIndex - 1;
            this.setState({canGoNext: true})
        } if(newIndex === 0){
            this.setState({canGoPrev:false});
        }
        }
        this.setState({currentImageIndex:newIndex})
    }

    render(){
        return(
            <div className="slider">
                <div>
                    <button disabled={!this.state.canGoPrev} data-direction="prev" onClick={this.nextSlideHandler.bind(this)}>Prev</button>
                </div>
                <div >
                    <img className="img" src={this.state.images[this.state.currentImageIndex]} alt="" />
                    {this.state.currentImageIndex}
                </div>
                <div>
                    <button disabled ={!this.state.canGoNext} data-direction="next" onClick={this.nextSlideHandler.bind(this)}>Next</button>
                </div>



            </div>
        )
    }
}

export default Slider