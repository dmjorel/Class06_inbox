// current Date & time

const dateTime = new Date();
// template for the date : day of the week, month, date, year
const todaysInfo = { timeZone: "America/New_York", 
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			};

document.getElementById("todayDate").innerHTML = dateTime.toLocaleString('en-US', todaysInfo);

const time = new Date();
document.getElementById("timeNow").innerHTML = time.toLocaleTimeString();

function showTime(){
    // Date() is a function that gathers the information from today's date
    const curDate = new Date();
    let h = curDate.getHours();
    let m = curDate.getMinutes();
    let s = curDate.getSeconds();
    let session = "AM"; // assigning a variable in case of AM, then changing to PM

    if(h === 0){
        h = 12; // for midnight showing as 12 and not as 00
    }
    
    if(h > 12){
        h = h - 12; // instead of showing time 13 to 24h
        session = "PM"; // adding which half of day
    }

    // displaying the time as two values instead of just one value if under 10
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // displaying the time 
    const curTime = h + ":" + m + ":" + s + " " + session;

    document.getElementById("timeNow").innerText = curTime;

    // we want this function to have a working clock every second or 1000ms
    setTimeout(showTime, 1000);

}

showTime();

// my API key for weather
// RFXWC5igLzt2BPkfO0m3sDw0TpgKz5Bi

const myKey = 'RFXWC5igLzt2BPkfO0m3sDw0TpgKz5Bi';
const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/56186?apikey=${myKey}&metric=true`;

// user information

const userEmail = "admin@yopmail.com";
const userPassword = "adminyopmail";

// login function 

const emailInput = document.getElementById("inputEmail");

const passwordInput = document.getElementById("inputPassword");

const outsideBox = document.getElementById("outputBox");

const weatherList = document.getElementById("listDays");

function loginAction(){
    // if logging in again, we want previous errors be erased
    $("#outputBox").empty();

    if (emailInput.value === userEmail && passwordInput.value === userPassword){

        // displaying the layout of the weatherBox
        $('#weatherBox').css("display", "block");

        // ajax request
        $.ajax(url).done(displayWeather);

        function displayWeather(data){
            console.log(data);

            // a loop for the next 5 days i= 0 1 2 3 4
            for (let i = 0; i < data.DailyForecasts.length; i++){
                // li container for the daily forecast
                const getDay = document.createElement("li");
                // for each daily forecast, getting the respective array items
                const dataInfo = data.DailyForecasts[i];
                const dateSliced = dataInfo.Date.slice(0, 10); // only needing the first 10 items, make it more readable

                // a container for the date items, making it into a link
                let dateBox = document.createElement("a");
                dateBox.href = '#0';
                dateBox.textContent = `${dateSliced}`;
                dateBox.style.color = 'blue';
                dateBox.style.textDecoration = 'underline';

                // making it change color when clicked
                dateBox.addEventListener('click', function() {
                    dateBox.style.color = 'purple';
                });
                getDay.appendChild(dateBox);
            
                // p container the temperature info and another with the day and night info
                const weatherSmallBox = document.createElement('p');
                weatherSmallBox.setAttribute("class", "weatherPara");
                weatherSmallBox.textContent = `Max: ${dataInfo.Temperature.Maximum.Value}${dataInfo.Temperature.Maximum.Unit} 
                Min: ${dataInfo.Temperature.Minimum.Value}${dataInfo.Temperature.Minimum.Unit}`;
                getDay.appendChild(weatherSmallBox);

                const dayNightBox = document.createElement('p');
                dayNightBox.setAttribute("class", "weatherPara");
                dayNightBox.textContent = `Day: ${dataInfo.Day.IconPhrase} Night: ${dataInfo.Night.IconPhrase}`;

                getDay.appendChild(dayNightBox);

                // appending the full li item to the listDays
                weatherList.appendChild(getDay);

            }

        }

    } else {
        
        function appendInfo(message){
            const errorMessage = document.createElement("p");
            const errorText = document.createTextNode(message);
            errorMessage.appendChild(errorText);
            outsideBox.appendChild(errorMessage); 
        }
        
        // assigning errors to constants
        const error01 = "Error! Please complete the form!";
        const error02 = "* Email address must be filled in!";
        const error03 = "* Password length must be at least 6 characters!";
        
        // add first error message as default
        appendInfo(error01);

        // adding the respective message based on the type of error, both if the case
        if (emailInput.value === "" && passwordInput.value.length < 6){
            appendInfo(error02);
            appendInfo(error03);
        } else if (emailInput.value === ""){
            appendInfo(error02);
        } else if(passwordInput.value.length < 6){
            appendInfo(error03);
        } else {
            alert("Wrong user name and/or password!");
        }
        
        // after logging in, if entering wrong information, then the weather hidden from page.
        $("#weatherBox").css("display", "none");
    }

    // after logging in, the values input are removed.
    emailInput.value = "";
    passwordInput.value = "";
}




