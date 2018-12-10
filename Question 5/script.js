var link_images = [
    "http://vdoit.in/wp-content/uploads/2016/09/vDoIT_html-css-logo1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b4/MVC_Diagram_%28Model-View-Controller%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Deepweb_graphical_representation.svg/800px-Deepweb_graphical_representation.svg.png"
]

var name_images = [
    "Rôles HTML, CSS, JS",
    "Interactions Django",
    "Parties du Web"
]

function setNamesButtons(id) {
    var next_button = $("button#next")
    var previous_button = $("button#previous")
    switch(id) {
        case 0:
            next_button.html(name_images[1] + ' <i class="fas fa-chevron-right"></i>');
            previous_button.html('<i class="fas fa-chevron-left"></i> ' + name_images[2]);
            break;
        case 1:
            next_button.html(name_images[2] + ' <i class="fas fa-chevron-right"></i>');
            previous_button.html('<i class="fas fa-chevron-left"></i> ' + name_images[0]);
            break;
        case 2:
            next_button.html(name_images[0] + ' <i class="fas fa-chevron-right"></i>');
            previous_button.html('<i class="fas fa-chevron-left"></i> ' + name_images[1]);
            break;
    }
}

function previousImage(id) {
    console.log(id)
    setNamesButtons(id);
    var future_link = link_images[(parseInt(id)-1)%3];
    var img = $("img#diaporama");
    img.attr("src", future_link);
    img.data("imgid",(parseInt(id)-1)%3);
}

function nextImage(id) {
    console.log(id)
    setNamesButtons(id);
    var future_link = link_images[(parseInt(id)+1)%3];
    var img = $("img#diaporama");
    img.attr("src", future_link);
    img.data("imgid",(parseInt(id)+1)%3);
}

$(function() {
    nextImage(-1);
});

$("button#previous").click(function() {
    var current_img_id = $("img#diaporama").data("imgid");
    previousImage(current_img_id)
})

$("button#next").click(function() {
    var current_img_id = $("img#diaporama").data("imgid");
    nextImage(current_img_id)
})