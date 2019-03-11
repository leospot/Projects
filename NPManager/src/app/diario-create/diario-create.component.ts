import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-diario-create',
  templateUrl: './diario-create.component.html',
  styleUrls: ['./diario-create.component.css']
})
export class DiarioCreateComponent implements OnInit {

  @Input() diarioDetails = { fecha: Date.now(), RE: '', RR: '', RyV: '', VyJ: '', CQ: '', GOURM: '', JyQ: '', VERDUR: '', CALAB: '', MEDIT: '', RUCULA: '', SALMON: '', RJyN: '', FIDEOS: '', NOQUIS: '', CANEL: '', SALSA: '', CREMA: '', QRAYA: '' };

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() { }

  addDiario(dataDiario) {
    this.restApi.createDiario(this.diarioDetails).subscribe((data: {}) => {
      this.router.navigate(['/diarios-list']);
    });
  }

}
