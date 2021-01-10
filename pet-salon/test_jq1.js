function init() {
    console.log("Test page loaded.");

    // js
    var e = document.getElementById("txtTest");
    console.log(e);

    e.value = "Hello there."

    // j query
    var byId = $("#txtTest");
    var byTag = $("button");
    var byClass = $(".red");

    var r = $(".second hr");
    console.log(r);

    $("#txtTest").val("hello from JQ");

    // js
    // document.getElementById("btnTwo").onclick = magic;

    // jq
    $("#btnTwo").click(magic);

    $("#txtTest").hover(normal);


}

function magic() {
    console.log("this is magic!");

    $("div").hide();

    $("h1").addClass("dance");
}

function normal() {
    $("div").show();
    $("h1").removeClass("dance")
}

window.onload = init;