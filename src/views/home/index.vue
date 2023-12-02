<template>
  <v-container
    fluid
    class="d-flex flex-column pa-0 ma-0"
  >
    <loading :value="loading" />
    <v-row
      id="home"
      class="d-flex align-center justify-center pa-0 ma-0"
      :style="`min-height: ${alturaTela}px;`"
    >
      <v-col
        v-if="$vuetify.breakpoint.name !== 'sm' || $vuetify.breakpoint.name !== 'xs'"
        cols="1"
        xl="1"
        lg="1"
        md="1"
      />
      <v-col
        cols="12"
        xl="5"
        lg="5"
        md="5"
        sm="12"
        class="ma-0 pa-0 color"
      >
        <v-row
          dense
          class="pa-0 ma-0 pl-5"
        >
          <v-col
            cols="12"
            class="pa-0 ma-0 py-10 d-flex justify-start flex-column"
          >
            <span class="text-h3 font-weight-bold primary--text pb-5">
              PortuPy
            </span>
            <span>
              <p>
                Uma pseudolinguagem criada com o propósito de ensinar os conceitos fundamentais da lógica de programação de uma forma divertida e acessível, especialmente para estudantes iniciantes. <br>
              </p>
              <p>
                Com sua sintaxe semelhante a do Python, o objetivo do uso dessa pseudolinguagem é que futuramente o aluno progride para uma linguagem de programação, nesse caso, preferenciamento, o Python, pela sua facilidade de aprendizado.
              </p>
            </span>
            <span>
              <v-chip
                class="ma-2"
                color="primary"
              >
                Em Português
              </v-chip>
              <v-chip
                class="ma-2"
                color="primary"
              >
                Fácil
              </v-chip>
              <v-chip
                class="ma-2"
                color="primary"
              >
                Amigável
              </v-chip>
              <v-chip
                class="ma-2"
                color="primary"
              >
                Ideal para iniciantes
              </v-chip>
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        class="ma-0 pa-0 d-flex align-center justify-center"
      >
        <v-img
          v-if="$vuetify.breakpoint.name === 'xl'"
          src="@/assets/computador.jpg"
          max-width="600px"
          contain
        />
        <v-img
          v-else-if="$vuetify.breakpoint.name === 'lg'"
          src="@/assets/computador.jpg"
          max-width="500px"
          contain
        />
        <v-img
          v-else-if="$vuetify.breakpoint.name === 'md'"
          src="@/assets/computador.jpg"
          max-width="400px"
          contain
        />
        <v-img
          v-else-if="$vuetify.breakpoint.name === 'sm'"
          src="@/assets/computador.jpg"
          max-width="300px"
          contain
        />
        <v-img
          v-else
          src="@/assets/computador.jpg"
          max-width="400px"
          contain
        />
      </v-col>
    </v-row>
    <v-row
      id="quemSomos"
      class="pa-0 ma-0 color primary"
      :style="`min-height: ${alturaTela}px;`"
    >
      <v-col
        cols="12"
        class="py-10 ma-0 d-flex align-center justify-center"
      >
        <v-img
          v-if="$vuetify.breakpoint.name === 'xl'"
          max-width="600px"
          contain
          src="@/assets/logoUmbrellaBranca.png"
        />
        <v-img
          v-else-if="$vuetify.breakpoint.name === 'lg'"
          max-width="500px"
          contain
          src="@/assets/logoUmbrellaBranca.png"
        />
        <v-img
          v-else-if="$vuetify.breakpoint.name === 'md'"
          max-width="400px"
          contain
          src="@/assets/logoUmbrellaBranca.png"
        />
        <v-img
          v-else-if="$vuetify.breakpoint.name === 'sm'"
          max-width="300px"
          contain
          src="@/assets/logoUmbrellaBranca.png"
        />
        <v-img
          v-else
          max-width="200px"
          contain
          src="@/assets/logoUmbrellaBranca.png"
        />
      </v-col>
      <v-col
        xl="2"
        lg="2"
        md="2"
        sm="0"
        cols="0"
        class="pa-0 ma-0"
      />
      <v-col
        xl="4"
        lg="4"
        md="4"
        sm="12"
        cols="12"
        class="pa-0 ma-0 px-5 d-flex align-center"
      >
        <v-row
          dense
          class="pa-0 ma-0"
        >
          <v-col
            cols="12"
            class="pa-0 ma-0 mb-5"
          >
            <span
              class="titulo white--text"
              :style="{
                'font-size': $vuetify.breakpoint.smAndDown ? '30px' :
                  $vuetify.breakpoint.mdAndDown ? '40px' :
                  $vuetify.breakpoint.lgAndDown ? '50px' :
                  '60px'
              }"
            >
              Requisitos
            </span>
          </v-col>
          <v-col
            cols="12"
            class="pa-0 ma-0 mt-5"
          >
            <v-list
              dense
              color="primary"
            >
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon
                      color="white"
                      v-text="'mdi-microsoft-windows'"
                    />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      class="white--text"
                      v-text="'Windows'"
                    />
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon
                      color="white"
                      v-text="'mdi-language-python'"
                    />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      class="white--text"
                      v-text="'Python Instalado'"
                    />
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col
            cols="12"
          >
            <v-btn
              class="primary--text"
              @click="baixarArquivo"
            >
              <v-icon
                color="primary"
              >
                mdi-download
              </v-icon>
              Baixar PortuPy
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        xl="6"
        lg="6"
        md="6"
        sm="12"
        cols="12"
        class="pa-0 ma-0 d-flex align-start justify-center color"
      >
        <v-img
          v-if="$vuetify.breakpoint.name === 'xl'"
          class="pa-0 ma-0 color "
          max-width="400px"
          contain
          src="@/assets/ideia.png"
        />
        <v-img
          v-else-if="$vuetify.breakpoint.name === 'lg'"
          class="pa-0 ma-0 color "
          max-width="400px"
          contain
          src="@/assets/ideia.png"
        />
        <v-img
          v-else-if="$vuetify.breakpoint.name === 'md'"
          class="pa-0 ma-0 color "
          max-width="300px"
          contain
          src="@/assets/ideia.png"
        />
        <v-img
          v-else-if="$vuetify.breakpoint.name === 'sm'"
          class="pa-0 ma-0 color "
          max-width="200px"
          contain
          src="@/assets/ideia.png"
        />
        <v-img
          v-else
          class="pa-0 ma-0 color "
          max-width="100px"
          contain
          src="@/assets/ideia.png"
        />
      </v-col>
      <v-col
        cols="12"
        class="pa-0 ma-0 color "
      />
    </v-row>
    <!-- <v-row
      id="banner"
      class="pa-0 ma-0"
      :style="`min-height: ${alturaTela}px;`"
    >
      <v-col
        xl="1"
        lg="1"
        md="1"
        sm="0"
        cols="0"
        class="pa-0 ma-0"
      />
      <v-col
        xl="6"
        lg="6"
        md="12"
        sm="12"
        cols="12"
      >
        <v-row
          dense
          class="pa-0 ma-0 pl-5"
        >
          <v-col
            cols="12"
            class="pa-0 ma-0 py-10 d-flex align-center"
          >
            <span
              class="banner primaryHome--text"
              :style="{
                'font-size': $vuetify.breakpoint.smAndDown ? '30px' :
                  $vuetify.breakpoint.mdAndDown ? '40px' :
                  $vuetify.breakpoint.lgAndDown ? '50px' :
                  '60px'
              }"
            >
              Mas, o que é um banner?
            </span>
          </v-col>
          <v-col
            class="pb-6"
            cols="12"
          >
            <span
              class="sub-descricao primaryHome--text"
              :style="{
                'font-size': $vuetify.breakpoint.smAndDown ? '15px' :
                  $vuetify.breakpoint.mdAndDown ? '20px' :
                  $vuetify.breakpoint.lgAndDown ? '25px' :
                  '30px'
              }"
            >
              Já entrou em uma rede social
              <br>de uma marca famosa e viu
              <br>aqueles publicações bonitas
              <br>mostrando os serviçoes ou
              <br>produtos que essa marca
              <br>oferece?
            </span>
          </v-col>
          <v-col
            class="pt-6"
            cols="12"
          >
            <span
              class="sub-descricao primaryHome--text d-flex justify-end"
              :style="{
                'font-size': $vuetify.breakpoint.smAndDown ? '15px' :
                  $vuetify.breakpoint.mdAndDown ? '20px' :
                  $vuetify.breakpoint.lgAndDown ? '25px' :
                  '30px'
              }"
              style="text-align: right;"
            >
              Com a Umbrella Designer
              <br>você pode ter seus próprios
              <br>banners, para sua empresa
              <br>ou pequeno negócio.
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        xl="4"
        lg="4"
        md="12"
        sm="12"
        cols="12"
        class="pa-0 ma-0 d-flex justify-center"
      >
        <v-img
          v-if="$vuetify.breakpoint.name === 'xl'"
          class="pa-0 ma-0 color "
          max-width="600px"
          contain
          src="@/assets/instagram.png"
        />
        <v-img
          v-else-if="$vuetify.breakpoint.name === 'lg'"
          class="pa-0 ma-0 color "
          max-width="550px"
          contain
          src="@/assets/instagram.png"
        />
        <v-img
          v-else-if="$vuetify.breakpoint.name === 'md'"
          class="pa-0 ma-0 color "
          max-width="450px"
          contain
          src="@/assets/instagram.png"
        />
        <v-img
          v-else-if="$vuetify.breakpoint.name === 'sm'"
          class="pa-0 ma-0 color "
          max-width="350px"
          contain
          src="@/assets/instagram.png"
        />
        <v-img
          v-else
          class="pa-0 ma-0 color "
          max-width="300px"
          contain
          src="@/assets/instagram.png"
        />
      </v-col>
      <v-col
        xl="12"
        lg="12"
        md="12"
        sm="12"
        cols="12"
        class="pa-0 ma-0 d-flex align-start justify-center"
      >
        <v-btn
          rounded
          color="secondary"
          :small="$vuetify.breakpoint.name === 'sm' || $vuetify.breakpoint.name === 'xs'"
          @click="abrirJenela('/cadastro')"
        >
          CADASTRE-SE
        </v-btn>
      </v-col>
    </v-row> -->
    <v-row
      id="banner"
      class="pa-0 ma-0 d-flex flex-column"
      :style="`min-height: ${alturaTela}px;`"
    >
      <h1>Documentação Básica</h1>

      <div class="section">
        <h2>Proposta PortuPy</h2>
        <p>
          O PortuPy é uma pseudolinguagem que foi
          criada com o propósito de ensinar os conceitos fundamentais da programação de uma forma divertida e acessível,
          especialmente para estudantes iniciantes.
        </p>
        <p>
          PortuPy tem sua sintaxe semelhante a do Python (linguagem de programação real, muito usada no mercado).
          O objetivo do uso dessa pseudolinguagem é que futuramente o aluno progride para uma linguagem de programação,
          nesse caso, preferenciamento, o Python, pela sua facilidade de aprendizado. Essa ferramenta usa palavras em
          português para representar comandos de programação, o que o torna mais acessível para pessoas
          que falam a língua portuguesa. Isso é ótimo para iniciantes, pois elimina a barreira do idioma.
        </p>
        <p>
          Além disso, mesmo sendo uma pseudolinguagem, o PortuPy é projetado para ensinar conceitos fundamentais de
          programação, como variáveis, estruturas condicionais, loops e funções. Os estudantes podem aprender esses
          conceitos de forma interativa e prática.
        </p>
        <p>
          Em resumo, o PortuPy é uma pseudolinguagem de programação que se destaca por sua simplicidade e acessibilidade.
          Ele é uma ferramenta valiosa para aqueles que estão dando os primeiros passos na programação e desejam entender os
          conceitos básicos de uma forma amigável e envolvente. Se você está começando a estudar programação, o PortuPy pode
          ser uma introdução divertida e educativa a este mundo fascinante.
        </p>
      </div>

      <div class="section">
        <h2>Comandos de Entrada e Saída</h2>
        <p>Para receber entrada do usuário em PortuPy, você pode usar a função <code>entrada()</code>:</p>
        <div class="code-example">
          <pre>
