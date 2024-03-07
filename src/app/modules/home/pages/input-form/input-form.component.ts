import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResulService } from '../../services/resul.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  financialForm: FormGroup;

  constructor(private fb: FormBuilder,private financialDataService: ResulService) {
    this.financialForm = this.fb.group({
      gestionData: this.fb.group({
        ventasNetas: [0],
        patrimonioLiquido: [0],
        activoTotal: [0],
        activoCorriente: [0],
        pasivoCorriente: [0],
        cuentasPorCobrarClientes: [0]
      }),
      liquidezData: this.fb.group({
        activoCorriente: [0],
        pasivoCorriente: [0],
        disponible: [0],
        inversionesTemporales: [0],
        deudores: [0]
      }),
      rentabilidadData: this.fb.group({
        utilidadBruta: [0],
        ventasNetas: [0],
        descuentos: [0],
        utilidadOperacional: [0],
        utilidadNeta: [0],
        patrimonioLiquido: [0],
        activoTotal: [0]
      }),
      solvenciaData: this.fb.group({
        totalPasivo: [0],
        totalActivo: [0],
        pasivoCorriente: [0],
        pasivoTotal: [0],
        ventasNetas: [0],
        patrimonio: [0]
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.financialForm.valid) {
      this.financialDataService['sendFinancialData'](this.financialForm.value).subscribe({
        next: (response: any) => {
          console.log('Datos enviados con éxito', response);
        },
        error: (error: any) => {
          console.error('Error al enviar los datos', error);
          // Manejar el error, por ejemplo, mostrar un mensaje de error
        }
      });
    }
  }
}
