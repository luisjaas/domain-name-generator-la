/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  console.log("Hello Rigo from the console!");
};

let pronun = ["the", "our", "me", "is", "her"];
let adj = ["great", "big", "best", "cool", "funy"];
let noun = ["jogger", "racoon", "car", "dog", "show"];
let domain = [".com", ".net", ".ve", ".es", ".org"];

for (let i = 0; i < pronun.length; i++) {
  console.log(pronun[i]);
}
console.log(domain.length);

function getDomain() {
  for (let i = 0; i < pronun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < domain.length; d++) {
          let x = Math.floor(Math.random() * 15);
          console.log(pronun[i] + adj[j] + noun[k] + domain[x]);
        }
      }
    }
  }
}
