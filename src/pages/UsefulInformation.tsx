import React from "react";
import Accordion from "../components/Accordion";

const UsefulInformation: React.FC = () => {
  return (
    <div className="min-h-screen bg-emerald-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-emerald-700 mb-6">
          Información Útil
        </h1>

        {/* Ley Federica */}
        <Accordion title="Ley Federica - Ley 20.000" content="Información sobre la Ley Federica - Ley 20.000">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 1
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sustitúyese el artículo 2° de la Ley N° 19.161, de 1° de noviembre
              de 2013, por el siguiente:
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2">
              "ARTÍCULO 2°. (Período de amparo al subsidio por maternidad).- Las
              beneficiarias deberán cesar todo trabajo seis semanas antes de la
              fecha presunta del parto y no podrán reiniciarlo sino hasta ocho
              semanas después del mismo.
              <br />
              En caso de nacimientos múltiples, o peso al momento de nacer menor
              o igual a 1.5 kilogramos, el período de amparo al subsidio por
              maternidad podrá extenderse hasta las dieciocho semanas. La
              extensión del período de amparo al subsidio por maternidad será un
              derecho de la beneficiaria, para cuyo ejercicio no se requerirá
              preaviso al empleador."
            </blockquote>
          </div>

          {/* Artículo 2 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 2
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Incorpórase el artículo 2° bis a la Ley N° 19.161, de 1° de
              noviembre de 2013:
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2">
              "ARTÍCULO 2° bis. (Extensión del período de amparo al subsidio por
              maternidad en casos de complejidad).- Independientemente de la
              semana de gestación en que se produzca el nacimiento, en los casos
              en que el recién nacido presente algún trastorno, enfermedad,
              comorbilidad o afección, que por su naturaleza o gravedad
              impliquen riesgo o compromiso de vida del recién nacido, el
              período de amparo al subsidio por maternidad podrá extenderse
              hasta que el hijo de la beneficiaria cumpla seis meses de edad."
            </blockquote>
          </div>

          {/* Artículo 3 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 3
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sustitúyese el artículo 3° de la Ley N° 19.161, de 1° de noviembre
              de 2013, por el siguiente:
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2">
              "ARTÍCULO 3°. (Parto prematuro).- Cuando el parto sobreviniere
              antes de la fecha presunta, pero a partir de las treinta y cuatro
              semanas de gestación inclusive, la beneficiaria iniciará el
              descanso de inmediato y el período de descanso puerperal se verá
              prolongado hasta completar las catorce semanas previstas en el
              artículo 2° de la presente ley."
            </blockquote>
          </div>

          {/* Artículo 4 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 4
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sustitúyese el artículo 8° de la Ley N° 19.161, de 1° de noviembre
              de 2013, por el siguiente:
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2">
              "ARTÍCULO 8°. (Período de inactividad compensada).- El descanso a
              que refiere el artículo 7° de la presente ley, tendrá una duración
              de: A) Un máximo de diez días continuos. B) Un máximo de treinta
              días continuos, en los casos de nacimientos citados en el inciso
              tercero del artículo 2°; y en los artículos 2° bis y 3°, de la
              presente ley. El período del descanso previsto en el presente
              artículo se iniciará el día del parto, salvo para quienes tuvieren
              derecho a la licencia prevista por el artículo 5° de la Ley N°
              18.345, de 11 de setiembre de 2008, en cuyos casos comenzará
              inmediatamente después de concluida ésta".
            </blockquote>
          </div>

          {/* Artículo 5 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 5
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sustitúyese el artículo 12 de la Ley N° 19.161, de 1° de noviembre
              de 2013, por el siguiente:
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2 space-y-2">
              <p>
                "ARTÍCULO 12. (Subsidio parental para cuidados).- Las
                trabajadoras incluidas en el artículo 1° y los trabajadores
                incluidos en el artículo 7° de la presente ley, serán
                beneficiarios de un subsidio para el cuidado del recién nacido,
                que podrán usar indistintamente y en forma alternada el padre y
                la madre una vez finalizado el período de subsidio por
                maternidad, hasta que el hijo de los beneficiarios cumpla seis
                meses de edad referido en los artículos 2° y 3°, o nueve meses
                de edad, previsto en el artículo 2° bis, de la presente ley. Uno
                u otro beneficiario sólo podrán acceder al subsidio, siempre que
                la trabajadora permaneciere en actividad o amparada al seguro
                por enfermedad, salvo lo considerado en el inciso tercero del
                presente artículo. El goce del subsidio parental, es
                incompatible con la percepción de cualquier subsidio por
                inactividad compensada por parte del mismo beneficiario".
              </p>
            </blockquote>
          </div>

          {/* Artículo 6 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 6
            </h3>
            <p className="text-gray-700 leading-relaxed"></p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2 space-y-2">
              <p>
                (Vigencia).- La presente ley será de aplicación a los
                nacimientos que ocurran a partir del día de su entrada en
                vigencia. También será de aplicación a los nacimientos que hayan
                tenido lugar antes de su entrada en vigencia, siempre que aún no
                haya finalizado el amparo al subsidio por maternidad de la
                beneficiaria o que aún no haya finalizado el amparo al subsidio
                por inactividad compensada por paternidad del beneficiario.
              </p>
            </blockquote>
          </div>
        </Accordion>

        {/* Ley de Múltiples */}
        <Accordion title="Ley de Multiples - Ley 20.365" content="Información sobre la Ley de Multiples">
          {/* Artículo 1 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 1
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Toda mujer a la cual se le constate fehacientemente un embarazo
              múltiple tendrá derecho al cobro de una asignación prenatal a
              partir del momento en que se determine esta condición.
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2">
              "A tal efecto, deberá presentar un certificado médico ginecológico
              que certifique su condición y establezca el número de hijos en
              gestación."
            </blockquote>
          </div>

          {/* Artículo 2 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 2
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Aquellos que tengan a su cargo hijos que sean producto de un
              nacimiento múltiple, siempre y cuando estos hayan nacido y
              permanezcan vivos, cobrarán, por cada hijo, el beneficio de la
              asignación familiar.
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2">
              "El valor será equivalente al triple del que les correspondería en
              el régimen general hasta que estos tengan la edad de cinco años."
            </blockquote>
          </div>

          {/* Artículo 3 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 3
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Los niños que sean producto de un nacimiento múltiple tendrán
              derecho a recibir atención médica rutinaria domiciliaria, desde su
              nacimiento hasta los tres años de edad.
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2">
              "Esta atención será proporcionada a través de la cobertura de
              instituciones de salud pública o privada."
            </blockquote>
          </div>

          {/* Artículo 4 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 4
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La pérdida de uno de los hijos en gestación o de uno de los hijos
              vivos a cargo determinará el cese de los beneficios consagrados
              por la Ley N° 17.474, de 14 de mayo de 2002.
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2">
              "Excepto que sobrevivan por lo menos dos hijos en cualquiera de
              las dos situaciones."
            </blockquote>
          </div>

          {/* Artículo 5 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 5
            </h3>
            <p className="text-gray-700 leading-relaxed">
              En las disposiciones interpretativas, concordantes, modificativas
              y reglamentarias de la Ley N° 17.474, de 14 de mayo de 2002, se
              sustituirán las expresiones:
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2">
              "Embarazo gemelar múltiple" y "nacimiento gemelar múltiple" por
              las expresiones "embarazo múltiple" y "nacimiento múltiple",
              respectivamente.
            </blockquote>
          </div>

          {/* Artículo 6 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 6
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La presente ley entrará en vigencia el 1° de agosto de 2024.
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2">
              "Esta fecha marca el inicio de la implementación de todos los
              beneficios y disposiciones establecidos en la ley."
            </blockquote>
          </div>

          {/* Artículo 7 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 7
            </h3>
            <p className="text-gray-700 leading-relaxed">
              El Poder Ejecutivo reglamentará la presente ley en un plazo no
              mayor de treinta días contados a partir de la fecha establecida en
              el artículo 6°.
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2">
              "La reglamentación garantizará la correcta aplicación de las
              disposiciones legales y su cumplimiento por parte de las
              instituciones involucradas."
            </blockquote>
          </div>

          {/* Artículo 8 */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Artículo 8
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La falta de reglamentación no será impedimento para la aplicación
              e implementación de la presente ley por parte del Banco de
              Previsión Social, de los prestadores públicos y privados de salud,
              y de cualquier entidad pública o privada.
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-emerald-400 pl-4 mt-2">
              "Esto asegura que los beneficios establecidos en la ley sean
              efectivos desde la fecha de vigencia, independientemente de los
              procesos administrativos."
            </blockquote>
        </div>
      </Accordion>
    </div>
    </div>
  );
}    
  export default UsefulInformation;
