import { useState } from "react";
import Navbar from "./Navbar";

const SpeakAlone = () => {
    var [uset , setT] = useState("");
    var [srcc, setSource] = useState("");
    var indx = 1;
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    
    function start(){
        var words = []
        var words_b = []
        words = document.querySelector("#workspace").textContent.replace("\n"," ").split(" ");
        for(var i = 0;i < words_b.length;i++){
            words_b[i] = '#6e696e'
        }
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
                'name': 'Matthew',
                'engine': 'neural',
                'languageCode': 'en-US',
            },
        }
        
        
          
                    // console.log(words);
                    
                    // Check for browser support
                if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
                    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
                    
                    // Configure recognition settings if needed
                    recognition.interimResults = true;
                    recognition.continuous = true;
                    var  indx  = 0;
                    // Start recognition
                    recognition.start();
                    
                    // Listen for result event
                    recognition.onresult = function(event) {
                        const transcript = event.results[0][0].transcript;
                        var dt  = transcript.split(" ");
                        console.log('User said:', dt);
                        for(var each of dt){
                            console.log(each)
                            if(indx > words.length){
                                break;
                            }
                            if(words[indx] && words[indx].toLowerCase() === each){
                                words_b[indx] = 'green';
                                indx++;
                            }
                                
                               
                            
                        }
                        words_b[indx] = 'red';
                        indx++;
                        // Call a function to convert the transcript to audio
                        // convertTextToSpeech(transcript);
                        var txt="";
                        for(var i = 0;i < words.length;i++){
                            txt +=`<span style="color:${words_b[i]}">${words[i]} </span>`

                        }
                        console.log(txt,words);
                        document.querySelector("#workspace").innerHTML = txt;
                        setTimeout(() => {
                            try{
                                recognition.start();
                            }
                            catch(err){
                                console.log("err");
                            }
                            
                          }, 50);
                
                    }
                    
                    // Listen for error event
                    recognition.onerror = function() {
                        // console.error('Speech recognition error:', event.error);
                        try{
                            recognition.start();
                        }catch(err){

                        }

                        

                    }
                    recognition.onend = function(event) {
                        console.error('Speech recognition error:', event.error);
                        try{
                            recognition.start();
                        }catch(err){

                        }

                        

                    }
                } else {
                    console.error('Speech recognition not supported');
                }

                // return indx;
                // setT(s);

           
           
            
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
                <h1 className="text-2xl font-semibold mb-4">Stuttering Practice(Alone)</h1>
               <p id="workspace" style={{color:"#6e696e"}}>As the day drew to a close, a sense of tranquility enveloped the landscape. 
                   </p>
                   <button onClick={() =>{start()}} className="mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Start</button>
                   <button onClick={() =>{stop()}} className="mt-3  ml-3  bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">Stop</button>
                </div>
        </div>
       
    
      </>
    );
  };
  
  export default SpeakAlone;