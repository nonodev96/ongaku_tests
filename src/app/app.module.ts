import 'reflect-metadata';
import '../polyfills';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

import {AppRoutingModule} from './app-routing.module';

// NG Translate
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {HomeModule} from './home/home.module';
import {DetailModule} from './detail/detail.module';

import {AppComponent} from './app.component';
import {AlbumComponent} from './components/album/album.component';
import {AudioVisualizerComponent} from './components/audio-visualizer/audio-visualizer.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DebugComponent} from './components/debug/debug.component';
import {EqualizerComponent} from './components/equalizer/equalizer.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {LibraryComponent} from './components/library/library.component';
import {PlayerComponent} from './components/player/player.component';
import {PlaylistsComponent} from './components/playlists/playlists.component';
import {PlaylistsDetailComponent} from './components/playlists-detail/playlists-detail.component';
import {SettingsComponent} from './components/settings/settings.component';
import {SongComponent} from './components/song/song.component';
import {NGFORAGE_CONFIG_PROVIDER} from './ngforage.config';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, AlbumComponent, AudioVisualizerComponent, DashboardComponent, DebugComponent, EqualizerComponent, FavoritesComponent, LibraryComponent, PlayerComponent, PlaylistsComponent, PlaylistsDetailComponent, SettingsComponent, SongComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    DetailModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [NGFORAGE_CONFIG_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule {
}
