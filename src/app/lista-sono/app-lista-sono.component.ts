import {Component} from "@angular/core";

@Component({
    selector: 'app-lista-sono',
    templateUrl: './app-lista-sono.component.html',
    styleUrls: ['./app-lista-sono.component.css']

})

export class AppListaSonoComponent{
    people: any = [
        {
            name: 'Leticia',
            idade: 25,
            level: 'M'
        },
        {
            name: 'Oscar',
            idade: 55,
            level: 'P'
        },
        {
            name: 'Marilene',
            idade: 48,
            level: 'G'
        },
        {
            name: 'Thaís',
            idade: 30,
            level: 'M'
        },
        {
            name: 'Régis',
            idade: 34,
            level: 'G'
        },
        {
            name: 'Nicolas',
            idade: 13,
            level: 'D'
        },
        {
            name: 'Nicoly',
            idade: 13,
            level: 'D'
        },
    ];
}