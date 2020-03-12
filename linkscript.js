// click on logo to make menu appear
$('.menu-bar').on('click', function (event){
    if($('.screen').is(":hidden")){
        $('.screen').show()
    }
    else{
        $('.screen').hide()
    }
})


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
        scrollTop: $("section.profile").offset().top
    })
})

//Skills
$('#skills').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.skills").offset().top
    })
})

//Projects
$('#projects').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.projects").offset().top
    })
})

//Contacts
$('#contact').on('click',  function (event) {
    $('html, body').animate({
        scrollTop: $("section.contact-form").offset().top
    })
})

