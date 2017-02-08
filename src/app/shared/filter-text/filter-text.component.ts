import { Component, EventEmitter, Output } from '@angular/core';


declare var componentHandler: any;  
@Component({
  moduleId: module.id,
  selector: 'story-filter-text',
  templateUrl: 'filter-text.component.html'
})

export class FilterTextComponent {
      @Output() changed: EventEmitter<string>;
      @Output() clicked: EventEmitter<string>;

      filter: string;
      showButton: true;

      constructor() {
        this.changed = new EventEmitter<string>();
        this.clicked = new EventEmitter<string>();
        /// <reference path="../../../typings.d.ts" />  
        /// componentHandler.upgradeDom();
      }

      clear() {
        this.filter = '';
      }

      filterChanged(event: any) {
        event.preventDefault();
        console.log(`Filter Changed: ${this.filter}`);
        this.changed.emit(this.filter);
      }

      filterClicked(event: any) {
        event.preventDefault();
        console.log(`Filter Clicked: ${this.filter}`);       
        this.clicked.emit(this.filter);
      }

}