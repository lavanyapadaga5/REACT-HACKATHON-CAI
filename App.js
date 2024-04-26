import React, { Component } from 'react';
import StudentList from './StudentList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: ['Lavs', 'anuu', 'Dharuu', 'Alee', 'Bhanuu'] // Array of student names
    };
  }

  render() {
    return (
      <div>
        <h1>Student List</h1>
        <StudentList students={this.state.students} />
      </div>
    );
  }
}

export default App;