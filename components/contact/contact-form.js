import classes from './contact-form.module.css';

const ContactForm = () => {
    return (
        <section className={classes.contact}>
            <h1>Contact</h1>
            <p>You can reach me directly at <a href="mailto:stivlee5069@gmail.com">stivlee5069@gmail.com</a>
            </p>        
        </section>
    );
}

export default ContactForm;