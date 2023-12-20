import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Test1');
    this.meta.updateTag({ name: 'description', keywords: 'test1, angular, ssr, lorem' })
  }
}
