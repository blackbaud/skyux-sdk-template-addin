import { Component, OnInit } from '@angular/core';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { AddinClientInitArgs, AddinTileSummaryStyle } from '@blackbaud/sky-addin-client';

@Component({
  selector: 'my-tile',
  templateUrl: './my-tile.component.html',
  styleUrls: ['./my-tile.component.scss']
})
export class MyTileComponent implements OnInit {

  public closeHelp: boolean = true;
  public context: any;
  public userIdentityToken: string;

  constructor(
    private addinClientService: AddinClientService
  ) {}

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      this.context = args.context;

      args.ready({
        showUI: true,
        title: 'My tile',
        tileConfig: {
          showHelp: true,
          showSettings: true,
          summaryStyle: AddinTileSummaryStyle.Check,
          summaryChecked: true
        }
      });
    });

    this.addinClientService.helpClick.subscribe(() => {
      this.showHelp();
    });
  }

  public helpClosed() {
    this.closeHelp = true;
  }

  public getAuthToken() {
    this.userIdentityToken = undefined;

     this.addinClientService.getAuthToken().subscribe(token => {
       this.userIdentityToken = token;
     });
  }

  private showHelp() {
    this.closeHelp = false;
  }
}