nome = entrada("Digite seu nome: ")
      </pre>
        </div>
        <p>Para exibir saída, use a função <code>escrever()</code>:</p>
        <div class="code-example">
          <pre>
escrever("Olá, " + nome)
      </pre>
        </div>
      </div>

      <div class="section">
        <h2>Principais Tipos de Dados</h2>
        <p>Python suporta diversos tipos de dados, incluindo:</p>
        <ul>
          <li>Números inteiros (inteiro)</li>
          <li>Números decimais (decimal)</li>
          <li>Carateres (caracter)</li>
          <li>Lógicos (logico)</li>
        </ul>
        <div class="code-example">
          <pre>
#caracter
nome = "Joao"

#inteiro
idade = 15

#decimal
altura = 1.75

#logico
trabalha = Verdadeiro
      </pre>
        </div>
      </div>

      <div class="section">
        <h1>Operadores em PortuPy</h1>

        <div class="section">
          <h2>Operadores Aritméticos</h2>
          <ul>
            <li><code>+</code> (Adição)</li>
            <li><code>-</code> (Subtração)</li>
            <li><code>*</code> (Multiplicação)</li>
            <li><code>/</code> (Divisão)</li>
            <li><code>//</code> (Divisão de Inteira)</li>
            <li><code>%</code> (Módulo - Resto da Divisão)</li>
            <li><code>**</code> (Exponenciação)</li>
          </ul>
        </div>

        <div class="section">
          <h2>Operadores de Comparação</h2>
          <ul>
            <li><code>==</code> (Igual a)</li>
            <li><code>!=</code> (Diferente de)</li>
            <li><code>&lt;</code> (Menor que)</li>
            <li><code>&gt;</code> (Maior que)</li>
            <li><code>&lt;=</code> (Menor ou igual a)</li>
            <li><code>&gt;=</code> (Maior ou igual a)</li>
          </ul>
        </div>

        <div class="section">
          <h2>Operadores Lógicos</h2>
          <ul>
            <li><code>and</code> (E lógico)</li>
            <li><code>or</code> (Ou lógico)</li>
            <li><code>not</code> (Negação lógica)</li>
          </ul>
        </div>

        <div class="section">
          <h2>Operadores de Identidade</h2>
          <ul>
            <li><code>is</code> (É)</li>
            <li><code>is not</code> (Não é)</li>
          </ul>
        </div>

        <div class="section">
          <h2>Operadores de Associação</h2>
          <ul>
            <li><code>in</code> (Está em)</li>
            <li><code>not in</code> (Não está em)</li>
          </ul>
        </div>

        <div class="section">
          <h2>Operadores de Atribuição</h2>
          <ul>
            <li><code>=</code> (Atribuição)</li>
            <li><code>+=</code> (Adição e atribuição)</li>
            <li><code>-=</code> (Subtração e atribuição)</li>
            <li><code>*=</code> (Multiplicação e atribuição)</li>
            <li><code>/=</code> (Divisão e atribuição)</li>
            <li><code>%=</code> (Módulo e atribuição)</li>
            <li><code>//=</code> (Divisão de Piso e atribuição)</li>
            <li><code>**=</code> (Exponenciação e atribuição)</li>
          </ul>
        </div>

        <div class="section">
          <h2>Operador de Concatenação de Strings</h2>
          <ul>
            <li><code>+</code> (Usado para concatenar strings)</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <h1>Entendendo Estruturas de Condição</h1>

        <p>
          As estruturas de condição são usadas para criar lógica condicional em programas. Elas permitem que você tome
          decisões com base em condições específicas.
        </p>

        <h2>Exemplo de Estrutura de Condição:</h2>
        <div class="code-example">
          <pre>
