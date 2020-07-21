import {InterfaceFavorites, InterfaceFavoriteToAdd, InterfaceFavoriteToDelete} from "./favorites";
import {EnumAddFavorites, EnumDeleteFavorites} from "../enums/favorites.enum";
import {InterfacePlaylist, InterfacePlaylists} from "./playlists";

export interface InterfaceDatabaseService {
  addFavorite(songPathToAdd: InterfaceFavoriteToAdd): Promise<EnumAddFavorites>

  deleteFavorite(songPathToDelete: InterfaceFavoriteToDelete): Promise<EnumDeleteFavorites>

  getAllFavorites(): Promise<InterfaceFavorites>

  createPlayList(namePlaylistToCreate: string): Promise<string | boolean>

  deletePlayList(namePlaylistToDelete: string): Promise<string | boolean>

  addSongPathToPlayList(namePlayList: string, songPathToPlayList: string): Promise<string | boolean>

  addSongsPathToPlayList(namePlayList: string, songsToSave: string[]): Promise<string | boolean>

  getPlayListsByName(playListName: string): Promise<InterfacePlaylist | string>

  getAllPlayLists(): Promise<InterfacePlaylists>
}
