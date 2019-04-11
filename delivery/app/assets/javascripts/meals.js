
// $(function () {
//     var orderArray = [];
//     var id = parseInt($(".js-next").attr("data-id"));
  
//     if ($("#ordersInfo").length) {
//       loadAllOrders();
      
//     }
  
//     function loadAllOrders() {
//         $.ajax({
//           url: "/orders.json",
//           method: 'GET'
//         })
       
//         .then(function(data) {
//            orderArray = data;
//            $.each(
//              orderArray, function(index,order) {
//                var orderData = "<p><a href='/orders/" + "'>"
//                 + 'order'+ ": " +(index+1) + "</a><div id='quantity-" + "'>"
//                 + "<a href='#' data-id='" + order.id + "' class='well col-sm-12'>Read More</a></div><br>";
//                $('#ordersInfo').append(orderData);
//                 });
//               });
//       } 

//       // For the orders index page

//   $("#order-index").on('click', 'well col-sm-12', function(e) {
//     e.preventDefault();
//     var id = this.dataset.id;
//     $.get("/orders/" + id + ".json", function(data) {
//       $("#quantity-" + id).html(data.quantity)
//     });
//   });

// // For the Users Orders Page

//   $("#ordersInfo").on('click', 'well col-sm-12', function(e) {
//     e.preventDefault();
//     var id = this.dataset.id;
//     $.get("/orders/" + id + ".json", function(data) {
//      $("#quantity-" + id).html(data.quantity);

//     });
//   });

//   // For the Users Show Page

//   $("#userShowInfo").on('click', 'well col-sm-12', function(e) {
//     e.preventDefault();
//     var id = this.dataset.id;
//     $.get("/orders/" + id + ".json", function(data) {
//      $("#quantity-" + id).html(data.quantity);

//     });
//   });

//   // For the Orders Show page

//   function loadOrder(data) {
//     history.pushState({}, "", "/orders/" + data.id)
//     var orderCommentPath = '/orders/' + data.id + '/comments/';
//     $("#new_comment").attr('action', orderCommentPath);
//     $(".orderUserName").text(data["user"]["name"]);
//     $(".orderFoodName").text(data["food"]["name"]);
//     $(".orderFoodCategory").text(data["food"]["category"]);
//     $(".orderquantity").text(data["quantity"]);
//     $(".orderRecommendation").text(data["recommendation"]);
//     $(".js-next").attr("data-id", data["id"]);
//     $(".js-previous").attr("data-id",data["id"]);
//     $("#submitted-comments").empty();
//     data["comment_list"].forEach(function(element){
//       var comment = new Comment(element);
//       comment.renderDisplay();
//     });


// }

// $(".js-next").on("click", function(event) {
//   var id = $(".js-next").attr("data-id")
//   $.get("/orders/" + id + "/next", function(data) {
//     console.log(data)
//     loadOrder(data);
//   });
//   event.preventDefault();
// });

// $(".js-previous").on("click", function(event) {
//   var id = $(".js-previous").attr("data-id")
//   $.get("/orders/" + id + "/previous", function(data) {
//     console.log(data)
//     loadOrder(data);
//   });
//   event.preventDefault();

// });

// });



// function Comment(data) {
// this.id = data.id;
// this.quantity = data.quantity;
// this.user = data.user;
// }

// Comment.prototype.renderDisplay = function() {
//   var html = "" ;
//   html += "<div class=\'well well-white\' id=\'comment-\' + comment.id + '\'>" +  "<strong>" + this.user.name + "</strong>" + " says: " + this.quantity + "</div>";
//   $("#submitted-comments").append(html);
// }

// function addComment(){ 
//   $("#new_comment").submit(function(event){ 
//       // Stop form from submitting normally
//       event.preventDefault();
  
//       // Get some values from elements on the page:
//       var $form = $( this ),
//       token = $form.find("input[name='authenticity_token']").val(),
//       term = $form.find("textarea[name='comment[content]']").val(),
//       url = $form.attr("action"),
//       orderid = $form.find("input[name='comment[order_id]']").val();
  
//       // Send the data using post
//       var posting = $.post(url,{
//           accepts: 'application/json',
//           comment: {content:term, order_id: orderid},
          
//           authenticity_token: token 
//       });
      
//       posting.done(function(data) {
//          console.log(data)
//           var comment = data;
//           console.log(comment.content)
//           $("#comment-list").append(`Name: ${comment.content}`);
         
//       });
//       })

// }