# Solicita ao usuário que insira um número
numero = decimal(entrada("Digite um número: "))

# Verifica se o número é positivo
se numero > 0:
    escrever("O número é positivo.")
e se numero == 0:
    escrever("O número é zero.")
senao:
    escrever("O número é negativo.")

        </pre>
        </div>

        <p>
          Neste exemplo em Python, estamos verificando se a variável <code>idade</code> é maior ou igual a 18. Se a
          condição for verdadeira, o programa imprime "Você é maior de idade". Caso contrário, ele imprime "Você é menor de
          idade".
        </p>

        <h2>Principais Estruturas de Condição:</h2>
        <ul>
          <li><strong>se</strong>: Usado para verificar se uma condição é verdadeira.</li>
          <li><strong>e se</strong>: Permite verificar várias condições.</li>
          <li><strong>senao</strong>: Fornece uma alternativa caso a condição do <strong>se</strong> seja falsa.</li>
        </ul>

        <p>
          As estruturas de condição são fundamentais para criar programas que podem se adaptar a diferentes situações e
          tomar decisões com base em informações variáveis.
        </p>
      </div>

      <div class="section">
        <h1>Entendendo Estruturas de Repetição</h1>

        <p>
          As estruturas de repetição são usadas para executar um bloco de código várias vezes. Elas são essenciais para
          automatizar tarefas repetitivas em programas.
        </p>

        <h2>Estrutura de Repetição <code>para</code>:</h2>
        <div class="code-example">
          <pre>
