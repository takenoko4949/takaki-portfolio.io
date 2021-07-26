let movef = function(e){
    document.getElementById('work0').classList.add('animate__slideOutRight');
    document.getElementById('work2').classList.add('animate__slideInLeft');
    console.log(12);
}

let moves = function(e){
    document.getElementById('work0').classList.toggle('animate__slideOutRight');
    document.getElementById('work2').classList.toggle('animate__slideInLeft');
    document.getElementById('work0').classList.toggle('animate__slideOutLeft');
    document.getElementById('work2').classList.toggle('animate__slideInRight');
    console.log(11)
}



document.getElementById("workto0").addEventListener('click', moves);
document.getElementById("workto1").addEventListener('click', movef);










    

