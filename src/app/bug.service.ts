import { Injectable } from '@angular/core';
import { Bug } from './bug';

@Injectable()
export class BugService {

  getBug(id: number): Bug {
    return bugs[id];
  }
  constructor() { }

  getBugs(): Bug[] {
    return bugs;
  }

}

const bugs: Bug[] = [{
  id: 0,
  title: 'un titre de bug',
  description: 'ceci est la description du bug.'
}, {
  id: 1,
  title: 'un titre de bug 2',
  description: 'ceci est la description du bug 2.'
}, {
  id: 2,
  title: 'un titre de bug 3',
  description: 'ceci est la description du bug 3.'
}];
