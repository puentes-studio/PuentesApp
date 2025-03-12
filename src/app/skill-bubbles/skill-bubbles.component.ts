import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-bubbles',
  templateUrl: './skill-bubbles.component.html',
  styleUrl: './skill-bubbles.component.css',
})
export class SkillBubblesComponent {
  skills = {
    hard: [
      {
        name: 'Coding',
      },
      {
        name: 'Design',
      },
      {
        name: 'Research',
      },
      {
        name: 'Javascript',
      },
      {
        name: 'React',
      },
      {
        name: 'Angular',
      },
      {
        name: 'NodeJS',
      },
      {
        name: 'MySQL',
      },
      {
        name: 'Logic',
      },
    ],
    soft: [
      {
        name: 'Creative',
      },
      {
        name: 'Team Player',
      },
      {
        name: 'Problem Solving Mindset',
      },
      {
        name: 'Detail Oriented',
      },
      {
        name: 'Reliable',
      },
      {
        name: 'Fast Learner',
      },
      {
        name: 'Adapatability',
      },
      {
        name: 'Curiosity',
      },
      {
        name: 'Comunication',
      },
    ],
    software: [
      {
        name: 'Illustrator',
      },
      {
        name: 'Photoshop',
      },
      {
        name: 'Figma',
      },
      {
        name: 'After Effects',
      },
      {
        name: 'Premier',
      },
      {
        name: 'Adobe XD',
      },
      {
        name: 'Wordpress',
      },
      {
        name: 'Ableton Live',
      },
      {
        name: '& more...',
      },
    ],
  };
}
