import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../socket/socket";
import store from "store";
import queryString from "query-string";
import MainWrapper from "../../components/layout/MainWrapper";
import { v4 as uuidv4 } from "uuid";
import { withRouter } from "react-router";
import { uploadFile } from "../../api/uploadAction";
import { getAllMessages } from "../../api";

const Chat = ({ location, history }) => {
  const [session, setSession] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isSendingFile, setIsSendingFile] = useState(false);
  const { firstName, lastName, id: userId, role } = store.get("spn_user");
  const name = `${firstName} ${lastName}`;
  const socket = useContext(SocketContext);

  useEffect(() => {
    const getMsgs = async () => {
      const { sessionId } = queryString.parse(location.search);

      if (sessionId.split("-").length === 2) {
        const messages = await getAllMessages(sessionId);
        setMessages(messages);
      }
    };
    getMsgs();
  }, [location.search]);

  useEffect(() => {
    const { sessionId, isRoom } = queryString.parse(location.search);
    if (!sessionId) {
      return history.push(`/chat?sessionId=${uuidv4()}`);
    }

    setSession(sessionId);

    socket.emit(
      "join",
      {
        room: sessionId,
        name,
        userId,
        userRole: role,
        isRoom: isRoom === "true",
      },
      (error) => {
        if (error) {
          alert(error);
        }
      }
    );
  }, [name, location.search, socket, history, userId, role]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, [socket]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleMessageSend = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit(
        "sendMessage",
        { message, room: session, type: "text", userId },
        () => setMessage("")
      );
    }
  };

  const handleUploadFile = async (e) => {
    e.preventDefault();
    setIsSendingFile(true);
    const file = e.target.files[0];
    const payload = {
      file,
    };
    const fileLink = await uploadFile(payload);
    socket.emit(
      "sendMessage",
      {
        message: fileLink,
        type: file.type,
        room: session,
        userId,
      },
      () => {}
    );
    setIsSendingFile(false);
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
                            {renderMsg(message)}
                          </div>
                        ))}
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
                          />
                          <button onClick={handleMessageSend}>Send</button>
                          <div class="file-input">
                            <input
                              type="file"
                              id="file"
                              class="file"
                              onChange={handleUploadFile}
                            />
                            <label for="file">Send file</label>
                          </div>
                          {isSendingFile ? <div> Sending file </div> : ""}
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

const renderMsg = (message) => {
  switch (message.type) {
    case "text":
      return (
        <div class="message">
          <a class="message-author" href="/">
            {message.user}
          </a>
          <span class="message-date">{message.date}</span>
          <span class="message-content">
            {message.text ? message.text : message.message}
          </span>
        </div>
      );
    case "image/png":
    case "image/jpeg":
    case "image/jpg":
      return (
        <div class="message">
          <a class="message-author" href="/">
            {message.user}
          </a>
          <span class="message-date">{message.date}</span>
          <span class="message-content">
            <img
              src={message.text ? message.text : message.message}
              alt=""
              width="50%"
            />
          </span>
        </div>
      );
    case "application/pdf":
      return (
        <div class="message">
          <a class="message-author" href="/">
            {message.user}
          </a>
          <span class="message-date">{message.date}</span>
          <span class="message-content">
            PDF: click{" "}
            <a
              href={message.text ? message.text : message.message}
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            to download
          </span>
        </div>
      );

    default:
      return (
        <div class="message">
          <a class="message-author" href="/">
            {message.user}
          </a>
          <span class="message-date">{message.date}</span>
          <span class="message-content">
            file: click{" "}
            <a
              href={message.text ? message.text : message.message}
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            to download
          </span>
        </div>
      );
  }
};
