
import React from 'react';
import { members } from './membersDetails';
import Card from './Card';
import './App.css';

function App(){
    return (
      <div>
        <div className="container-fluid">
          <div className="jumbotron bg-light text-dark text-center">
            <h2 className="display-2">Welcome to Team Selection</h2>
            <h3 className="display-6">Badminton Tourney : Year-End-Meetup</h3>
          </div>
        </div>
        <div className="row text-center">    
          {members.map((member) => (
            <Card key={member.id} card={member} />
          ))}
        </div>
      </div>
    );
}

export default App;