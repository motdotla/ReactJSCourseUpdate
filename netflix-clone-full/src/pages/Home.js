import React, { Fragment, Suspense } from "react";
import HeaderContainer from "../containers/HeaderContainer";
// import FaqsContainer from "../containers/faqs";
// import FooterContainer from "../containers/FooterContainer";
// import JumbotronContainer from "../containers/JumbotronContainer";
import { OptForm, Feature, Spinner } from "../components";

const JumbotronContainer = React.lazy(() =>
  import("../containers/JumbotronContainer")
);
const FaqsContainer = React.lazy(() => import("../containers/faqs"));
const FooterContainer = React.lazy(() =>
  import("../containers/FooterContainer")
);

const Home = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <Feature>
          <Feature.SubTitle>{"Welcome back, Konstantinos!"}</Feature.SubTitle>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <Suspense fallback={<Spinner />}>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </Suspense>
    </Fragment>
  );
};

export default Home;
