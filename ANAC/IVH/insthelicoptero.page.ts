import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insthelicoptero',
  templateUrl: './insthelicoptero.page.html',
  styleUrls: ['./insthelicoptero.page.scss'],
})
export class InsthelicopteroPage implements OnInit {
  preguntas:any;
  numPreguntas: any;
  constructor() {
    this.numPreguntas = [[]]
    this.preguntas = [
      ["1- Los Helipuertos se clasifican en:", "a) Helipuertos de superficie.", "b) Helipuertos de superficie y elevados.", "c) Helipuertos y heliplataformas.", 2,""],
      ["2- Para preparar un plan de lección es conveniente dividirlo en las siguientes fases:", "a) Preparación, aplicación, demostración, verificación.", "b) Preparación, verificación, demostración, aplicación.", "c) Preparación, demostración, aplicación, verificación.", 2,""],
      ["3- Si un piloto experimenta desorientación espacial durante un vuelo, ¿Cuál es la mejor manera de contrarrestar el efecto?", "a) Concentrarse en las sensaciones de guiñada, cabeceo e inclinación.", "b) Concientemente reducir el régimen de respiración hasta que los síntomas desaparezcan.", "c) Controlar las indicaciones de los instrumentos de vuelo.", 3,""],
      ["4- La VNE de un helicóptero depende de:", "a) Las RPM del rotor principal.", "b) La longitud de las palas del rotor principal", "c) Todas son correctas", 3,""],
      ["5- En la pala que se encuentra sustentando al máximo peso de despegue, ¿Cuál es la fuerza de mayor magnitud?", "a) Sustentación.", "b) Coriolis.", "c) Centrífuga.", 1,""],
      ["6- Un helicóptero que llega o sale del país deberá aterrizar en o despegar de:", "a) Un aeropuerto internacional.", "b) Un aeródromo público.", "c) Cualquier aeropuerto o aeródromo controlado.", 1,""],
      ["7- Las siglas FATO significa: área de aproximación y despegue.", "a) Verdadero", "b) Falso", "",1,""],
      ["8- ¿Quién tiene la obligación de asegurarse del buen estado de la aeronave antes de la partida?", "a) El explotador.", "b) El piloto al mando (Comandante)", "c) La Autoridad Aeronáutica)", 2,""],
      ["9- La letra “H” ubicada en le centro del helipuerto señala:", "a) El norte magnético.", "b) El norte geográfico.", "c) Su orientación señala el sector despejado de obstáculos.", 3,""],
      ["10- La señal de identificación de helipuerto “H” pintado de color rojo, ubicado en el centro de una cruz blanca corresponde a:", "a) Un helipuerto emplazado en un hospital.", "b) Un helipuerto emplazado en una Unidad Militar.", "c) Un helipuerto privado.", 1,""],
      ["11-  Todo helipuerto habilitado debe contar con una distancia de aterrizaje disponible (LDAH) y también una distancia de despegue disponible (TODAH)", "a) Verdadero", "b) Falso", "",1,""],
      ["12- El Traking de un rotor consiste en:", "a) Igualar el coeficiente de sustentación en todas las palas y logren que giren en el mismo plano.", "b) Calibrar y ajustar los comandos que posee el piloto.", "c) Igualar el peso de las alas.", 2,""],
      ["13-  El plato oscilante es:", "a) El dispositivo que desacopla automáticamente el sistema de transmisión del rotor cuando las revoluciones de este son superiores a las del motor.", "b) El dispositivo de embrague que posee algunos helicópteros.", "c) El dispositivo que, teniendo una parte fija y otra móvil, transmite a las partes los movimientos de los comandos cíclico y colectivo", 1,""],
      ["14- El propósito primario de la “rueda libre” es:", "a) Permite reducir la RPM entre el motor, el rotor principal y el eje de cola)", "b) Desacopla automáticamente al motor (Cuando este se para) del sistema de transmisión para permitir la autorotación.", "c) Permite arrancar el motor sin mover los rotores.", 2,""],
      ["15- Después de un arranque fallido de una turbina se debe realizar un “barridos” o “ventilación” ¿Cuál es el motivo?", "a) Para armar los temporizadores de arranque.", "b) Para recuperar el aceite del motor.", "c) Para evacuar de la cámara de combustión, el combustible que no se quemó y baja el excedente de temperatura)", 3,""],
      ["16- Si a mi velocidad verdadera (TAS) le sumo o resto la componente de viento de frente o de cola, estoy calculando:", "a) IAS", "b) GS", "c) EAS", 2,""],
      ["17- Cual es el tipo de alumno que causan dificultades.", "a) El autoritario.", "b) El sabelotodo", "c) El amistoso", 2,""],
      ["18- Para el alumno antagónico, se recomienda:", "a) Hablarle en privado.", "b) Programarle mas responsabilidad en las tareas.", "c) Atender sus inquietudes y decidir si están bien justificadas.", 3,""],
      ["19- Lo primero que se debe considerar para hacer el plan de una lección es:", "a) Los puntos que se trataran.", "b) El objetivo de la lección.", "c) Todas las anteriores.", 3,""],
      ["20- ¿Cuándo un aeropuerto es considerado internacional?", "a) Cuando está ubicado en ciudades capitales o importantes.", "b) Cuando presten servicios de sanidad, aduana, migraciones y otros.", "c) Cuando estén situados cerca de las fronteras del País.", 2,""],
      ["21- Para el alumno que no coopera en clases, se recomienda:", "a) Asignarle mas trabajo.", "b) Hablarle en privado.", "c) Asignarle tareas más fáciles", 2,""],
      ["22.- ¿Qué fuerza hace girar al avión?", "a) El componente horizontal de la sustentación.", "b) El componente vertical de la sustentación.", "c) La fuerza centrífuga.",1,""],
      ["23.- Durante la aproximación a la pérdida, un incremento del factor de carga hará que el avión:", "a) Entre en pérdida con una velocidad mayor.", "b) Tenga tendencia al tirabuzón.", "c) Sea más difícil de controlar.",1,""],
      ["24.- Seleccione las cuatro maniobras fundamentales de vuelo.", "a) Potencia del avión, actitud, inclinación, y compensado (trim).", "b) Puesta en marcha, rodaje, despegue y aterrizaje.", "c) Vuelo recto y nivelado, virajes, ascensos, y descensos.",3,""],
      ["25.- (Referirse a la Figura 63) Volando en un curso rectangular, ¿cuando debería el avión realizar un viraje menor a 90°?", "a) En el punto 1 y 4.", "b) En el punto 1 y 2.", "c) En el punto 2 y 4.",1, "20.ico"],
      ["26.- (Referirse a la Figura 67) Mientras practica una S sobre una línea de referencia, a un lado de la misma, la trayectoria del viraje se hace más chica que del otro, y además este viraje no es completado antes de cruzar la línea. Esto ocurre generalmente porque:", "a) En el viraje 1-2-3, la inclinación es levantada rápidamente durante la última parte del viraje.", "b) En el viraje 4-5-6, la inclinación es incrementada rápidamente en la primera parte del viraje.", "c) En el viraje 4-5-6, la inclinación es incrementada muy lentamente en la última parte del viraje.",3, "21.ico"],
      ["27.- Si en una situación de emergencia se requiere aterrizar con viento de cola, el piloto debería esperar:", "a) Mayor velocidad indicada al toque de pista, carrera de aterrizaje más larga y mejor control durante la ruptura de planeo.", "b) Mayor velocidad terrestre (ground speed) al toque de pista, carrera de aterrizaje más larga, y probabilidad de sobrepasar el punto elegido de toque.", "c) Mayor velocidad terrestre, carrera de aterrizaje más corta y probabilidad de tocar antes del punto seleccionado para el aterrizaje.",2,""],
      ["28.- Al incrementarse la altitud, la velocidad de pérdida de una aeronave con determinada configuración:", "a) Disminuirá tanto como disminuye la velocidad verdadera.", "b) Disminuirá tanto como se incrementa la velocidad indicada.", "c) Se mantiene igual independientemente de la altitud.",3,""],
      ["29.- ¿En qué condición de vuelo se debe encontrar un avión para entrar en tirabuzón (spin)?", "a) En pérdida parcial con un ala baja.", "b) En una espiral escarpada muy pronunciada.", "c) En pérdida.",3,""],
      ["30.- Durante un tirabuzón hacia la izquierda, ¿qué ala esta en pérdida?", "a) Ambas alas están en pérdida.", "b) Ningún ala está en pérdida.", "c) Solamente el ala izquierda está en pérdida.",1,""],
      ["31.- El ángulo de ataque en el cual las alas de un avión entran en pérdida:", "a) Se incrementa si el centro de gravedad (CG) se mueve hacia adelante.", "b) Cambia con el incremento del peso total de la aeronave.", "c) Permanece igual, independientemente del peso total.",3,""],
      ["32.- Una de las principales funciones del flaps durante la aproximación y el aterrizaje es:", "a) Disminuir el ángulo de descenso sin incrementar la velocidad.", "b) Permitir el toque (touchdown) a mayor velocidad indicada.", "c) Incrementar el ángulo de descenso sin incrementar la velocidad.",3,""],
      ["33.- ¿Cuál es uno de los propósitos del flaps de ala?", "a) Permitir al piloto realizar aproximaciones más pronunciadas.", "b) Aliviar al piloto en la presión continua sobre los controles.", "c) Disminuir al área del ala para variar la sustentación.",1,""],
      ["34.- ¿Cuál de los problemas siguientes son resultado del efecto suelo?", "a) Tocar abruptamente el suelo durante el aterrizaje.", "b) Salir volando antes de alcanzar la velocidad recomendada de despegue.", "c) Dificultad para despegar aún teniendo la velocidad necesaria para hacerlo.",2,""],
      ["35.- ¿Qué es el efecto suelo?", "a) El resultado de la interferencia de la superficie del suelo con el patrón de circulación del aire sobre la aeronave.", "b) El resultado de la alteración del patrón de circulación del aire incrementando la resistencia inducida en el ala del avión.", "c) El resultado de la interrupción del patrón de circulación del aire sobre el ala del avión, al punto de no mantenerlo en vuelo.",1,""],
      ["36.- ¿Qué debe esperar el piloto como resultado del efecto suelo?", "a) Se incrementan los vórtices de punta de ala, creando una estela turbulenta que genera problemas a la aeronave despegando o aterrizando.", "b) La resistencia inducida decrece y cualquier exceso de velocidad como consecuencia puede producir un exceso de flotabilidad durante el aterrizaje.", "c) El aterrizaje en pérdida total requerirá menos deflexión del timón de profundidad.",2,""],
      ["37.- Cuando aterriza detrás de una aeronave de gran porte, ¿qué procedimiento debería seguir para evitar la estela turbulenta?", "a) Mantenerse todo el tiempo por encima de su pendiente de planeo hasta tocar en lo posible por delante de donde lo hizo la aeronave precedente.", "b) Mantenerse por debajo y a un costado de su pendiente de planeo.", "c) Mantenerse bien debajo de su pendiente de planeo y aterrizar tocando al menos 600 m detrás de la misma.",1,""],
      ["38.- Cuando se aterriza o despega en un aeropuerto donde hay aeronaves de gran porte operando, se debería estar alerta a los vórtices de punta de ala, ya que su estela turbulenta tiende a:", "a) Ascender por encima de las trayectorias de aterrizajes y despegues.", "b) Ascender en la zona de circuito de tránsito en los alrededores del aeropuerto.", "c) Provocar el descenso de la trayectoria de vuelo del avión operando debajo de las aeronaves que lo generan.",3,""],
      ["39.- La condición de viento que requiere máxima precaución para evitar la estela turbulenta durante el aterrizaje es:", "a) Suave, ¾ de frente.", "b) Suave, ¾ de cola.", "c) Fuerte de frente.",2,""],
      ["40.- Cuando se despega detrás de una aeronave de gran porte, el piloto debería evitar la estela turbulenta manteniéndose en una trayectoria:", "a) Por debajo y por el lado opuesto del viento respecto de la aeronave que precede.", "b) Por encima y por el lado del viento respecto a la aeronave que precede.", "c) Por debajo y del lado del viento respecto a la aeronave que precede.",2,""],
      ["41.- Si fuera necesario poner en marcha un motor de avión a mano, resulta extremadamente importante que un piloto competente:", "a) Confirme en contacto antes de tocar la hélice.", "b) Se encuentre en los controles en la cabina.", "c) Se encuentre en la cabina y colacione las órdenes.",2,""],
      ["42.- ¿Cuál sería la primera acción luego de encender un motor de avión?", "a) Ajustar las RPM adecuadas y verificar los parámetros correctos en los instrumentos de motor.", "b) Selectar temporalmente el interruptor del magneto o encendido en la posición de APAGADO (OFF) para verificar la correcta puesta a masa.", "c) Probar cada freno y el freno de estacionamiento.",1,""],
      ["43.- ¿Cuál de los siguientes es uno de los fines para los que se utilizan motores alternativos?", "a) Se distribuye mejor el calor.", "b) Preservar la duración de la cabeza de cilindro y mantener temperaturas más bajas.", "c) Son relativamente simples y económicos para operar.",3,""],
      ["44.- Uno de los fines del sistema dual de encendido en motor de aeronave consiste en proporcionar:", "a) Mejor rendimiento del motor.", "b) Distribución uniforme del calor.", "c) Compresión balanceada en la cabeza de cilindro.",1,""],
      ["45.- Ocurre una falla en el sistema eléctrico (batería y generador) durante el vuelo. En esta situación, Ud.:", "a) Sufre una falla en el equipamiento de aviónica.", "b) Probablemente sufra una falla en el sistema de encendido del motor, en los indicadores del motor, en el sistema de iluminación de la aeronave y en el equipamiento de aviónica.", "c) Probablemente sufra una falla del motor debido a la pérdida de la bomba eléctrica de combustible y también sufra fallas en el equipamiento de radio, luces y todos los instrumentos que requieren corriente alterna.",1,""],
      ["46.- Si el cable a tierra conectado entre el magneto y el interruptor de encendido se desconecta, el resultado más notable será que el motor:", "a) Funcione en forma muy brusca.", "b) No arranque con el interruptor colocado en la posición de ENCENDIDO (ON).", "c) No se pueda parar al colocar el interruptor en la posición de APAGADO (OFF).",3,""],
      ["47.- El principio operativo de los carburadores de tipo flotante se encuentra basado en:", "a) La regulación automática de aire en el venturi a medida que la aeronave gana altitud.", "b) La diferencia entre la presión de aire en la garganta del venturi y la entrada de aire.", "c) El incremento de la velocidad del aire en la garganta de un venturi, lo que causa un incremento en la presión del aire.",2,""],
      ["48.- El objetivo fundamental por el cual se ajusta la mezcla de combustible y aire en altitud consiste en:", "a) Disminuir la cantidad de combustible en la mezcla para compensar el incremento de la densidad del aire.", "b) Disminuir el flujo de combustible para compensar la menor densidad del aire.", "c) Incrementar la cantidad de combustible en la mezcla para compensar la disminución de la presión y densidad del aire.",2,""],
      ["49.- Durante el vuelo nivelado a 9500 pies a nivel medio del mar (MSL), la mezcla de combustible y aire se ajusta en forma adecuada. ¿Qué ocurrirá si se realiza un descenso de 4500 pies a nivel medio del mar (MSL) sin reajustar la mezcla?", "a) La mezcla de combustible y aire podría ser excesivamente pobre.", "b) Habrá más combustible en los cilindros de lo que se necesita para la combustión normal y el combustible excedente absorberá calor y enfriará el motor.", "c) La mezcla excesivamente rica creará temperaturas mayores de la cabeza de cilindro y podría causar detonación.",1,""],
      ["50.- Durante la prueba de motores en un aeropuerto de gran elevación, un piloto nota una ligera brusquedad en el motor que no se ve afectada por la verificación del magneto pero empeora durante la verificación del calor al carburador. En estas circunstancias, ¿cuál sería la acción inicial más lógica?", "a) Verificar los resultados obtenidos con una configuración más pobre de la mezcla.", "b) Volver a plataforma para un chequeo de mantenimiento.", "c) Reducir el acelerador para controlar la detonación.",1,""],
      ["51.- Si una aeronave se encuentra equipada con una hélice de paso fijo y un carburador de tipo flotante, la primera indicación de hielo en el carburador sería más probablemente debido a:", "a) Una caída de la temperatura del aceite y de la temperatura de la cabeza de cilindro.", "b) Brusquedad del motor.", "c) Pérdida de RPM.",3,""],
      ["52.- Se puede verificar la presencia de hielo en el carburador de una aeronave equipada con una hélice de paso fijo al aplicar aire caliente al carburador y notar:", "a) Un incremento de RPM y luego una disminución gradual de las mismas.", "b) Una disminución de RPM y luego una indicación constante de las mismas.", "c) Una disminución de RPM y luego un incremento gradual de las mismas.",3,""],
      ["53.- ¿Cuál condición es la más favorable para el desarrollo de hielo en el carburador?", "a) Cualquier temperatura bajo cero y humedad relativa de menos del 50 por ciento.", "b) Temperatura entre 1° C y 10° C y baja humedad.", "c) Temperatura entre -7° C y 21° C y alta humedad.",3,""],
      ["54.- La posibilidad de formación de hielo en el carburador existe aún cuando la temperatura ambiente del aire alcanza:", "a) Hasta 21° C y la humedad relativa es alta.", "b) Hasta 32° C y hay humedad visible.", "c) Hasta -15° C y la humedad relativa es alta.",1,""],
      ["55.- La formación de hielo en el carburador puede ocurrir con una temperatura del aire exterior que alcance:", "a) 100° F y humedad visible.", "b) 20° C y humedad relativa alta.", "c) 75° F y humedad relativa baja.",2,""],
      ["56.- Aplicar aire caliente al carburador:", "a) Causará que pase más aire a través del carburador.", "b) Enriquecerá la mezcla de combustible y aire.", "c) No afectará la mezcla de combustible y aire.",2,""],
      ["57.- ¿Qué cambio ocurre en la mezcla de combustible y aire cuando se aplica el calor del carburador?", "a) La mezcla pobre causa una disminución en las RPM.", "b) La mezcla de combustible y aire se enriquece.", "c) La mezcla de combustible y aire se empobrece.",2,""],
      ["58.- En términos generales, el uso del aire caliente al carburador tiende a:", "a) Disminuir el rendimiento del motor.", "b) Incrementar el rendimiento del motor.", "c) No tiene efecto alguno sobre el rendimiento del motor.",1,""],
      ["59.- Con respecto al hielo del carburador y en comparación con los sistemas de inyección de combustible, se considera que los sistemas de carburador de tipo flotante son:", "a) Más susceptibles a la formación de hielo.", "b) Igualmente susceptibles a la formación de hielo.", "c) Susceptibles a la formación de hielo sólo cuando existe humedad visible.",1,""],
      ["60.- En aeronaves equipadas con bomba de combustible eléctrica, ¿cuándo se utiliza dicha bomba?", "a) Todo el tiempo para ayudar a la bomba mecánica de combustible.", "b) En el caso que la bomba de combustible mecánica del motor falle.", "c) Constantemente, excepto cuando se arranque el motor.",2,""],
      ["61.- Si el grado de combustible que se utiliza en un motor de aeronave es menor al especificado para el motor, lo más probable es que cause:", "a) Una mezcla de combustible y aire que no es uniforme en todos los cilindros.", "b) Temperaturas más bajas de la cabeza de cilindro.", "c) Detonación.",3,""],
      ["62.- La detonación puede ocurrir en configuraciones de alta potencia cuando:", "a) La mezcla de combustible enciende instantáneamente en lugar de quemarse en forma pareja y progresiva.", "b) Una mezcla de combustible excesivamente rica causa mayor potencia durante la explosión.", "c) Se enciende la mezcla de combustible demasiado pronto por depósitos de carbono caliente en el cilindro.",1,""],
      ["63.- La detonación ocurre en un motor alternativo de avión cuando:", "a) Las bujías de encendido se encuentran obstruidas o en cortocircuito o el cableado está defectuoso.", "b) Puntos calientes en la cámara de combustión encienden la mezcla de combustible/aire antes del encendido normal.", "c) La mezcla sin quemar en los cilindros explota en lugar de quemarse normalmente.",3,""],
      ["64.- El encendido fuera de control de la mezcla de combustible/aire por adelantado de la chispa de encendido normal se conoce como:", "a) Combustión.", "b) Pre-encendido.", "c) Detonación.",2,""],
      ["65.- ¿Qué combustible tipo puede ser sustituido para una aeronave si el octano recomendado no se encuentra disponible?", "a) El próximo mayor octanaje.", "b) El próximo menor octanaje.", "c) Combustible automotor sin plomo de la misma categoría de octanaje.",1,""],
      ["66.- Cargar los tanques de combustible luego del último vuelo del día se considera un buen procedimiento operativo porque:", "a) Forzará al agua existente a que suba al tope del tanque, lejos de las líneas de combustibles al motor.", "b) Prevendrá la expansión del combustible al eliminar espacio de aire en los tanques.", "c) Prevendrá la condensación de humedad al eliminar espacio de aire en los tanques.",3,""],
      ["67.- Para purgar el agua en forma adecuada del sistema de combustible de una aeronave equipada con depósitos de tanque de combustible y un drenaje rápido de filtro de combustible, es necesario hacerlo:", "a) Desde el filtro de drenaje rápido de combustible.", "b) Desde el punto más bajo en el sistema de combustible.", "c) Desde el drenaje rápido del filtro de combustible y desde los depósitos de tanque de combustible.",3,""],
      ["68.- Si un piloto sospecha que un motor (con una hélice de paso fijo) está detonando durante el ascenso luego del despegue, la acción correctiva inicial que se debería tomar sería:", "a) Empobrecer la mezcla.", "b) Bajar levemente la nariz para incrementar la velocidad.", "c) Aplicar calor de carburador.",2,""],
      ["69.- Temperaturas de motor excesivamente altas:", "a) Causarán daño a las salidas de escape y torsión de las aletas de enfriamiento del cilindro.", "b) Causarán pérdida de potencia, consumo excesivo de combustible y posible daño interno permanente del motor.", "c) No afectará en forma perceptible al motor de una aeronave.",2,""],
      ["70.- Temperaturas de motor excesivamente altas, tanto en el aire como en tierra:", "a) Incrementarán el consumo de combustible y puede incrementar la potencia debido al aumento de temperatura.", "b) Causarán daño en las salidas de escape y pueden provocar la torsión de las aletas de enfriamiento de los cilindros.", "c) Causarán pérdida de potencia, consumo excesivo de aceite y posible daño interno permanente del motor.",3,""],
      ["71.- Si los indicadores de la temperatura del aceite del motor y de la cabeza de cilindro excedieron el rango operativo normal, el piloto pudo haber estado operando con:", "a) La mezcla demasiado rica.", "b) La presión de aceite más alta de lo normal.", "c) Demasiada potencia y la mezcla muy pobre.",3,""],
      ["72.- ¿Qué causaría más probablemente que los indicadores de la temperatura de la cabeza de cilindro y del aceite del motor excedan los rangos operativos normales?", "a) Utilizar combustible que tenga un octanaje menor del especificado.", "b) Utilizar combustible que tenga un octanaje mayor del especificado.", "c) Operar con presión de aceite más alta de la normal.",1,""],
      ["73.- Para el enfriamiento interno, los motores alternativos de aeronaves son especialmente dependientes de:", "a) Un termostato que funcione en forma adecuada.", "b) Aire que fluya sobre el escape múltiple.", "c) La circulación de aceite lubricante.",3,""],
      ["74.- Una indicación de temperatura alta de aceite de motor fuera de lo normal puede ser causada por:", "a) El nivel de aceite demasiado bajo.", "b) Operar con un aceite de demasiada viscosidad.", "c) Operar con una mezcla excesivamente rica.",1,""],
      ["75.- ¿Qué acción puede realizar un piloto para ayudar a refrigerar el motor que se está sobrecalentando durante un ascenso?", "a) Reducir el rango de ascenso e incrementar la velocidad.", "b) Reducir la velocidad de ascenso e incrementar las RPM.", "c) Incrementar la velocidad del ascenso e incrementar las RPM.",1,""],
      ["76.- ¿Cuál de los siguientes es un procedimiento adecuado para ayudar a refrigerar un motor que se está sobrecalentando?", "a) Enriquecer la mezcla de combustible.", "b) Incrementar las RPM.", "c) Reducir la velocidad.",1,""],
      ["77.- La regla más importante que se debe recordar si sucede una falla de potencia luego de estar en el aire es:", "a) Establecer en forma inmediata la actitud de planeo y la velocidad adecuadas.", "b) Verificar rápidamente la provisión de combustible ante un posible agotamiento de combustible.", "c) Determinar la dirección del viento para planificar un aterrizaje forzoso.",1,""],
      ["78.- ¿Cómo se controla la operación del motor en una aeronave equipada con motor con una hélice de velocidad constante?", "a) El acelerador controla la entrega de potencia, como se observa en el indicador múltiple de presión y el control de paso de hélice regula las RPM.", "b) El acelerador controla la entrega de potencia como se observa en el indicador múltiple de presión y el control de paso de hélice regula un ángulo constante de pala.", "c) El acelerador controla las RPM del motor como se registra en el taquímetro y el control de la mezcla regula la salida de potencia.",1,""],
      ["79.- ¿Cuál de las siguientes es una ventaja de una hélice de velocidad constante?", "a) Permite al piloto seleccionar y mantener la velocidad de crucero deseada.", "b) Permite al piloto seleccionar el ángulo de la pala para lograr el rendimiento más eficiente.", "c) Proporciona una operación más suave con RPM estables y elimina vibraciones.",2,""],
      ["80.- Para la operación de un motor equipado con una hélice de velocidad constante, una precaución consiste en:", "a) Evitar configuraciones de RPM altas con presión múltiple alta.", "b) Evitar configuraciones de presión múltiple altas con RPM bajas.", "c) Siempre utilizar una mezcla rica con configuraciones de RPM altas.",2,""],
      ["81.- ¿En qué condición de vuelo el efecto de torque es mayor en una aeronave con un solo motor?", "a) Baja velocidad, alta potencia y gran ángulo de ataque.", "b) Baja velocidad, baja potencia y ángulo de ataque reducido.", "c) Alta velocidad, alta potencia y gran ángulo de ataque.",1,""],
      ["82.- La tendencia de giro a la izquierda de una aeronave causada por el efecto- P (P-factor), es un resultado de:", "a) Rotación en sentido de reloj del motor y la hélice girando al avión en sentido contrario de reloj.", "b) La pala de la hélice desciende a la derecha, lo cual produce más tracción que la pala ascendente a la izquierda.", "c) Las fuerzas giroscópicas aplicadas a las palas de la hélice en rotación actuando 90° antes del punto donde la fuerza fue aplicada.",2,""],
      ["83.- ¿Cuándo el efecto-P causa que el avión guiñe a la izquierda?", "a) En ángulos de ataque reducidos.", "b) En grandes ángulos de ataque.", "c) En velocidades altas.",2,""],
      ["84.-. Durante la inspección previa al vuelo, ¿quién es responsable de determinar si la aeronave es segura para el vuelo?", "a) El piloto al mando.", "b) El dueño u operador.", "c) El mecánico habilitado que realizó la inspección anual.",1,""],
      ["85.- ¿Cómo se debería realizar la inspección previa al vuelo de una aeronave para el primer vuelo del día?", "a) Una inspección rápida general con verificación de combustible y aceite.", "b) Con medios exhaustivos y sistemáticos recomendados por el fabricante.", "c) Cualquier secuencia determinada por el piloto al mando.",2,""],
      ["86.- ¿Quién es fundamentalmente responsable de mantener una aeronave en condición aeronavegable?", "a) El piloto al mando.", "b) El dueño u operador.", "c) El mecánico.",2,""],
      ["87.- ¿Qué instrumentos quedarán inoperativos si se bloquea el tubo pitot?", "a) Altímetro.", "b) Variómetro.", "c) Velocímetro.",3,""],
      ["88.- ¿Qué instrumento/s quedarán inoperativos si se bloquean las tomas estáticas?", "a) Sólo el velocímetro.", "b) Sólo el altímetro.", "c) Altímetro, velocímetro y variómetro.",3,""],
      ["89.- Si el tubo pitot y las tomas estáticas quedaran bloqueadas, ¿qué instrumentos se verían afectados?", "a) El altímetro, el velocímetro y el indicador de viraje y ladeo.", "b) El altímetro, el velocímetro y el variómetro.", "c) El altímetro, el horizonte artificial y el indicador de viraje y ladeo.",2,""],
      ["90.- El tubo pitot ¿provee presión de impacto a cuál instrumento?", "a) Altímetro.", "b) Variómetro.", "c) Velocímetro.",3,""],
      ["91.- ¿Qué sigla representa la velocidad de maniobra de diseño?", "a) VA.", "b) VLO.", "c) VNE.",1,""],
      ["92.- ¿Qué representa la línea roja marcada en el velocímetro?", "a) La velocidad de maniobra.", "b) La velocidad máxima de turbulencia.", "c) La velocidad de nunca exceder.",3,""],
      ["93.- (Referirse a la Figura 4) ¿Cuál color identifica la velocidad de nunca exceder?", "a) El límite inferior del arco amarillo.", "b) El límite superior del arco blanco.", "c) La línea radial roja.",3, "8.ico"],
      ["94.- (Referirse a la Figura 4) ¿Cuál color identifica la velocidad de pérdida sin potencia con configuración determinada?", "a) El límite superior del arco verde.", "b) El límite superior del arco blanco.", "c) El límite inferior del arco verde.", 3,"8.ico"],
      ["95.- ¿Qué sigla representa la velocidad de mejor ángulo de ascenso?", "a) VY.", "b) VA.", "c) VX.",3,""],
      ["96.- Después del despegue, ¿qué velocidad se debería utilizar para ganar la mayor altitud en un período de tiempo dado?", "a) VY.", "b) VX.", "c) VA.",1,""],
      ["97.- (Referirse a la Figura 4) ¿Cuál es el rango de velocidades para volar con máximo flaps?", "a) 60 a 100 MPH.", "b) 60 a 208 MPH", "c) 208 MPH.", 1,"8.ico"],
      ["98.- (Referirse a la Figura 4) La máxima velocidad a la cual el avión puede volar en aire calmo es:", "a) 100 MPH.", "b) 165 MPH.", "c) 208 MPH.",3,"8.ico"],
      ["99.- (Referirse a Figura 4) ¿Cuál es la máxima velocidad para extender el flaps?", "a) 65 MPH.", "b) 100 MPH", "c) 165 MPH.",2,"8.ico"],
      ["100.- (Referirse a la Figura 4) ¿Qué color identifica la velocidad normal de operación con flap?", "a) Desde el límite inferior al superior del arco blanco.", "b) El arco verde.", "c) El arco blanco.", 3,"8.ico"],
    ]
  }
  ngOnInit() {
    generarPreguntas(this.numPreguntas,this.preguntas)
    console.log("--------")
    console.log(this.numPreguntas)
  }

