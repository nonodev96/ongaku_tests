import {InterfaceSong} from './song'

export interface DataPlayer {
  analyserNodes_WeakMap: WeakMap<HTMLAudioElement, AnalyserNode>;
  mediaElementAudioSourceNode_WeakMap: WeakMap<HTMLAudioElement, MediaElementAudioSourceNode>;
  audio: HTMLAudioElement;
  song: InterfaceSong;
  songList: InterfaceSong[];
  iterator: number;
}
