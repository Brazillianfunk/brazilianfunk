import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TermsSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8 ${expanded ? '' : 'max-h-screen overflow-hidden'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <a href="/" className="flex items-center gap-2 mb-8">
            <span className="text-3xl font-bold text-funk-neon-green">Brazilian<span className="text-white">Funk</span></span>
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 terms-display">
            Termos de Uso
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto terms-subtitle">
            Leia com atenção os termos que regem a utilização dos serviços da Brazilian Funk, Ltda.
          </p>
        </div>

        <div className="bg-[#1a1a1a] shadow-md rounded-lg p-8">
          <div className={`terms-content ${expanded ? 'max-h-full' : 'max-h-[800px] overflow-hidden relative'}`}>
            <div className="terms-section">
              <h3 className="terms-heading">1. Introdução</h3>
              <p className="terms-text">
                Estes Termos de Uso ("Termos") regem o uso dos serviços oferecidos pela Brazilian Funk, Ltda. 
                ("Brazilian Funk", "nós" ou "nossos"), incluindo a distribuição digital de músicas, 
                gerenciamento de royalties e acesso à plataforma brazilianfunk.co ("Plataforma"). Ao utilizar nossos 
                serviços, você concorda com estes Termos. Se não concordar com alguma parte destes Termos, solicitamos 
                que não utilize nossos Serviços.
              </p>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">2. Definições</h3>
              <p className="terms-text">
                Para os fins destes Termos, as seguintes definições serão utilizadas:
              </p>
              <ul className="terms-list">
                <li><strong>"Usuário"</strong>: qualquer pessoa física ou jurídica que acesse ou utilize os Serviços da Brazilian Funk.</li>
                <li><strong>"Conteúdo"</strong>: refere-se a qualquer música, álbum, EP, single, capa de álbum, metadados, letras, vídeos e qualquer outro material enviado pelo Usuário para distribuição.</li>
                <li><strong>"Serviços"</strong>: todos os serviços oferecidos pela Brazilian Funk, incluindo, mas não limitados a, distribuição digital, gerenciamento de royalties, relatórios e ferramentas de análise.</li>
                <li><strong>"Plataforma"</strong>: o site brazilianfunk.co e todos os seus subdomínios e aplicativos relacionados.</li>
                <li><strong>"Royalties"</strong>: os valores devidos ao Usuário pela utilização do seu Conteúdo nas plataformas de streaming e lojas digitais.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">3. Elegibilidade e Registro</h3>
              <p className="terms-text">
                Para utilizar os Serviços da Brazilian Funk, você deve:
              </p>
              <ul className="terms-list">
                <li>Ter pelo menos 18 anos de idade ou, se menor, estar devidamente autorizado por um responsável legal;</li>
                <li>Possuir capacidade legal para celebrar contratos vinculativos;</li>
                <li>Não estar impedido de receber serviços sob as leis do Brasil ou de qualquer outra jurisdição aplicável;</li>
                <li>Fornecer informações verdadeiras, precisas, atuais e completas quando solicitado.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">4. Obrigações do Usuário</h3>
              <p className="terms-text">
                Ao utilizar nossos Serviços, você concorda com as seguintes obrigações:
              </p>
              <ul className="terms-list">
                <li>Fornecer informações precisas e completas sobre você e seu Conteúdo;</li>
                <li>Garantir que possui todos os direitos necessários sobre o Conteúdo enviado para distribuição, incluindo direitos autorais, direitos conexos, licenças e autorizações de todos os titulares de direitos;</li>
                <li>Não enviar Conteúdo que viole direitos de terceiros, incluindo direitos autorais, marcas registradas, privacidade ou outros direitos de propriedade intelectual;</li>
                <li>Não enviar Conteúdo que seja ilegal, ofensivo, difamatório, pornográfico, abusivo, fraudulento ou que viole qualquer lei aplicável;</li>
                <li>Manter a confidencialidade de suas credenciais de acesso e não compartilhá-las com terceiros;</li>
                <li>Notificar imediatamente a Brazilian Funk sobre qualquer uso não autorizado de sua conta;</li>
                <li>Revisar relatórios de royalties e notificar discrepâncias dentro de 60 dias após a disponibilização;</li>
                <li>Não tentar acessar áreas restritas da Plataforma ou interferir nos sistemas da Brazilian Funk;</li>
                <li>Cumprir todas as leis aplicáveis ao utilizar os Serviços.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">5. Serviços da Brazilian Funk</h3>
              <p className="terms-text">
                A Brazilian Funk oferece serviços de distribuição digital de música, que incluem, mas não se limitam a:
              </p>
              <ul className="terms-list">
                <li>Distribuição de Conteúdo para plataformas de streaming e lojas digitais (como Spotify, Apple Music, Deezer, Amazon Music, YouTube Music, TikTok, Instagram/Facebook, entre outras);</li>
                <li>Coleta e distribuição de royalties;</li>
                <li>Relatórios detalhados sobre o desempenho do Conteúdo nas plataformas;</li>
                <li>Ferramentas de análise para acompanhamento de métricas;</li>
                <li>Serviços de código ISRC e UPC;</li>
                <li>Suporte técnico e atendimento ao usuário.</li>
              </ul>
              <p className="terms-text">
                A Brazilian Funk atua como intermediária entre o Usuário e as plataformas de streaming e lojas digitais, e não reivindica propriedade sobre o Conteúdo do Usuário. No entanto, para fornecer os Serviços, o Usuário concede à Brazilian Funk uma licença não exclusiva, mundial, isenta de royalties, para utilizar, reproduzir, distribuir, exibir e transmitir o Conteúdo conforme necessário para a prestação dos Serviços.
              </p>
              <p className="terms-text">
                A Brazilian Funk reserva-se o direito de recusar a distribuição de qualquer Conteúdo que, a seu exclusivo critério, viole estes Termos ou as políticas das plataformas de streaming e lojas digitais.
              </p>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">6. Royalties e Pagamentos</h3>
              <p className="terms-text">
                A Brazilian Funk coletará os royalties gerados pelo Conteúdo do Usuário nas plataformas de streaming e lojas digitais e os distribuirá ao Usuário de acordo com os seguintes termos:
              </p>
              <ul className="terms-list">
                <li>Os pagamentos serão realizados conforme a periodicidade estabelecida no plano contratado pelo Usuário;</li>
                <li>Para receber pagamentos, o Usuário deve fornecer informações bancárias precisas e atualizar tais informações sempre que necessário;</li>
                <li>A Brazilian Funk poderá reter pagamentos caso haja indícios de fraude, violação destes Termos ou disputas relacionadas ao Conteúdo;</li>
                <li>Os valores mínimos para pagamento e as taxas aplicáveis serão informados no momento da contratação dos Serviços;</li>
                <li>O Usuário é responsável por todos os impostos aplicáveis aos royalties recebidos;</li>
                <li>Em caso de pagamentos feitos por engano ou em excesso, a Brazilian Funk reserva-se o direito de descontar tais valores de pagamentos futuros ou solicitar o reembolso.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">7. Propriedade Intelectual</h3>
              <p className="terms-text">
                O Usuário retém todos os direitos de propriedade intelectual sobre seu Conteúdo, sujeito às licenças concedidas nestes Termos. Ao enviar Conteúdo para distribuição, o Usuário garante que:
              </p>
              <ul className="terms-list">
                <li>É o titular de todos os direitos sobre o Conteúdo ou possui as devidas licenças e autorizações dos titulares;</li>
                <li>O Conteúdo não viola direitos de terceiros, incluindo direitos autorais, marcas registradas, privacidade ou outros direitos de propriedade intelectual;</li>
                <li>Concede à Brazilian Funk uma licença mundial, não exclusiva, transferível, isenta de royalties, pelo período necessário para a prestação dos Serviços, para utilizar, reproduzir, distribuir, exibir e transmitir o Conteúdo.</li>
              </ul>
              <p className="terms-text">
                A Brazilian Funk e suas marcas, logotipos, designs, textos, gráficos e outros materiais utilizados na Plataforma são propriedade exclusiva da Brazilian Funk ou de seus licenciadores e estão protegidos por leis de propriedade intelectual. O uso não autorizado desses materiais é estritamente proibido.
              </p>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">8. Limitação de Responsabilidade</h3>
              <p className="terms-text">
                Na extensão máxima permitida pela lei aplicável:
              </p>
              <ul className="terms-list">
                <li>A Brazilian Funk não será responsável por danos indiretos, incidentais, especiais, punitivos ou consequenciais, incluindo lucros cessantes, perda de dados, interrupção de negócios ou outros danos resultantes do uso ou da impossibilidade de uso dos Serviços;</li>
                <li>A Brazilian Funk não será responsável por problemas técnicos fora de seu controle, incluindo falhas nas plataformas de streaming e lojas digitais;</li>
                <li>A responsabilidade total da Brazilian Funk por quaisquer reclamações decorrentes destes Termos não excederá o valor pago pelo Usuário pelos Serviços nos 12 meses anteriores à reclamação;</li>
                <li>A Brazilian Funk não garante que os Serviços serão ininterruptos, seguros ou livres de erros;</li>
                <li>O Usuário reconhece que a Brazilian Funk não tem controle sobre as decisões das plataformas de streaming e lojas digitais quanto à aceitação, remoção ou disponibilização do Conteúdo.</li>
              </ul>
              <p className="terms-text">
                Algumas jurisdições não permitem a exclusão ou limitação de determinados danos, portanto, algumas das limitações acima podem não se aplicar a você.
              </p>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">9. Rescisão</h3>
              <p className="terms-text">
                O Usuário pode rescindir seu relacionamento com a Brazilian Funk a qualquer momento, mediante notificação por escrito. A Brazilian Funk pode rescindir ou suspender o acesso do Usuário aos Serviços, a seu exclusivo critério, sem aviso prévio, pelos seguintes motivos:
              </p>
              <ul className="terms-list">
                <li>Violação destes Termos;</li>
                <li>Envio de Conteúdo que viole direitos de terceiros ou leis aplicáveis;</li>
                <li>Comportamento fraudulento ou abusivo;</li>
                <li>Não pagamento de taxas devidas;</li>
                <li>A pedido de autoridades legais ou regulatórias;</li>
                <li>Inatividade prolongada da conta.</li>
              </ul>
              <p className="terms-text">
                Em caso de rescisão:
              </p>
              <ul className="terms-list">
                <li>A Brazilian Funk iniciará o processo de retirada do Conteúdo das plataformas de streaming e lojas digitais, o que pode levar até 30 dias, dependendo das políticas de cada plataforma;</li>
                <li>Os royalties acumulados até a data da rescisão serão pagos conforme os termos regulares de pagamento, desde que atinjam o valor mínimo para pagamento;</li>
                <li>O Usuário permanecerá responsável por quaisquer obrigações pendentes, incluindo pagamentos devidos à Brazilian Funk;</li>
                <li>As disposições destes Termos que, por sua natureza, devam sobreviver à rescisão, permanecerão em vigor.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">10. Indenização</h3>
              <p className="terms-text">
                O Usuário concorda em defender, indenizar e isentar a Brazilian Funk, seus diretores, funcionários e agentes de qualquer responsabilidade, danos, reclamações, ações, custos e despesas, incluindo honorários advocatícios razoáveis, decorrentes de ou relacionados a:
              </p>
              <ul className="terms-list">
                <li>Violação destes Termos pelo Usuário;</li>
                <li>Uso dos Serviços pelo Usuário;</li>
                <li>Conteúdo enviado pelo Usuário;</li>
                <li>Violação de direitos de terceiros pelo Usuário;</li>
                <li>Qualquer alegação de que o Conteúdo do Usuário causou danos a terceiros.</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">11. Lei Aplicável e Jurisdição</h3>
              <p className="terms-text">
                Estes Termos são regidos pelas leis do Brasil. Qualquer disputa decorrente ou relacionada a estes Termos será submetida à jurisdição exclusiva dos tribunais da cidade de Manaus, AM, exceto quando disposições legais imperativas determinarem diferentemente.
              </p>
              <p className="terms-text">
                As partes concordam em tentar resolver qualquer disputa de maneira amigável antes de recorrer a procedimentos judiciais. Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito.
              </p>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">12. Alterações nos Termos</h3>
              <p className="terms-text">
                A Brazilian Funk reserva-se o direito de atualizar ou modificar estes Termos a qualquer momento, a seu exclusivo critério. As alterações entrarão em vigor após a publicação dos Termos atualizados na Plataforma.
              </p>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">13. Contato</h3>
              <p className="terms-text">
                Se você tiver dúvidas sobre estes Termos ou os Serviços da Brazilian Funk, Ltda., entre em contato conosco através do endereço de e-mail legal@brazilianfunk.co.
              </p>
              <p className="text-sm text-gray-500 mt-6">
                Termos atualizados pela última vez em 1 de Janeiro de 2025.
              </p>
            </div>
          </div>

          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-funk-dark-purple to-transparent flex items-end justify-center pb-4 w-full">
              <button 
                onClick={() => setExpanded(true)}
                className="flex items-center gap-2 text-funk-neon-green font-medium hover:text-funk-green-accent transition-colors"
              >
                Ler Termos Completos
                <ChevronDown size={16} className="text-funk-neon-green" />
              </button>
            </div>
          )}

          {expanded && (
            <div className="mt-6 flex justify-center">
              <button 
                onClick={() => setExpanded(false)}
                className="flex items-center gap-2 text-funk-neon-green font-medium hover:text-funk-green-accent transition-colors"
              >
                Recolher
                <ChevronDown className="rotate-180 text-funk-neon-green" size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsSection;
