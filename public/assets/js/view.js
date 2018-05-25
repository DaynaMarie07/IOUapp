$(document).ready(function() {
  // Getting a reference to the input field where user adds a new iou
  var $newItemInput = $("input.new-item");
  // Our new ious will go inside the iouContainer
  var $iouContainer = $(".iou-container");
  // Adding event listeners for deleting, editing, and adding ious
  $(document).on("click", "button.delete", deleteIou);
  $(document).on("click", "button.complete", toggleComplete);
  $(document).on("click", ".iou-item", editIou);
  $(document).on("keyup", ".iou-item", finishEdit);
  $(document).on("blur", ".iou-item", cancelEdit);
  $(document).on("submit", "#iou-form", insertIou);

  // Our initial ious array
  var ious = [];

  // Getting ious from database when page load
  getIous();

  // This function resets the ious displayed with new ious from the database
  function initializeRows() {
    $iouContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < ious.length; i++) {
      rowsToAdd.push(createNewRow(ious[i]));
    }
    $iouContainer.prepend(rowsToAdd);
  }

  // This function grabs ious from the database and updates the view
  function getIous() {
    $.get("/api/ious", function(data) {
      ious = data;
      initializeRows();
    });
  }

  // This function deletes a iou when the user clicks the delete button
  function deleteIou(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/ious/" + id
    }).then(getIous);
  }

  // This function handles showing the input box for a user to edit a iou
  function editIou() {
    var currentIou = $(this).data("iou");
    $(this).children().hide();
    $(this).children("input.edit").val(currentIou.text);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
  }

  // Toggles complete status
  function toggleComplete(event) {
    event.stopPropagation();
    var iou = $(this).parent().data("iou");
    iou.complete = !iou.complete;
    updateIou(iou);
  }

  // This function starts updating a iou in the database if a user hits the "Enter Key"
  // While in edit mode
  function finishEdit(event) {
    var updatedIou = $(this).data("iou");
    if (event.which === 13) {
      updatedIou.text = $(this).children("input").val().trim();
      $(this).blur();
      updateIou(updatedIou);
    }
  }

  // This function updates a iou in our database
  function updateIou(iou) {
    $.ajax({
      method: "PUT",
      url: "/api/ious",
      data: iou
    }).then(getIous);
  }

  // This function is called whenever a iou item is in edit mode and loses focus
  // This cancels any edits being made
  function cancelEdit() {
    var currentIou = $(this).data("iou");
    if (currentIou) {
      $(this).children().hide();
      $(this).children("input.edit").val(currentIou.text);
      $(this).children("span").show();
      $(this).children("button").show();
    }
  }

  // This function constructs a iou-item row
  function createNewRow(iou) {
    var $newInputRow = $(
      [
        "<li class='list-group-item iou-item'>",
        "<span>",
        iou.text,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        "<button class='delete btn btn-danger'>x</button>",
        "<button class='complete btn btn-primary'>✓</button>",
        "</li>"
      ].join("")
    );

    $newInputRow.find("button.delete").data("id", iou.id);
    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("iou", iou);
    if (iou.complete) {
      $newInputRow.find("span").css("text-decoration", "line-through");
    }
    return $newInputRow;
  }

  // This function inserts a new iou into our database and then updates the view
  function insertIou(event) {
    event.preventDefault();
    var iou = {
      text: $newItemInput.val().trim(),
      complete: false
    };

    $.post("/api/ious", getIous);
    $newItemInput.val("");
  }
});
