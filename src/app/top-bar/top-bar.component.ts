import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  mySidebarDisplay = false;
  constructor() { }

  ngOnInit() {
  }
  w3_open() {
    if (this.mySidebarDisplay) {
      this.mySidebarDisplay = false;
    } else {
      this.mySidebarDisplay = true;
    }
  }

  w3_close() {
    this.mySidebarDisplay = false;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/