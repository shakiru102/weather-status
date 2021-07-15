<template>
  <div class="hello">
    <div :class="{anime:anime,anime2:anime2}">
      <span class="one"></span>
      <span  class="two"></span>
      <span  class="three"></span>
      <span  class="four"></span>
      <span  class="five"></span>
      <span  class="six"></span>
      <span class="seven"></span>
      <span class="eight"></span>
      <span class="nine"></span>
      <span class="ten"></span>
      <span class="eleven"></span>
      <span class="twelve"></span>
      <span class="thirteen"></span>
      <span class="fourteen"></span>
      <span class="fifteen"></span>
      <span class="sixteen"></span>
      <span class="seventeen"></span>
      <span class="eighteen"></span>
      <span class="nineteen"></span>
    </div>
    <div :class="{input:input,rain:rain,cloud:cloud,clear:clear,mist:mist,tree:tree}">
      <input type="text" name="" id="" placeholder="search state" v-model="forcast.countries" @keypress.enter="search">
      <div class="country" v-if="show()" >
        <h2>{{this.forcast.weather.name}},{{this.forcast.weather.sys.country}}</h2>
      </div>
      <div class="temp">
        <h1 v-if="show1()">{{Math.round(this.forcast.weather.main.temp)}}°c</h1>
         <h1 v-if="!view" class="base">Weather App</h1>
        <h2 v-if="view">{{this.forcast.weather.weather[0].main}}</h2>
      </div>
      <h3 class="date" v-if="view">{{datebuild()}}</h3>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return{
      view:false,
      anime:false,
      anime2:false,
      rain:false,
      input:false,
      tree:true,
      mist:false,
      cloud:false,
      clear:false,
    }
  },
 
      computed:{
         forcast(){
           return this.$store.state.forcast
         }
      },
      created(){
       /* this.$http.get(this.forcast.api_base+'weather?q=London,uk&appid='+this.forcast.api_key).then((data)=>{
          console.log(data)
        });
        */
      },
      methods:{
       
            search(){
              this.$http.get(this.forcast.api_base+'weather?q='+this.forcast.countries+'&units=metric&appid='+this.forcast.api_key).then((data)=>{
          return data.json()
        }).then(function(data){
           this.forcast.weather=data
          console.log(this.forcast.weather)
          this.view = true;
           if(this.forcast.weather.weather[0].main=='Rain'){
            this.anime2=true
           this.rain = true
            this.anime=false
            this.cloud=false
            this.clear=false
            this.mist=false
           this.tree=false
          }else if(this.forcast.weather.weather[0].main=='Snow'){
             this.anime=true
             this.input=true
             this.anime2=false
             this.rain = false
             this.cloud = false
             this.clear = false
             this.mist = false
              this.tree=false
          }else if(this.forcast.weather.weather[0].main=='Clouds'){
              this.anime=false
             this.input=false
             this.anime2=false
             this.rain = false
             this.cloud = true
             this.clear = false
             this.mist = false
              this.tree=false
          }else if(this.forcast.weather.weather[0].main=='Clear'){
            this.anime=false
             this.input=false
             this.anime2=false
             this.rain = false
             this.cloud = false
             this.clear = true
             this.mist = false
              this.tree=false
          }else if(this.forcast.weather.weather[0].main=='Mist'){
            this.anime=false
             this.input=false
             this.anime2=false
             this.rain = false
             this.cloud = false
             this.clear = false
             this.mist = true
              this.tree=false
          }else{
              this.anime=false
             this.input=false
             this.anime2=false
             this.rain = false
             this.cloud = false
             this.clear = false
             this.mist = false
              this.tree=true
          }
        })
        
            },
            show(){
              if(this.forcast.countries ==''){
                typeof country !='undefined'
                 
              }else{
                 typeof country =='undefined'
              }
            },
             show1(){
              if(this.forcast.countries ==''){
                return

              }else{
                
                return typeof temp =='undefined'

              }
            },
            show3(){
              if(this.forcast.countries ==''){
                
              }
            },
          datebuild(){
            //getting current date in javascript
            let d = new Date();
            let months = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
            let days = ['Sunday','Monday','Tuesday','Wenesday','Thursday','Friday','Saturday'];

            let day = days[d.getDay()];
            let month = months[d.getMonth()];
            let date = d.getDate()
            let year = d.getFullYear()
             
             return `${day} ${date} ${month} ${year}`
          }
             
            
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background:linear-gradient(to right, rgba(77, 65, 240, 0.315), rgba(15, 2, 2, 0.788)),url('../assets/site.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  transition: all 0.5s ease-in-out;
}
.rain{
   width: 100%;
  height: 100vh;
  overflow: hidden;
  background:linear-gradient(to right, rgba(77, 65, 240, 0.315), rgba(15, 2, 2, 0.788)),url('../assets/rain.jpg');
   background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  transition: all 0.5s ease-in-out;
}
.cloud{
   width: 100%;
  height: 100vh;
  overflow: hidden;
  background:linear-gradient(to right, rgba(77, 65, 240, 0.315), rgba(15, 2, 2, 0.788)),
  url('../assets/cloud.jpg');
   background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  transition: all 0.5s ease-in-out;
}
.tree{
   width: 100%;
  height: 100vh;
  overflow: hidden;
  background:linear-gradient(to right, rgba(77, 65, 240, 0.315), rgba(15, 2, 2, 0.788)),
  url('../assets/tree.jpg');
   background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  transition: all 0.5s ease-in-out;
}
.mist{
   width: 100%;
  height: 100vh;
  overflow: hidden;
  background:linear-gradient(to right, rgba(77, 65, 240, 0.315), rgba(15, 2, 2, 0.788)),
  url('../assets/mist.jpg');
   background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  transition: all 0.5s ease-in-out;
}
.clear{
   width: 100%;
  height: 100vh;
  overflow: hidden;
  background:url('../assets/clear.jpg');
   background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  transition: all 0.5s ease-in-out;
}
.clear .temp{
   height:40% ;
  width: 40%;
  background-color: rgba(231, 142, 25, 0.589);
  box-shadow: 9px 9px 10px rgba(3, 0, 0, 0.685);
  border-radius: 40px;
  color: rgba(218, 216, 216, 0.822);
  text-shadow: 0px 0px 3px;
  font-family: montserrat;
  margin-top: 1em;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  flex-basis: 30%;
}

div input{
  width: 40%;
  padding: 1em;
  margin: 2em auto;
  flex-basis: 1em;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: rgba(224, 221, 221, 0.788);
  transition: box-shadow 0.3s ease-in-out;
}
div input:focus{
  box-shadow: 0px 0px 10px;

}
.country{
  font-family: montserrat;
  color: rgba(218, 216, 216, 0.849);
  text-shadow: 0px 0px 3px;

}
.temp{
  height:40% ;
  width: 40%;
  background-color: rgba(224, 221, 221, 0.164);
  box-shadow: 7px 7px 1px rgba(3, 0, 0, 0.322);
  border-radius: 40px;
  color: rgba(218, 216, 216, 0.822);
  text-shadow: 0px 0px 3px;
  font-family: montserrat;
  margin-top: 1em;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  flex-basis: 30%;
}
.temp h2{
  margin-top: 1em;
}

.date{
  margin-top: 0.5em;
  color: rgba(218, 216, 216, 0.678);
  text-shadow: 0px 0px 3px;
  font-family: montserrat;
  font-weight: normal;
}

.hello .anime span {
  position:absolute;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(243, 239, 239, 0.938);
  background: rgba(218, 216, 216, 0.822);
  transition: 0.5s ease-in-out;
  animation:  snow infinite 20s ;
  top: -1em;
}
/* for snowy weather */
@keyframes snow{
  from{
    top: 0;
    opacity: 1;
  }to{
    
   top: 42em;
    opacity: 0;
  }
}
.anime span.one{
  animation-delay:1s;
  transform: scale(0.7);
  left: 10em;
}
.anime span.two{
  animation-delay:2s;
  
  transform: scale(0.5);
  left:15em;
}
.anime span.three{
   animation-delay:19s;

  transform: scale(0.6);
  left:20em;
  
}
.anime span.four{
    animation-delay:18s;

  transform: scale(0.3);
  left:25em;
  
}
.anime span.five{
    animation-delay:4s;

  transform: scale(0.8);
  left:30em;
  
}
.anime span.six{
   animation-delay:3s;

  transform: scale(0.2);
  left:35em;
  
}
.anime span.seven{
   animation-delay:16s;

  transform: scale(0.9);
  left:40em;
  
}
.anime span.eight{
   animation-delay:17s;

  transform: scale(0.6);
  left:45em;
  
}
.anime span.nine{
   animation-delay:5s;

  transform: scale(0.7);
  left:50em;
  
}
.anime span.ten{
   animation-delay:6s;

  transform: scale(0.7);
  left:55em;
  
}
.anime span.eleven{
   animation-delay:15s;

  transform: scale(0.1);
  left:60em;
  
}
.anime span.twelve{
  animation-delay:14s;

  transform: scale(0.5);
  left: 65em;
}
.anime span.thirteen{
   animation-delay:8s;

  transform: scale(0.6);
  left: 70em;
}
.anime span.fourteen{
   animation-delay:7s;

  transform: scale(0.2);
  left: 75em;
}
.anime span.fifteen{
   animation-delay:12s;

  transform: scale(0.5);
  left: 15em;
}
.anime span.sixteen{
   animation-delay:13s;

  transform: scale(0.4);
  left: 5em;
}
.anime span.seventeen{
   animation-delay:9s;

  transform: scale(0.4);
  left: 80em;
}
.anime span.eighteen{
   animation-delay:10s;

  transform: scale(0.3);
  left: 2em;
}

.anime span.nineteen{
   animation-delay:11s;

  transform: scale(0.2);
  left: 82em;
}
.hello .anime2 span {
  position:absolute;
  width: 0.1em;
  height: 1em;
  background: rgba(48, 47, 47, 0.822);
  transition: 0.5s ease-in-out;
  animation:  rain infinite 20s ;
  background: rgba(218, 216, 216, 0.822);
  top: -1em;
}
/* for rainy weather */
@keyframes rain{
  from{
    top: 0;
    opacity: 1;
  }to{
    
   top: 42em;
    opacity: 0;
  }
}
.anime2 span.one{
  animation-delay:1s;
  transform: scale(0.7);
  left: 10em;
  animation-duration: 2s;
}
.anime2 span.two{
  animation-delay:2s;
  animation-duration: 3s;
  transform: scale(0.5);
  left:15em;
}
.anime2 span.three{
   animation-delay:19s;
animation-duration: 4s;
  transform: scale(0.9);
  left:20em;
  
}
.anime2 span.four{
    animation-delay:18s;
animation-duration: 3s;
  transform: scale(0.3);
  left:25em;
  
}
.anime2 span.five{
    animation-delay:4s;
animation-duration: 1.5s;
  transform: scale(0.8);
  left:30em;
  
}
.anime2 span.six{
   animation-delay:3s;
animation-duration: 3s;
  transform: scale(0.2);
  left:35em;
  
}
.anime2 span.seven{
   animation-delay:16s;
animation-duration: 2s;
  transform: scale(0.9);
  left:40em;
  
}
.anime2 span.eight{
   animation-delay:17s;
animation-duration: 4s;
  transform: scale(0.6);
  left:45em;
  
}
.anime2 span.nine{
   animation-delay:5s;
animation-duration: 2s;
  transform: scale(0.7);
  left:50em;
  
}
.anime2 span.ten{
   animation-delay:6s;
animation-duration: 1.8s;
  transform: scale(0.7);
  left:55em;
  
}
.anime2 span.eleven{
   animation-delay:15s;
animation-duration: 4s;
  transform: scale(0.1);
  left:60em;
  
}
.anime2 span.twelve{
  animation-delay:14s;
animation-duration: 3s;
  transform: scale(0.5);
  left: 65em;
}
.anime2 span.thirteen{
   animation-delay:8s;
animation-duration: 1s;
  transform: scale(0.6);
  left: 70em;
}
.anime2 span.fourteen{
   animation-delay:7s;
animation-duration: 4s;
  transform: scale(0.2);
  left: 75em;
}
.anime2 span.fifteen{
   animation-delay:12s;
   animation-duration: 2s;

  transform: scale(0.5);
  left: 15em;
}
.anime2 span.sixteen{
   animation-delay:13s;
   animation-duration: 3s;

  transform: scale(0.6);
  left: 5em;
}
.anime2 span.seventeen{
   animation-delay:9s;
   animation-duration: 1.2s;

  transform: scale(0.8);
  left: 80em;
}
.anime2 span.eighteen{
   animation-delay:10s;
   animation-duration: 2s;

  transform: scale(0.9);
  left: 2em;
}

.anime2 span.nineteen{
   animation-delay:11s;
   animation-duration: 3s;

  transform: scale(0.9);
  left: 82em;
}
.anime3 {
  display: none;
}
@media screen and (max-width: 325px) {
   .temp .base{
     font-size: 1em;
   }
}
@media screen and (min-width: 600px) {
   .temp .base{
     font-size: 1.5em;
   }
}


</style>
