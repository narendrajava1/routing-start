import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServersService } from '../servers.service';
import { Subscription } from 'rxjs';
import { query } from '@angular/animations';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,OnDestroy {
  server: {id: number, name: string, status: string};
  queryParamsSubscription:Subscription;
  serverName = '';
  serverStatus = '';
  allowEdit:boolean;

  constructor(private serversService: ServersService,private route:ActivatedRoute) { }
  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.server=this.serversService.getServer(+params['id']);       
        this.serverName=this.server.name,
        this.serverStatus=this.server.status
    })
    this.queryParamsSubscription=this.route.queryParams.subscribe((queryParams)=>{
      console.log(queryParams['allowEdit'])
      this.allowEdit=queryParams['allowEdit']==='1'?true:false;
      // this.server=this.serversService.getServer(queryParams['allowEdit']);
      // this.server.id=queryParams['allowEdit'];
    })
    // this.server = this.serversService.getServer(1);
    // this.serverName = this.server.name;
    // this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}


