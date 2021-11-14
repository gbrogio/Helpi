import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { KonamiCode } from 'scripts/Konami';
import {
  A, BigTitle, P, SmallTitle, SubTitle, Title,
} from 'styles/components/Text';
import {
  Content,
  Info,
  Background,
  Blob,
  Container,
  Card,
  CurseCard,
  ThanksEduTech,
} from 'styles/pages/Home';
import TestimonyCp from 'components/Testimony';
import Tilt from 'react-tilt';
import Carousel from 'react-elastic-carousel';
import AlertCp from 'components/Alert';

const Home: React.FC = function () {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [isWidthPage, setWidthPage] = useState(null);
  const [ThanksModalOpen, setThanksModalOpen] = useState(false);

  useEffect(() => {
    const widthPage = window.screen.width;
    setWidthPage(widthPage);
    KonamiCode(setThanksModalOpen);
  });
  const [ModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Head>
        <title>
          Helpi: Início
        </title>
      </Head>
      {ModalOpen === true && (
        <AlertCp closeModal={setModalOpen}>
          Ops!
          <br />
          {' '}
          Acho que essa implementação eu ainda não fiz, quem sabe em breve ela
          não poderá funcionar?!
        </AlertCp>
      )}
      {ThanksModalOpen === true && (
        <ThanksEduTech role="alert">
          <Tilt options={{
            reverse: true,
            max: 5,
            perspective: 500,
            scale: 1.05,
            speed: 1000,
            transition: true,
            axis: null,
            reset: true,
            easing: 'cubic-bezier(.03,.98,.52,.99)',
          }}
          >
            <div className="detach">
              <TestimonyCp
                ColorFt="rgb(74, 107, 246)"
                imgAlt={null}
                imgSrc="https://lh3.googleusercontent.com/a-/AOh14GiqWyaf3JKwsKRz_h_LB9iWIA2u-RRRJqgE8Jpy=s96-c"
                AuthorName="Guilherme Brogio"
                AuthorCurse="Cursando: Front End"
                AuthorDate="11-novembro-2021"
              >
                Simplesmente inesquecível! O pessoal do Alura, junto ao programa EduTech,
                proporcionaram com uma ótima didática, explicação e qualidade, um completo
                curso de desenvolvimento web (Front - End).
                A facilidade do acesso da plataforma, junto a podcasts quase que diários
                deixaram um ambiente incrivel. Serei eternamente grato a todo o suporte
                e impulso que a equipe do alura proporcionou há mim.👏😊
              </TestimonyCp>
            </div>
          </Tilt>

          <div className="overlay" onClick={() => setThanksModalOpen(false)}/>
        </ThanksEduTech>
      )}
      <Layout>
        <Content id="#Home">
          <Info>
            <SubTitle>Sua vida com</SubTitle>
            <BigTitle>Helpi!</BigTitle>
            <P>
              É de conhecimento geral que o
              {' '}
              <P className="red">Brasil</P>
              {' '}
              tem um grande potencial a ser
              explorado. E nós queremos maximizar os horizontes dos estudantes
              brasileiros, disponibilizando para vocês cursos profissionalizantes,
              projetos educativos, e muito mais. Interessado? Considere se juntar a
              mais de
              {' '}
              <P className="red">2000 Jovens</P>
              {' '}
              que mudaram suas vidas.
            </P>

            <div className="more">
              <A href="#" onClick={() => setModalOpen(true)}>Saiba Mais</A>
              <p>/</p>
              <A href="#" onClick={() => setModalOpen(true)}>Quais Projetos?</A>
            </div>
          </Info>

          <Background>
            <div>
              <img src="https://images-gbrogio.vercel.app/img/student.png" alt="" />
            </div>
            <Blob />
          </Background>
        </Content>

        <Container id="#About" className="topPadding">
          <Card>
            <section className="image">
              <img src="https://images-gbrogio.vercel.app/img/students-speak.jpg" alt="Estudantes Conversando" />
            </section>
            <section className="description">
              <Title>Sobre Helpi</Title>
              <P>
                Somos uma empresa brasileira criada em 2021, que desde então se
                preocupa com não somente o futuro de nossos jovens, mas o presente deles.
              </P>
              <br />
              <P>
                Temos projetos beneficentes que atuam em mais de 1200 cidades em
                todo o país, além de mais de 2-mil cursos que vão desde programação
                até ao agronegócio, com os melhores professores brasileiros e gringos,
                prontos para levar você ao próximo nível. Estamos aqui para ficar e
                preparar você para o HOJE.
              </P>
            </section>
          </Card>
        </Container>

        <Container id="#Courses" className="mediumPadding">
          <div className="title">
            <SubTitle>Conheça Nossos</SubTitle>
            <BigTitle>Cursos</BigTitle>
          </div>

          <div className="curses">
            <div className="clm1">

              <CurseCard onClick={() => setModalOpen(true)}>
                <BigTitle>📢</BigTitle>
                <div>
                  <SmallTitle>Curso: Marketing Digital</SmallTitle>
                  <br />
                  <P className="bold">R$20,80 - 40 aulas</P>
                  <br />
                  <P>Aprenda os melhores modos de divulgar seus produtos.</P>
                </div>
              </CurseCard>
              <CurseCard onClick={() => setModalOpen(true)}>
                <BigTitle>🌎</BigTitle>
                <div>
                  <SmallTitle>Curso: Geografia Mundial</SmallTitle>
                  <br />
                  <P className="bold">R$18,96 - 25 aulas</P>
                  <br />
                  <P>Aprimore o seu conhecimento sobre onde você vive.</P>
                </div>
              </CurseCard>
            </div>

            <div className="clm2">
              <CurseCard onClick={() => setModalOpen(true)}>
                <BigTitle>🌱</BigTitle>
                <div>
                  <SmallTitle>Curso: Agronegócio</SmallTitle>
                  <br />
                  <P className="bold">R$27,96 - 47 aulas</P>
                  <br />
                  <P>Desenvolva as melhores estratégias para o seu cultivo.</P>
                </div>
              </CurseCard>
              <CurseCard onClick={() => setModalOpen(true)}>
                <BigTitle>🎶</BigTitle>
                <div>
                  <SmallTitle>Curso: Composição Musical</SmallTitle>
                  <br />
                  <P className="bold">R$26,96 - 45 aulas</P>
                  <br />
                  <P>Crie os bits que irão bombar na próxima playlist</P>
                </div>
              </CurseCard>
            </div>

            <div className="clm3">
              <CurseCard onClick={() => setModalOpen(true)}>
                <BigTitle>👨‍💻</BigTitle>
                <div>
                  <SmallTitle>Curso: Front-end</SmallTitle>
                  <br />
                  <P className="bold">R$18,96 - 32 aulas</P>
                  <br />
                  <P>Melhore suas estratégias de SEO e alavanque o seu site</P>
                </div>
              </CurseCard>
              <CurseCard onClick={() => setModalOpen(true)}>
                <BigTitle>🩺</BigTitle>
                <div>
                  <SmallTitle>Curso: Farmaceutico</SmallTitle>
                  <br />
                  <P className="bold">R$48,96 - 62 aulas</P>
                  <br />
                  <P>Aprenda os cuidados necessários para manter a vida viva.</P>
                </div>
              </CurseCard>
            </div>
          </div>
          <div className="more">
            <A href="#" onClick={() => setModalOpen(true)}>Ver Mais Cursos</A>
          </div>
        </Container>
        <Container id="#Testimony">
          <div className="title">
            <SubTitle>Está duvidando?</SubTitle>
            <BigTitle>Veja o que nossos alunos tem a Dizer:</BigTitle>
          </div>

          {isWidthPage < 1264 ? (
            <Carousel
              isRTL={false}
              className="testimonyCarrousel"
              itemPadding={[0, 150]}
              itemsToShow={isWidthPage > 946 ? 2 : 1}
            >
              <TestimonyCp
                ColorFt="#8dc2ce"
                imgAlt={null}
                imgSrc="https://images-gbrogio.vercel.app/img/student-depoiment1.jpg"
                AuthorName="John Marcos"
                AuthorCurse="Cursando: Animação Digital"
                AuthorDate="10-maio-2021"
              >
                Gostaria de parabenizar todo o planejamento do curso e
                principalmente aos professores, a didática usada por eles
                fez a diferença no meu modo de pensar. Indico o curso a todos...
                PARABÉNS
              </TestimonyCp>
              <TestimonyCp
                ColorFt="#8DCE97"
                imgAlt={null}
                imgSrc="https://images-gbrogio.vercel.app/img/student-depoiment3.jpg"
                AuthorName="Elena Franca"
                AuthorCurse="Cursando: Marketing Digital"
                AuthorDate="20-janeiro-2021"
              >
                O curso é excelente! foi de bastante aprendizado e atualização.
                Professores com uma ótima didática, o uso dos ensinamentos da teoria na prática.
                Simplesmente Incrivel.
                A estrutura da Helpi é muito boa também e o atendimento desde o primeiro
                contato é muito cordial. Esse com certeza foi o primeiro de muitos
                outros cursos, valeu o investimento. 👏😊
              </TestimonyCp>
              <TestimonyCp
                ColorFt="#988dce"
                imgAlt={null}
                imgSrc="https://images-gbrogio.vercel.app/img/student-depoiment2.jpg"
                AuthorName="Paula Machado"
                AuthorCurse="Cursando: Lógica Matemática"
                AuthorDate="20-setembro-2021"
              >
                Esse é o segundo curso que faço na Helpi e mais uma vez a
                experiência foi maravilhosa. Você sai pronto para melhorar sua
                produtividade e subir a qualidade do seu trabalho.
                Super Recomendo!!! 🥰🥰😍

              </TestimonyCp>
            </Carousel>
          ) : (
            <div className="testimonyContainer">
              <Tilt options={{
                reverse: true,
                max: 5,
                perspective: 500,
                scale: 1.05,
                speed: 1000,
                transition: true,
                axis: null,
                reset: true,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
              }}
              >
                <TestimonyCp
                  ColorFt="#8dc2ce"
                  imgAlt={null}
                  imgSrc="https://images-gbrogio.vercel.app/img/student-depoiment1.jpg"
                  AuthorName="John Marcos"
                  AuthorCurse="Cursando: Animação Digital"
                  AuthorDate="10-maio-2021"
                >
                  Gostaria de parabenizar todo o planejamento do curso e
                  principalmente aos professores, a didática usada por eles
                  fez a diferença no meu modo de pensar. Indico o curso a todos...
                  PARABÉNS
                </TestimonyCp>
              </Tilt>
              <Tilt options={{
                reverse: true,
                max: 5,
                perspective: 500,
                scale: 1.05,
                speed: 1000,
                transition: true,
                axis: null,
                reset: true,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
              }}
              >
                <div className="detach">
                  <TestimonyCp
                    ColorFt="#8DCE97"
                    imgAlt={null}
                    imgSrc="https://images-gbrogio.vercel.app/img/student-depoiment3.jpg"
                    AuthorName="Elena Franca"
                    AuthorCurse="Cursando: Marketing Digital"
                    AuthorDate="20-janeiro-2021"
                  >
                    O curso é excelente! foi de bastante aprendizado e atualização.
                    Professores com uma ótima didática, o uso dos ensinamentos da teoria na prática.
                    Simplesmente Incrivel.
                    A estrutura da Helpi é muito boa também e o atendimento desde o primeiro
                    contato é muito cordial. Esse com certeza foi o primeiro de muitos
                    outros cursos, valeu o investimento. 👏😊
                  </TestimonyCp>
                </div>
              </Tilt>
              <Tilt options={{
                reverse: true,
                max: 5,
                perspective: 500,
                scale: 1.05,
                speed: 1000,
                transition: true,
                axis: null,
                reset: true,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
              }}
              >
                <TestimonyCp
                  ColorFt="#988dce"
                  imgAlt={null}
                  imgSrc="https://images-gbrogio.vercel.app/img/student-depoiment2.jpg"
                  AuthorName="Paula Machado"
                  AuthorCurse="Cursando: Lógica Matemática"
                  AuthorDate="20-setembro-2021"
                >
                  Esse é o segundo curso que faço na Helpi e mais uma vez a
                  experiência foi maravilhosa. Você sai pronto para melhorar sua
                  produtividade e subir a qualidade do seu trabalho.
                  Super Recomendo!!! 🥰🥰😍

                </TestimonyCp>
              </Tilt>
            </div>
          )}
        </Container>

        <Container className="mediumPadding">
          <div className="title">
            <SubTitle>E por fim do site</SubTitle>
            <BigTitle className="link" onClick={() => setThanksModalOpen(true)}>Obrigado EduTech →</BigTitle>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
