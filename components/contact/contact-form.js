import classes from './contact-form.module.css';

const ContactForm = () => {
    return (
        <section className={classes.contact}>
            <h1>Contact</h1>
            <p>Please fill out the form. I will get back to you as soon as possible.</p>
            <p>Or you can reach me directly at <a href="mailto:stivlee5069@gmail.com">stivlee5069@gmail.com</a>
            </p>
            <p className={classes.warning}>Form is not working now. Please use email above</p>
            <form className={classes.form}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text' id='name' required />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='message'>Your Message</label>
                    <textarea id='message' rows='5'></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm;