
let v = document.getElementById("localVideo");
let localStreem;

let promise =  navigator.mediaDevices.getUserMedia({audio:true,video:true});

await promise.then(mediaStream =>{
    v.srcObject=mediaStream;
    localStreem=mediaStream; 
});
console.log("next line")
// let pc = new RTCPeerConnection(null)

// pc.addEventListener("icecandidate",(event)=>{
//     // this candidate will be used in other peer.
//     console.log(event.candidate);

// });
// // local stream is being added in RTCPeerConnection to send to peer
// localStreem.getTracks.array.forEach(track => {
//     pc.addTrack(track,localStreem);
// });

// // create offer
