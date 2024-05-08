import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent{

  califs = ["2", "5", "4", "3", "2"]

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



}
