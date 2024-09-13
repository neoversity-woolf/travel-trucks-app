import {
  BsWind,
  BsDiagram3,
  BsCupHot,
  BsTv,
  BsDroplet,
  BsUiRadios,
} from 'react-icons/bs';
import { FaGasPump, FaHandHoldingWater } from 'react-icons/fa';
import { LuRefrigerator, LuMicrowave } from 'react-icons/lu';
import { PiEngine } from 'react-icons/pi';

import css from './Badge.module.css';

const icons = [
  BsDiagram3, // 'transmission'
  PiEngine, // 'engine'
  BsWind, // 'AC'
  BsDroplet, // 'bathroom'
  BsCupHot, // 'kitchen'
  BsTv, // 'TV'
  BsUiRadios, // 'radio'
  LuRefrigerator, // 'refrigerator'
  LuMicrowave, // 'microwave'
  FaGasPump, // 'gas'
  FaHandHoldingWater, // 'water'
];

export default function Badge({ name, iconType }) {
  const IconComponent = icons[iconType];

  return (
    <li className={css.badge}>
      <IconComponent size={20} />
      <span>{name.slice(0, 1).toUpperCase() + name.slice(1)}</span>
    </li>
  );
}
