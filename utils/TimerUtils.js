import {generate as short} from 'shortid'

const millisecondsToHuman = ms => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
  ].join(':');

  return humanized;
};

const pad = (numberString, size) => {
  let padded = numberString;
  while (padded.length < size) {
    padded = `0${padded}`;
  }
  return padded;
};

const newTimer = (attrs = {}) => {
  const timer = {
    title: attrs.title || 'Timer',
    project: attrs.project || 'Project',
    id: short(),
    elapsed: 0,
    isRunning: false,
  };

  return timer;
};

export {
    millisecondsToHuman,
    newTimer
}