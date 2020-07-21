import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './shared/components';

import {HomeRoutingModule} from './home/home-routing.module';

import {AudioVisualizerComponent} from "./components/audio-visualizer/audio-visualizer.component";
import {SongComponent} from "./components/song/song.component";
import {DebugComponent} from "./components/debug/debug.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {PlaylistsComponent} from "./components/playlists/playlists.component";
import {FavoritesComponent} from "./components/favorites/favorites.component";
import {LibraryComponent} from "./components/library/library.component";
import {EqualizerComponent} from "./components/equalizer/equalizer.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'equalizer', component: EqualizerComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'playLists', component: PlaylistsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'debug', component: DebugComponent},
  {path: 'song', component: SongComponent},
  {path: 'audio-visualizer', component: AudioVisualizerComponent},
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
