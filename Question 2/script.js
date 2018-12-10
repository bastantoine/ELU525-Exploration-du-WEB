var link_images = [
    "http://vdoit.in/wp-content/uploads/2016/09/vDoIT_html-css-logo1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b4/MVC_Diagram_%28Model-View-Controller%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Deepweb_graphical_representation.svg/800px-Deepweb_graphical_representation.svg.png"
]

function previousImage(id) {
    var previous_link = link_images[(parseInt(id)-1)%3];
    var img = $("img#diaporama");
    img.attr("src", previous_link);
    img.data("imgid",(parseInt(id)-1));
}

function nextImage(id) {
    var next_link = link_images[(parseInt(id)+1)%3];
    var img = $("img#diaporama");
    img.attr("src", next_link);
    img.data("imgid",(parseInt(id)+1));
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