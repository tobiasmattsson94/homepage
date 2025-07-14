window.addEventListener("load", clock); 

optionsDate = {
    year: 'numeric', month: 'long', day: 'numeric'
    };

optionsWeekday = {
    weekday: 'long'
};

optionsTime = {
    hour: 'numeric', minute: 'numeric'
    };

function clock() {
    
    const time = new Intl.DateTimeFormat('sv-SE', optionsTime).format(new Date());
    const weekday = new Intl.DateTimeFormat('en-SE', optionsWeekday).format(new Date());
    const date = new Intl.DateTimeFormat('en-SE', optionsDate).format(new Date());

    document.getElementById("time").innerHTML = time;
    document.getElementById("weekday").innerHTML = weekday;
    document.getElementById("date").innerHTML = date;

    setInterval(clock,1000);
    }

    
