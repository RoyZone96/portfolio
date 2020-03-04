//nav links

//Home 
$('#home').on('click',  function (event) {
    $('html, body').animate({
        scrollTop: 0
    })
}) 

//About me
$('#about').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $(section.profile).offset().top
    })
})

//Skills
$('#skills').on('click', function (event) {
  

})

//Projects
$('#projects').on('click', function (event) {
    
})

//Contacts
$('#contact').on('click',  function (event) {
   
})

