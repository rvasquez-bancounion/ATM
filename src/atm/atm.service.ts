import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import  { AxiosResponse } from 'axios';
import { BalancePrestamosDto } from './dto/BlanancePrestamo.dto';
import { CrudOficinaDto } from './dto/crudOficina.dto';
import { SolicitudDto } from './dto/Solicitud.dto';
import { CrudDireccionesDto } from './dto/crudDirecciones.dto';
import { SolicitudRemesaDto } from './dto/solicitudRemesa.dto';
import { ConsultaRemesaDto } from './dto/ConsultaRemesa.dto';
import * as XLSX from 'xlsx';
import { EntityManager } from 'typeorm';
import { ConsultaNominaDto } from './dto/ConsultaNomina.dto';
import { CrearBeneficiarioDto } from './dto/CrearBeneficiario.dto';
import { MailService } from './mail.service';
import { CorreoDto } from './dto/Correo.dto';
import { ConsultaPrestamoaDto } from './dto/ConsultaPrestamo.dto';
const axios = require('axios');

@Injectable()
export class AtmService {
  constructor(
    private manager : EntityManager,
    private readonly mailService: MailService
){}

  async getSucursales(): Promise<string>{

    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}oficina`,
        headers: { 
          'Authorization': tokenWithoutQuotes
        }
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {    
        return response.data;
      }).catch((error) => {
        throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
      });
    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }
  
  async getDirecciones(): Promise<string>{

    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}tipo/direcciones`,
        headers: { 
          'Authorization': tokenWithoutQuotes
        }
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {    
        return response.data;
      }).catch((error) => {
        throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
      });
    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }

  async getProvincias(): Promise<string>{

    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}provincias`,
        headers: { 
          'Authorization': tokenWithoutQuotes
        }
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {    
        return response.data;
      }).catch((error) => {
        throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
      });    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }

  async getMunicipios(id: number): Promise<string> {

    try{

        const token = await this.GetToken();
        const tokenWithoutQuotes = token.slice(1, -1);  

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${process.env.BASEURL}municipios/${id}`,
          headers: { 
            'Authorization': tokenWithoutQuotes
          }
        };      
    
        return axios.request(config).then((response: AxiosResponse) => {    
          return response.data;
        }).catch((error) => {
          throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
        });
      

    }catch (error){
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    }

  }

  async getDireccionesClientes(id: string): Promise<string> {

    try{

        const token = await this.GetToken();
        const tokenWithoutQuotes = token.slice(1, -1);  

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${process.env.BASEURL}/direccion/cliente/${id}`,
          headers: { 
            'Authorization': tokenWithoutQuotes
          }
        };      
    
        return axios.request(config).then((response: AxiosResponse) => {    
          return response.data;
        }).catch((error) => {
          throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
        });
      

    }catch (error){
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    }

  }

  async getDistrirosMunicipales(id: number): Promise<string> {

    try{

        const token = await this.GetToken();
        const tokenWithoutQuotes = token.slice(1, -1);  

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${process.env.BASEURL}distrito/municipales/${id}`,
          headers: { 
            'Authorization': tokenWithoutQuotes
          }
        };      
    
        return axios.request(config).then((response: AxiosResponse) => {    
          return response.data;
        }).catch((error) => {
          throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
        });
      

    }catch (error){
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    }

  }

  async geSectores(id: number): Promise<string> {

    try{

        const token = await this.GetToken();
        const tokenWithoutQuotes = token.slice(1, -1);  

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${process.env.BASEURL}sectores/${id}`,
          headers: { 
            'Authorization': tokenWithoutQuotes
          }
        };      
    
        return axios.request(config).then((response: AxiosResponse) => {    
          return response.data;
        }).catch((error) => {
          throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
        });
      

    }catch (error){
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    }

  }

  async getCuentas (id: string): Promise<string>{

    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}cuentas/${id}`,
        headers: { 
          'Authorization': tokenWithoutQuotes
        }
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {    
        return response.data;
      }).catch((error) => {
        throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
      });
    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }

  async getClientes(pagina: number,record:number): Promise<string>{

    try{
      
      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}cliente/pagineo/${pagina}/${record}`,
        headers: { 
          'Authorization': tokenWithoutQuotes
        }
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {    
        return response.data;
      }).catch((error) => {
        throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
      });
    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }

 async getDatosCliente(id: string): Promise<string> {

    try{

        const token = await this.GetToken();
        const tokenWithoutQuotes = token.slice(1, -1);  

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${process.env.BASEURL}consulta/cliente/${id}`,
          headers: { 
            'Authorization': tokenWithoutQuotes
          }
        };      
    
        return axios.request(config).then((response: AxiosResponse) => {    
          return response.data;
        }).catch((error) => {
          throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
        });
      

    }catch (error){
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    }

  }

  async getBeneficiarios(id: string): Promise<string> {

    try{

        const token = await this.GetToken();
        const tokenWithoutQuotes = token.slice(1, -1);  

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${process.env.BASEURL}consultaBeneficiario/${id}`,
          headers: { 
            'Authorization': tokenWithoutQuotes
          }
        };      
    
        return axios.request(config).then((response: AxiosResponse) => {    
          return response.data;
        }).catch((error) => {
          throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
        });
      

    }catch (error){
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    }

  }

  async  GetToken(): Promise<string> {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url:process.env.URLTOKEN,
      headers: {}
    };
  
    return axios.request(config).then((response: AxiosResponse) => {      
        return JSON.stringify(response.data);
      }).catch((error) => {
        throw error;
      });
  } 

  async  GetTokenDebCre(): Promise<string> {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url:process.env.URLTOKENDEBCRE,
      headers: {}
    };
  
    return axios.request(config).then((response: AxiosResponse) => {      
        return JSON.stringify(response.data);
      }).catch((error) => {
        throw error;
      });
  } 

  async balancePrestamos(balancePrestamosDto: BalancePrestamosDto): Promise<string>{

        try{

          const token = await this.GetToken();
          const tokenWithoutQuotes = token.slice(1, -1);  

          const {canalEntrada,codigoUsuario,idSucursal,tipoFiltro,valorConsulta} = balancePrestamosDto;

          let data = JSON.stringify({
            "tipoFiltro": tipoFiltro,
            "valorConsulta": valorConsulta,
            "canalEntrada":canalEntrada,
            "codigoUsuario": codigoUsuario,
            "idSucursal": idSucursal
          });

          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.BASEURL}balancePrestamos`,
            headers: { 
              'Authorization': tokenWithoutQuotes,
              'Content-Type': 'application/json'
            },
            data : data
          };      
      
          return axios.request(config).then((response: AxiosResponse) => {    
            return response.data;
          }).catch((error) => {

            throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
          });
        

      }catch (error){
        throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
      }

  }

  async crudOficina(crudOficinaDto: CrudOficinaDto): Promise<string>{

    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

      const {codiofic,descofic,operacion} = crudOficinaDto;

      let data = JSON.stringify({
        "codiofic": codiofic,
        "descofic": descofic,
        "operacion":operacion
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}crud/oficina`,
        headers: { 
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data : data
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {    
        return response.data;
      }).catch((error) => {

        throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
      });
    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }

  async  formatDate(fecha) {
    const dia = ("0" + fecha.getDate()).slice(-2);
    const mes = ("0" + (fecha.getMonth() + 1)).slice(-2); // Los meses en JavaScript son 0-indexados
    const anio = fecha.getFullYear();
    return `${dia}-${mes}-${anio}`;
  }

  async Solicitudes(solicitudDto: SolicitudDto){

    const {fechaFin,fechaInicio} = solicitudDto;
    const formattedFechaInicio = await this.formatDate(new Date(fechaInicio));
    const formattedFechaFin =  await this.formatDate(new Date(fechaFin));
    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}/consulta/remesa/fechaRegistro/${formattedFechaInicio}/${formattedFechaFin}`,
        headers: { 
          'Authorization': tokenWithoutQuotes
        }
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {
        const datos = response.data.map(item => {
            console.log('antes del formato:', item);
    
            // Formatear la fecha y la hora
            const statusDate = new Date(item.fechaRegistro).toISOString().slice(0, 10).replace(/-/g, '/');
            const statusTime = item.horaEstado.slice(0, 8); // Recortar la hora para obtener solo hh:mm:ss
    
            console.log('despues del formato:', item);
    
            // Retornar los datos en el formato solicitado
            return {
                idRemesa: item.idRemesa,
                secCorrespondencia: item.secCorrespondencia,
                refCorrespondencia: item.refCorrespondencia,
                codigoEstado: item.codigoEstado,
                descripcionEstado: item.descripcionEstado,
                fechaEstado: statusDate,
                horaEstado: statusTime,
                montoRemesa: item.montoRemesa,
                nombreRemitente: item.nombreRemitente,
                idRemitente: item.idRemitente,
                paisRemitente: item.paisRemitente,
                codigoRemitente: item.codigoRemitente,
                nombreReclamante: item.nombreReclamante || "", // Si está vacío, retornar un string vacío
                paisReclamante: item.paisReclamante || "", // Lo mismo para este campo
                codigoReclamante: item.codigoReclamante || "", // Y este
                mensajeEstado: item.mensajeEstado,
                codigoTransaccion: item.codigoTransaccion,
                descripcionTransaccion: item.descripcionTransaccion,
                nombreBanco: item.nombreBanco || "", // Si no está disponible, dejarlo vacío
                cuentaBancaria: item.cuentaBancaria,
                codigoPagador: item.codigoPagador || "",
                codigoProblema: item.codigoProblema || "", // Si está vacío, asignar un string vacío
                fechaRegistro: item.fechaRegistro,
                referenciaCliente: item.referencia_Carioca || "",
                referenciaCarioca:item.referencia_cliente || "" // Mantén la fecha de registro original
            };
        });
    
        return datos; // Devuelve el arreglo de datos transformados
  
    
      }).catch((error) => {
        console.log(error)
        throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
      });
    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }


  async SolicitudesRechazadas(solicitudDto: SolicitudDto){

    const {fechaFin,fechaInicio} = solicitudDto;
    const formattedFechaInicio = await this.formatDate(new Date(fechaInicio));
    const formattedFechaFin =  await this.formatDate(new Date(fechaFin));
    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}/consulta/remesa/fechaRegistro/${formattedFechaInicio}/${formattedFechaFin}/R`,
        headers: { 
          'Authorization': tokenWithoutQuotes
        }
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {    
        const datos = response.data.map(item => {
          
          console.log('antes del formato:',item)
          const statusDate = new Date(item.fechaRegistro).toISOString().slice(0, 10).replace(/-/g, '/');
          const statusTime = item.horaEstado.slice(0, 8);
          console.log('despues del formato',item)
          return {
              remittanceid: item.idRemesa,
              corrreference: item.refCorrespondencia,
              statuscode: item.codigoEstado,
              statusdesc: item.descripcionEstado,
              statusdate: statusDate,
              statustime: statusTime,
              claimername: item.nombreReclamante || "",
              claimerid: item.codigoReclamante || "",
              statusmess: item.mensajeEstado,
              payercode: item.codigoPagador || "",
              problemcode: item.codigoProblema || "",
              monto: item.montoRemesa,
              referenciaCarioca: item.referencia_Carioca,
              referenciaCliente: item.referencia_cliente,
              nombreRemitente: item.nombreRemitente,
              descripcionTransaccion: item.descripcionTransaccion,
              observacion: item.observacion

          };
      });
      
        return datos;
      }).catch((error) => {
        console.log(error)
        throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
      });
    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }

  async crudDirecciones(crudDireccionesDto: CrudDireccionesDto): Promise<string>{

    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

      const {codicldi,codidimu,codiensa,codimuni,codipais,codiprov,codisect,coditdir,descnota,direprin,direrefe,identificacion,nombcall,
             nombedif,numeapar,numecall,numepiso,operacion,regiborr,aparpost
      } = crudDireccionesDto;

      const data = JSON.stringify({
        codicldi: codicldi,
        codidimu: codidimu,
        codiensa: codiensa,
        codimuni: codimuni,
        codipais: codipais,
        codiprov: codiprov,
        codisect: codisect,
        coditdir: coditdir,
        descnota: descnota,
        direprin: direprin,
        direrefe: direrefe,
        identificacion: identificacion,
        nombcall: nombcall,
        nombedif: nombedif,
        numeapar: numeapar,
        numecall: numecall,
        numepiso: numepiso,
        operacion: operacion,
        regiborr: regiborr,
        aparpost: aparpost
    });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}crud/direcciones`,
        headers: { 
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data : data
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {    
        return response.data;
      }).catch((error) => {

        throw new HttpException(`Hubo Un Error: ${error.response.data.descripcionError}`, HttpStatus.BAD_REQUEST);
      });
    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }

  async solicitudRemesa(solicitudRemesaDto: SolicitudRemesaDto): Promise<any>{

    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');

      const trndate = `${year}-${month}-${day}`;  

      const hours = String(today.getHours()).padStart(2, '0');
      const minutes = String(today.getMinutes()).padStart(2, '0');
      const seconds = String(today.getSeconds()).padStart(2, '0');

      const trntime = `${hours}:${minutes}:${seconds}`; 

      const { 
        paycurrency, payamount,comamount, custcode, custfname, custlname,
        custaddress, custcity, custstate, custzip, custcountry, custphone,
        custidname, custidnumber, trnmessage, bencode,benfname, benlname, 
        benaddress, bensector, benaddrref, bencity, benstate, benzip,
        bencountry, benphone1, benphone2, trncode, bankname, bankacc, 
        deliverytype, payercode, idtransacion
    } = solicitudRemesaDto;

    const randomPart = Math.floor(100000000 + Math.random() * 900000000);
    const sec = `${randomPart}`;

    const data = JSON.stringify({
      corrcode: process.env.CORRCODE,
      corrsequence: sec,
      corrreference: `BU${process.env.CORRCODE}${sec}`,
      trndate: trndate,
      trntime: trntime,
      paycurrency: paycurrency,
      payamount: payamount,
      comamount: comamount,
      custcode: custcode,
      custfname: custfname,
      custlname: custlname,
      custaddress: custaddress,
      custcity: custcity,
      custstate: custstate,
      custzip: custzip,
      custcountry: custcountry,
      custphone: custphone,
      custidname: custidname,
      custidnumber: custidnumber,
      trnmessage: trnmessage,
      bencode: bencode,
      benfname: benfname,
      benlname: benlname,
      benaddress: benaddress,
      bensector: bensector,
      benaddrref: benaddrref,
      bencity: bencity,
      benstate: benstate,
      benzip: benzip,
      bencountry: bencountry,
      benphone1: benphone1,
      benphone2: benphone2,
      trncode: trncode,
      bankname: bankname,
      bankacc: bankacc,
      deliverytype: deliverytype,
      payercode: payercode,
      remcategory: "01",
      idtransacion:idtransacion
    });    

    if ( ['01', '03'].includes(trncode) ) {
      const validarCuenta = await this.consultaCuentaCliente(bankacc,payamount); 
      if(parseInt(validarCuenta) !== 1){
        throw new HttpException(`Fondos Insuficientes O Cuenta Inactiva`, HttpStatus.BAD_REQUEST);
      }  
    }

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}enviarRemesa`,
        headers: { 
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data : data
      };  

      if ( ['01', '03'].includes(trncode) ) {
        
       
                
        return axios.request(config)
        .then(async (response) => {    
          if ( ['01'].includes(trncode) ) {
            await this.DenitoCreditoRecogida(bankacc,payamount,`BU${process.env.CORRCODE}${sec}`,9);   
            return response.data;
          }else{
            await this.DenitoCreditoRecogida(bankacc,payamount,`BU${process.env.CORRCODE}${sec}`,10);   
            return response.data;
          }
         
        }) .catch((error) => {         
          throw new HttpException(`Hubo Un Error: ${error.response.data.message}`, HttpStatus.BAD_REQUEST);
        });

      }else{
        return axios.request(config)
        .then(async (response) => {       
          return response.data;
        }) .catch((error) => {
          console.log(error)
          throw new HttpException(`Hubo Un Error: ${error.response.data.message}`, HttpStatus.BAD_REQUEST);
        });

      }

    }catch (error){
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    }

  }

  async DenitoCreditoRecogida(bankacc:string,payamount:number,sec:string,canal:number): Promise<string>{

    const validarCuenta = await this.consultaCuentaCliente(bankacc,payamount);   

    if(parseInt(validarCuenta) !== 1){
      throw new HttpException(`Fondos Insuficientes O Cuenta Inactiva`, HttpStatus.BAD_REQUEST);
    }    

    const token = await this.GetTokenDebCre();
    const tokenWithoutQuotes = token.slice(1, -1);  
    
    const data = {
       "codigoCta":bankacc,
      "monto":payamount,
      "codSucursal":1,
      "tipoMov":"ND",
      "nota":"Nota de Debito Del Cliente",
      "canalContable":canal.toString(),
      "canalEnviaSolicitud":canal.toString()
     }


    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.BASEURL}debitoCredito`,
      headers: { 
        'Authorization': tokenWithoutQuotes,
        'Content-Type': 'application/json'
      },
      data : data
    };  
    
    return axios.request(config)
    .then(async (response) => {
     
       const cuenta = process.env.CARIOCAACCOUNT;
       await this.actualizaND(bankacc,sec,response.data.codigoMovimiento,response.data.mensaje)
       //credito Carioca
       await this.creditoCarioca(cuenta,payamount,sec,11);    
      return response.data;
    }) .catch((error) => {
     // const descripcionError = error.response.data.descripcionError;
      return error;
    });
   
   

  }


  async DenitoCreditoRecogidaNomina(bankacc:string,payamount:number,sec:string,canal:number,nota:string): Promise<string>{

    const validarCuenta = await this.consultaCuentaCliente(bankacc,payamount);   

    if(parseInt(validarCuenta) !== 1){
      throw new HttpException(`Fondos Insuficientes O Cuenta Inactiva`, HttpStatus.BAD_REQUEST);
    }    

    const token = await this.GetTokenDebCre();
    const tokenWithoutQuotes = token.slice(1, -1);  
    
    const data = {
       "codigoCta":bankacc,
      "monto":payamount,
      "codSucursal":1,
      "tipoMov":"ND",
      "nota":nota,
      "canalContable":canal.toString(),
      "canalEnviaSolicitud":canal.toString()
     }


    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.BASEURL}debitoCredito`,
      headers: { 
        'Authorization': tokenWithoutQuotes,
        'Content-Type': 'application/json'
      },
      data : data
    };  
    
    return axios.request(config)
    .then(async (response) => {
     
       const cuenta = process.env.CARIOCAACCOUNT;
       await this.actualizaND(bankacc,sec,response.data.codigoMovimiento,response.data.mensaje)
       //credito Carioca
       await this.creditoCarioca(cuenta,payamount,sec,11);    
      return response.data;
    }) .catch((error) => {
     // const descripcionError = error.response.data.descripcionError;
      return error;
    });
   
   

  }

  async actualizaNC(cuenta:string,refRemesa:string,codigoMovimiento:string,mensaje:string): Promise<string>{

    const token = await this.GetToken();
    const tokenWithoutQuotes = token.slice(1, -1);  
    
    const data = {
      "cuenta":cuenta,
      "refRemesa":refRemesa,
      "codigoMovimiento":codigoMovimiento.toString(),
      "mensaje":mensaje
     }

     console.log(data)
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.BASEURL}actualizaNC`,
      headers: { 
        'Authorization': tokenWithoutQuotes,
        'Content-Type': 'application/json'
      },
      data : data
    };  
    
    return axios.request(config)
    .then(async (response) => {
      return response.data;
    }) .catch((error) => {
     // const descripcionError = error.response.data.descripcionError;
      console.log(error)
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    });
   

  }

  async actualizaND(cuenta:string,refRemesa:string,codigoMovimiento:string,mensaje:string): Promise<string>{

    const token = await this.GetToken();
    const tokenWithoutQuotes = token.slice(1, -1);  
    
    const data = {
      "cuenta":cuenta,
      "refRemesa":refRemesa,
      "codigoMovimiento":codigoMovimiento.toString(),
      "mensaje":mensaje
     }    
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.BASEURL}actualizaND`,
      headers: { 
        'Authorization': tokenWithoutQuotes,
        'Content-Type': 'application/json'
      },
      data : data
    };  
    
    return axios.request(config)
    .then(async (response) => {
      return response.data;
    }) .catch((error) => {
     // const descripcionError = error.response.data.descripcionError;
      console.log(error)
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    });
   

  }

  async procesarDebitoCliente(cuenta:string,monto:number,canal:number): Promise<any>{
    
    const token = await this.GetTokenDebCre();
    const tokenWithoutQuotes = token.slice(1, -1);  

    const data = {
       "codigoCta":cuenta,
      "monto":monto,
      "codSucursal":1,
      "tipoMov":"ND",
      "nota":"Nota de Debito Del Cliente",
      "canalContable":canal.toString(),
      "canalEnviaSolicitud":canal.toString()
     }

    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.BASEURL}debitoCredito`,
      headers: { 
        'Authorization': tokenWithoutQuotes,
        'Content-Type': 'application/json'
      },
      data : data
    };      
   
     axios.request(config).then((response: AxiosResponse) => {    
     if(response.data.codigoMovimiento){
       
      //credito Carioca
      const cuenta = process.env.CARIOCAACCOUNT;
      this.creditoCarioca(cuenta,monto,'',11);    

       
     }
     return response.data.codigoMovimiento;
    }).catch((error) => {
      console.log("hola")
      return error.response.data.codigoMovimiento;
    });
  }

  async creditoCarioca(cuenta: string, monto : number,sec:string,canal:number){

    const token = await this.GetTokenDebCre();
    const tokenWithoutQuotes = token.slice(1, -1);  

    const datos = {
       "codigoCta":cuenta, 
      "monto":monto,
      "codSucursal":1,
      "tipoMov":"NC",
      "nota":"Nota de Credito a la Cuenta Carioca",
      "canalContable":canal.toString(),
      "canalEnviaSolicitud":canal.toString()
    }

    let conf = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${process.env.BASEURL}debitoCredito`,
          headers: { 
            'Authorization': tokenWithoutQuotes,
            'Content-Type': 'application/json'
          },
          data : datos
    }; 

    return axios.request(conf)
    .then(async (response) => {
      await this.actualizaNC(cuenta,sec,response.data.codigoMovimiento,response.data.mensaje)
      return response;
    }) .catch((error) => {
      console.log("error");
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    });


  }

  async consultaCuentaCliente(cuenta:string,monto : number): Promise<string>{

    try{

      const token = await this.GetTokenDebCre();
      const tokenWithoutQuotes = token.slice(1, -1);  

       const data = {
        "codigoCta":cuenta,
        "tipoMov":"ND",
        "monto":monto,
        "nota":"Consultando cuenta",
        "codSucursal":1,
        "canalContable":11,
        "canalEnviaSolicitud":"11"
       }
  

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}validaCuenta`,
        headers: { 
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data : data
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {       
        return response.data.codigoMovimiento;
      }).catch((error) => {
        return error.response.data.codigoMovimiento;
      });
    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }

  async crearBeneficiario(crearBeneficiarioDto: CrearBeneficiarioDto): Promise<string>{

    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  
 

      const { idenbeneficiario,idencliente,nombrebeneficiario } = crearBeneficiarioDto;

    const data = JSON.stringify({
      idenbeneficiario: idenbeneficiario,
      idencliente: idencliente,
      nombrebeneficiario: nombrebeneficiario
    });

  

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}agregarBeneficiario`,
        headers: { 
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data : data
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {    
        return response.data;
      }).catch((error) => {

        throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
      });
    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }

  async consultaRemesa(consultaRemesaDto: ConsultaRemesaDto): Promise<string>{

    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

      const { 
          corrcode,corrreference,remittanceid
      } = consultaRemesaDto;

      const data = JSON.stringify({
        corrcode: corrcode,
        corrreference: corrreference,
        remittanceid: remittanceid
      });

  

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}consultaRemesa`,
        headers: { 
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data : data
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {    
        return response.data;
      }).catch((error) => {

        throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
      });
    

    }catch (error){
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    }

  }

  async consultaPrestamo(consultaPrestamoaDto: ConsultaPrestamoaDto): Promise<string>{

    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

      const { 
          idSucursal,codigoUsuario,tipoFiltro,valorConsulta,canalEntrada
      } = consultaPrestamoaDto;

      const data = JSON.stringify({
        tipoFiltro: tipoFiltro,
        valorConsulta: valorConsulta,
        codigoUsuario: codigoUsuario,
        idSucursal: idSucursal,
        canalEntrada:canalEntrada
      });

  

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}estatus/Prestamos`,
        headers: { 
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data : data
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {    
        return response.data;
      }).catch((error) => {
        console.log(error)
        throw new HttpException(error.response.data, HttpStatus.BAD_REQUEST);
      });
    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }
  
  
  async cargarNomina(file: Express.Multer.File,nota:string,cuentaEmpresa:string): Promise<any[]> {

    let data = [];
    try {
      const workbook = XLSX.read(file.buffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      if (!sheetName) throw new Error('No se encontraron hojas en el archivo Excel.');
  
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      jsonData.forEach((row) => data.push(row));
  
      const encabezado = data[0];
      const datos = data.slice(1).map((fila) => {
        const objeto: any = {};
        encabezado.forEach((clave, index) => {
          objeto[clave] = fila[index];
        });
        return objeto;
      });
      
      const cuentasSet : Set<string> = new Set();
      for (const cuenta of datos) {

        if (!cuenta.Cuenta_bu || cuenta.Cuenta_bu.trim() === '') {
          throw new HttpException('Error: Hay una cuenta Incorrecta o Sin Datos', HttpStatus.BAD_REQUEST);         
        }    
        
        if (cuentasSet.has(cuenta.Cuenta_bu)) {
          throw new HttpException('Hay Cuentas Duplicadas', HttpStatus.BAD_REQUEST);
        }

        // const validarCuenta = await this.consultaCuenta(0,cuenta.Cuenta_bu);

        // if (parseInt(validarCuenta) !== 1) {
        //   throw new HttpException(`Cuenta erronea: ${cuenta.Cuenta_bu}`, HttpStatus.BAD_REQUEST);
        // }

        cuentasSet.add(cuenta.Cuenta_bu);
      }
  
      const sumaMonto = datos.reduce((total, item) => total + item.monto, 0);
      if (Number.isNaN(sumaMonto) || sumaMonto <= 0) {
        throw new HttpException('Archivo con formato inválido', HttpStatus.BAD_REQUEST);
      }
      
      const cuenta = cuentaEmpresa;
      const validarCuenta = await this.consultaCuenta(sumaMonto,cuenta);
      if (parseInt(validarCuenta) !== 1) {
        throw new HttpException('Fondos insuficientes', HttpStatus.BAD_REQUEST);
      }

      const cuentas = Array.from(cuentasSet);
      const validar = await this.validarLotes(cuentas);

      console.log(validar)

      //debito carioca
      
        
       const result = await this.procesarDebitoCariocaNomina(cuenta,sumaMonto,16,nota); 
       
       if(result === '00'){
        throw new HttpException('Error Al Debitar Carioca', HttpStatus.BAD_REQUEST);
       }
     
      try {
        const pagos = await this.pagosCuenta(datos,nota);
        if(pagos === '00'){
          throw new HttpException('Error Al Acreditar Cuentas', HttpStatus.BAD_REQUEST);
         }
      } catch (error) {
        console.error('Error en pagosCuenta:', error);
        throw new HttpException('Error en el procesamiento de pagos', HttpStatus.BAD_REQUEST);
      }
  
      return datos;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  
  async validarLotes(cuentas: string[]): Promise<string>{

    
    try{

      const token = await this.GetTokenDebCre();
      const tokenWithoutQuotes = token.slice(1, -1);  
      const data = { cuentas: JSON.stringify(cuentas)};    
      const cuentasTransformadas = JSON.parse(data.cuentas).map((codigo: string) => ({
        codigoCta: codigo,
      }));    
    
      const nuevoData = {
        tipoValidacion: "C",
        cuentas: cuentasTransformadas,
      };

       let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}validaCuentas/Batch`,
        headers: { 
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data : nuevoData
      }; 
      

       return axios.request(config).then((response: AxiosResponse) => {       
        return response.data;
      }).catch((error) => {        
        if (error.response && error.response.data) {
          const errorData = error.response.data;
          throw new HttpException(
            {
              mensaje: "Hubo un error en la solicitud.",
              detalles: errorData,
            },
            HttpStatus.BAD_REQUEST
          );
        }
      });
    

    }catch (error){
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    }
  }

  async consultaCuenta(monto : number, cuenta:string): Promise<string>{

    try{

      const token = await this.GetTokenDebCre();
      const tokenWithoutQuotes = token.slice(1, -1);  

       

       const data = {
        "codigoCta":cuenta,
        "tipoMov":"ND",
        "monto":monto,
        "nota":"Consultando cuenta",
        "codSucursal":1,
        "canalContable":11,
        "canalEnviaSolicitud":"11"
       }
  

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}validaCuenta`,
        headers: { 
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data : data
      };      
  
      return axios.request(config).then((response: AxiosResponse) => {       
        return response.data.codigoMovimiento;
      }).catch((error) => {
        return error.response.data.codigoMovimiento;
      });
    

  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  }

  async creditoLotes(cuentas: { codigoCta: string; monto: number,nombre:string,codigoMovimiento:number }[],nota:string): Promise<string> {

    try {

      const token = await this.GetTokenDebCre();
      const tokenWithoutQuotes = token.slice(1, -1);  
     
      const nuevoData = {
        tipoMov: "NC",
        nota: nota,
        codSucursal: 1,
        canalContable: 15,
        canalEnviaSolicitud: "15",
        cuentas: cuentas.map((item) => ({
          codigoCta: item.codigoCta,
          monto: item.monto,
        })),
      };
  
      console.log('Credito cuentas:',nuevoData);
  
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}creditoBatch`,
        headers: { 
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data : nuevoData
      }; 
      
       return axios.request(config).then((response: AxiosResponse) => {     
        console.log(response.data.listaCuentas)  
        cuentas.forEach(cuenta => {
          // Buscar el objeto en solicitudes que tenga la misma cuenta
          const solicitud = response.data.listaCuentas.find(s => s.cuenta === cuenta.codigoCta);          
          if (solicitud) {            
            cuenta.codigoMovimiento = solicitud.codigoMovimiento;
          }
          this.insertNomina(cuenta.codigoCta as any, cuenta.nombre, cuenta.monto, '', cuenta.codigoMovimiento.toString(), 1,nota);
        });
        return response;
      }).catch((error) => {        
        if (error.response && error.response.data) {
          const errorData = error.response.data;
          throw new HttpException(
            {
              mensaje: "Hubo un error en la solicitud.",
              detalles: errorData,
            },
            HttpStatus.BAD_REQUEST
          );
        }
      });
  
    } catch (error) {
      throw new HttpException(`Hubo Un Error: ${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async pagosCuenta(data: any,nota:string): Promise<string> {

    try {
      // Asegurarse de que `data` es un objeto
      const cuentas = typeof data === 'string' ? JSON.parse(data) : data;
  
      const cuentasConOpcionPago = cuentas.filter(cuenta => cuenta.opcion_pago === 'ATM');
      const cuentasSinOpcionPago = cuentas.filter(cuenta => cuenta.opcion_pago !== 'ATM');
      let monto = 0;
     
      // Procesar cada cuenta ATM
      for (const cuenta of cuentasConOpcionPago) {
        try {
          const CreCliente = await this.ventanilla(cuenta.Cuenta_bu, cuenta.nombre, cuenta.monto,nota);
          if(CreCliente === false){
            monto = monto + cuenta.monto;
          }
        } catch (error) {
          console.error("Error al procesar cuenta en ventanilla:", error);
        }       
      }

      //Credito en Batch
      const cuentasSet: Set<{ cuenta: string; monto: number, nombre:string,codigoMovimiento:number }> = new Set();
    
      for (const cuenta of cuentasSinOpcionPago) { 
         //cuentasSet.add(cuenta.Cuenta_bu);   
         cuentasSet.add({ cuenta: cuenta.Cuenta_bu, monto: cuenta.monto,nombre:cuenta.nombre,codigoMovimiento:0 });    
      
      }

      const cuentasArray = Array.from(cuentasSet).map((item) => ({
        codigoCta: item.cuenta,
        monto: item.monto,
        nombre:item.nombre,
        codigoMovimiento:0
      }));

      await this.creditoLotes(cuentasArray,nota)
    
      
     // console.log("monto:",monto)
      //const cuenta = process.env.CARIOCAACCOUNT;
      //debito carioca
     // await this.procesarDebitoCarioca(cuenta,monto,270);  
      return '01';
  
    } catch (error) {
      console.error("Error en pagosCuenta:", error);
      return '00';
    }
  } 

  async ventanilla(cuentaBu: string, nombre: string, monto: number,nota:string): Promise<Boolean> {
    
    try {

      const cuBU = `${cuentaBu}`
      const balanceStr = await this.getBalanceCuenta(cuBU);  
      const balance = JSON.parse(balanceStr); 
  
      const identificacion = balance.identificacion;
      const direccionStr = await this.direccion(identificacion);
      const direccion = JSON.parse(direccionStr);   
      const randomPart = Math.floor(100000000 + Math.random() * 900000000);
      const sec = `${randomPart}`;
  
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
  
      const trndate = `${year}-${month}-${day}`;  
  
      const hours = String(today.getHours()).padStart(2, '0');
      const minutes = String(today.getMinutes()).padStart(2, '0');
      const seconds = String(today.getSeconds()).padStart(2, '0');
  
      const trntime = `${hours}:${minutes}:${seconds}`;    
  
      const data = JSON.stringify({
        corrcode: process.env.CORRCODE,
        corrsequence: sec,
        corrreference: `BU${process.env.CORRCODE}${sec}`,
        trndate: trndate,
        trntime: trntime,
        paycurrency: "DOP",
        payamount: monto,
        comamount: 150,
        custcode: "0000004469",//ni idea
        custfname: direccion.nombres,
        custlname: direccion.apelidos,
        custaddress: (direccion.direcciones) ? direccion.direcciones[0].direccion : "...",
        custcity: (direccion.direcciones) ? direccion.direcciones[0].distritomunicipal : "...",
        custstate: (direccion.direcciones) ? direccion.direcciones[0].sector : "..." ,
        custzip: "0",//ni idea
        custcountry: "DOM",
        custphone: "",
        custidname: "CEDULA",
        custidnumber: cuBU,
        trnmessage: "",
        bencode: "0000041254",//ni idea
        benfname: direccion.nombres,
        benlname: direccion.apelidos,
        benaddress: (direccion.direcciones) ? direccion.direcciones[0].direccion : "...",
        bensector: (direccion.direcciones) ? direccion.direcciones[0].sector : "...",
        benaddrref:(direccion.direcciones) ? direccion.direcciones[0].lugarreferencia : "...",
        bencity: (direccion.direcciones) ? direccion.direcciones[0].distritomunicipal : "..." ,
        benstate: (direccion.direcciones) ? direccion.direcciones[0].sector : "...",
        benzip: "0",
        bencountry: "DOM",
        benphone1: "",
        benphone2: "",
        trncode: "01",
        bankname: "",
        bankacc: cuBU,
        deliverytype: "01",
        payercode: "03",//ventanilla
        remcategory: "01",
        idtransacion:7 // espera por orbis
      });     
  
      console.log('data a enviar',data)
      
    const token = await this.GetToken();
    const tokenWithoutQuotes = token.slice(1, -1);  
   
    // const Inactiva = await this.consultaCuentaCliente(cuBU,0);  
  
    // if(parseInt(Inactiva) !== 1){
    //   await this.insertNomina(cuentaBu as any,nombre,monto,'','',6);
    //   return false;
    // } 
  
    try{

       const codigo = await this.creditoNomina(cuentaBu,nombre,monto,15,nota);

       const monfinal = monto;
  
       const validarCuenta = await this.consultaCuentaCliente(cuBU,monfinal);  
     
       if(parseInt(validarCuenta) !== 1){
         await this.insertNomina(cuentaBu as any,nombre,monto,'ATM','',6,'');
         return;
       }     
     
       let config = {
         method: 'post',
         maxBodyLength: Infinity,
         url: `${process.env.BASEURL}enviarRemesa`,
         headers: { 
           'Authorization': tokenWithoutQuotes,
           'Content-Type': 'application/json'
         },
         data : data
       };      
     
                
         return axios.request(config)
         .then(async (response) => { 
           await this.DenitoCreditoRecogidaNomina(cuBU,monto,`BU${process.env.CORRCODE}${sec}`,10,nota);       
           this.insertNomina(cuentaBu as any,nombre,monto,'ATM',codigo,1,nota);
           return true;
         }) .catch((error) => {
           console.log(error)
           this.insertNomina(cuentaBu as any,nombre,monto,'ATM',codigo,5,nota);
           return true;
         });    
     
       } catch (error) {
         console.error(`Error en la operación de ventanilla para ${cuentaBu}:`, error);
         return true;
       }
       

       //
    }catch{
       return false;
    }
   
  

  }

  async direccion(id: string): Promise<string>{

    try{

      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);  

       let conf = {
        method: 'get',
        maxBodyLength: Infinity,
        url:`${process.env.BASEURL}direccion/cliente/${id}`,
        headers: {
          'Authorization': tokenWithoutQuotes,
        }
      };
    
     return axios.request(conf)
      .then(async (response) => {
        return JSON.stringify(response.data);
      })
      .catch((error) => {
        throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
      });


  }catch (error){
    throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
  }

  } 


  async getEmpresas(){

    const data = await this.manager.query(`SELECT * FROM Empresa WHERE status = 1`);

    return data;

  }


  async getConceptosEmpresas(idEmpresa:number){

    const data = await this.manager.query(`SELECT * FROM Concepto_empresa WHERE id_empresa = ${idEmpresa} AND status = 1`);

    return data;

  }

  async getBalanceCuenta(id: string): Promise<string> {
    try {
      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);
      const cuBU = id;
  
      let conf = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}balance/${cuBU}`,
        headers: {
          'Authorization': tokenWithoutQuotes,
        }
      };
  
      const response = await axios.request(conf);
      return JSON.stringify(response.data);
  
    } catch (error) {
      console.error("Error en getBalanceCuenta:", error);
  
      // Devolver un mensaje de error controlado
      return JSON.stringify({ error: 'Error al obtener el balance de la cuenta', detalle: error.message || error });
    }
  }  
  
  async debito(cuentaBu: string, nombre: string, monto: number,nota:string): Promise<void> {

    try {
      const token = await this.GetToken();
      const tokenWithoutQuotes = token.slice(1, -1);
      const cuenta = process.env.CARIOCAACCOUNT;
      const cuBU = `${cuentaBu}`;

      const conf = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}balance/${cuBU}`,
        headers: {
          'Authorization': tokenWithoutQuotes,
        },
      };
  
      try {
        const response = await axios.request(conf);
        const responseData = response.data;
  
        // Validar que responseData tiene la estructura esperada antes de acceder a propiedades
        if (responseData && responseData.codigo !== '00') {
          await this.insertNomina(cuentaBu as any, nombre, monto, '', '', 4,nota);
        } else {
          //canal de debito
          await this.procesarDebito(cuenta, monto, cuentaBu, nombre,11);
        }
      } catch (error) {
        // Log del error detallado
        console.error("Error en solicitud de balance:", error);
        // Llamar a insertNomina en caso de error en axios
        await this.insertNomina(cuentaBu as any, nombre, monto, '', '', 4,'');
      }
  
    } catch (error) {
      console.error("Error general en debito:", error);
      throw new HttpException(`Hubo Un Error: ${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }  

  async CreditoCiente(cuentaBu: string, nombre: string, monto: number,canal:number): Promise<Boolean> {

      try {
        await this.credito(cuentaBu, nombre, monto,canal);
        return true;
      } catch (error) {
        // Log del error detallado
        console.error("Error en solicitud de balance:", error);
        // Llamar a insertNomina en caso de error en axios
        await this.insertNomina(cuentaBu as any, nombre, monto, '', '', 4,'');
      }
  }  

  async procesarDebito(cuenta: string, monto: number, cuentaBu: string, nombre: string,canal:number): Promise<string> {

    try {
      const token = await this.GetTokenDebCre();
      const tokenWithoutQuotes = token.slice(1, -1);
      
      const data = {
        "codigoCta": cuenta,
        "monto": monto,
        "codSucursal": 1,
        "tipoMov": "ND",
        "nota": "Nota de Debito a la Cuenta Carioca",
        "canalContable": canal.toString(),
        "canalEnviaSolicitud":canal.toString()
      };
      
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}debitoCredito`,
        headers: {
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data: data
      };

      const response = await axios.request(config);
      const responseData = response.data;
  
      if (responseData && responseData.codigoMovimiento) {
        //credito NOMINA
        await this.credito(cuentaBu, nombre, monto,41);
        return "01";  // Indicar éxito
      } else {
        console.log("Error: No se obtuvo 'codigoMovimiento' en la respuesta.");
        console.log("Respuesta completa:", responseData);
        return "00";  // Indicar fallo en el código de movimiento
      }
  
    } catch (error) {
      console.error("Error en la solicitud de débito:", error.message);
      return "00";  // Retornar '00' en caso de error para evitar que la aplicación se detenga
    }
  }

  async procesarDebitoCarioca(cuenta: string, monto: number,canal:number): Promise<string> {
    try {
      const token = await this.GetTokenDebCre();
      const tokenWithoutQuotes = token.slice(1, -1);
      
      const data = {
        "codigoCta": cuenta,
        "monto": monto,
        "codSucursal": 1,
        "tipoMov": "ND",
        "nota": "Nota de Debito a la Cuenta Carioca",
        "canalContable": canal.toString(),
        "canalEnviaSolicitud": canal.toString()
      };
      
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}debitoCredito`,
        headers: {
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data: data
      };
  
      console.log("Enviando solicitud de débito para la cuenta:", cuenta);
      
      const response = await axios.request(config);
      const responseData = response.data;
  
      if (responseData && responseData.codigoMovimiento) {
        return "01";  // Indicar éxito
      } else {
        console.log("Error: No se obtuvo 'codigoMovimiento' en la respuesta.");
        console.log("Respuesta completa:", responseData);
        return "00";  // Indicar fallo en el código de movimiento
      }
  
    } catch (error) {
      console.error("Error en la solicitud de débito:", error.message);
      return "00";  // Retornar '00' en caso de error para evitar que la aplicación se detenga
    }
  }

  async procesarDebitoCariocaNomina(cuenta: string, monto: number,canal:number,nota:string): Promise<string> {
    try {
      const token = await this.GetTokenDebCre();
      const tokenWithoutQuotes = token.slice(1, -1);
      
      const data = {
        "codigoCta": cuenta,
        "monto": monto,
        "codSucursal": 1,
        "tipoMov": "ND",
        "nota": nota,
        "canalContable": canal.toString(),
        "canalEnviaSolicitud": canal.toString()
      };

      console.log("debito Carioca: ",data)
      
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.BASEURL}debitoCredito`,
        headers: {
          'Authorization': tokenWithoutQuotes,
          'Content-Type': 'application/json'
        },
        data: data
      };
  
      console.log("Enviando solicitud de débito para la cuenta:", cuenta);
      
      const response = await axios.request(config);
      const responseData = response.data;
  
      if (responseData && responseData.codigoMovimiento) {
        return "01";  // Indicar éxito
      } else {
        console.log("Error: No se obtuvo 'codigoMovimiento' en la respuesta.");
        console.log("Respuesta completa:", responseData);
        return "00";  // Indicar fallo en el código de movimiento
      }
  
    } catch (error) {
      console.error("Error en la solicitud de débito:", error.message);
      return "00";  // Retornar '00' en caso de error para evitar que la aplicación se detenga
    }
  }


  async credito(cuentaBu: string, nombre: string, monto : number,canal:number){

    const token = await this.GetTokenDebCre();
    const tokenWithoutQuotes = token.slice(1, -1);  
    
    console.log(cuentaBu)
    const datos = {
       "codigoCta":cuentaBu, 
      "monto":monto,
      "codSucursal":1,
      "tipoMov":"NC",
      "nota":"Nota de Credito a la Cuenta ",
      "canalContable":canal.toString(),
      "canalEnviaSolicitud":canal.toString()
    }

    console.log(datos)
    

    let conf = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${process.env.BASEURL}debitoCredito`,
          headers: { 
            'Authorization': tokenWithoutQuotes,
            'Content-Type': 'application/json'
          },
          data : datos
    }; 
  
    return axios.request(conf).then(( response: AxiosResponse) => {        
                 
      return response.data.codigoMovimiento;
    }).catch((error) => {
      console.log(error)
      const descripcionError = error.response.data.descripcionError;
      console.log(descripcionError)
      this.insertNomina(cuentaBu as any,nombre,monto,'','',2,'');
      return error.response.data.descripcionError;
    });
  }

  async creditoNomina(cuentaBu: string, nombre: string, monto : number,canal:number,nota:string){

    const token = await this.GetTokenDebCre();
    const tokenWithoutQuotes = token.slice(1, -1);  
    
    console.log(cuentaBu)
    const datos = {
       "codigoCta":cuentaBu, 
      "monto":monto,
      "codSucursal":1,
      "tipoMov":"NC",
      "nota":nota,
      "canalContable":canal.toString(),
      "canalEnviaSolicitud":canal.toString()
    }

    console.log(datos)
    

    let conf = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${process.env.BASEURL}debitoCredito`,
          headers: { 
            'Authorization': tokenWithoutQuotes,
            'Content-Type': 'application/json'
          },
          data : datos
    }; 
  
    return axios.request(conf).then(( response: AxiosResponse) => {        
                 
      return response.data.codigoMovimiento;
    }).catch((error) => {
      console.log(error)
      const descripcionError = error.response.data.descripcionError;
      console.log(descripcionError)
      this.insertNomina(cuentaBu as any,nombre,monto,'','',2,'');
      return error.response.data.descripcionError;
    });
  }

  async insertNomina(cuentaBU:string,nombre:string,monto:number,opcionPago:string,codigoOperacion:string,idEstado:number,nota:string): Promise<string>{

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const trndate = `${year}-${month}-${day}`;  

    await this.manager.createQueryBuilder()
    .insert()
    .into('Nomina')
    .values({
           fecha: trndate,
           cuentaBU: cuentaBU,
           nombre: nombre,
           monto: monto,
           opcionPago: opcionPago,
           codigoOperacion: codigoOperacion,
           idEstado: idEstado,
           concepto: nota
    })
    .execute();

    const data = {
      "statusCode":200,
      "mensaje":"Creado Con Exito"        
    }


    return

  }

  async obtenerNomina(consultaNominaDto: ConsultaNominaDto){

    const {fechaFin,fechaInicio} = consultaNominaDto;
    const formattedFechaInicio = fechaInicio.toISOString().slice(0, 19).replace('T', ' ');
    const formattedFechaFin = fechaFin.toISOString().slice(0, 19).replace('T', ' ');

    console.log(formattedFechaInicio)
    console.log(formattedFechaFin)

    const data = await this.manager.query(` SELECT m.*,REPLACE(REPLACE(E.Descripcion, '\r', ''), '\n', '') as Estado 
                                            FROM  Nomina m
                                            INNER JOIN Estados e ON e.idEstado = m.idEstado
                                            WHERE m.fecha BETWEEN '${formattedFechaInicio}' AND '${formattedFechaFin}'`);

    return data;

  }

  async getAcciones(){

    const data = await this.manager.query(`SELECT * FROM tipo_accion WHERE estado = 1`);

    return data;

  } 

  async getTipoTransaccion(id:number){

    const data = await this.manager.query(`SELECT * FROM tipo_transaccion WHERE idTipoAccion = ${id} AND estado = 1`);

    return data;

  }

  async getPrestamos(id: string,usuario:string): Promise<string> {

    try{

        const token = await this.GetTokenDebCre();
        const tokenWithoutQuotes = token.slice(1, -1);  

        const dataEntrada = {
           "tipoFiltro":"I",
          "valorConsulta":id,
          "canalEntrada":"11",
          "codigoUsuario":usuario,
          "idSucursal":"Atm Carioca"
        }

        console.log(dataEntrada)

        let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: `${process.env.BASEURL}balancePrestamos`,
              headers: { 
                'Authorization': tokenWithoutQuotes,
                'Content-Type': 'application/json'
              },
              data : dataEntrada
        };      
    
        return axios.request(config).then((response: AxiosResponse) => {    
          return response.data;
        }).catch((error) => {
          
          throw new HttpException(`Hubo Un Error: ${error.response.data.descripcionError}`, HttpStatus.BAD_REQUEST);
        });
      

    }catch (error){
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    }

  }

  async getBalancePrestamo(id: string,usuario: string): Promise<string> {

    try{

        const token = await this.GetTokenDebCre();
        const tokenWithoutQuotes = token.slice(1, -1);  

        const dataEntrada = {
           "tipoFiltro":"P",
          "valorConsulta":id,
          "canalEntrada":"11",
          "codigoUsuario":usuario,
          "idSucursal":"Atm Carioca"
        }

        let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: `${process.env.BASEURL}balancePrestamos`,
              headers: { 
                'Authorization': tokenWithoutQuotes,
                'Content-Type': 'application/json'
              },
              data : dataEntrada
        };      
    
        return axios.request(config).then((response: AxiosResponse) => {    
          return response.data;
        }).catch((error) => {
          throw new HttpException(`Hubo Un Error: ${error.response.data.descripcionError}`, HttpStatus.BAD_REQUEST);
        });
      

    }catch (error){
      throw new HttpException(`Hubo Un Error: ${error}`, HttpStatus.BAD_REQUEST);
    }

  }

  async enviarCorreo(correoDto: CorreoDto): Promise<string>{

    const {cuerpo,subject,texto} = correoDto;

    try {
      const to = process.env.CORREOSDESTINO; 
      await this.mailService.sendMail(to, subject, texto, cuerpo);
      return 'Correo Enviado Con Exito';
    } catch (error) {   
      console.error(error)      
      throw new BadRequestException('Error Al Enviar Correo:', error)
    }

  }


}
