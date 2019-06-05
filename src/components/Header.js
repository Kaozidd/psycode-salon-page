import React from 'react'
import PropTypes from 'prop-types'
import icon from '../images/icon.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img className='icon' src={icon} alt='main icon'/>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Salón de belleza</h1>
                <p>Una breve frase<br />
                que describa la personalidad de tu empresa</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Nosotros</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Servicios</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Visítanos</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contacto</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
