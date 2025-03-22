// Lấy tất cả các nút mở modal

var buttons = document.querySelectorAll('.openModal');


// Lấy tất cả các modal

var modals = document.querySelectorAll('.modal');


// Lấy tất cả các phần tử <span> để đóng modal

var spans = document.getElementsByClassName("close");


// Khi người dùng nhấn vào nút, mở modal tương ứng

buttons.forEach(function(button) {

    button.onclick = function() {

        var modalId = this.getAttribute('data-modal');

        var modal = document.getElementById(modalId);

        modal.style.display = "block";

    }

});


// Khi người dùng nhấn vào <span> (x), đóng modal

Array.from(spans).forEach(function(span) {

    span.onclick = function() {

        var modal = this.closest('.modal');

        modal.style.display = "none";

    }

});


// Khi người dùng nhấn ở bất kỳ đâu ngoài modal, đóng modal

window.onclick = function(event) {

    modals.forEach(function(modal) {

        if (event.target == modal) {

            modal.style.display = "none";

        }

    });

}