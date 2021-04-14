import React, { useContext, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import MainWrapper from "../components/layout/MainWrapper";
import { SocketContext } from "../socket/socket";

const WaitingRoom = () => {
  const socket = useContext(SocketContext);
  const [users, setUsers] = useState([]);

  const handleSetUsers = useCallback(({ users }) => {
    setUsers(users);
  }, []);

  useEffect(() => {
    socket.on("roomData", handleSetUsers);
  }, [users, socket, handleSetUsers]);

  useEffect(() => {
    socket.emit("getRoom");
  }, [socket]);

  return (
    <MainWrapper title="Waiting room">
      <div class="page-content page-container" id="page-content">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="people-nearby">
                {users.map((user) => (
                  <div class="nearby-user">
                    <div class="row">
                      <div class="col-md-2 col-sm-2">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="user"
                          class="profile-photo-lg"
                        />
                      </div>
                      <div class="col-md-7 col-sm-7">
                        <h5>
                          <a href="/" class="profile-link">
                            {user.name}
                          </a>
                        </h5>
                        <p>Software Engineer</p>
                        <p class="text-muted">{user.roomId}</p>
                        <p class="text-muted">500m away</p>
                      </div>
                      <div class="col-md-3 col-sm-3">
                        <Link to={`/chat?sessionId=${user.roomId}&isRoom=true`}>
                          <button class="btn btn-primary pull-right">
                            Enter Chat
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                {users.length === 0 && (
                  <div
                    style={{
                      padding: "1rem",
                      margin: "1rem",
                    }}
                  >
                    There are no user in waiting room
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default WaitingRoom;
