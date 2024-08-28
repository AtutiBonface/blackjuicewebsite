import { Component } from '@angular/core';

@Component({
  selector: 'app-addons',
  standalone: true,
  imports: [],
  templateUrl: './addons.component.html',
  styleUrl: './addons.component.scss'
})
export class AddonsComponent {


  download_file(){
    const platform = this.getPlatform();

    
    let downloadUrl = '';


    switch(platform) {
        case 'Windows':
            downloadUrl = 'https://blackjuice.imaginekenya.site/files/blackjuice-ex-ui.zip';
            break;
        case 'Mac':
            downloadUrl = 'https://blackjuice.imaginekenya.site/files/blackjuice-ex-ui.zip';
            break;
        case 'Linux':
            downloadUrl = 'https://blackjuice.imaginekenya.site/files/blackjuice-ex-ui.zip';
            break;
        default:
            alert(`Desktop Browser Extensions cannot be installed in mobile browsers`);
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

}
