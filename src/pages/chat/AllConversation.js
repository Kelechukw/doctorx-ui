import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllConversation } from "../../api";
import store from "store";
import MainWrapper from "../../components/layout/MainWrapper";

const AllConversation = () => {
  const [conversations, setConversation] = useState([]);
  const { id: userId } = store.get("spn_user");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseData = await getAllConversation();
    setConversation(responseData.data);
  };

  return (
    <MainWrapper title="All conversation">
      <div class="page-content page-container" id="page-content">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="people-nearby">
                {conversations.map((conversation) => (
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
                            {conversation.conversationWith}
                          </a>
                        </h5>
                        <p>
                          {console.log(conversation.from, userId)}
                          {conversation.from === userId
                            ? "you: "
                            : conversation.conversationWith + ":"}
                          {conversation.message}
                        </p>
                      </div>
                      <div class="col-md-3 col-sm-3">
                        <Link
                          to={`/chat?sessionId=${conversation.id}&isRoom=false`}
                        >
                          <button class="btn btn-primary pull-right">
                            Chat
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                {conversations.length === 0 && (
                  <div
                    style={{
                      padding: "1rem",
                      margin: "1rem",
                    }}
                  >
                    You have not initiated any conversation
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

export default AllConversation;
