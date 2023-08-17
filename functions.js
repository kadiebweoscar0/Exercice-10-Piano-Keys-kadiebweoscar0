function keyPlay(e){
    e.target.style.backgroundColor = 'crimson';
};

// Write a named function with event handler properties
function keyReturn(e){
    e.target.style.backgroundColor = '';
};

module.exports = { keyPlay, keyReturn };