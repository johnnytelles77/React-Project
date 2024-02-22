import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#f192aa",
      color: "#fff",
      padding: '40px 0',
      fontSize: '14px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    footerContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto ', 
    },
    footerSection: {
      flex: 1,
      marginRight: '20px',
    },
    footerHeading: {
      fontSize: '18px',
      marginBottom: '10px',
    },
    footerList: {
      listStyle: 'none',
      padding: '0',
    },
    footerListItem: {
      marginBottom: '8px',
    },
    footerLink: {
      color: '#ffffff',
      textDecoration: 'none',
    },
    footerLinkHover: {
      textDecoration: 'underline',
    },
    newsletterForm: {
      marginTop: '20px',
    },
    newsletterInput: {
      width: '100%',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      marginBottom: '10px',
    },
    newsletterButton: {
      backgroundColor: '#d53f8c',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      padding: '10px 20px',
      cursor: 'pointer',
    },
    newsletterButtonHover: {
      backgroundColor: 'darkred',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>Contacto</h4>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Preguntas frecuentes</a></li>
            <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Soporte al cliente</a></li>
            <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Envíos y devoluciones</a></li>
            <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Contáctanos</a></li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>Información</h4>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Acerca de nosotros</a></li>
            <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Política de privacidad</a></li>
            <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Términos y condiciones</a></li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>Síguenos</h4>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Facebook</a></li>
            <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Instagram</a></li>
            <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Twitter</a></li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>NEWSLETTER</h4>
          <form style={styles.newsletterForm}>
            <input type="email" placeholder="Tu correo electrónico" style={styles.newsletterInput} />
            <button type="submit" style={styles.newsletterButton}>Suscribirse</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