nomes = ["Alice", "Bob", "Carol", "David"]
para nome em nomes:
    escrever("Olá, " + nome)
        </pre>
          <pre>
para x em faixa(10):
    escrever(x)
        </pre>
        </div>

        <p>
          Neste exemplo em Python, usamos um loop <code>para</code> para percorrer a lista de nomes e imprimir uma saudação
          para cada pessoa na lista.
        </p>

        <h2>Estrutura de Repetição <code>enquanto</code>:</h2>
        <div class="code-example">
          <pre>
contador = 0

enquanto contador &lt; 5:
    escrever("Contagem: " + caracter(contador))
    contador += 1
        </pre>
        </div>

        <p>
          Neste exemplo, usamos um loop <code>enquanto</code> para contar de 0 a 4. O loop continuará executando até que a
          condição <code>contador &lt; 5</code> seja falsa.
        </p>

        <p>
          As estruturas de repetição são cruciais para a automação e repetição de tarefas em programas, economizando tempo
          e esforço.
        </p>
      </div>

      <div class="section">
        <h1>Funções em Programação</h1>

        <p>
          Funções são blocos de código que podem ser reutilizados para realizar tarefas específicas. Elas ajudam a
          organizar e modularizar um programa.
        </p>

        <h2>Definindo e Chamando Funções:</h2>
        <div class="code-example">
          <pre>
