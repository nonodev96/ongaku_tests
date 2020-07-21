import {Injectable, OnInit} from '@angular/core';
import {EnumAddFavorites, EnumDeleteFavorites} from "../../enums/favorites.enum";
import {
  InterfaceDatabaseService,
  InterfaceFavorites,
  InterfaceFavoriteToAdd,
  InterfaceFavoriteToDelete,
  InterfacePlaylist,
  InterfacePlaylists
} from "../../interfaces";
import {DedicatedInstanceFactory, NgForage, NgForageCache} from 'ngforage';
import {AppConfig} from "../../../environments/environment";
import {Song} from "../../models/Song";

type T = {}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InterfaceDatabaseService {

  public iterator: number;

  private readonly ngf_FAVORITES: NgForage;
  private readonly ngf_PLAYLISTS: NgForage;
  private readonly ngf_SONGS_LOAD: NgForage;

  constructor(private dif: DedicatedInstanceFactory) {
    this.ngf_FAVORITES = dif.createNgForage({name: AppConfig.FAVORITES});
    this.ngf_PLAYLISTS = dif.createNgForage({name: AppConfig.PLAYLISTS});
    this.ngf_SONGS_LOAD = dif.createNgForage({name: AppConfig.SONGS_LOAD});
    this.initDatabase();
  }

  public initDatabase() {
    this.ngf_FAVORITES.ready().then(value => {
      console.log(AppConfig.FAVORITES);
    })
    this.ngf_PLAYLISTS.ready().then(value => {
      console.log(AppConfig.PLAYLISTS);
    })
    this.ngf_SONGS_LOAD.ready().then(value => {
      console.log(AppConfig.SONGS_LOAD);
    })
    this.iterator = 0;
  }

  public resetDatabase() {
    this.ngf_FAVORITES.clear().then(value => {
      console.log("DELETED ", AppConfig.FAVORITES)
    })
    this.ngf_PLAYLISTS.clear().then(value => {
      console.log("DELETED ", AppConfig.PLAYLISTS)
    })
    this.ngf_SONGS_LOAD.clear().then(value => {
      console.log("DELETED ", AppConfig.SONGS_LOAD)
    })
  }

  public getItem<T = Song>(key: string): Promise<T> {
    this.ngf_FAVORITES.getItem<T>(key);
    this.ngf_PLAYLISTS.getItem<T>(key);
    return this.ngf_SONGS_LOAD.getItem<T>(key);
  }

  public setItem<T = Song>(key: string, value: T): Promise<T | null> {
    this.iterator++;
    const new_key: string = key
    this.ngf_FAVORITES.setItem<T>(new_key, value);
    this.ngf_PLAYLISTS.setItem<T>(new_key, value);
    return this.ngf_SONGS_LOAD.setItem<T>(new_key, value);
  }

  public ngForageDebug() {
    console.log(this.ngf_FAVORITES.toJSON())
    console.log(this.ngf_PLAYLISTS.toJSON())
    console.log(this.ngf_SONGS_LOAD.toJSON())
  }

  public database() {

  }

  public addFavorite(songPathToAdd: InterfaceFavoriteToAdd): Promise<EnumAddFavorites> {
    return new Promise((resolve) => {

    });
  }

  public deleteFavorite(songPathToDelete: InterfaceFavoriteToDelete): Promise<EnumDeleteFavorites> {
    return new Promise((resolve) => {

    });
  }

  public getAllFavorites(): Promise<InterfaceFavorites> {
    return new Promise((resolve) => {

    });
  }

  public createPlayList(namePlaylistToCreate: string): Promise<string | boolean> {
    return new Promise((resolve) => {

    });
  }

  public deletePlayList(namePlaylistToDelete: string): Promise<string | boolean> {
    return new Promise((resolve) => {

    });
  }

  public addSongPathToPlayList(namePlayList: string, songPathToPlayList: string): Promise<string | boolean> {
    return new Promise((resolve) => {

    });
  }

  public addSongsPathToPlayList(namePlayList: string, songsToSave: string[]): Promise<string | boolean> {
    return new Promise((resolve) => {

    });
  }

  public getPlayListsByName(playListName: string): Promise<InterfacePlaylist | string> {
    return new Promise((resolve) => {

    });
  }

  public getAllPlayLists(): Promise<InterfacePlaylists> {
    return new Promise((resolve) => {

    });
  }
}
