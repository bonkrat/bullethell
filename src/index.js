import BulletGroupPool from "./class/BulletGroupPool";
import BulletHost from "./class/BulletHost";
import BulletPool from "./class/BulletPool";
import P5Renderer from "./class/P5Renderer";
import ReactDOM from "react-dom";
import React from "react";
import { App } from "./App";

const bulletPool = new BulletPool();
const groupPool = new BulletGroupPool(bulletPool);

let host = new BulletHost(window.innerWidth / 4, 150, 0, 1);
host.setPool(groupPool);

const renderer = new P5Renderer(host, "container");
renderer.render();

const app = document.getElementById("controls");
ReactDOM.render(<App host={host} />, app);