# Definindo uma função
funcao saudacao(nome):
    devolva "Olá, " + nome

# Chamando a função
mensagem = saudacao("Alice")
escrever(mensagem)
        </pre>
        </div>

        <p>
          Neste exemplo em PortuPy, definimos uma função chamada `saudacao` que aceita um argumento `nome` e retorna uma
          mensagem de saudação. Em seguida, chamamos a função e armazenamos a mensagem resultante em uma variável.
        </p>

        <h2>Funções com Parâmetros Opcionais:</h2>
        <div class="code-example">
          <pre>
# Função com parâmetro opcional
funcao boas_vindas(nome, cidade="Desconhecida"):
    return "Olá, " + nome + " de " + cidade

# Chamando a função
mensagem = boas_vindas("Bob")
escrever(mensagem)
        </pre>
        </div>

        <p>
          Neste exemplo, a função `boas_vindas` aceita dois parâmetros, sendo que `cidade` tem um valor padrão opcional. Se
          a cidade não for fornecida, ela será definida como "Desconhecida" por padrão.
        </p>

        <p>
          As funções são uma parte fundamental da programação, permitindo a criação de blocos de código reutilizáveis para
          executar tarefas específicas.
        </p>
      </div>
      <div class="section">
        <h1>Tratamento de Exceções</h1>

        O tratamento de exceções é uma abordagem para lidar com erros de forma controlada. Utiliza blocos tentar e deuerro para
        envolver código que pode gerar exceções. Se uma exceção ocorrer, o controle é transferido para o bloco de exceção, onde
        é possível realizar ações específicas para lidar com o erro.

        <h2>Instrução Raise:</h2>
        A instrução raise é utilizada para gerar manualmente uma exceção. Isso é útil quando você deseja sinalizar um erro
        específico em determinada situação, permitindo um tratamento personalizado.
        <div class="code-example">
          <pre>
funcao exemplo_divisao(dividendo, divisor):
    tentar:
        se divisor == 0:
            errar ErroDeValor("Divisão por zero não é permitida.")
        resultado = dividendo / divisor
    deuerro ErroDeValor apelidar ve:
        escrever(f"Erro: {ve}")
    deuerro ErroDeTipo:
        escrever("Erro: Certifique-se de que os operandos são números.")
    senao:
        escrever("A divisão foi bem-sucedida. Resultado:", resultado)
    porfim:
        escrever("Esta parte sempre será executada, independentemente de haver uma exceção ou não.")

