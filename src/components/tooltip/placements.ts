// hold all of the placements here

export type position =
  | 'topLeft'
  | 'top'
  | 'topRight'
  | 'rightTop'
  | 'right'
  | 'rightBottom'
  | 'bottomRight'
  | 'bottom'
  | 'bottomLeft'
  | 'leftBottom'
  | 'left'
  | 'leftTop';

export const placements: any = {
  topLeft: {
    position: ['tl', 'bl'],
  },
  top: {
    position: ['tc', 'bc'],
  },
  topRight: {
    position: ['tr', 'br'],
  },
  rightTop: {
    position: ['tr', 'tl'],
  },
  right: {
    position: ['cr', 'cl'],
  },
  rightBottom: {
    position: ['br', 'bl'],
  },
  bottomRight: {
    position: ['br', 'tr'],
  },
  bottom: {
    position: ['bc', 'tc'],
  },
  bottomLeft: {
    position: ['bl', 'tl'],
  },
  leftTop: {
    position: ['tl', 'tr'],
  },
  left: {
    position: ['cl', 'cr'],
  },
  leftBottom: {
    position: ['bl', 'br'],
  },
};
