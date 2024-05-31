import 'src/assets/scss/dashlite.scss'

import { Link, routes } from "@redwoodjs/router";
import { Button } from "reactstrap";
import { Block, BlockContent } from "src/components/Block/Block";

export default () => (
  <Block className="nk-block-middle wide-xs mx-auto">
    <BlockContent className="nk-error-ld text-center">
      <h1 className="nk-error-head">404</h1>
      <h3 className="nk-error-title">Oops! Why you&apos;re here?</h3>
      <p className="nk-error-text">
        We are very sorry for inconvenience. It looks like you&apos;re try to access a page that either has been deleted
        or never existed.
      </p>
      <Link to={routes.landing()}>
        <Button color="primary" size="lg" className="mt-2">
          Back To Home
        </Button>
      </Link>
    </BlockContent>
  </Block>
)