  ngAfterViewInit() {
    if (this.numPreguntas[0][5] != "") mostrarImagen(this.numPreguntas[0][5])
    responder()
  }

  
}
function generarPreguntas(numPreguntas,preguntas) {
  for(let i = 0; i < 100; i++) {
    let num = Math.floor(Math.random()*100);
    console.log(num)
    do {
      if (numPreguntas.find(element => element == num) == num){
        num = Math.floor(Math.random()*100);
        console.log("repetido");
        continue;
      }else {
        console.log(numPreguntas.find(element => element == num))
        numPreguntas[i] = num;
        console.log("no repetido")
        break;
      }
    } while(true);
  }

  for (let i = 0; i < 100; i++){
    console.log(numPreguntas[i])
    numPreguntas[i] = preguntas[numPreguntas[i]]
  }

}
function mostrarImagen(preguntas) {
    let url = "assets/images/IVH/img"
    let img = url.replace('img',preguntas)
    document.getElementById('img').setAttribute('src',img)
    console.log(document.getElementById("img"))
}

function responder() {
  let res1 = document.getElementById("1");
  let res2 = document.getElementById("2");
  let res3 = document.getElementById("3");
  res1.addEventListener("touchend", respuesta,false)
}
function respuesta(ev) {
  console.log("Se ha respuesto la pregutna 1")
}
