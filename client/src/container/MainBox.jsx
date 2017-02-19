var React = require("react");
var Board = require("../components/Board.jsx");
var WrestlerSelector = require ("../components/WrestlerSelector.jsx");
var QuestionSelector = require ("../components/QuestionSelector.jsx")
var Wrestler = require("../components/models/wrestler");

var MainBox = React.createClass({
  getInitialState: function(){
    var wrestlerArray = [];

      var cmPunk = new Wrestler("CM Punk", "../resources/cm_punk.png", "No he doesn't", "No he doesn't", "Yes he does", "Yes he does", "No he doesn't", "No he doesn't")
      var joMo = new Wrestler("John Morrison", "../resources/john_morrison.png", "Yes he does", "No he doesn't", "No he doesn't", "Yes he does", "No he doesn't", "No he doesn't")
      var kane = new Wrestler("Kane", "../resources/kane.png", "Yes he does", "No he doesn't", "No he doesn't", "No he doesn't", "Yes he does", "No he doesn't")
      var ryback = new Wrestler("Ryback", "../resources/ryback.png", "No he doesn't", "No he doesn't", "No he doesn't", "Yes he does", "No he doesn't", "No he doesn't")
      var sheamus = new Wrestler("Sheamus", "../resources/sheamus.png", "No he doesn't", "No he doesn't", "No he doesn't", "Yes he does", "No he doesn't", "No he doesn't")
      var y2j = new Wrestler("Y2J", "../resources/y2j.png", "No he doesn't", "No he doesn't", "No he doesn't", "No he doesn't", "No he doesn't", "No he doesn't")
      var yoshiTatsu = new Wrestler("Yoshi Tatsu", "../resources/yoshi_tatsu.png", "Yes he does", "No he doesn't", "No he doesn't", "No he doesn't", "No he doesn't", "Yes he does")
      var zackRyder = new Wrestler("Zack Ryder", "../resources/zack_ryder.png", "No he doesn't", "Yes he does", "No he doesn't", "No he doesn't", "No he doesn't", "No he doesn't")


      wrestlerArray.push(cmPunk);
      wrestlerArray.push(joMo);
      wrestlerArray.push(kane);
      wrestlerArray.push(ryback);
      wrestlerArray.push(sheamus);
      wrestlerArray.push(y2j);
      wrestlerArray.push(yoshiTatsu);
      wrestlerArray.push(zackRyder);
     

    return {
      wrestlerArray: wrestlerArray,
      characters: ["select","CM Punk", "John Morrison", "Kane", "Ryback", "Sheamus", "Y2J", "Yoshi Tatsu", "Zack Ryder"],
      questions: ["select","has long hair?", "has a head band?", "has a tattoo?", "has a beard?", "wears a mask?", "wears facepaint?"],
      chosen: null,
      chosenObject: null,
      focusCharacter: null
      }
  },

  generateChosen: function(){
    var randomIndex = Math.floor((Math.random() * this.state.characters.length) + 1)
    var chosenCharacter = this.state.characters[randomIndex +1];
    this.setState({chosen: chosenCharacter});
    var chosenCharacterObject = this.state.wrestlerArray[randomIndex]
    this.setState({chosenObject: chosenCharacterObject});
    console.log("chosenObject: ", chosenCharacterObject);
  },

  turn: function(event){
    var personSelect = event.target.value;
    var lookup = {
      1: () => { 
        this.state.wrestlerArray[0].image = "../resources/logo.png"
        return(this.state.wrestlerArray)
      },
      2: () => { 
        this.state.wrestlerArray[1].image = "../resources/logo.png"
        return(this.state.wrestlerArray)
      },
      3: () => { 
        this.state.wrestlerArray[2].image = "../resources/logo.png"
        return(this.state.wrestlerArray)
      },
      4: () =>{
        this.state.wrestlerArray[3].image = "../resources/logo.png"
        return(this.state.wrestlerArray)
      },
      5: () =>{
        this.state.wrestlerArray[4].image = "../resources/logo.png"
        return(this.state.wrestlerArray)
      },
      6: () =>{
        this.state.wrestlerArray[5].image = "../resources/logo.png"
        return(this.state.wrestlerArray)
      },
      7: () =>{
        this.state.wrestlerArray[6].image = "../resources/logo.png"
        return(this.state.wrestlerArray)
      },
      8: () =>{
        this.state.wrestlerArray[7].image = "../resources/logo.png"
        return(this.state.wrestlerArray)
      }
    }

    var newwrestlerArray = lookup[personSelect]();
    this.setState({wrestlerArray: newwrestlerArray});
  },


  componentDidMount: function(){
    this.generateChosen();
  },

  setFocusCharacter: function(character){
    this.setState({focusCharacter: character});
    console.log(this.state.focusCharacter);
  },

  render: function(){
    console.log("chosenCharacter:", this.state.chosen);
    return (
      <div className = "info-box">
      <h1>Who's Clothesline is it anyway?</h1>
      <QuestionSelector className="question-selector" questions = {this.state.questions} wrestlerArray = {this.state.wrestlerArray} chosen = {this.state.chosen} chosenObject = {this.state.chosenObject}/>
      <WrestlerSelector className="wrestler-selector" characters = {this.state.characters} chosen = {this.state.chosen} selectCharacter = {this.setFocusCharacter} check = {this.checkGuess} wrestlerArray = {this.state.wrestlerArray}/>
      <div className ="board-box">
      <Board turn = {this.turn} wrestlerArray = {this.state.wrestlerArray} />
      </div>
      </div>
      );
  }
});

module.exports = MainBox;