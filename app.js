$(document).ready(function() {

  $(document).on("click", "#movie-search-button", function() {

      var searchTitle = $("#movie-title").val();


;     $(".movie-card").removeClass("hide")
      $("#search-input-box").addClass("hide")

      $.ajax({
            type: "GET",
            url: "http://www.omdbapi.com/?t=" + searchTitle,
            success: function(movie) {
                HANDLE.renderTemplate({
                    templateSource: "#movie-template",
                    // Use variable from above
                    data: movie,
                    where: ".insert",
                    // Do you want to clear our what's already in the <td>
                    clearOriginal: true
                });
              },
            error: function() {
                alert("Error getting data.");
            }
        });
  });

  $(document).on("click", "#closer", function() {

;     $(".movie-card").addClass("hide")
      $("#search-input-box").removeClass("hide")
      $("input[type=text], textarea").val("");

  });

});
