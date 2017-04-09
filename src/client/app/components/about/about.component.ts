import { Injector, ElementRef, ViewChild, Component, AfterViewInit } from '@angular/core';
import { Config } from '../../shared/core/index';
import * as swiper from 'swiper';

@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: [
    'about.component.css',
  ],
})
export class AboutComponent implements AfterViewInit {

  // Just one way you could handle the {N} `ui/page` Page class
  // in a shared component...
  private _page: any;
  private get page() {
    if (Config.PageClass) {
      if (!this._page) {
        this._page = this.injector.get(Config.PageClass);
      }

      return this._page;
    }
  }
  @ViewChild('slider') private eleswp:ElementRef;

  private swip: Swiper;

  constructor(private injector: Injector, private ele: ElementRef) {
    // This is here as an example
    // if (this.page) {
    //   this.page.actionBarHidden = true;
    // }

  }

  ngAfterViewInit() {
    let swpopt: SwiperOptions = {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: '.swiper-pagination',

      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',

      // And if we need scrollbar
      scrollbar: '.swiper-scrollbar',
    };
    this.swip = new Swiper(this.eleswp.nativeElement, swpopt);

  }

}
