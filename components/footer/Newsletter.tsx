import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-20">
      <div class="flex flex-col gap-2 max-w-[400px]">
        <Text className="font-black text-center text-textColor">
          Assine a nossa Newsletter
        </Text>
        <div className="flex flex-col">
          <input className="text-md w-[380px] mb-2 p-2 border-none outline-none" type="text" placeholder="NOME"/>
          <div className="w-[364px] h-[1px] bg-footer-underline"></div>
          <input className="text-md w-[380px] border-none outline-none p-2 " type="text"  placeholder="E-MAIL"/>
          <div className="w-[364px] h-[0.5px] bg-footer-underline"></div>

        </div>
      </div>
      <div>
        <p className="text-sm text-textColor underline -mt-2">ENVIAR</p>
      </div>
      <div className="flex flex-row">
        <div className="mr-8">
          <h1 className="text-textColor text-sm font-bold">INFORMAÇÕES</h1>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/login?ReturnUrl=%2f_secure%2faccount#/orders" 
            target={"_blank"}
            className="text-sm text-textColor">MEUS PEDIDOS</a>
            <div className="w-[188px] h-[1px] bg-footer-underline mt-3"></div>
          </div>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/login?ReturnUrl=%2f_secure%2faccount#/orders" 
            target={"_blank"}
            className="text-sm text-textColor">TROCAS E DEVOLUCÕES</a>
            <div className="w-[188px] h-[0.5px] bg-footer-underline mt-3"></div>
          </div>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/institucional/prazo-de-entrega#troca" 
            target={"_blank"}
            className="text-sm text-textColor">PRAZOS E ENTREGAS</a>
            <div className="w-[188px] h-[1px] bg-footer-underline mt-3"></div>
          </div>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/institucional/prazo-de-entrega#pagamentos" 
            target={"_blank"}
            className="text-sm text-textColor">PAGAMENTOS</a>
            <div className="w-[188px] h-[1px] bg-footer-underline mt-3"></div>
          </div>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/institucional/politica-privacidade" 
            target={"_blank"}
            className="text-sm text-textColor">AVISO DE PRIVACIDADE</a>
            <div className="w-[188px] h-[0.5px] bg-footer-underline mt-3"></div>
          </div>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/institucional/contato" 
            target={"_blank"}
            className="text-sm text-textColor">CONTATO</a>
            <div className="w-[188px] h-[0.5px] bg-footer-underline mt-3"></div>
          </div>
        </div>

      <div className="ml-9">
        <h1 className="text-textColor text-sm font-bold">LOJAS</h1>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/institucional/lojas" 
            target={"_blank"}
            className="text-sm text-textColor">SÃO PAULO</a>
            <div className="w-[188px] h-[1px] bg-footer-underline mt-3"></div>
          </div>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/institucional/lojas" 
            target={"_blank"}
            className="text-sm text-textColor">RIO DE JANEIRO</a>
            <div className="w-[188px] h-[0.5px] bg-footer-underline mt-3"></div>
          </div>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/institucional/lojas" 
            target={"_blank"}
            className="text-sm text-textColor">CURITIBA</a>
            <div className="w-[188px] h-[1px] bg-footer-underline mt-3"></div>
          </div>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/institucional/lojas" 
            target={"_blank"}
            className="text-sm text-textColor">BRASÍLIA</a>
            <div className="w-[188px] h-[1px] bg-footer-underline mt-3"></div>
          </div>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/institucional/lojas" 
            target={"_blank"}
            className="text-sm text-textColor">PORTO ALEGRE</a>
            <div className="w-[188px] h-[0.5px] bg-footer-underline mt-3"></div>
          </div>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/institucional/lojas" 
            target={"_blank"}
            className="text-sm text-textColor">BELO HORIZONTE</a>
            <div className="w-[188px] h-[1px] bg-footer-underline mt-3"></div>
          </div>
          <div className="mt-2">
            <a 
            href="https://www.crisbarros.com.br/institucional/lojas" 
            target={"_blank"}
            className="text-sm text-textColor">GOIÃNIA</a>
            <div className="w-[188px] h-[0.5px] bg-footer-underline mt-3"></div>
          </div>
      </div>
      </div>
      <div>
        <p className="text-sm text-textColor">@crisbarrosofficial</p>
      </div>
      <div>
        <h1 className="text-textColor text-center text-sm font-bold">ATENDIMENTO</h1>
        <div>
          <p className="text-textColor text-[12px] text-center">EMAIL: ATENDIMENTO@CRISBARROS.COM.BR</p>
          <p className="text-textColor text-[12px] text-center">TELEFONE: (11) 42100170</p>
          <p className="text-textColor text-[12px] text-center">(DE SEGUNDA À SEXTA DAS 10H ÀS 17H)</p>
        </div>
        <div className="bg-footer-underline w-screen h-[1px] mt-10"></div>
        <div className="mt-16">
          <p className="text-textColor text-[12px] text-center">@ 2018 CRIS BARROS - LOJA ONLINE</p>
          <p className="text-textColor text-[12px] text-center">GRUPO DE MODA SOMA S.A</p>
          <p className="text-textColor text-[12px] text-center">EST TENENTE MARQUES 1818, SALA 3-B PARQUE PANORAMA II</p>
          <p className="text-textColor text-sm text-center">(FAZENDINHA) -SANTANA DO PARNAIBA -SP -06534-30</p>

        </div>
      </div>
    </div>
  );
}

export default Newsletter;
