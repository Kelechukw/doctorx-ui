import React from "react";

const Chat = () => {
  return (
    <>
      <div id="container">
        <aside>
          <header>
            <input type="text" placeholder="search" />
          </header>
          <ul>
            <li>
              <img src="images/cropd.png" alt="" />
              <div>
                <h2>Dr. Mellisa Smith</h2>
                <h3>
                  <span class="status orange"></span>
                  offline
                </h3>
              </div>
            </li>
            <li>
              <img src="images/cropd3.png" alt="" />
              <div>
                <h2>Dr. Josh Henderson</h2>
                <h3>
                  <span class="status green"></span>
                  online
                </h3>
              </div>
            </li>
            <li>
              <img src="images/cropd2.png" alt="" />
              <div>
                <h2>Dr. Christine Jones</h2>
                <h3>
                  <span class="status orange"></span>
                  offline
                </h3>
              </div>
            </li>
            <li>
              <img src="images/cropd4.png" alt="" />
              <div>
                <h2>Dr. Williams Stan</h2>
                <h3>
                  <span class="status green"></span>
                  online
                </h3>
              </div>
            </li>
          </ul>
        </aside>
        <main>
          <header>
            <img src="images/cropd.png" alt="" />
            <div>
              <h2>Chat with Dr. Mellisa Smith</h2>
              <h3>already 1902 messages</h3>
            </div>
          </header>
          <ul id="chat">
            <li class="you">
              <div class="entete">
                <span class="status green"></span>
                <h2>Dr. Mellisa Smith</h2>
                <h3>10:12AM, Today</h3>
              </div>
              <div class="triangle"></div>
              <div class="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </div>
            </li>
            <li class="me">
              <div class="entete">
                <h3>10:12AM, Today</h3>
                <h2>Dr. Mellisa Smith</h2>
                <span class="status blue"></span>
              </div>
              <div class="triangle"></div>
              <div class="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </div>
            </li>
            <li class="me">
              <div class="entete">
                <h3>10:12AM, Today</h3>
                <h2>Dr. Mellisa Smith</h2>
                <span class="status blue"></span>
              </div>
              <div class="triangle"></div>
              <div class="message">OK</div>
            </li>
            <li class="you">
              <div class="entete">
                <span class="status green"></span>
                <h2>Dr. Mellisa Smith</h2>
                <h3>10:12AM, Today</h3>
              </div>
              <div class="triangle"></div>
              <div class="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </div>
            </li>
            <li class="me">
              <div class="entete">
                <h3>10:12AM, Today</h3>
                <h2>Dr. Mellisa Smith</h2>
                <span class="status blue"></span>
              </div>
              <div class="triangle"></div>
              <div class="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </div>
            </li>
            <li class="me">
              <div class="entete">
                <h3>10:12AM, Today</h3>
                <h2>Dr. Mellisa Smith</h2>
                <span class="status blue"></span>
              </div>
              <div class="triangle"></div>
              <div class="message">OK</div>
            </li>
          </ul>
          <footer>
            <textarea placeholder="Type your message"></textarea>
            <img src="images/picon.png" alt="" />
            <img src="images/ficon.png" alt="" />
            <a href="/">Send</a>
          </footer>
        </main>
      </div>{" "}
    </>
  );
};

export default Chat;
