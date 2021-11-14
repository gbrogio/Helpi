import React from 'react';
import {
  Container, Main, AuthorImg, AuthorDesc, QuotesIcon,
} from 'styles/components/Testimony';

export interface testimonyProps {
  AuthorName: string;
  AuthorCurse: string;
  AuthorDate: string;
  imgSrc: string;
  imgAlt: string;
  ColorFt: string;
}

const TestimonyCp: React.FC<testimonyProps> = function ({
  AuthorName,
  AuthorCurse,
  AuthorDate,
  imgSrc,
  imgAlt,
  ColorFt,
  children,
}) {
  return (
    <Container
      AuthorCurse={AuthorCurse}
      AuthorDate={AuthorDate}
      AuthorName={AuthorName}
      ColorFt={ColorFt}
      imgAlt={imgAlt}
      imgSrc={imgSrc}
    >
      <QuotesIcon style={{ fill: ColorFt }}/>
      <Main>{children}</Main>
      <div style={{ backgroundColor: ColorFt }}>
        <AuthorImg src={imgSrc} alt={imgAlt}/>
        <AuthorDesc>
          {AuthorName}
          <br />
          {AuthorCurse}
          <br />
          {AuthorDate}
        </AuthorDesc>
      </div>
    </Container>
  );
};

export default TestimonyCp;
