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





var pt = 0;
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
  // saveChoice('ambivalent');
	nr++
	choices.push('ambivalent');
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
	console.log(choices);
  console.log(nr);

  if (nr == 7) {
    resultaat();
  }

}
var waar  = function(event) {
// saveChoice('pro');

	nr++
	choices.push('pro');
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
	console.log(choices);
  console.log(nr);
  if (nr == 7) {
    resultaat();
  }
}
var nietWaar = function(event) {
  // saveChoice('contra');
	nr++
	choices.push('contra');
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
	console.log(choices);
  console.log(nr);
  if (nr == 7) {
    resultaat();
  }
}


var next = function(event){
	nr++;
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
  console.log(nr);
  if (nr == 7) {
    resultaat();
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

var resultaat = function(event) {
  resultaat = '';
  title.innerHTML = 'Resultaat:';
  keysSorted = Object.values(results).sort(function(a,b){return results[a]-results[b]})
  console.log(keysSorted)
  showResults();
  for (i = 0; i < 20; i++) {
    resultaat += results[i].name + ': ' + results[i].pt + '</br>';
  }
  statement.innerHTML = resultaat;
  document.getElementById('eens').style.visibility = 'hidden';
  document.getElementById('geen').style.visibility = 'hidden';
  document.getElementById('oneens').style.visibility = 'hidden';
  document.getElementById('overslaan').style.visibility = 'hidden';
  document.getElementById('terug').style.visibility = 'hidden';
  document.getElementById('resultaat1').style.visibility = 'hidden';
}
overslaan.onclick = next;
terug.onclick = prev;
eens.onclick = waar;
geen.onclick = geenWaar;
oneens.onclick = nietWaar;
resultaat1.onclick = resultaat;

console.log(nr);


var position = subjects[1].parties[1].position;
console.log(position);

var results = [
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

//
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

// function saveChoice(choice) {
//   subjects[nr].parties.forEach(function(element) {
//     if (choice === position) {
//       console.log(element.position);
//       party++;
//     }
//   });
// }
function showResults() {

	choices.forEach(function(choice, index) {

		console.log(subjects[index]);

		subjects[index].parties.forEach(function(party, index) {

			results.forEach(function(result) {

				if (party.name == result.name) {
					console.log(party);
					console.log(party.position);

					if (party.position == choice) {
						console.log(party.position);
						console.log(choice);
						result.pt++;
					}
				}
			});
		});
	});

	console.log(results);
}
