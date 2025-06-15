import { Component } from '@angular/core';
import { GaugeCircleIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports:[LucideAngularModule]

})
export class SidebarComponent {
  dashboardIcon =GaugeCircleIcon;

}
