// toggles visibility of greeting
            function blink()
            {
                var div = document.getElementById('greeting');
                if (div.style.visibility == 'hidden')
                {
                    div.style.visibility = 'visible';
                }
                else
                {
                    div.style.visibility = 'hidden';
                }
            }

// blink every 1000ms
            window.setInterval(blink, 1000);