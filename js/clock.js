window.onload = function () 
{
    var hour12 = false;
    var offCycle = 0;
    var video = document.getElementById("video");
    var startHours = 0;

    setInterval(function () {clock();}, 1000);

    function clock()
    {
        var hours = new Date().getHours();
        if (hours < 10)
        {
            var hours1 = "0" + hours
        } 
        else
        {
            var hours1 = hours
        };

        var minutes = new Date().getMinutes();
        if (minutes < 10)
        {
            var minutes1 = "0" + minutes
        }
        else
        {
            var minutes1 = minutes
        };

        var seconds = new Date().getSeconds();

        if (hour12 == true)
        {
            if (hours > 12)
            {
                var hours1 = hours - 12
            }
            else
            {
                var hours1 = hours
            };
            if (hours == 0)
            {
                var hours1 = 12;
            };
            if (hours1 < 10)
            {
                var hours1 = "0" + hours1
            };
        };

        if ((hours >= 6 && hours < 19 && offCycle == 0) || offCycle == 1 || offCycle == 2)
        {
            var mc = "day";
        }
        else
        {
            var mc = "night";
        };

        if (seconds == 0 && minutes == 0)
        {
            var wallRefresh = true
        }
        else
        {
            var wallRefresh = false
        };

        if (hours == 6 && wallRefresh == true && offCycle == 0)
        {
            video.src = "videos/sunrise.webm";
        }
        else if (hours == 12 && wallRefresh == true && offCycle == 0)
        {
            video.src = "videos/day.webm";
        }
        else if (hours == 19 && wallRefresh == true && offCycle == 0)
        {
            video.src = "videos/sunset.webm";
        }
        else if (hours == 21 && wallRefresh == true && offCycle == 0)
        {
            video.src = "videos/night.webm";
        }
        else
        {

        };

        var minute0 = "clock/" + mc + "/minute0/" + ("" + minutes1)[1] + ".png";
        var minute1 = "clock/" + mc + "/minute1/" + ("" + minutes1)[0] + ".png";
        var hour0 = "clock/" + mc + "/hour0/" + ("" + hours1)[1] + ".png";
        var hour1 = "clock/" + mc + "/hour1/" + ("" + hours1)[0] + ".png";

        document.getElementById("minutes0").src = minute0;
        document.getElementById("minutes1").src = minute1;
        document.getElementById("hours0").src = hour0;
        document.getElementById("hours1").src = hour1;

        return startHours = hours;
    };


    function set()
    {
        if (startHours >= 6 && startHours < 12)
        {
            video.src = "videos/sunrise.webm";
        }
        else if (startHours >= 12 && startHours < 19)
        {
            video.src = "videos/day.webm";
        }
        else if (startHours >= 19 && startHours < 21)
        {
            video.src = "videos/sunset.webm";
        }
        else
        {
            video.src = "videos/night.webm";
        };
    }

    document.getElementById("apl_stl").onclick = function()
    {
        var Hour24_check=document.getElementById("Hour24_stl");
        var dayCycle=change_stl_form.clock_style.value;
        if (Hour24_check.checked)
            {
                hour_12(false);
            }
            else
            {
                hour_12(true);
            };

        if (dayCycle)
        {
            if (dayCycle == 0)
            {
                set();
                offycle(0);
            }
            else if (dayCycle == 1)
            {
                video.src = "videos/sunrise.webm";
                offycle(1);
            }
            else if (dayCycle == 2)
            {
                video.src = "videos/day.webm";
                offycle(2);
            }
            else if (dayCycle == 3)
            {
                video.src = "videos/sunset.webm";
                offycle(3);
            }
            else
            {
                video.src = "videos/night.webm";
                offycle(4);
            };
        };
    }

    function offycle(OFF)
    {
        setTimeout(function ()
        {
            clock();
        }, 1);
        return offCycle = OFF;
    };

    function hour_12(_boll)
    {
        setTimeout(function ()
        {
            clock();
        }, 1);
        return hour12 = _boll;
    }

    clock();
    set();
};
