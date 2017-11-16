window.initMap = function () {
            var position = {lat: 55.7347028, lng: 37.7523174};
            var map =  new google.maps.Map(document.querySelector('.map'), {
                zoom: 16,
                center: position
            });

            var marker = new google.maps.Marker({
                position: position,
                map: map,
                draggable: false,
                animation: google.maps.Animation.BOUNCE
            });
        }
