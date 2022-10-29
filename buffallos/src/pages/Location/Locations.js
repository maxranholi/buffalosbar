import * as S from "./LocationStyled";

const Location = () => {
  return (
    <>
      <S.SectionTitle>Localização</S.SectionTitle>
      <S.Container>
        <S.ContainerInfos>
          <div>
            <S.TitleLoc>Onde estamos</S.TitleLoc>
            <S.PLoc>Rua Arquias Cordeiro, N 316. Méier</S.PLoc>
          </div>
          <div>
            <S.TitleLoc>Funcionamento</S.TitleLoc>
            <div>
              <S.PLoc>
                <b>Sexta:</b> A partir das 21:00h
              </S.PLoc>
              <S.PLoc>
                <b>Sábado:</b> A partir das 20:00h
              </S.PLoc>
            </div>
          </div>
        </S.ContainerInfos>

        <div class="mapouter">
          <div class="gmap_canvas">
            <S.IframeMap
              class="gmap_iframe"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=660&amp;height=500&amp;hl=en&amp;q=arquias cordeiro, 316 meier Buffalos Bar&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
      </S.Container>
    </>
  );
};

export default Location;
