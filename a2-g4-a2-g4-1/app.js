
var arrayDatos = [];
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("formulario").addEventListener('submit', validarFormulario); 

       
      });
      
      function validarFormulario(evento) {
        evento.preventDefault();
        var usuario = document.getElementById('user').value;
        var correo = document.getElementById('correo').value;
        var fechaNac = document.getElementById('fechaNacimiento').value;
        var nac = document.getElementById('Nacionalidad').value;
        var provincia = document.getElementById('Provincia').value;
        
        if(usuario.length == 0) {
          alert('No has escrito nada en el usuario');
          return;
        }
        var clave = document.getElementById('clave').value;
        if (clave.length < 6) {
          alert('La clave no es válida');
          return;
        }


      

        arrayDatos.push(usuario,correo,fechaNac,nac,provincia);

          

       
       
       // this.submit();
      }
      function Enviar(){
        alert('se ha enviado con exito');
        console.log(arrayDatos);
        setTimeout( function() { window.location.href = "mostrarDatos.html"; }, 5000 );
        var usuarioR = arrayDatos[0];
        var correoR = arrayDatos[1];
        var fechaNacR = arrayDatos [2];
        var nacR = arrayDatos[3];
        var provinciaR = arrayDatos[4];
 
        document.getElementById('userR').value =usuarioR ;
        document.getElementById('correoR').value = correoR ;
        document.getElementById('fechaNacimientoR').value =fechaNacR ;
         document.getElementById('NacionalidadR').value =nacR ;
         document.getElementById('ProvinciaR').value = provinciaR;
        
        
      }

      function enviar2(){
        var fecha = new Date();
        var dia = fecha.getDate();
        var mes = fecha.getUTCMonth() + 1;
        var year = fecha.getFullYear();
        alert("Se envio con exito su consulta en la fecha " + dia +"/"+mes+"/"+year);
        
      }
