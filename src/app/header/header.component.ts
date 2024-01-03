import { Component, HostListener } from '@angular/core';
import { faCartShopping, faBars, faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartShopping = faCartShopping;
  faBars = faBars

  headerScroll: boolean = false
  @HostListener('document:scroll')
  onScroll() {
    if (document.documentElement.scrollTop > 0) {
      this.headerScroll = true
    } else {
      this.headerScroll = false
    }
  }
}
