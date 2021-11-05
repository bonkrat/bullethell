import BulletGroupPool from "./class/BulletGroupPool";
import BulletHost from "./class/BulletHost";
import BulletPool from "./class/BulletPool";
import P5Renderer from "./class/P5Renderer";
import ReactDOM from "react-dom";
import React from "react";
import { App } from "./App";

const bulletPool = new BulletPool();
const groupPool = new BulletGroupPool(bulletPool);

const getHostXPosition = () => {
  const canEl = document.getElementById("defaultCanvas0");

  if (canEl) {
    return canEl.width / 2;
  } else {
    return (window.innerHeight * 480) / 640 / 2;
  }
};

let host = new BulletHost(getHostXPosition(), 240, 0, 1);
host.setPool(groupPool);

window.addEventListener("resize", () => {
  host.x = getHostXPosition();
});

const renderer = new P5Renderer(host, "container");
renderer.render();

const app = document.getElementById("controls");
ReactDOM.render(<App hostInstance={host} />, app);
