import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Test2');
    this.meta.updateTag({ name: 'description', keywords: 'test2, angular, ssr' });
    this.meta.updateTag({ name: 'content', keywords: 'lorem, lorem, lorem, lorem' });
  }

}
