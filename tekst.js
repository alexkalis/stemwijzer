// var nr = 0;
// function add_eens(){
// nr++
// document.getElementById('title').innerHTML=subjects[i].title;
// document.getElementById('statement').innerHTML=subjects[i].statement;
// }
//
//  for (i = 0; i < 3; i++ ) {
//  	console.log(subjects[i].title);
// 	console.log(subjects[i].statement);
//
// document.getElementById('title').innerHTML=subjects[i].title;
// document.getElementById('statement').innerHTML=subjects[i].statement;
// }
//
// add_eens();
// // for (i = 0; i < 3; i++) {
// // 	document.getElementById('statement').onClick = click(i)
// // }
// // function click(i) {
// // return function() {
// // 	document.getElementById('statement').innerHTML=subjects[i].statement;
// // }
// // }
var ja = 0;
var nee = 0;
var beide = 0;



 var nr = 0;
 choices = [];

var title = document.getElementById('title');
var statement = document.getElementById('statement');
var next = document.getElementById('overslaan');
var back = document.getElementById('terug');
var eens = document.getElementById('eens');
var geen = document.getElementById('geen');
var oneens = document.getElementById('oneens');

console.dir(title);

title.innerHTML= subjects[nr].title;
statement.innerHTML = subjects[nr].statement;
// nr++;
// statement.innerHTML = subjects[nr].title;
var geenWaar = function(event) {
	nr++
	choices.push('ambivalent');
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
}
var waar  = function(event) {
	nr++
	choices.push('pro')
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;

}
var nietWaar = function(event) {
	nr++
	choices.push('contra');
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
}


var next = function(event){
	nr++;
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
}

var prev = function(event){
	nr--;
	title.innerHTML = subjects[nr].title;
	title.innerHTML = subjects[nr].statement;
}

overslaan.onclick = next;
terug.onclick = prev;
eens.onclick = waar;
geen.onclick = geenWaar;
oneens.onclick = nietWaar;
