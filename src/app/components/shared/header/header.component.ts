import { Component } from '@angular/core';
import { LucideAngularModule, LucideCloudAlert } from 'lucide-angular';

@Component({
  selector: 'general-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  notificationIcon = LucideCloudAlert

}
