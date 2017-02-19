var React = require ("react");

var QuestionSelector = React.createClass({
  getInitialState: function(){
    return {selectedIndex: undefined, answer: null};
  },

  handleChange: function(event){
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});
    var questionAsked = this.props.questions[newIndex];
    console.log("question asked", questionAsked);
    console.log("newIndex:", newIndex);
    console.log("wrestlerArray: ", this.props.wrestlerArray);


    if(newIndex == 1){
      for (var wrestler of this.props.wrestlerArray){
        console.log(wrestler.longHair);
        if(wrestler.longHair === this.props.chosenObject.longHair){
          this.setState({answer: wrestler.longHair})
          console.log("answer:", this.state.answer);
        }
      }
    }else if(newIndex == 2){
      for (var wrestler of this.props.wrestlerArray){
        console.log(wrestler.headBand);
        if(wrestler.headBand === this.props.chosenObject.headBand){
          this.setState({answer: wrestler.headBand})
          console.log("answer:", this.state.answer);
        }
      }
    }else if(newIndex == 3){
      for (var wrestler of this.props.wrestlerArray){
        console.log(wrestler.tattoo);
        if(wrestler.tattoo === this.props.chosenObject.tattoo){
          this.setState({answer: wrestler.tattoo})
          console.log("answer:", this.state.answer);
        }
      }
    }else if(newIndex == 4){
      for (var wrestler of this.props.wrestlerArray){
        console.log(wrestler.beard);
        if(wrestler.beard === this.props.chosenObject.beard){
          this.setState({answer: wrestler.beard})
          console.log("answer:", this.state.answer);
        }
      }
    }else if(newIndex == 5){
      for (var wrestler of this.props.wrestlerArray){
        console.log(wrestler.mask);
        if(wrestler.mask === this.props.chosenObject.mask){
          this.setState({answer: wrestler.mask})
          console.log("answer:", this.state.answer);
        }
      }
    }else if(newIndex == 6){
      for (var wrestler of this.props.wrestlerArray){
        console.log(wrestler.facePaint);
        if(wrestler.facePaint === this.props.chosenObject.facePaint){
          this.setState({answer: wrestler.facePaint})
          console.log("answer:", this.state.answer);
        }
      }
    }
  },

  render: function(){
    var options = this.props.questions.map(
      function(question, index){
        return<option value ={index} key = {index}> {question} </option>
      })

    return(
      <div className = "answer">
      <p> Pick a maneuver:
      <select id = "questions" value = {this.state.selectedIndex} onChange = {this.handleChange}> {options} </select>
      </p>

      <h2>{this.state.answer}</h2>
      </div>
      );
  }
});

module.exports = QuestionSelector;