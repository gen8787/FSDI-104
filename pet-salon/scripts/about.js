function showMore() {
    $("#lblPhone").text("Phone: 111-222-3333");
    $("#lblEmail").text("Email: gary@gmail.com");

    $("#btnShowMore").hide();
}


// I N I T
function init() {
    console.log("Document Ready");

    $("#btnShowMore").click(showMore);

}

window.onload = init;