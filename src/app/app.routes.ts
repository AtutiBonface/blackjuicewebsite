import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AddonsComponent } from './addons/addons/addons.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component : HomeComponent
    },
    {
        path : 'addons',
        component : AddonsComponent
    },
    {
        path : "**",
        component : PagenotfoundComponent
    }
];
