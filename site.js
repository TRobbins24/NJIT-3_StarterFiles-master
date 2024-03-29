/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies

      


      data() {
            return {
               title: "IMDB and Tyler's Top 8 Best Movies",
               owner: 'Tyler',
               movies: [],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
               github: 'https://github.com/TRobbins24/NJIT-3_StarterFiles-master'

            }
      },
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            getMonthText: function(dateArray) {
                      

      // Was made by AJ
                     var year = dateArray[0];
                     var day = dateArray[2];
                     var  month = this.months[dateArray[1] - 1];

                     return month + ' ' + day + ',' + year;   
            },

            posterClick: function(index) {
                 if(this.movies[index].posterindex < this.movies[index].posters.length){
                  this.movies[index].posterindex++;
                 
                  }
                  if(this.movies[index].posterindex >= this.movies[index].posters.length){
                        this.movies[index].posterindex = 0;
                  }

            },

            timeText: function(minutes){
                  var hours = Math.trunc(minutes/60);
                  var min = minutes % 60;
                 return hours + "h" + min + "min";
            }

           

      }
})

vue_app.mount("#vue_app")



