import { Component } from '@angular/core';
import { FeaturesComponent } from '../modules/features/features.component';
import { CommonModule } from '@angular/common';
import { ScreenshotsComponent } from '../modules/screenshots/screenshots.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturesComponent, CommonModule, ScreenshotsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  features_content  : any = []


  constructor(private router: Router){

    this.features_content = [
      {
        title: 'Lightning-Fast Downloads',
        description : 'BlackJuice leverages advanced technology to ensure you get the fastest download speeds possible.'
      },
      {
        title: 'Efficient Pause/Resume',
        description : 'Pause and resume your downloads with ease, without losing progress or compromising speed.'
      },
      {
        title: 'Multi-Platform Support',
        description : 'Use BlackJuice on your desktop or through your browser - your choice, your convenience.'
      },
      {
        title: 'Clean & Simple UI',
        description : 'Our intuitive interface makes managing your downloads a breeze, without unnecessary complications.'
      },
      {
        title: 'Browser Integration',
        description : 'Seamlessly capture and manage downloads directly from your favorite browsers with our extension.'
      },
      {
        title: 'Lightweight Performance',
        description : 'Enjoy all the features without slowing down your system. BlackJuice is designed for efficiency.'
      }

    ]

  }


  download_file(){
    const platform = this.getPlatform();

    
    let downloadUrl = '';


    switch(platform) {
        case 'Windows':
            downloadUrl = 'https://blackjuice.imaginekenya.site/files/blackjuice-downloader-v2.0-2024-setup.exe';
            break;
        case 'Mac':
            downloadUrl = 'https://blackjuice.imaginekenya.site/files/blackjuice-downloader-v2.0-2024-setup.deb';
            break;
        case 'Linux':
            downloadUrl = 'https://blackjuice.imaginekenya.site/files/blackjuice-downloader-v2.0-2024-setup.deb';
            break;
        default:
            alert(`BlackJuice is not available yet for ${platform}`);
            return;
    }


    window.location.href = downloadUrl;
}

getPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor

    if (/windows/i.test(userAgent)) {
        return 'Windows';
    } else if (/macintosh|mac os x/i.test(userAgent)) {
        return 'Mac';
    } else if (/linux/i.test(userAgent) && !/android/i.test(userAgent)) {
        return 'Linux';
    } else if (/android/i.test(userAgent)) {
        return 'Android';
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        return 'iOS';
    }

    return 'Unknown';
}

openAddsPage(){
  this.router.navigate(['/addons'])
}


  

}
