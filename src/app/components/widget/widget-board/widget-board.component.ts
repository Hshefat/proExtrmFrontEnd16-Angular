import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-board',
  templateUrl: './widget-board.component.html',
  styleUrls: ['./widget-board.component.scss']
})
export class WidgetBoardComponent {

  isloaded = true;
  ngOnInit(): void {

    this.snMethod();
  }


  snMethod() {
    setTimeout(() => {
      this.isloaded = false;
    }, 2000);
  }
}
