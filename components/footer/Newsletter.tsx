import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col w-full items-center gap-6 sm:gap-20 bg-bg-gray py-6 px-4 ">
      <div class="flex flex-col w-full items-center gap-2 ">
        <Text className="text-uppercase text-center text-textGray text-[12px]">
          Assine a nossa Newsletter
        </Text>
        <input
          className="text-textGray font-futura text-[14px] w-4/5 py-2.5 mb-5 border-b-1 border-gray border-solid outline-none bg-transparent"
          type="text"
          placeholder="NOME"
        />
        {/* <div className="w-4/5 h-[0.5px] bg-footer-underline"></div> */}
        <input
          className="text-textGray font-futura text-[14px] w-4/5 border-b-1 border-gray border-solid outline-none py-2.5 mb-5 bg-transparent"
          type="text"
          placeholder="E-MAIL"
        />
        {/* <div className="w-4/5 h-[0.5px] bg-footer-underline"></div> */}
      </div>
      <p className="text-[12px] text-textGray font-futura underline ">ENVIAR</p>
    </div>
  );
}

export default Newsletter;
