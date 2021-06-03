import React from 'react';
import 'src/modules/square-contact/contact-form.scss';
import ContactItem from 'src/modules/square-contact/contact-item';
import Title from 'src/modules/title/title';

const ContactForm = (props: any): React.ReactElement => {
  return (
    <div
      style={{backgroundColor: `${props.color}`}}
      className='ContactForm'>
    <div>
      <Title
        color='white'
        text='Solefi a un click'/>
    </div>
    <div className='container row ContactForm__info'>
    <div className='col s12 l4 ContactForm__block'>
      <ContactItem
        link='https://maps.google.com/?q=Casas Grandes 245, Colonia Narvarte Oriente, 03023 Benito Juarez, Distrito Federal, Mexico./'
        icon='location_on'
        tile='Visítanos en'
        text='Casas Grandes 245, Colonia Narvarte Oriente, 03023 Benito Juarez, Distrito Federal, Mexico.'
        linkText='Click Aquí'/>
    </div>
    <div className='col s12 l4 ContactForm__block'>
      <ContactItem
        link='tel:+52 1 56 1416 8548/'
        icon='local_phone'
        tile='Llámanos al'
        text='+52 1 56 1416 8548'
        linkText='Click Aquí'/>
    </div>
    <div className='col s12 l4 ContactForm__block'>
      <ContactItem
        link='mailto:hola@solefi.com.mx'
        icon='email'
        tile='Escríbenos a'
        text='hola@solefi.com.mx'
        linkText='Click Aquí'/>
    </div>
    </div>
    </div>
  );
};

export default ContactForm;