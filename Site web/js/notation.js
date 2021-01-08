// const allStars = document.querySelectorAll(".fa-star");
// const rating = document.querySelector(".rating")
// init();

// function init (){
//     allStars.forEach(star => {
//         star.addEventListener("click", saveRating);
//         star.addEventListener("mouseover", addCSS);
//         star.addEventListener("mouseleave", removeCSS);

//     })
// }

// function saveRating(e){
//     removeEventListenerToAllStars();
//     rating.innerText = e.target.dataset.star;
// }

// function removeEventListenerToAllStars() {
//     allStars.forEach( star => {
//         star.removeEventListener("click", saveRating);
//         star.removeEventListener("mouseover", addCSS);
//         star.removeEventListener("mouseleave", removeCSS);
      
//     })
// }

// function addCSS(e, css = "checked"){
//     e.target.classList.add(css);
//     const overedStar = e.target;
//     overedStar.classList.add(css);
//     const previousSiblings = getPreviousSliblings(overedStar);
//     console.log("previousSiblings", previousSiblings )
//     previousSiblings.forEach(elem => elem.classList.add(css));

// }

// function removeCSS(e , css = "checked") {
//     const overedStar = e.target;
// overedStar.classList.remove(css);
// const previousSiblings = getPreviousSliblings(overedStar);
// previousSiblings.forEach(elem => elem.classList.remove(css));
// }

// function getPreviousSliblings(elem) {
//     console.log("elem.previousSibling", elem.previousSibling);
//     let siblings = [];
//     const spanNodeType = 1;
//     while (elem =elem.previousSibling) {
//         if(elem.nodeType === spanNodeType) {
//             siblings =[elem, ...siblings];

//         }
//     }
//     return siblings;
// }

var starClicked = false;

$(function() {

  $('.star').click(function() {

    $(this).children('.selected').addClass('is-animated');
    $(this).children('.selected').addClass('pulse');

    var target = this;

    setTimeout(function() {
      $(target).children('.selected').removeClass('is-animated');
      $(target).children('.selected').removeClass('pulse');
    }, 1000);

    starClicked = true;
  })

  $('.half').click(function() {
    if (starClicked == true) {
      setHalfStarState(this)
    }
    $(this).closest('.rating').find('.js-score').text($(this).data('value'));

    $(this).closest('.rating').data('vote', $(this).data('value'));
    calculateAverage()
    console.log(parseInt($(this).data('value')));

  })

  $('.full').click(function() {
    if (starClicked == true) {
      setFullStarState(this)
    }
    $(this).closest('.rating').find('.js-score').text($(this).data('value'));

    $(this).find('js-average').text(parseInt($(this).data('value')));

    $(this).closest('.rating').data('vote', $(this).data('value'));
    calculateAverage()

    console.log(parseInt($(this).data('value')));
  })

  $('.half').hover(function() {
    if (starClicked == false) {
      setHalfStarState(this)
    }

  })

  $('.full').hover(function() {
    if (starClicked == false) {
      setFullStarState(this)
    }
  })

})

function updateStarState(target) {
  $(target).parent().prevAll().addClass('animate');
  $(target).parent().prevAll().children().addClass('star-colour');

  $(target).parent().nextAll().removeClass('animate');
  $(target).parent().nextAll().children().removeClass('star-colour');
}

function setHalfStarState(target) {
  $(target).addClass('star-colour');
  $(target).siblings('.full').removeClass('star-colour');
  updateStarState(target)
}

function setFullStarState(target) {
  $(target).addClass('star-colour');
  $(target).parent().addClass('animate');
  $(target).siblings('.half').addClass('star-colour');

  updateStarState(target)
}

function calculateAverage() {
  var average = 0

  $('.rating').each(function() {
    average += $(this).data('vote')
  })

  $('.js-average').text((average/ $('.rating').length).toFixed(1))
}


