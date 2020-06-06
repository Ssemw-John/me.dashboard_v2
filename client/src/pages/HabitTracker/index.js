import React, { Component } from 'react';
import { Plus } from 'react-feather';

import Card from '../../components/Card';
import Button from '../../components/Button';

class HabitTracker extends Component {
  render() {
    return (
      <Card.Card className="h-full shadow-md">
        <Card.Header>
          <Button className="p-2 ml-auto" circle><Plus className="" /></Button>
        </Card.Header>
      </Card.Card>
    )
  }
}

export default HabitTracker;