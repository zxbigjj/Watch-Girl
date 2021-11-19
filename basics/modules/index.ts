import {temperature} from './sea'
console.log('海水温度：'+temperature);
import { temperature as Humantemperature , swim } from './human';
console.log('人体温度：'+Humantemperature);
swim();
import * as human from './human';
console.log('人体温度：'+human.temperature);
human.swim();