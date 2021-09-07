var app = new Vue (
    {
        el:'#app',
        data:{
            baseUrl:'http://api.openweathermap.org/data/2.5/weather?q=',
            cityName:'London,uk',
            apiKey:'&APPID=934ece2c9c1a966bbd0ca6a0e103059b',
            celsiusDegrees:'&units=metric',
            firstView: null
        },
        mounted:function(){
            // prima chiamata firstView
            axios.get(this.baseUrl + this.cityName + this.apiKey + this.celsiusDegrees)
            .then((response) => {
                this.firstView = response.data.name + ' ' + response.data.main.temp;
            })
        }
    }
)