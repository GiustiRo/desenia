import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Home, Codepen, Sun, Moon, BookOpen, ChevronLeft, ChevronRight, CornerUpLeft, Eye, EyeOff, Menu, X} from 'angular-feather/icons';

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
  Menu,
  X
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
