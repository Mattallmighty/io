// import { MqttContext } from "@/pages/example/Example";
// import { useContext } from "react";

// import mqttService from "./mqttService";

const actions = async (otype: string, opayload: any, client?: any) => {
  if (otype === 'wled') {
    const call = await fetch(opayload)
    call && console.log("wled", call)
  }
  else if (otype === 'http') {
    const call = await fetch(opayload)
    call && console.log("http", call)
  }
  else if (otype === 'speak') {
    speechHandler(spk, opayload)
  }
  else if (otype === 'mqtt') {
    console.log("client", client)
    if (client) {
      console.log("payload", opayload)
      client.publish('homeassistant/sensor/gesturesensor/state', opayload);
      // client.publish('blade/gestures', opayload);
    }
  }
  else {
    alert(opayload)
  }
}

const spk = new SpeechSynthesisUtterance()

const speechHandler = (spk: SpeechSynthesisUtterance, text: string) => {
  spk.text = text
  window.speechSynthesis.speak(spk)
}

export default actions