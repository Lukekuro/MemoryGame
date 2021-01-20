jQuery(document).ready(function($) {
	var trojwymiar = $('#trojwymiar');
		trojwymiar.append('<div class="obrazzew"></div>');
		var obrazzew = $('.obrazzew');
		var alfabet = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
		var testuj = 0;
		var zapiszalfa = [];
		var kraj = 0;
	for (var i = 0; i < 16; i++) {
		var rand = Math.floor(Math.random()*alfabet.length);
		obrazzew.append('<div class="boxy"><div class="tylem">'+ alfabet[rand] +'</div><div class="przodu"></div><div>');
		alfabet.splice(rand,1);
	};
	var boxes = $('.boxy');
	start();
	function start () {
		boxes.click(function() {
			zapiszalfa.push($(this));
			testuj++;
			$(this).find('.przodu').css('transform', 'perspective(900px) rotateY(180deg)');
			$(this).find('.tylem').css('transform', 'perspective(900px) rotateY(0deg)');
			if (testuj === 2) {
				boxes.off();
				if (zapiszalfa[0].html() === zapiszalfa[1].html()) {
					testuj = 0;
					zapiszalfa.length = 0;
					kraj++;
					if (kraj === 8) {
						alert('Gratuluje')
					};
					start();
				}else {
					setTimeout(function(){
					zapiszalfa[0].find('.przodu').css('transform', 'perspective(900px) rotateY(0deg)');
					zapiszalfa[0].find('.tylem').css('transform', 'perspective(900px) rotateY(180deg)');
					zapiszalfa[1].find('.przodu').css('transform', 'perspective(900px) rotateY(0deg)');
					zapiszalfa[1].find('.tylem').css('transform', 'perspective(900px) rotateY(180deg)');
					testuj = 0;
					zapiszalfa.length = 0;
						start();
					},800)					
				}
			};
		});
	}
});
var KolorWew;
var KolorZew;
var defaultColor = "#CCC";
window.addEventListener("load", startup, false);
function startup() {
  KolorWew = document.querySelector("#KolorWew");
  KolorWew.value = defaultColor;
  KolorWew.addEventListener("input", updateFirst, false);
  KolorWew.addEventListener("change", updateFirst, false);
  KolorWew.select();

  KolorZew = document.querySelector("#KolorZew");
  KolorZew.value = defaultColor;
  KolorZew.addEventListener("input", updateFirsts, false);
  KolorZew.addEventListener("change", updateFirsts, false);
  KolorZew.select();
}
function updateFirst(event) {
  var kolory = document.querySelector(".obrazzew");
    kolory.style.backgroundColor = event.target.value;
  document.querySelectorAll(".obrazzew").forEach(function(kolory) {
    kolory.style.backgroundColor = event.target.value;	
  });
}	
function updateFirsts(event) {
  var kolor = document.querySelector(".przodu");
    kolor.style.backgroundColor = event.target.value;
  document.querySelectorAll(".przodu").forEach(function(kolor) {
    kolor.style.backgroundColor = event.target.value;	
  });
}