import {IAudioMetadata} from 'music-metadata';

export interface IValue {
  text: string;
  ref?: string;
}

export interface ITagText {
  key: string;
  label: IValue;
  value: IValue[];
}

export interface IUrlAsFile {
  name: string;
  type: string;
}

export interface IFileAnalysis {
  file: File | IUrlAsFile;
  metadata?: IAudioMetadata;
  parseError?: Error;
}

export interface ITagList {
  title: string;
  key: string;
  tags?: ITagText[];
}

export interface TagLabel {
  /**
   * API tag property name
   */
  key: string;
  /**
   * Human readable label describing key
   */
  label: string;
  /**
   * Convert tag label to human readable string
   * @param v {any} Tag value
   * @returns {string} Human readable string
   */
  toText?: (value: any) => string;
  keyRef?: string;
  valueRef?: (value: string) => string;
}

export interface MusicMetadata {
}
