import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = [] }: Props) {
  return (
    <footer class="w-full bg-footer flex flex-col ">
      <FooterContainer class="p-0">
        <Newsletter />
      </FooterContainer>

      {/* <FooterContainer class="bg-black opacity-10 border-2">
        <ul class="hidden sm:flex flex-row gap-20 bg-blue-500">
          {sections.map((section) => (
            <li>
              <div>
                <Text variant="heading-3" tone="default-inverse">
                  {section.label}
                </Text>

                <ul
                  class={`flex ${
                    isIcon(section.children[0]) ? "flex-row" : "flex-col"
                  } gap-2 pt-2`}
                >
                  {section.children.map((item) => (
                    <li>
                      <SectionItem item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <ul class="flex flex-col sm:hidden sm:flex-row gap-4 bg-pink-300">
          {sections.map((section) => (
            <li>
              <Text variant="body" tone="default-inverse">
                <details>
                  <summary>
                    {section.label}
                  </summary>

                  <ul
                    class={`flex ${
                      isIcon(section.children[0]) ? "flex-row" : "flex-col"
                    } gap-2 px-2 pt-2`}
                  >
                    {section.children.map((item) => (
                      <li>
                        <SectionItem item={item} />
                      </li>
                    ))}
                  </ul>
                </details>
              </Text>
            </li>
          ))}
        </ul>
      </FooterContainer> */}

      <FooterContainer class="w-full items-center text-xs font-futura">
        <div className="flex flex-row w-full md:w-4/5 mb-7 mx-auto justify-between">
          <div className="mr-8 text-textGrayMed text-xs ">
            <h1 className="font-extrabold">INFORMAÇÕES</h1>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/login?ReturnUrl=%2f_secure%2faccount#/orders"
                target={"_blank"}
                className=""
              >
                MEUS PEDIDOS
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3"></div>
            </div>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/login?ReturnUrl=%2f_secure%2faccount#/orders"
                target={"_blank"}
                className=""
              >
                TROCAS E DEVOLUCÕES
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3">
              </div>
            </div>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/institucional/prazo-de-entrega#troca"
                target={"_blank"}
                className=""
              >
                PRAZOS E ENTREGAS
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3"></div>
            </div>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/institucional/prazo-de-entrega#pagamentos"
                target={"_blank"}
                className=""
              >
                PAGAMENTOS
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3"></div>
            </div>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/institucional/politica-privacidade"
                target={"_blank"}
                className=""
              >
                AVISO DE PRIVACIDADE
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3">
              </div>
            </div>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/institucional/contato"
                target={"_blank"}
                className=""
              >
                CONTATO
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3">
              </div>
            </div>
          </div>

          <div className="md:ml-9  text-textGrayMed text-xs">
            <h1 className="font-extrabold">LOJAS</h1>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/institucional/lojas"
                target={"_blank"}
                className=""
              >
                SÃO PAULO
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3"></div>
            </div>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/institucional/lojas"
                target={"_blank"}
                className=""
              >
                RIO DE JANEIRO
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3">
              </div>
            </div>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/institucional/lojas"
                target={"_blank"}
                className=""
              >
                CURITIBA
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3"></div>
            </div>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/institucional/lojas"
                target={"_blank"}
                className=""
              >
                BRASÍLIA
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3"></div>
            </div>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/institucional/lojas"
                target={"_blank"}
                className=""
              >
                PORTO ALEGRE
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3">
              </div>
            </div>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/institucional/lojas"
                target={"_blank"}
                className=""
              >
                BELO HORIZONTE
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3"></div>
            </div>
            <div className="mt-2">
              <a
                href="https://www.crisbarros.com.br/institucional/lojas"
                target={"_blank"}
                className=""
              >
                GOIÃNIA
              </a>
              <div className="w-[160px] h-[0.5px] bg-footer-underline mt-3">
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs text-center text-textColor mb-7">@crisbarrosofficial</p>
        </div>
        <div>
          <h1 className="text-textColor text-center font-bold">
            ATENDIMENTO
          </h1>
          <div>
            <p className="text-textColor text-[12px] text-center">
              EMAIL: ATENDIMENTO@CRISBARROS.COM.BR
            </p>
            <p className="text-textColor text-[12px] text-center">
              TELEFONE: (11) 42100170
            </p>
            <p className="text-textColor text-[12px] text-center">
              (DE SEGUNDA À SEXTA DAS 10H ÀS 17H)
            </p>
          </div>
          <div className="bg-footer-underline w-screen h-[0.5px] mt-10"></div>
          <div className="mt-16">
            <p className="text-textColor text-xs text-center">
              @ 2018 CRIS BARROS - LOJA ONLINE
            </p>
            <p className="text-textColor text-xs text-center">
              GRUPO DE MODA SOMA S.A
            </p>
            <p className="text-textColor text-xs text-center">
              EST TENENTE MARQUES 1818, SALA 3-B PARQUE PANORAMA II
            </p>
            <p className="text-textColor text-xs text-center">
              (FAZENDINHA) - SANTANA DO PARNAIBA - SP - 06534-30
            </p>
          </div>
        </div>
      </FooterContainer>

      <FooterContainer class="flex justify-center w-full">
        <Text
          class="flex items-center gap-1"
          variant="body"
          tone="default"
        >
          Powered by{" "}
          <a
            href="https://www.deco.cx"
            aria-label="powered by https://www.deco.cx"
          >
            <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
          </a>
        </Text>

        {/* <ul class="flex items-center justify-center gap-2">
          <li>
            <a
              href="https://www.instagram.com/deco.cx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram logo"
            >
              <Icon
                class="text-default-inverse"
                width={32}
                height={32}
                id="Instagram"
                strokeWidth={1}
              />
            </a>
          </li>
          <li>
            <a
              href="http://www.deco.cx/discord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord logo"
            >
              <Icon
                class="text-default-inverse"
                width={32}
                height={32}
                id="Discord"
                strokeWidth={5}
              />
            </a>
          </li>
        </ul> */}
      </FooterContainer>
    </footer>
  );
}

export default Footer;
