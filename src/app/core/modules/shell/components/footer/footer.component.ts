import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LINKS = [
  'Audio and Subtitles',
  'Audio Description',
  'Help Center',
  'Gift Cards',
  'Media Center',
  'Investor Relations',
  'Jobs',
  'Terms of Use',
  'Privacy',
  'Legal Notices',
  'Cookie Preferences',
  'Corporate Information',
  'Contact Us',
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public links = LINKS;
  public faFacebookF = faFacebookF;
  public faInstagram = faInstagram;
  public faTwitter = faTwitter;
  public faYoutube = faYoutube;
  public faLinkedin = faLinkedin;

  constructor() {}

  ngOnInit(): void {}
}