# Exemplos de uso
exemplo_divisao(10, 2)  # Saída esperada: A divisão foi bem-sucedida. Resultado: 5.0
exemplo_divisao(10, 0)  # Saída esperada: Erro: Divisão por zero não é permitida.
exemplo_divisao("10", 2)  # Saída esperada: Erro: Certifique-se de que os operandos são números.
        </pre>
        </div>
      </div>

      <div class="section">
        <h1>Palavras-chave e Comandos em Python</h1>
        <div class="code-example">
          <p><strong>Verdadeiro (True):</strong> Valor booleano verdadeiro.</p>
          <p><strong>Falso (False):</strong> Valor booleano falso.</p>
          <p><strong>semlocal (nonlocal):</strong> Indica uma variável não local.</p>
          <p><strong>continue (continue):</strong> Pula para a próxima iteração do loop.</p>
          <p><strong>porfim (finally):</strong> Bloco de código que é sempre executado, independentemente de exceções.</p>
          <p><strong>devolva (return):</strong> Retorna um valor de uma função.</p>
          <p><strong>deuerro (except):</strong> Bloco de código executado em caso de exceção.</p>
          <p><strong>importe (import):</strong> Importa um módulo ou pacote.</p>
          <p><strong>global (global):</strong> Indica uma variável global.</p>
          <p>
            <strong>afirmar (assert):</strong> Verifica se uma expressão é verdadeira, gerando uma exceção se for falsa.
          </p>
          <p><strong>fazer (lambda):</strong> Cria funções anônimas.</p>
          <p><strong>classe (class):</strong> Define uma classe.</p>
          <p><strong>gerador (yield):</strong> Pausa uma função geradora e envia um valor para o chamador.</p>
          <p><strong>enquanto (while):</strong> Loop de repetição enquanto uma condição é verdadeira.</p>
          <p><strong>errar (raise):</strong> Levanta uma exceção.</p>
          <p><strong>quebrar (break):</strong> Sai de um loop.</p>
          <p><strong>e se (elif):</strong> Se a condição anterior for falsa, testa uma nova condição.</p>
          <p><strong>se (if):</strong> Testa uma condição.</p>
          <p><strong>senao (else):</strong> Bloco de código executado se a condição do "if" for falsa.</p>
          <p><strong>senao (else:):</strong> Bloco de código executado se a condição do "if" for falsa.</p>
          <p><strong>de (from):</strong> Importa partes específicas de um módulo.</p>
          <p><strong>Nada (None):</strong> Valor nulo.</p>
          <p><strong>passar (pass):</strong> Sentença nula (não faz nada).</p>
          <p><strong>com (with):</strong> Gerencia recursos usando um contexto.</p>
          <p><strong>para (for):</strong> Loop de repetição para iterar sobre uma sequência.</p>
          <p><strong>tentar (try:):</strong> Bloco de código onde exceções podem ocorrer.</p>
          <p><strong>funcao (def):</strong> Define uma função.</p>
          <p><strong>nao (not):</strong> Operador lógico de negação.</p>
          <p><strong>remova (del):</strong> Remove um item de uma coleção.</p>
          <p><strong>apelidar (as):</strong> Renomeia um módulo ou um objeto durante a importação.</p>
          <p><strong>ou (or):</strong> Operador lógico "ou".</p>
          <p><strong>em (in):</strong> Verifica se um valor está presente em uma sequência.</p>
          <p><strong>e (and):</strong> Operador lógico "e".</p>
          <p><strong>é (is):</strong> Verifica se dois objetos são o mesmo.</p>
        </div>
      </div>

      <div class="section">
        <h1>Comandos de Listas em PortuPy</h1>

        <div class="code-example">
          <h2>append - acrescentar</h2>
          <pre>
variavel = [1, 2, 3]
variavel.acrescentar(4)
escrever(variavel)  # Output: [1, 2, 3, 4]
      </pre>
        </div>

        <div class="code-example">
          <h2>extend - estender</h2>
          <pre>
lista1 = [1, 2, 3]
lista2 = [4, 5, 6]
lista1.estender(lista2)
escrever(lista1)  # Output: [1, 2, 3, 4, 5, 6]
      </pre>
        </div>

        <div class="code-example">
          <h2>insert - inserir</h2>
          <pre>
variavel = [1, 2, 3]
variavel.inserir(1, 4)
escrever(variavel)  # Output: [1, 4, 2, 3]
      </pre>
        </div>

        <div class="code-example">
          <h2>remove - remover</h2>
          <pre>
