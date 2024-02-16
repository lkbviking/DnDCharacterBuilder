
export class Circle {
    constructor(color, opacity, diameter, position) {
        let possibleColors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'black'];
        if (color === undefined) {
            color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
        }
        if (opacity === undefined) {
            opacity = 0.1 + Math.random() * 0.7;
        }
        let width = window.innerWidth;
        let height = window.innerHeight;
        
        if (diameter === undefined) {
            diameter = Math.random() * (width + height) / 3;
        }
        if (position === undefined) {
            position = [Math.random() * (width  + diameter) - diameter / 2, 
                        Math.random() * (height + diameter) - diameter / 2];
        }

        this.circleID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        let circle = document.createElement('div');
        circle.style.position = 'absolute';
        circle.style.width = diameter + 'px';
        circle.style.height = diameter + 'px';
        circle.style.left = position[0] + 'px';
        circle.style.top = position[1] + 'px';
        circle.style.backgroundColor = color;
        circle.style.opacity = opacity;
        circle.classList.add('circle');
        circle.setAttribute('id', this.circleID);
    }
}