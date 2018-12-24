import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Group } from '../core/models/group-interface';

@Injectable()
export class GroupService {
  groups: Group[] = [];

  constructor(
    private http: HttpClient
  ) { }

  setGroups(list) {
    this.groups = list;
  }

  getStoredGroups() {
    return this.groups;
  }
  getGroups(): Observable<Group[]> {
    return this.http.get<any>(environment.endpoint.groups)
      .pipe(
        map(response => response.list as Group[])
      );
  }
}