variavel = [1, 2, 3, 4]
variavel.remover(2)
escrever(variavel)  # Output: [1, 3, 4]
      </pre>
        </div>

        <div class="code-example">
          <h2>pop - retirar</h2>
          <pre>
variavel = [1, 2, 3]
elemento = variavel.retirar(1)
escrever(variavel)     # Output: [1, 3]
escrever(elemento)  # Output: 2
      </pre>
        </div>

        <div class="code-example">
          <h2>clear - limpar</h2>
          <pre>
variavel = [1, 2, 3]
variavel.limpar()
escrever(variavel)  # Output: []
      </pre>
        </div>

        <div class="code-example">
          <h2>index - indice</h2>
          <pre>
variavel = [1, 2, 3, 4, 3]
indice = variavel.indice(3)
escrever(indice)  # Output: 2
      </pre>
        </div>

        <div class="code-example">
          <h2>count - contar</h2>
          <pre>
variavel = [1, 2, 3, 3, 4]
contagem = variavel.contar(3)
escrever(contagem)  # Output: 2
      </pre>
        </div>

        <div class="code-example">
          <h2>sort - organizar</h2>
          <pre>
variavel = [4, 2, 1, 3]
variavel.organizar()
escrever(variavel)  # Output: [1, 2, 3, 4]
      </pre>
        </div>

        <div class="code-example">
          <h2>reverso - reverter</h2>
          <pre>
variavel = [1, 2, 3]
variavel.reverter()
escrever(variavel)  # Output: [3, 2, 1]
      </pre>
        </div>

        <div class="code-example">
          <h2>copy - copiar</h2>
          <pre>
variavel = [1, 2, 3]
copia_lista = variavel.copia()
escrever(copia_lista)  # Output: [1, 2, 3]
      </pre>
        </div>
      </div>

      <div class="section">
        <h1>Comandos de Caracteres em PortuPy</h1>

        <div class="code-example">
          <h2>capitalize - capitalizar</h2>
          <pre>
texto = "exemplo de texto"
texto_capitalizado = texto.capitalizar()
escrever(texto_capitalizado)  # Output: "Exemplo de texto"
  </pre>
        </div>

        <div class="code-example">
          <h2>lower - minuscula</h2>
          <pre>
texto = "Exemplo de TEXTO"
texto_minuscula = texto.minuscula()
escrever(texto_minuscula)  # Output: "exemplo de texto"
  </pre>
        </div>

        <div class="code-example">
          <h2>upper - maiuscula</h2>
          <pre>
texto = "Exemplo de TEXTO"
texto_maiuscula = texto.maiuscula()
escrever(texto_maiuscula)  # Output: "EXEMPLO DE TEXTO"
  </pre>
        </div>

        <div class="code-example">
          <h2>title - titulo</h2>
          <pre>
texto = "exemplo de texto"
texto_titulo = texto.titulo()
escrever(texto_titulo)  # Output: "Exemplo De Texto"
  </pre>
        </div>

        <div class="code-example">
          <h2>strip - remover_espacos</h2>
          <pre>
texto = "   exemplo   "
texto_sem_espacos = texto.remover_espacos()
escrever(texto_sem_espacos)  # Output: "exemplo"
  </pre>
        </div>

        <div class="code-example">
          <h2>lstrip - lremover_espacos</h2>
          <pre>
texto = "   exemplo   "
texto_sem_espacos_esquerda = texto.lremover_espacos()
escrever(texto_sem_espacos_esquerda)  # Output: "exemplo   "
  </pre>
        </div>

        <div class="code-example">
          <h2>rstrip - rremover_espacos</h2>
          <pre>
texto = "   exemplo   "
texto_sem_espacos_direita = texto.rremover_espacos()
escrever(texto_sem_espacos_direita)  # Output: "   exemplo"
  </pre>
        </div>

        <div class="code-example">
          <h2>replace - substituir</h2>
          <pre>
texto = "exemplo de texto"
novo_texto = texto.substituir("texto", "Python")
escrever(novo_texto)  # Output: "exemplo de Python"
  </pre>
        </div>

        <div class="code-example">
          <h2>split - dividir</h2>
          <pre>
texto = "exemplo de texto"
palavras = texto.dividir()
escrever(palavras)  # Output: ['exemplo', 'de', 'texto']
  </pre>
        </div>

        <div class="code-example">
          <h2>join - juntar</h2>
          <pre>
