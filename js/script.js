var app = new Vue (
    {
        el:'#app',
        data:{
            baseUrl:'http://api.openweathermap.org/data/2.5/',

            currentState:'weather?q=',
            minuteGraduality:'onecall?',

            cityNameLon:'London,uk',
            latLonCityLon:'lat=51.5085&lon=-0.1257',

            apiKey:'&APPID=934ece2c9c1a966bbd0ca6a0e103059b',

            celsiusDegrees:'&units=metric',

            firstView: [],
            secondView: [],
            hourlyData: []
        },
        mounted:function(){
            // prima chiamata firstView
            axios.get(this.baseUrl + this.currentState + this.cityNameLon + this.apiKey + this.celsiusDegrees)
            .then((response) => {
                this.firstView = response.data.name + ' ' + response.data.main.temp;
            });
            // seconda chiamata secondView
            axios.get(this.baseUrl + this.minuteGraduality + this.latLonCityLon + this.celsiusDegrees + '&exclude=daily' + this.apiKey)
            .then((response) => {
                //console.log(response.data.hourly);
                this.hourlyData = response.data.hourly;
                this.hourlyData.forEach((item) => {
                    this.secondView.push(item.temp);
                    //console.log(this.secondView);
                });
            })
        }
    }
)