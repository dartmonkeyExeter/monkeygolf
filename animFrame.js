class AnimFrame {
    constructor() {
      this.elements = {
        hat: { right: '26%', bottom: '42.5%' },
        head: { right: '25%', bottom: '40%' },
        torso: { right: '23.25%', bottom: '31%' },
        upperLeftArm: { right: '24%', bottom: '33%' },
        upperRightArm: { right: '26.5%', bottom: '33%' },
        lowerLeftArm: { right: '26.25%', bottom: '28.25%' },
        lowerRightArm: { right: '27.5%', bottom: '29%', transform: 'rotate(-10deg) scale(2)' },
        leftHand: { right: '27.5%', bottom: '26.5%' },
        rightHand: { right: '28.25%', bottom: '26.5%' },
        upperLegs: { right: '22.5%', bottom: '23%' },
        lowerLeftLeg: { right: '22.5%', bottom: '16.5%' },
        lowerRightLeg: { right: '24.5%', bottom: '16.5%' },
        leftFoot: { right: '23%', bottom: '12.5%' },
        rightFoot: { right: '25%', bottom: '13.75%' },
        club: { right: '29.25%', bottom: '14.5%' },
      };
    }
  
    // Method to get an element's position and transform
    getElementStyle(element) {
      return this.elements[element] || null;
    }
  
    // Method to set an element's position and transform
    setElementStyle(element, styles) {
      if (this.elements[element]) {
        this.elements[element] = { ...this.elements[element], ...styles };
      }
    }
  
    // Method to get the current positions for all elements
    getAllStyles() {
      return this.elements;
    }
  
    // Method to apply current positions to CSS (useful for animation)
    applyStyles() {
      for (const [element, styles] of Object.entries(this.elements)) {
        const elementNode = document.getElementById(element);
        if (elementNode) {
          for (const [property, value] of Object.entries(styles)) {
            elementNode.style[property] = value;
          }
        }
      }
    }
  }
  
  // Example Usage:
  
function swing() {
    
}