var React = require ("react");


var Board = React.createClass({

  render: function(){
    var buttonNodes = this.props.wrestlerArray.map((button, index)=>{
      return(
        <div className = "block">
        <div className = "button">
        <input key = {index} type = "image" value = {index + 1} src = {button.image}  onClick = {this.props.turn}/>
        </div>
        <p>{button.name}</p>
        </div>
        )
    })


    return (
      <div className = "board">


      {buttonNodes}


      </div>
      )
  }
})   


module.exports = Board;