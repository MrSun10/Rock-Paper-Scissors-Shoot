/*function hvh() {
    var x = document.getElementById('hvhButtons');
    var y = document.getElementById('hvcButtons');
    var z = document.getElementById('Message');
    document.getElementById('Rock1').addEventListener('click', rock1());
    document.getElementById('paper1').addEventListener('click', paper1())
    if (y.style.display === 'block') {
        y.style.display = 'none'
    }
    z.innerHTML = ''
    x.style.display = 'block';
    function rock1() {
        document.getElementById('Rock2').addEventListener('click', Rock2r())
        document.getElementById('paper2').addEventListener('click', paper2r())
        document.getElementById('Scissors').addEventListener('click', scissors2r())
        function Rock2r() {
            z.innerHTML = 'Tie. Both players picked rock.'
        }
        function paper2r() {
            z.innerHTML = 'Player 2 wins. Player 1 picked rock and Player 2 picked paper.'
        }
        function scissors2r() {
        z.innerHTML = 'Player 1 wins. Player 1 picked rock and Player 2 picked scissors.'
        }
    } 
        function paper1() {
        document.getElementById('Rock2').addEventListener('click', Rock2p())
        document.getElementById('paper2').addEventListener('click', paper2p())
        document.getElementById('Scissors2').addEventListener('click', Scissors2p())
        function Rock2p() {
            z.innerHTML = 'Player 1 wins. Player 1 did paper and Player 2 did rock.'
        }
        function paper2p() {
            z.innerHTML = 'Tie. Both players picked paper.'
        }
        function Scissors2p() {
            z.innerHTML = 'Player 2 wins. Player 1 did paper and Player 2 did scissors.'
        }
    }
}
*/   

function hvc() {
    var x = document.getElementById('hvcButtons');
    // var y = document.getElementById('hvhButtons');
    var z = document.getElementById('Message');
    /*if (y.style.display === 'block') {
        y.style.display = 'none'
    }*/
    z.innerHTML = ''
    x.style.display = 'block';
}

function cvc() {
    // document.getElementById('randnum').innerHTML = 
    var x = 
    Math.floor(Math.random() * 3)
    var y =
    Math.floor(Math.random() * 3)
    var z = document.getElementById('hvcButtons');
    // var a = document.getElementById('hvhButtons');
    var b = document.getElementById('Message');
    if (z.style.display === 'block') {
        z.style.display = 'none'
    }
    /*if (a.style.display === 'block') {
        a.style.display = 'none'    
    }*/
    b.innerHTML = ''
    if (x == 0 && y == 0) {
        document.getElementById('Message').innerHTML = 'Tie. Computer 1 and 2 both picked rock.';
    }

    else if (x == 1 && y == 0) {
        document.getElementById('Message').innerHTML = 'Computer 1 picked Paper, Computer 2 picked rock, Computer 1 wins.';
    }

    else if (x == 2 && y == 0) {
        document.getElementById('Message').innerHTML = 'Computer 1 picked scissors, Computer 2 picked rock, Computer 2 wins.';
    }
    
    else if (x == 0 && y == 1) {
        document.getElementById('Message').innerHTML = 'Computer 1 picked rock, Computer 2 picked paper, Computer 2 wins.';
    }
    
    else if (x == 1 && y == 1) {
        document.getElementById('Message').innerHTML = 'Tie. Computer 1 and 2 both picked paper.';
    }
    
    else if (x == 2 && y == 1) {
        document.getElementById('Message').innerHTML = 'Computer 1 picked scissors, Computer 2 picked paper, Computer 1 wins.';
    }
    
    else if (x == 0 && y == 2) {
        document.getElementById('Message').innerHTML = 'Computer 1 picked rock, Computer 2 picked scissors, Computer 1 wins.';
    }
    
    else if (x == 1 && y == 2) {
        document.getElementById('Message').innerHTML = 'Computer 1 picked papper, Computer 2 picked scissors, Computer 2 wins.';
    }
    
    else if (x == 2 && y == 2) {
        document.getElementById('Message').innerHTML = 'Tie. Computer 1 and 2 both picked scissors.';
    }

    else {
        alert('Oops!')
    }
    
}

    function rock() {
       var y = 
    Math.floor(Math.random() * 3)
    if (y == 0) {
        document.getElementById('Message').innerHTML =  'Tie. Computer picked rock.'
    }
    else if (y == 1) {
        document.getElementById('Message').innerHTML = 'Computer wins. Computer picked paper'
    }
    else if (y == 2) {
        document.getElementById('Message').innerHTML = 'Player wins. Computer picked scissors.'
    }

    else {
        alert('Oops1!')
    }
}

    function paper() {
        var y = 
    Math.floor(Math.random() * 3)
    if (y == 0) {
        document.getElementById('Message').innerHTML = 'Player wins. Computer picked rock.'
    }
    else if (y == 1) {
        document.getElementById('Message').innerHTML = 'Tie. Computer picked paper'
    }
    else if (y == 2) {
        document.getElementById('Message').innerHTML = 'Computer wins. Computer picked scissors.'
    } 

    else {
        alert('Oops2!')
    }
}
    function scissors() {
        var y = 
    Math.floor(Math.random() * 3)
    if (y == 0) {
        document.getElementById('Message').innerHTML = 'Computer wins. Computer picked rock.'
    }
    else if (y == 1) {
        document.getElementById('Message').innerHTML = 'Player wins. Computer picked paper'
    }
    else if (y == 2) {
        document.getElementById('Message').innerHTML = 'Tie. Computer picked scissors.'
    } 

    else {
        alert('Oops3!')
    }
}   