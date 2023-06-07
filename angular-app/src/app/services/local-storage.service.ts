import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  public put(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  public get(key: string): any {
    return localStorage.getItem(key)
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
