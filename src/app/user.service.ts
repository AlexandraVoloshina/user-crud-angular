import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http'; // Чтобы забрать файл с сервера.
import { Observable } from 'rxjs'; // Чтобы сервис умел работать с ожидаемыми данными.
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators'; // Чтобы распарсить, при необходимости, полученные данные.

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiHost = './assets/users.json'; // Хорошим тоном считается определять пути в переменных. Если путь изменится, не надо потом будет заменять его по всему файлу.

  private users: Observable<User[]>;

  constructor(private http: HttpClient) {
    this.users = this.http.get(this.apiHost) // метод get автоматически распарсит данные в JSON-формат, в Angular 5 это было не так.
      .pipe(map((users: User[]) => users)); // Это нужно, чтобы мы получили данные в формате Observable<Friend[]>. Без этой строчки .get вернёт нам Observable<Object>. Страшного ничего не случится, но в компонентах переменную, принимающуюя эти данные теперь можно определить как Observable<Friend[]>. Помимо улучшения читабельности кода, мы избегаем ошибок при присвоениях, в которых транспайлер будет сообщать, что, например, свойство _id не принадлежит типу Object.
  }

  getUsers(): Observable<User[]> {
    return this.users;
  }

}