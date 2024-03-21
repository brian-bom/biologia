import React from 'react'
import splicing from "./assets/splicing.png"
import traducao from "./assets/traducao.png"
import ligacao from "./assets/ligacao.png"
import ligacao2 from "./assets/ligacao2.png"
import DNA from "./assets/DNA.webp"
import tabela from "./assets/tabela.jpeg"
import transcricao from "./assets/transcricao.jpg"
import molde from "./assets/molde.jpg"




const SinteseProteica = () => {
    return(
        <>
        <div className='tema' id="1.">
            1. Sintese de Proteínas
        </div>



          <div className='texto'>

            

            <                         h1 id="1.1">1.1 Conceitos</h1>

            <p>
              DNA: contém informações sobre a estrutura primária de proteínas - aminoácidos.
            </p>
            <img className='imagem-esquerda' src={DNA} alt="" />

            <img className='imagem-direita' src={tabela} alt="" />

            <p>
              Gene: é uma porção do DNA que guarda informação para a síntese de proteína.
            </p>

            <p>
              RNAm: o RNA mensageiro é quem copia e leva a informação do gene. 
            </p>

            <p>
              RNAr: o RNA ribossômico associado a proteínas forma o ribossomo que auxilia na síntese.
            </p> 

            <p>
              RNAt: o RNA transportador é quem carrega os aminoácidos para a formação da proteína.
            </p> 
              
            <p>
              Código Genético: É formado por 64 trincas de bases nitrogenadas.
            </p>

            <p>
              O código genético é considerado degenerado — o mesmo aminoácido pode ser codificado por diferentes tríades — e também universal, ou seja, o código genético é o mesmo em qualquer espécie, a tríade AAA codifica tal aminoácido em qualquer espécie.
            </p> 

            <br />
            <p> Códon: são as combinações de três bases nitrogenadas no RNA..</p>
            
            <p> Códons de terminação do RNA-m: UAA, UAG ou UGA.</p>
            <p> Códons de iniciação: sempre AUG. </p>
          </div>
          





          <div className='texto'>

            <                     h1 id="1.2"> 1.2 Transcrição — RNAm</h1>
            
            <p>
              O RNA-M ou ARN mensageiro é o responsável pela transferência de informações do DNA até o citoplasma, durante a transcrição uma enzima faz a cópia de um gene do DNA para o RNA-m
            </p>

            <img className='imagem-grande' src={transcricao} alt="" />
            <p>
            • O dna será usado como molde 
            </p>

            <p>
            • enzima helicase ( enzima que promove a abertura da hélice de DNA, separando-o em duas fitas simples para que possa sofrer replicação)
            </p>

            <p>
            • enzima polimerase
            </p>

            <p>
            • promotor — onde a enzima polimerase se liga para iniciar a transcrição —
            </p>

            <p>
              Na primeira etapa, a enzima RNA-polimerase liga-se a uma extremidade da molécula de DNA do gene (promotor). Quando isso acontece, a enzima helicase, quebra as ligações de hidrogênio entre as bases nitrogenadas das duas fitas do DNA, a estrutura de dupla-hélice se desfaz e as fitas se separam.
            </p>
            <p>
              Depois, a RNA-polimerase começa a sintetizar uma molécula de RNA-m. Para isso, a sequência de bases nitrogenadas da fita do DNA é lida, modelando a sequência do RNA-m com bases complementares.
            </p>
            
            <p>Relação de sintetização entre o DNA e o RNA, abaixo:</p>
            <img className='imagem-direita' src={molde} alt="" />
            <span>
              • DNA ➞ RNA <br />
              • Adenina (A) ➞ Uracila (U) <br />
              • Timina (T) ➞ Adenina (A) <br />
              • Guanina (G) ➞ Citosina (C) <br />
              • Citosina (C) ➞ Guanina (G)
            </span>


            <p>
              A molécula de RNA é alongada, por um nucleotídeo de cada vez na direção 5' ➞ 3' até a tríade que determina o término, ATT, ATC e ACT.
            </p>
            <p>
              Uma vez que a leitura e a modelagem acabam, o RNAm separa-se da fita de DNA. Então, as ligações de hidrogênio e a estrutura helicoidal se refazem.
            </p>
          
          </div>





          <div className='texto'>

            <                   h1 id="1.3" >1.3 Processamento do RNAm (Splicing)</h1>

            <p>
              É o processo onde ocorre o amadurecimento do RNAm imaturo, a engenharia genética fez uma descoberta que nos genes existem sequências de nucleotídeos traduzidas, os exóns, e não traduzidas, os íntrons.
            </p>

            <img className='imagem-grande' src={splicing} alt="" />

            <p>
              Durante esse processo, os íntrons são removidos do RNAm e acontece a união dos éxons, fazendo assim um RNAm maduro funcional. É esse RNAm vai sair do núcleo e encontrar o ribossomo e o RNAt, possibilitando a síntese de proteína.
            </p>

          </div>





          <div className='texto'>
            <                   h1 id="1.4"> 1.4 Tradução: Leitura do RNAm</h1>

            <p>
              A tradução inicia-se no citoplasma, fora do núcleo, quando o ribossomo se liga ao RNAm. Logo no começo da tradução o ribossomo terá um RNAt no seu sítio P. Esse RNAt sempre vai ser a Metionina e na parte de baixo da estrutura do RNAt fica o anticódon, essa é a parte na qual vai ligar-se com o AUG do RNAm.
            </p>

            <img className="imagem-grande" src={traducao} alt="" />

            <p>
              Em seguida no sítio A, entrará o RNAt que carrega o aminoácido com anticódon correspondente ao segundo códon do RNAm, na imagem acima podemos ver que o códon 2 UUU vai se conectar com o anticódon AAA, o aminoácido Fenilalamina.

            </p>
            
            <img className="imagem-grande" src={ligacao} alt="" />

            <p>
              Quando estiverem os dois RNAt conectados eles farão uma ligação peptídica (ligação química que ocorre quando um grupo carboxila da molécula reage com o grupo amina de outra, liberando H20). 
            </p>

            <img className="imagem-grande" src={ligacao2} alt="" />

            <p>
              Logo após isso, o RNAt que estava alojado no sítio P, Metionina, é liberado e o RNAt do sítio A vai para o P, e então o códon 3 se conecta com o próximo anticódon no sítio A.
            </p>

            <p>
              Este ciclo vai se repetindo enquanto o ribossomo desliza pelo RNAm até que chegue algum códon de terminação, UAA, UAG ,ou UGA.
            </p>

            <p>
              Nesse viés, quando o ribossomo encontra o códon de terminação ele se desmancha e libera o RNAm e a ligação de aminoácidos, que formam uma única proteína. 
            </p>

            <p>
              Existem muitos tipos de proteínas e elas variam de acordo com sua quantidade e sua combinação de aminoácidos.
            </p>

          </div>


        </>
    )
}

export default SinteseProteica;