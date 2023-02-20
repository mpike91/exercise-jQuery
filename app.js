$("body").append('<form><input placeholder="Title"><input placeholder="Rating"><button>Submit</button></form>');
$("body").append('<div class="div-cont"></div>');
$("form").on("submit", function(event){
    event.preventDefault();
    const title = $("input").eq(0).val();
    const rating = $("input").eq(1).val();
    if (title.length < 2) return alert("Title must be at least two characters");
    if (parseInt(rating) < 0 || parseInt(rating) > 10) return alert("Rating must be between 0 and 10");
    $(".div-cont").append(`<div>${title} - ${rating} <button>Delete</button></div>`);
});
$(".div-cont").on("click", "button", function(){
    $(this).parent().remove();
})