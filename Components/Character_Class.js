import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Character extends React.Component {
  state = {}
  
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