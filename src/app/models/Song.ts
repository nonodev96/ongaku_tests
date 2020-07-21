import {InterfaceSong} from '../interfaces'
import {IAudioMetadata} from "music-metadata";

export class Song implements InterfaceSong {
  id: number | string;
  title: string;
  album: string;
  artist: string;
  src: string;
  imgData?: string;
  audioMetadata?: IAudioMetadata | null;

  constructor(song?: InterfaceSong) {
    this.id = song && song.id || '';
    this.title = song && song.title || '';
    this.album = song && song.album || '';
    this.artist = song && song.artist || '';
    this.src = song && song.src || '';
    this.imgData = song && song.imgData || '';
    this.audioMetadata = song && song.audioMetadata || null;
  }
}
