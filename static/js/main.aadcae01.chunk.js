(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(6),l=a.n(c),r=(a(16),a(10)),m=a(1),s=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,i=void 0===a?"":a,c=e.imgUrl,l=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:c,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},i,n.a.createElement("br",null),n.a.createElement("a",{href:l},"IMDB"))))}),o=function(e){var t=e.movies,a=void 0===t?[]:t;return n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(s,Object.assign({key:e.imdbId},e))})))},d=a(4),u=a.n(d),p=a(7),h=a(8),b=a.n(h),g=(a(21),function(e){return fetch("".concat("http://www.omdbapi.com/?i=tt3896198&apikey=422c2f98&t=").concat(e)).then((function(e){return e.json()}))}),v=function(e){var t=e.addMovie,a=Object(i.useState)(""),c=Object(m.a)(a,2),l=c[0],r=c[1],o=Object(i.useState)(null),d=Object(m.a)(o,2),h=d[0],v=d[1],f=Object(i.useState)(!1),w=Object(m.a)(f,2),E=w[0],M=w[1],N=Object(i.useState)(!1),j=Object(m.a)(N,2),O=j[0],y=j[1],k=Object(i.useState)(!1),T=Object(m.a)(k,2),I=T[0],B=T[1],U=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=3;break}return M(!0),e.abrupt("return");case 3:return e.next=5,g(l);case 5:if("False"!==(t=e.sent).Response){e.next=11;break}return M(!0),y(!1),B(!1),e.abrupt("return");case 11:v({title:t.Title,description:t.Plot,imgUrl:t.Poster,imdbUrl:"https://www.imdb.com/title/".concat(t.imdbID,"/"),imdbId:t.imdbID}),M(!1),B(!0),y(!0),r("");case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),y(!1),r(""),I&&(t(h),B(!1))}},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:b()("input",{"is-danger":E}),autoComplete:"off",value:l,onChange:function(e){r(e.target.value),M(!1)}})),E&&n.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-light",onClick:U},"Find a movie")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"submit",className:"button is-primary"},"Add to the list")))),O&&n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Preview"),n.a.createElement(s,h)))},f=a(9),w=function(){var e=Object(i.useState)(f),t=Object(m.a)(e,2),a=t[0],c=t[1];return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(o,{movies:a})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(v,{addMovie:function(e){a.some((function(t){return t.imdbId===e.imdbId}))||c([e].concat(Object(r.a)(a)))}})))};l.a.render(n.a.createElement(w,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.aadcae01.chunk.js.map