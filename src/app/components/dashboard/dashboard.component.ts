import {Component, OnDestroy, OnInit} from '@angular/core';
import {Song} from "../../models/Song";
import {Subscription} from "rxjs";
import {PlayerService} from "../../providers/player.service";
import {DatabaseService} from "../../core/services/database.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {


  public songListInFolder: Song[] = [];

  public panelOpenState: boolean[] = [];
  private songListSubscription: Subscription;

  constructor(private _playerService: PlayerService,
              private _databaseService: DatabaseService) {
    this.songListInFolder = this._playerService.getSongList();
  }

  public getItemTest() {
    this._databaseService.getItem("prueba").then((data: Song) => {
      console.log("getItemTest", data)
    });

  }

  public setItemTest() {
    this._databaseService.setItem("prueba", "guardado").then((data: string) => {
      console.log("setItemTest", data)
    });
  }

  public ngForageDebug() {
    this._databaseService.ngForageDebug();
  }

  ngOnInit() {
    this.songListSubscription = this._playerService.getSongListObservable().subscribe((songList: Song[]) => {
      this.songListInFolder = songList;
    });
  }

  ngOnDestroy(): void {
    this.songListSubscription.unsubscribe();
  }

  public loadDashboard() {
    this._playerService.updateSongListSubscription();
  }

  public showInfo(song: Song) {
    console.log('showInfo');
    console.log(song);
    console.log('end showInfo');
  }

  public playSong(song: Song) {
    this._playerService.setPlayer(song);
    this._playerService.playerTogglePlayPause();
  }

  public debug() {
    console.log({
      'panelOpenState': this.panelOpenState,
      'songListInFolder': this.songListInFolder
    });
  }
}
