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

// for (var i = 0; i < subjects.length; i++) {
//   if (subjects[i].parties.position == 'pro' )
//   {
//   return subjects[i].parties;
// }
// }
var vvd = 0;
var cda = 0;
var pvv = 0;
var d66 = 0;
var groenlinks = 0;
var sp = 0;
var pvda = 0;
var christenUnie = 0;
var dieren = 0;
var sgp = 0;
var denk = 0;
var forum = 0;
var lokaal = 0;
var ondernemersPartij = 0;
var vnl = 0;
var nieuwe =0;
var burger = 0;
var piraten = 0;
var artikel = 0;
var libertarische = 0;






 var nr = 0;
var choices = [];

var title = document.getElementById('title');
var statement = document.getElementById('statement');
var next = document.getElementById('overslaan');
var back = document.getElementById('terug');
var eens = document.getElementById('eens');
var geen = document.getElementById('geen');
var oneens = document.getElementById('oneens');

console.log(title);

title.innerHTML= subjects[nr].title;
statement.innerHTML = subjects[nr].statement;
// nr++;
// statement.innerHTML = subjects[nr].title;


var geenWaar = function(event) {
	nr++
	choices.push('ambivalent');
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
	console.log(choices);
  console.log(nr);
}
var waar  = function(event) {
saveChoice('pro')

	nr++
	choices.push('pro')
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
	console.log(choices);
  console.log(nr);
}
var nietWaar = function(event) {
	nr++
	choices.push('contra');
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
	console.log(choices);
  console.log(nr);
}


var next = function(event){
	nr++;
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
  console.log(nr);
  if (nr == 7  ) {

  }
}

var prev = function(event){
	nr--;
  choices.pop();
	title.innerHTML = subjects[nr].title;
	title.innerHTML = subjects[nr].statement;
  console.log(choices);
  console.log(nr);
}

overslaan.onclick = next;
terug.onclick = prev;
eens.onclick = waar;
geen.onclick = geenWaar;
oneens.onclick = nietWaar;

var nr = Math.min(Math.max(parseInt(nr), 0), 20);
console.log(nr);


var position = subjects[1].parties[1].position;
console.log(position);

var party = [
  {
    name: 'VVD',
    pt: 0
  },
  {
    name:'CDA',
    pt:0
  },
  {
    name:'PVV',
    pt:0
  },
  {
    name:'D66',
    pt:0
  },
  {
    name:'GroenLinks',
    pt:0
  },
  {
    name:'SP',
    pt:0
  },
  {
    name:'PvdA',
    pt:0
  },
  {
    name:'ChristenUnie',
    pt:0
  },
  {
    name:'Partij voor de Dieren',
    pt:0
  },
  {
    name:'SGP',
    pt:0
  },
  {
    name:'DENK',
    pt:0
  },
  {
    name:'Forum voor Democratie',
    pt:0
  },
  {
    name:'Lokaal in de kamer',
    pt:0
  },
  {
    name:'OndernemersPartij',
    pt:0
  },
  {
    name:'VNL',
    pt:0
  },
  {
    name:'Nieuwe Wegen',
    pt:0
  },
  {
    name:'De Burger Beweging',
    pt:0
  },
  {
    name:'Piratenpartij',
    pt:0
  },
  {
    name:'Artikel 1',
    pt:0
  },
  {
    name:'Libertarische Partij',
    pt:0
  }
]


// function saveChoice(choice) {
//   loop door de parties heen van uit de huidige subject
// for(var i = 0; i < 20; i ) {
//   if( parties.position == choice) {
//     i++
//   }
//   if pary.pos == choice
//   verhoog match met huidige party voor de huidige subject met 1
// }
//
// }
subjects[nr].parties.forEach(function(element) {
  console.log(element.position);
});
