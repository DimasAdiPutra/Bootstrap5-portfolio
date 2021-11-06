$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "../data/card.json",
    dataType: "json",
    success: function (response) {
      $.each(response, function (i, data) {
        $(".cards").append(card(data));
      });
    }
  });
});

function card(data) {
  return /*html*/ `
  <div class="col-md-4 col-sm-6 mb-4">
    <div class="card">
      <img src="img/portfolio/${data.gambar}.png" class="card-img-top" alt="${data.gambar}" />
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link text-decoration-none">Project Detail</a>
      </div>
    </div>
  </div>`;
}
