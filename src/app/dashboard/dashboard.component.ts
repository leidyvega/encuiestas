import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Formulario } from '../datos.interfaces';
import { encuestaService } from '../encuesta.services';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formularioService: encuestaService) {
    this.contactForm = new FormGroup({
      nombreCompleto:  new FormControl('', [Validators.required]),
      tipoDocumento:  new FormControl('', ),
      numeroDocumento:  new FormControl('', ),
      direccion:  new FormControl('', [Validators.required]),
      barrio:  new FormControl('', [Validators.required]),
      celular:  new FormControl('', [Validators.required]),
      correo:  new FormControl('', ),
      seguroSocial:  new FormControl('', [Validators.required]),
      numeroPersonasHogar:  new FormControl('', [Validators.required]),
      numeroMayoresEdad:  new FormControl('', [Validators.required]),
      numeroMenoresEdad:  new FormControl('', [Validators.required]),
      numeroFormacionDeportiva:  new FormControl('', [Validators.required]),

      nombreIntegra1:  new FormControl(''),
      EdadIntegrante1:  new FormControl(''),
      EscolarizadoIntegra1:  new FormControl(''),
      Integrante1Disciplina:new FormControl(''),
      ////nuevos camnpos 
      nombreIntegra2:  new FormControl(''),
      EdadIntegrante2:  new FormControl(''),
      EscolarizadoIntegra2:  new FormControl(''),
      Integrante2Disciplina:new FormControl(''),

      nombreIntegra3:  new FormControl(''),
      EdadIntegrante3:  new FormControl(''),
      EscolarizadoIntegra3:  new FormControl(''),
      Integrante3Disciplina:new FormControl(''),

      nombreIntegra4:  new FormControl(''),
      EdadIntegrante4:  new FormControl(''),
      EscolarizadoIntegra4:  new FormControl(''),
      Integrante4Disciplina:new FormControl(''),
////// fin nuevos campos
      ProblemaBarrio:new FormControl('', [Validators.required]),
      OtroProBarrio:new FormControl('', [Validators.required]),
      ProblemaSoledad :new FormControl('', [Validators.required]),
      InformadoCampañas:new FormControl('', [Validators.required]),
   
    })
    
   }

  ngOnInit(): void {
   
  }

  onSubmit() {
    this.formularioService.addJob(this.contactForm.value)
      .then(() => {
        // Si se envía correctamente, se limpia el formulario
        this.contactForm.reset();
        // Se muestra una alerta de éxito
        Swal.fire({
          title: 'Formulario enviado',
          text: '¡Gracias por su respuesta!',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      })
      .catch(() => {
        // Si ocurre un error, se muestra una alerta de error
        Swal.fire({
          title: 'Error',
          text: 'Ocurrió un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      });
  }
}