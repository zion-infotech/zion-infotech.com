import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="logo">
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <nav>
      <ul class="nav">
        <li>
          <Link to="/our-story/">Our Story</Link>
        </li>
        <li>
          <Link to="/services/">Services</Link>
        </li>
        <li>
          <Link to="/technology/">Technology</Link>
        </li>
        <li>
          <Link to="/careers/">Careers</Link>
        </li>
        <li>
          <Link to="/contact-us/">Contact us</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
