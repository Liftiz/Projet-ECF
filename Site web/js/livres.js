// Js pour le seigneur des anneaux :
   $("#livres1").hover(
    function() {
      $(this).attr('src','../img/dos.jpg');
    }
  );


// Js pour gatsby le magnifique:
$("#livres2").hover(
    function() {
      $(this).attr('src','../img/dosG.jpg');
    }
  );

//   Js pour Cent ans de solitude

  $("#livres3").hover(
    function() {
      $(this).attr('src','../img/dosCent.jpg');
    }
  );


//   Js pour à la recherche du temps perdu:
  $("#livres4").hover(
    function() {
      $(this).attr('src','../img/dosRecher.jpg');
    }
  );


  $('a.share').click(function(e){
	e.preventDefault();
	let $link   = $(this);
	let href    = $link.attr('href');
	let network = $link.attr('data-network');

	let networks = {
		facebook : { width : 600, height : 300 },
		twitter  : { width : 600, height : 254 }
	};

	let popup = function(network){
		let options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';
		window.open(href, '', options+'height='+networks[network].height+',width='+networks[network].width);
	}

	popup(network);
});
