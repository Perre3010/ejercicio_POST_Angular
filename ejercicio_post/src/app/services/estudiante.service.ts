import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private apiUrl = 'http://localhost:3000/register'; // Reemplaza con la URL de tu servidor

  constructor(private http: HttpClient) {}

  registerStudent(studentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, studentData);
  }
}


