import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-ubicaciones-principal',
  standalone: true,
  template: `
    <div #mapContainer class="map-container">
      @if (!mapLoaded) {
        <div class="loading-map">Cargando mapa...</div>
      }
    </div>
  `,
  styles: [`
    .map-container {
      width: 100%;
      height: 50vh;
      position: relative;
    }
    
    .loading-map {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1rem 2rem;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      z-index: 999;
    }
  `]
})
export class UbicacionesPrincipalComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  private map!: Map;
  mapLoaded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeMap();
    }
  }

  private initializeMap() {
    this.map = new Map({
      target: this.mapContainer.nativeElement,
      layers: [
        new TileLayer({
          source: new OSM({
            attributions: [
              '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            ]
          })
        })
      ],
      view: new View({
        center: fromLonLat([-70.64827, -33.45694]),
        zoom: 15,
        minZoom: 10,
        maxZoom: 18
      })
    });

    setTimeout(() => {
      this.map.updateSize();
      this.mapLoaded = true;
    }, 100);
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.dispose();
      this.map.setTarget(undefined);
    }
  }
}
