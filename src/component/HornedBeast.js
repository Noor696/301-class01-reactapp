import React from "react";

class HornedBeast extends React.Component{
    render(){
        return(
            <div>
                <h2> {this.props.title} </h2>
                <p> {this.props.description} </p>
                <img src={this.props.imageUrl} alt= "images" title= {this.props.title}/> 
                <style jsx >
                    {`
                    img {
                        width:500px;
                        height:350px;
                    }`}
                </style>
            </div>

        )
    }


}
export default HornedBeast;