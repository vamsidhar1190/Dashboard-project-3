import { Component, Renderer2 } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  
  isCollapsed = false;
value: any;
isSidebarOpen: boolean = false;

toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
  
}
}



