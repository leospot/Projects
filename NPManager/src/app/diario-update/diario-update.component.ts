import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diario-details',
  templateUrl: './diario-update.component.html',
  styleUrls: ['./diario-update.component.css']
})

export class DiarioUpdateComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  diarioData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getDiario(this.id).subscribe((data: {}) => {
      this.diarioData = data;
    });
  }

  // Update diario data
  updateDiario() {
    if(window.confirm('Esta seguro que quiere actualizarlo?')){
      this.restApi.updateDiario(this.id, this.diarioData).subscribe(data => {
        this.router.navigate(['/diario-list']);
      });
    }
  }

}
