import react, { useState } from "react";
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSmile, faPlus, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FilePicker } from 'react-file-picker';
export default function () {
  const [show, setShow] = useState(false);
  const [showImojiPicker, setShowImojiPicker] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageVal, setMessageVal] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    let temp = [...messages]
    temp.push(emojiObject.emoji)
    setMessages(temp)
    setShowImojiPicker(false)
  }
  const Message = ({val}) => (
    <div className="ChatbotMessages">
      {val}
    </div>
  );
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      let temp = [...messages]
      temp.push(messageVal)
      setMessages(temp)
      setMessageVal("")

      gotoBottom("chatbotBody")
    }
  }
  function gotoBottom(id){
    var element = document.getElementById(id);
    element.scrollTop = element.scrollHeight - element.clientHeight;
 }
  const VincentCircles = react.memo(({data})=>{
    return (
      <>
        {
          data.map((res,i)=>{
           if(i < 3){
            return(
              <div className="VincentCircle contentCenter">
                
              </div>
            )
           }
          })
        }
        {data.length > 3 && <div className="VincentCircle contentCenter">
            {data.length -1 + "+"}
        </div>}
      </>
    )
  })
  return (
    <>
      {!show && (
        <div className="chatCircleContainer">
          <div onClick={() => setShow(true)} className="chatCircle contentCenter">
            <FontAwesomeIcon color="white" icon={faCommentAlt} />
          </div>
        </div>
      )}
      {show && (
        <div className="chatbotContainer">
          <div className="chatbotHeader">
            <div
              onClick={() => setShow(false)}
              className="chatbotHeaderCross"
            >
              <FontAwesomeIcon color="white" icon={faTimes} />
            </div>
            <div style={{ marginLeft: 10 }}>
              <div className="chatbotHeaderHeading">Jeanne from Spliiit</div>
              <div className="chatbotHeaderPara">Support is away</div>
              <div
                style={{
                  width: "100%",
                  marginTop: 5,
                  display:'flex'
                }}
              >
                <VincentCircles data={[1,2,3,4,5]}/>
              </div>
            </div>
          </div>
          <div id="chatbotBody" className="chatBotBody" style={{ flex: 1 }}>
            {showImojiPicker && <Picker
                disableSearchBar={true}
                onEmojiClick={onEmojiClick}
                disableAutoFocus={true}
                skinTone={SKIN_TONE_MEDIUM_DARK}/>}

                {messages.map((res,i)=>{
                  return (
                    <Message val={res} />
                  )
                })}
          </div>
          <div className="chatBotInputContainer">
            <input
              value={messageVal}
              onKeyDown={handleKeyDown}
              onChange={(e)=>{
                setMessageVal(e.target.value)
              }}
              placeholder="Compose your message..."
              type="text"
              style={{ border: "none", height: "100%" }}
            />
            <div style={{ display: "flex" }}>
              <div onClick={()=>setShowImojiPicker(true)} className="chatBotInputCircles contentCenter">
                <FontAwesomeIcon color="gray" icon={faSmile} />
              </div>
              <FilePicker
                extensions={['md', 'jpg', 'png']}
                onChange={FileObject => {
                  let temp = [...messages]
                  temp.push(FileObject.name)
                  setMessages(temp)
                }}
                onError={errMsg => console.log(errMsg)}
              >
              <div className="chatBotInputCircles contentCenter">
                <FontAwesomeIcon color="gray" icon={faPlus} />
              </div>
              </FilePicker>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
