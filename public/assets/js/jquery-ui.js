  $("#addResBtn").on("click", function (event) {
    event.preventDefault();
    var name = $("#inputName").val().trim();
    var place = $("#inputPlace").val().trim();
    var balance = $("#inputBalance").val().trim();
    var idNum = $("#inputId").key;
    var newRes = {
        name: name,
        place: place,
        bal: balance,
    };
    console.log(newRes);
	database.ref().push(newRes);
	
    $("#inputName").val("");
    $("#inputPlace").val("");
    $("#inputBalance").val("");
	$("#inputId").val("X");
	
	return false;
	
  });

  database.ref().on("child_added", function (childSnapshot) {
   
	var name = childSnapshot.val().name;
    var place = childSnapshot.val().place;
    var balance = childSnapshot.val().bal;
	var idNum = childSnapshot.key;
	
    $("#new-res").append("<tr><td>" + name + "</td><td>" + place + "</td><td>" + balance + "</td><td><button data-id='" + idNum + "' class='cancel'>cancel</button></td></tr>");
  
});

  $(document).on("click", ".cancel", function (e) {
    e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
		})
		
        .then((willDelete) => {
            database.ref().child($(this).attr('data-id')).remove();
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
			}
		});
			// location.reload()
  });