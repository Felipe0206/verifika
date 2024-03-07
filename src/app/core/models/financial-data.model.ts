
export interface FinancialData {
    gestionData: {
        ventasNetas: number;
        patrimonioLiquido: number;
        activoTotal: number;
        activoCorriente: number;
        pasivoCorriente: number;
        cuentasPorCobrarClientes: number;
    };
    liquidezData: {
        activoCorriente: number;
        pasivoCorriente: number;
        disponible: number;
        inversionesTemporales: number;
        deudores: number;
    };
    rentabilidadData: {
        utilidadBruta: number;
        ventasNetas: number;
        descuentos: number;
        utilidadOperacional: number;
        utilidadNeta: number;
        patrimonioLiquido: number;
        activoTotal: number;
    };
    solvenciaData: {
        totalPasivo: number;
        totalActivo: number;
        pasivoCorriente: number;
        pasivoTotal: number;
        ventasNetas: number;
        patrimonio: number;
    };
}
