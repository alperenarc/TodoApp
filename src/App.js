import React, { Component } from 'react';
import './App.css';
import Note from './components/Note';
class App extends Component {

  constructor(props) {
    super(props);
    var datenow = new Date();
    this.state = {
      noteText: '',
      notes: [],
      val: new Date()
    }
  }
  updateNoteText(noteText) {
    this.setState({ noteText: noteText.target.value })
  }

  addNote() {
    if (this.state.noteText === '') { return}

    var noteArr = this.state.notes;
    noteArr.push(this.state.noteText);
    this.setState({ noteText: '' }); this.textInput.focus();
  }
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.addNote();
    }
  }
  deleteNote(index) {
    var noteArr = this.state.notes;
    noteArr.splice(index, 1);
    this.setState({ notes: noteArr })
  }

  render() {
    var notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val}
        deleteMethods={() => this.deleteNote(key)} />
    })

    return (
      <div className="App">
        <div className="header">React Todo Application</div>
        {notes} 
        <label value={this.state.val}></label>
        <div className="btn" onClick={this.addNote.bind(this)}>+</div>
        <input type="text" ref={((input) => { this.textInput = input })}
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
          placeholder="Enter your task " />
      </div>
    );
  }
}
export default App;
