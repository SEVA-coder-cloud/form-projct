import React, { Component } from 'react';

class GuessNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: null,          
      guess: '',             
      message: 'Введи число від 1 до 10',
      attempts: 0,
      gameOver: false,
      history: []            
    };
  }}

  componentDidMount() {
    this.generateNumber();
    console.log('componentDidMount: гра запущена, число загадано');
  }