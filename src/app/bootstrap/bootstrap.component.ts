import { Component } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const statesWithFlags: { name: string; flag: string }[] = [
	{ name: 'Celeste', flag: '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
	{ name: 'EarthBlade', flag: 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
	{ name: 'Hollow Knight', flag: '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
	{ name: 'Gaditan Driver', flag: '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
	{ name: 'Stardew Valley', flag: '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
	{ name: 'Haunted Chocolatier', flag: '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
	{ name: 'A Hat In Time', flag: '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
	{ name: 'Here comes Niko!', flag: 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' },
	{ name: 'Kind Words', flag: 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
	{ name: 'Kind Words 2', flag: '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png' },
	{ name: 'A.R.E.S', flag: 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
	{ name: 'Bloons TD6', flag: 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
	{ name: 'Bloons TD Battles 2', flag: '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
	{ name: 'Hi-Fi Rush', flag: 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
	{ name: 'De Fobos Y Deimos', flag: 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
	{ name: 'Castle Crashers', flag: 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
	{ name: 'Alien Hominid', flag: '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
	{ name: 'Hades', flag: 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
	{ name: 'Hades II', flag: '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
	{ name: 'Transistor', flag: 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
	{ name: 'Bastion', flag: 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
	{ name: 'Pyre', flag: 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
	{ name: 'The Binding of Isaac: Repentance', flag: 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
	{ name: 'Pizza Tower', flag: '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
	{ name: 'Terraria', flag: '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
	{ name: 'Minecraft', flag: 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
	{ name: 'Cookie Clicker', flag: '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
	{ name: 'TowerFall', flag: 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
	{ name: 'Everhood, an ineffable tale of the inexpressible divine moments of truth', flag: '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
	{ name: 'Everhood 2', flag: '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
	{ name: 'Shantae, Half Genie Hero', flag: 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
	{ name: 'Shantae and The Pirate Curse', flag: '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
	{ name: 'Lethal Company', flag: 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
	{ name: 'Cruelty Squad', flag: 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
	{ name: 'Ultrakill', flag: '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
	{ name: 'Baldur\'s Gate III', flag: '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
	{ name: 'Pit People', flag: 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
	{ name: 'Oxenfree', flag: 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
	{ name: 'After Party', flag: 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
	{ name: 'Oxenfree 2', flag: '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
	{ name: 'Undertale', flag: '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
	{ name: 'Deltarune', flag: '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' }
];

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.css'
})
export class BootstrapComponent {
  model: any;

	search: OperatorFunction<string, readonly { name: any; flag: any }[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			map((term) =>
				term === ''
					? []
					: statesWithFlags.filter((v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
		);

	formatter = (x: { name: string }) => x.name;
  
}
