import React from 'react';

class Character extends React.Component {
  state = {}
  
  // Placeholder custom component - needs more research before it gets incorporated.
  constructor(name, type, attack, defense, body, mind, gold, inventory) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defense = defense;
    this.body = body;
    this.mind = mind;
    this.gold = gold;
    this.inventory = inventory;
  }
}

export default Character;