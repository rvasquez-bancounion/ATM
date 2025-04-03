import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { AtmService } from './atm.service';
import { BalancePrestamosDto } from './dto/BlanancePrestamo.dto';
import { CrudOficinaDto } from './dto/crudOficina.dto';
import { SolicitudDto } from './dto/Solicitud.dto';
import { CrudDireccionesDto } from './dto/crudDirecciones.dto';
import { SolicitudRemesaDto } from './dto/solicitudRemesa.dto';
import { ConsultaRemesaDto } from './dto/ConsultaRemesa.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadDto } from './dto/Nomina.dto';
import { ConsultaNominaDto } from './dto/ConsultaNomina.dto';
import { CrearBeneficiarioDto } from './dto/CrearBeneficiario.dto';
import { CorreoDto } from './dto/Correo.dto';
import { ConsultaPrestamoaDto } from './dto/ConsultaPrestamo.dto';

@Controller('atm')
export class AtmController {

  constructor(private readonly atmService: AtmService) {}

  @Get('getDatosCliente/:cedula')
  getDatosCliente(@Param('cedula') id: string) {
    return this.atmService.getDatosCliente(id);
  }

  @Get('getCuentas/:cedula')
  getCuentas(@Param('cedula') id: string) {
    return this.atmService.getCuentas(id);
  }

  @Get('getSucursales')
  getSucursales() {
    return this.atmService.getSucursales();
  }

  @Get('getDirecciones')
  getDirecciones() {
    return this.atmService.getDirecciones();
  }

  @Get('getProvincias')
  getProvincias() {
    return this.atmService.getProvincias();
  }

  @Get('getMunicipios/:provincia')
  getMunicipios(@Param('provincia') id: string) {
    return this.atmService.getMunicipios(+id);
  }

  @Get('getDistrirosMunicipales/:municipio')
  getDistrirosMunicipales(@Param('municipio') id: string) {
    return this.atmService.getDistrirosMunicipales(+id);
  }

  @Get('getSectores/:municipio')
  geSectores(@Param('municipio') id: string) {
    return this.atmService.geSectores(+id);
  }
  
  @Post('balancePrestamos')
  balancePrestamos(@Body() balancePrestamosDto: BalancePrestamosDto) {
    return this.atmService.balancePrestamos(balancePrestamosDto);
  }

  @Post('crudOficina')
  crudOficina(@Body() crudOficinaDto: CrudOficinaDto) {
    return this.atmService.crudOficina(crudOficinaDto);
  }

  @Get('getDirecciones/:cedula')
  getDireccionesClientes(@Param('cedula') id: string) {
    return this.atmService.getDireccionesClientes(id);
  }

  @Get('getClientes/:pagina/:record')
  getClientes(@Param('pagina') pagina: string,@Param('record') record: string){
    return this.atmService.getClientes(+pagina,+record);
  }

  @Post('Solicitudes')
  Solicitudes(@Body() solicitudDto: SolicitudDto) {
    return this.atmService.Solicitudes(solicitudDto);
  }

  @Post('SolicitudesRechazadas')
  SolicitudesRechazadas(@Body() solicitudDto: SolicitudDto) {
    return this.atmService.SolicitudesRechazadas(solicitudDto);
  }

  @Post('crudDirecciones')
  crudDirecciones(@Body() crudDireccionesDto: CrudDireccionesDto) {
    return this.atmService.crudDirecciones(crudDireccionesDto);
  }

  @Post('solicitudRemesa')
  solicitudRemesa(@Body() solicitudRemesaDto: SolicitudRemesaDto) {
    return this.atmService.solicitudRemesa(solicitudRemesaDto);
  }

  @Post('consultaRemesa')
  consultaRemesa(@Body() consultaRemesaDto: ConsultaRemesaDto) {
    return this.atmService.consultaRemesa(consultaRemesaDto);
  }

  @Post('consultaPrestamo')
  consultaPrestamo(@Body() consultaPrestamoaDto: ConsultaPrestamoaDto) {
    return this.atmService.consultaPrestamo(consultaPrestamoaDto);
  }

  @Post('subirNomina')
  @UseInterceptors(FileInterceptor('file'))
  async  uploadFile(
    @UploadedFile() file: Express.Multer.File,  
    @Body() fileUploadDto: FileUploadDto,  
    @Body('nota') nota: string,
    @Body('cuentaEmpresa') cuentaEmpresa: string   
  ): Promise<any> {
    if (!file) {
      throw new Error('El archivo no se ha recibido correctamente.');
    }

    try {
      const result = await this.atmService.cargarNomina(file,nota,cuentaEmpresa);
      return { mensaje: 'Archivo procesado correctamente'};
    } catch (error) {
      if(error.response){
        throw new HttpException(error.response, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
      // console.error('Error al procesar la nómina:', error);
      // return { error: `${error}.` };
    }
  }

  @Post('obtenerNomina')
  obtenerNomina(@Body() consultaNominaDto: ConsultaNominaDto) {
    return this.atmService.obtenerNomina(consultaNominaDto);
  }

  @Get('getAcciones')
  getAcciones(){
    return this.atmService.getAcciones();
  }

  @Get('getEmpresas')
  getEmpresas(){
    return this.atmService.getEmpresas();
  }

  @Get('getConceptosEmpresas/:idEmpresa')
  getConceptosEmpresas(@Param('idEmpresa') idEmpresa: string){
    return this.atmService.getConceptosEmpresas(+idEmpresa);
  }
  
  @Get('getTipoTransaccion/:idAccion')
  getTipoTransaccion(@Param('idAccion') idAccion: string){
    return this.atmService.getTipoTransaccion(+idAccion);
  }

  @Get('getBeneficiarios/:cedula')
  getBeneficiarios(@Param('cedula') id: string) {
    return this.atmService.getBeneficiarios(id);
  }

  @Get('getBalanceCuenta/:cuanta')
  getBalanceCuenta(@Param('cuanta') id: string) {
    return this.atmService.getBalanceCuenta(id);
  }

  @Get('getPrestamos/:cedula/:usuario')
  getPrestamos(@Param('cedula') id: string,@Param('usuario') usuario: string) {
    return this.atmService.getPrestamos(id,usuario);
  }

  @Get('getBalancePrestamo/:prestamo/:usuario')
  getBalancePrestamo(@Param('prestamo') id: string,@Param('usuario') usuario: string) {
    return this.atmService.getBalancePrestamo(id,usuario);
  }

  @Post('crearBeneficiario')
  crearBeneficiario(@Body() crearBeneficiarioDto: CrearBeneficiarioDto) {
    return this.atmService.crearBeneficiario(crearBeneficiarioDto);
  }

  @Post('enviarCorreo')
  enviarCorreo(@Body() correoDto: CorreoDto) {
    return this.atmService.enviarCorreo(correoDto);
  }

}


