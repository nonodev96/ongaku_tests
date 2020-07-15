import { IAudioMetadata } from 'music-metadata';

export interface InterfaceSong {
  id: number | string;
  title: string;
  album: string;
  artist: string;
  src: string;
  imgData?: string;
  audioMetadata?: IAudioMetadata;
}
