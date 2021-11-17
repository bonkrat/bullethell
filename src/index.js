import { BulletHost, BulletGroupPool, BulletPool, P5Renderer } from "./class";
import ReactDOM from "react-dom";
import React from "react";
import { App } from "./App";

const bulletPool = new BulletPool(),
  groupPool = new BulletGroupPool(bulletPool),
  getHostXPosition = () => {
    const canEl = document.getElementById("defaultCanvas0");

    if (canEl) {
      return canEl.width / 2;
    } else {
      return (window.innerHeight * 480) / 640 / 2;
    }
  },
  host = new BulletHost(getHostXPosition(), 240, 0, 1);

host.setPool(groupPool);

window.addEventListener("resize", () => {
  host.x = getHostXPosition();
});

const renderer = new P5Renderer(host, "container"),
  app = document.getElementById("controls");

renderer.render();
ReactDOM.render(<App hostInstance={host} />, app);
