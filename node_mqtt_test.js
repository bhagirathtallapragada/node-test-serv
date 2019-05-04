
//Import the Paho mqtt module
const mqtt=require('mqtt');
var count=0;
var client=mqtt.connect("mqtt://localhost",{clientId:"bunny"});
console.log("connected flag:"+client.connected);

//error message in case the server can not connect
client.on('error', (error)=>{
  console.log("Can't connect"+ error);
  process.exit(1);
});

//Publishing a message on a topic to the broker
function publish(topic,message,options){
	console.log("Publishing message:",message);
	
	if (client.connected==true){
	  client.publish(topic,message,options);
	}
	count+=1;
	if (count==4){
	  clearTimeout(timer_id);
	  client.end();
	}
}

var options={
  retain:true,
  qos:1
};

var topic='test';
var message="pink thunder";
var timer_id=setInterval(function(){publish(topic,message,options);},5000);

