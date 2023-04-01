import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentYear: number = 0;

  ngOnInit() {
      const currentDate = new Date();
      this.currentYear = currentDate.getFullYear();
  }
}