palavras = ['exemplo', 'de', 'texto']
texto = " ".juntar(palavras)
escrever(texto)  # Output: "exemplo de texto"
  </pre>
        </div>

        <div class="code-example">
          <h2>find - encontrar</h2>
          <pre>
texto = "exemplo de texto"
posicao = texto.encontrar("de")
escrever(posicao)  # Output: 8
  </pre>
        </div>

        <div class="code-example">
          <h2>count - contar</h2>
          <pre>
texto = "exemplo de texto"
contagem = texto.contar("e")
escrever(contagem)  # Output: 3
  </pre>
        </div>

        <div class="code-example">
          <h2>startswith - comeca_com</h2>
          <pre>
texto = "exemplo de texto"
resultado = texto.comeca_com("exemplo")
escrever(resultado)  # Output: Verdadeiro
  </pre>
        </div>

        <div class="code-example">
          <h2>endswith - termina_com</h2>
          <pre>
texto = "exemplo de texto"
resultado = texto.termina_com("texto")
escrever(resultado)  # Output: Verdadeiro
  </pre>
        </div>

        <div class="code-example">
          <h2>isalpha - e_alfabetica</h2>
          <pre>
texto = "exemplo"
resultado = texto.e_alfabetica()
escrever(resultado)  # Output: Verdadeiro
  </pre>
        </div>

        <div class="code-example">
          <h2>isdigit - e_numerica</h2>
          <pre>
texto = "123"
resultado = texto.e_numerica()
escrever(resultado)  # Output: Verdadeiro
  </pre>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import axios from '@/plugins/axios_local'

export default {
  name: 'TelaSite',
  data: () => ({
    loading: false
  }),
  computed: {
    alturaTela () {
      return this.$vuetify.breakpoint.height - 80
    }
  },
  created () {
    setInterval(() => {
      this.controleImagem0 += this.controleImagem0 === 4 ? -4 : 1
      this.controleImagem1 += this.controleImagem1 === 4 ? -4 : 1
      this.controleImagem2 += this.controleImagem2 === 4 ? -4 : 1
      this.controleImagem3 += this.controleImagem3 === 4 ? -4 : 1
      this.controleImagem4 += this.controleImagem4 === 4 ? -4 : 1
    }, 6000)
  },
  methods: {
    abrirJenela (tela) {
      if (tela !== this.$router.currentRoute.path) {
        const route = this.$router.resolve({ path: tela })

        if (tela) {
          this.$router.push(route.href)
        }
      } else {
        window.location.reload(true)
      }
    },
    async baixarArquivo () {
      this.loading = true
      const url = '/download'
      await axios.get(url, { responseType: 'blob' })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'PortuPy.exe')
          document.body.appendChild(link)
          link.click()
        })
        .catch(error => {
          window.console.error('Erro ao baixar o arquivo', error)
        })

      this.loading = false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali+UI&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');

.titulo {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
}

.tituloFooter {
  font-size:20px;
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
}

.subTitulosFooter {
  font-size:15px;
  font-family: 'Mulish', sans-serif;
}

.descricao {
  font-family: 'Mulish', sans-serif;
  display: flex;
}

.banner {
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  display: flex;
}

.sub-descricao {
  font-family: 'Mulish', sans-serif;
  display: flex;
}

.hover-div {
  transition: transform 0.3s ease; /* Adiciona uma transição suave na propriedade 'transform' */
}

.hover-div:hover {
  transform: scale(1.1); /* Aumenta o tamanho em 10% quando o mouse passa por cima */
}

.falling-div {
  width: 100%;
  animation: fall 1.4s ease-in-out forwards;
  position: relative; /* Importante para animação funcionar corretamente */
}

@keyframes fall {
  0% {
    top: -400px;
  }
  100% {
    top: 0;
  }
}

    h1 {
      color: #333;
    }

    p {
      margin: 10px 0;
    }

    code {
      background-color: #f5f5f5;
      padding: 2px 6px;
      border: 1px solid #ccc;
    }

    .section {
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 20px;
      margin: 10px 0;
      border-radius: 5px;
    }

    .code-example {
      background-color: #f5f5f5;
      padding: 10px;
      border: 1px solid #ccc;
      margin: 10px 0;
    }
</style>
