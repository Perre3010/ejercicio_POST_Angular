import { Component } from '@angular/core';
import { EstudianteService } from './services/estudiante.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejercicio_post';
  studentData={
    codigo:"",
    alumno:"",
    periodo:"",
    nom_materia:"",
    apreciacion:"",
    total_faltas:"",
    nota_examen1:"",
    nota_examen2:"",
    nota_examen3:"",
    nota_definitiva:"",
    nota_habilitacion:"",
    horario:"",
    docente:""
  }

  constructor(private studentService:EstudianteService){}

  onSubmit(){
    this.studentService.registerStudent(this.studentData).subscribe(
      responde => {
        console.log(responde);
      },
      error=>{
        console.error("Error en la solicitud: ",error)
      }
    );
  }
}
