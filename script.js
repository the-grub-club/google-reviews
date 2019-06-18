import http from "k6/http";
import { check, sleep } from "k6";

//vus: Current number of active virtual users
//vus_max: Max possible number of virtual users (
//iterations: The aggregate number of times the VUs in the test have executed the JS script
//data_received:The amount of received data.
//data_sent: The amount of data sent
//checks: Number of failed checks

let desiredRPS = 600; // total RPS for the test

// maximum requests executed by one VU per second, determined by experimentation.
// You can adjust this up/down depending on the performance of system you are testing.
let RPSperVU = 1;

let VUsRequired = Math.round(desiredRPS/RPSperVU);

export let options = {
  vus: VUsRequired,
  duration: '5m',
};

export default function() {
  let iterationStart = new Date().getTime(); // timestamp in ms
  let highTrafficNum = (Math.random()*(8000000-6000000+1)+6000000); //Number from a range of 2 million(6,000,000-8,000,000)
  let randomNum = Math.random();
  let id = (randomNum <= 0.8) ? highTrafficNum : Math.floor(randomNum * 10000000);
  let res = http.get('http://127.0.0.1:3005/restaurants/'+ id);
  check(res, {
    "success": (r) => r.status == 200
  });
  let iterationDuration = (new Date().getTime() - iterationStart) / 1000;
  let sleepTime = 1 - iterationDuration;  // 1 second minus time spent on request execution

  if (sleepTime > 0){
    sleep(sleepTime);
  }

};