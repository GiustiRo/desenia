import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Home, Codepen, Sun, Moon, BookOpen, ChevronLeft, ChevronRight, CornerUpLeft, Eye, EyeOff, Menu } from 'angular-feather/icons';

const icons = {
  Camera,
  Heart,
  Home,
  Codepen,
  Sun,
  Moon,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CornerUpLeft,
  Eye,
  EyeOff,
  Menu
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
