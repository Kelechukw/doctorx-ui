import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../socket/socket";
import store from "store";
import queryString from "query-string";
import MainWrapper from "../../components/layout/MainWrapper";
import { v4 as uuidv4 } from "uuid";
import { withRouter } from "react-router";

const Chat = ({ location, history }) => {
  const [session, setSession] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const { firstName, lastName, id: userId } = store.get("spn_user");
  const name = `${firstName} ${lastName}`;
  const socket = useContext(SocketContext);

  useEffect(() => {
    const { sessionId } = queryString.parse(location.search);
    if (!sessionId) {
      return history.push(`/chat?sessionId=${uuidv4()}`);
    }

    setSession(sessionId);

    socket.emit(
      "join",
      { room: sessionId, name, userId, isRoom: true },
      (error) => {
        if (error) {
          alert(error);
        }
      }
    );
  }, [name, location.search, session, socket, history, userId]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, [socket]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setMessage(value);
  };

  const handleMessageSend = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", { message, room: session, userId }, () =>
        setMessage("")
      );
    }
  };

  return (
    <MainWrapper title="Chat">
      <div class="container" style={{ paddingTop: "20px" }}>
        <div class="wrapper wrapper-content animated fadeInRight">
          <div class="row">
            <div class="col-lg-10">
              <div class="ibox chat-view">
                <div class="ibox-content">
                  <div class="row">
                    <div class="col-md-12 ">
                      <div class="chat-discussion">
                        {messages.map((message) => (
                          <div
                            class={`chat-message ${
                              message.user !== "admin" &&
                              message.user === name.trim().toLowerCase()
                                ? "right"
                                : "left"
                            }`}
                          >
                            {message.user !== "admin" && (
                              <img
                                class="message-avatar"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                alt=""
                              />
                            )}
                            <div class="message">
                              <a class="message-author" href="/">
                                {messages.user}
                              </a>
                              <span class="message-date">{message.date}</span>
                              <span class="message-content">
                                {message.text}
                              </span>
                            </div>
                          </div>
                        ))}
                        {/* <div class="chat-message right">
                          <img
                            class="message-avatar"
                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                            alt=""
                          />
                          <div class="message">
                            <a class="message-author" href="/">
                              {" "}
                              Karl Jordan{" "}
                            </a>
                            <span class="message-date">
                              {" "}
                              Fri Jan 25 2015 - 11:12:36{" "}
                            </span>
                            <span class="message-content">
                              Many desktop publishing packages and web page
                              editors now use Lorem Ipsum as their default model
                              text, and a search for 'lorem ipsum' will uncover.
                            </span>
                          </div>
                        </div>

                        <div class="chat-message ">
                          <div class="message">
                            <span class="message-content">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam nonummy nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat
                              volutpat.
                            </span>
                          </div>
                        </div>
                   */}
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="chat-message-form">
                        <div class="form-group">
                          <input
                            class="form-control message-input"
                            onChange={handleInputChange}
                            value={message}
                            name="message"
                            placeholder="Enter message text and press enter"
                            // onKeyDown={handleMessageSend}
                          />
                          <button onClick={handleMessageSend}>Send</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default withRouter(Chat);
