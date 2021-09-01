var app = new Vue (
    {
        el:'#app',
        data:{
            firstView:10
        },
        mounted:function(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((response) => {
                console.log(response.data.response);
                this.firstView = response.data.response;
            });
        }
    }
)