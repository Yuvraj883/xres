import { useState } from "react";
import Navbar from "./Navbar";

const Speak = () => {
    var [uset , setT] = useState("");
    var [srcc, setSource] = useState("");
    var indx = 1;
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    
    function start(){
        var words = []
        words = document.querySelector("#workspace").textContent.replace("\n"," ").split(" ");

        var headers = {
            'authority': 'audio.api.speechify.dev',
            'x-speechify-client': 'API',
            'x-speechify-client-version': '0.1.294',
            'content-type': 'application/json; charset=UTF-8',
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36',
            'accept-base64': 'true',
            'accept': '/',
            'sec-gpc': '1',
            'origin': 'https://soundbite.speechify.com',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://soundbite.speechify.com/',
            'accept-language': 'en-GB,en;q=0.9',
        }
        var json_data = {
            'audioFormat': 'ogg',
            'paragraphChunks': [
                words.join(" "),
            ],
            'voiceParams': {
                'name': 'Snoop',
                'engine': 'resemble',
                'languageCode': 'en-US',
            },
        }
        
        
            fetch("https://audio.api.speechify.dev/generateAudioFiles",{"method":"POST",body:JSON.stringify(json_data),"headers":headers}).then((res)=>{
                return res.json();
            }).then(async (res)=>{
                console.log(res);
                    const binaryString = window.atob(res.audioStream);
                    const arrayBuffer = new ArrayBuffer(binaryString.length);
                    const bufferView = new Uint8Array(arrayBuffer);
                    for (let i = 0; i < binaryString.length; i++) {
                        bufferView[i] = binaryString.charCodeAt(i);
                    }

                    // Create an audio context
                    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

                    // Decode the audio buffer
                    audioContext.decodeAudioData(arrayBuffer, function (buffer) {
                        const source = audioContext.createBufferSource();
                        source.buffer = buffer;
                        source.connect(audioContext.destination);
                        source.start(0); // Play the audio immediately
                        setSource(source);
                    });
                    // console.log(words);
                    
                    while(indx < words.length){
                        indx++;
                        if(indx > words.length){
                            return;
                        }
                        var t = `<span style="color: #363336;"> `;
                        for(var i = 0;i < indx;i++){
                            t+=words[i]+" ";
                            
                        }
                        t+="</span>"
                        // console.log(t);
                        document.querySelector("#workspace").innerHTML=t;
                        document.querySelector("#workspace").innerHTML+=words.slice(indx,words.length).join(" ");
                        var indd = 76;
                        if(words[indx].length > 5){
                            indd = 65;
                        }
                        await delay(words[indx].length*indd);
                    }
                    return indx;
                    // setT(s);

            })
           
            
    }
    function stop(){
        indx = 10000;
        document.querySelector("#workspace").style.display="none"
        window.location.reload();
        srcc.stop();
    }
    return (
      <>
      <Navbar />
        {/* <img src={require('../assets/linear-gradient-shadow.png')} className='relative h-20' alt="bg"/> */}
      
        <div  class="bg-gray-100 text-center p-3">
            <div style={{lineHeight:"2rem",height:"90vh !important"}}   class="ml-3 mr-3 mx-auto p-4 mt-8 bg-white rounded-lg shadow">
                <h1 className="text-2xl font-semibold mb-4">Stuttering Practice with Assistant</h1>
               <p id="workspace" style={{color:"#6e696e"}}> As the day drew to a close, a sense of tranquility enveloped the landscape. The sun, with its warm golden glow,
                 embarked on its descent behind the rugged silhouette of the majestic mountains. Shadows grew longer, and a 
                 gentle breeze whispered through the rustling leaves of the trees. The sky transformed into a canvas of vivid hues
                  - a blend of soft oranges, pinks, and purples. Nature's orchestra played a serene symphony, as birdsongs 
                  gradually faded, making way for the symphony of crickets and frogs. It was a moment of quiet wonder, a pause
                   in time when the world seemed to hold its breath, basking in the beauty of the transitioning day. 
                   </p>
                   <button onClick={() =>{start()}} className="mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Start</button>
                   <button onClick={() =>{stop()}} className="mt-3  ml-3  bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">Stop</button>
                </div>
        </div>







        
    
      </>
    );
  };
  
  export default Speak;