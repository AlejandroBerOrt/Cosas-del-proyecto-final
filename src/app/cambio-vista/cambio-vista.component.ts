import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CustomPaginator } from '../other/customPaginator';

@Component({
  selector: 'app-cambio-vista',
  templateUrl: './cambio-vista.component.html',
  styleUrl: './cambio-vista.component.css',
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ]
})
export class CambioVistaComponent implements OnInit{
  
  tableData = [
    {nombre: "Celeste", dev: "Maddy Makes Games", img:"../assets/Celeste_video_game_logo.png", tags: "2D, Plataformas, Pixel-Art, LBGTQ+"},
    {nombre: "EarthBlade", dev: "Extremely OK Games", img:"../assets/earthblade_dwuf.jpg", tags: "2D, Acción, Exploración, Pixel-Art"},
    {nombre: "Gaditan Driver", dev: "RossGames22", img:"../assets/OIG2.jpg", tags: "2D, Conducción, Exploración, Cyberpunk"},
    {nombre: "Celeste", dev: "Maddy Makes Games", img:"../assets/Celeste_video_game_logo.png", tags: "2D, Plataformas, Pixel-Art, LBGTQ+"},
    {nombre: "EarthBlade", dev: "Extremely OK Games", img:"../assets/earthblade_dwuf.jpg", tags: "2D, Acción, Exploración, Pixel-Art"},
    {nombre: "Gaditan Driver", dev: "RossGames22", img:"../assets/OIG2.jpg", tags: "2D, Conducción, Exploración, Cyberpunk"},
    {nombre: "Celeste", dev: "Maddy Makes Games", img:"../assets/Celeste_video_game_logo.png", tags: "2D, Plataformas, Pixel-Art, LBGTQ+"},
    {nombre: "EarthBlade", dev: "Extremely OK Games", img:"../assets/earthblade_dwuf.jpg", tags: "2D, Acción, Exploración, Pixel-Art"},
    {nombre: "Gaditan Driver", dev: "RossGames22", img:"../assets/OIG2.jpg", tags: "2D, Conducción, Exploración, Cyberpunk"},
    {nombre: "Celeste", dev: "Maddy Makes Games", img:"../assets/Celeste_video_game_logo.png", tags: "2D, Plataformas, Pixel-Art, LBGTQ+"},
    {nombre: "EarthBlade", dev: "Extremely OK Games", img:"../assets/earthblade_dwuf.jpg", tags: "2D, Acción, Exploración, Pixel-Art"},
    {nombre: "Gaditan Driver", dev: "RossGames22", img:"../assets/OIG2.jpg", tags: "2D, Conducción, Exploración, Cyberpunk"},
    {nombre: "Celeste", dev: "Maddy Makes Games", img:"../assets/Celeste_video_game_logo.png", tags: "2D, Plataformas, Pixel-Art, LBGTQ+"},
    {nombre: "EarthBlade", dev: "Extremely OK Games", img:"../assets/earthblade_dwuf.jpg", tags: "2D, Acción, Exploración, Pixel-Art"},
    {nombre: "Gaditan Driver", dev: "RossGames22", img:"../assets/OIG2.jpg", tags: "2D, Conducción, Exploración, Cyberpunk"},
  ]
  
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataObs$!: Observable<any>;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.setPagination(this.tableData);
  }

  setPagination(tableData: any[] | undefined) {
    this.dataSource = new MatTableDataSource<any>(tableData);
    this._changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataObs$ = this.dataSource.connect();
  }
}
