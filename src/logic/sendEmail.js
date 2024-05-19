import emailjs from "emailjs-com";

const sendWelcomeEmail = (userEmail) => {
  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_KEY;
  const templateId = "template_hvuz219";
  const userId = process.env.REACT_APP_EMAIL_PUBLIC_KEY; // Renommé pour plus de clarté

  const templateParams = {
    email: userEmail,
  };

  emailjs
    .send(serviceId, templateId, templateParams, userId)
    .then(() => {
      console.log("SUCCESS!");
    })
    .catch((error) => {
      console.error("FAILED...", error.text);
    });
};

const sendResetPasswordEmail = (userEmail, newPassword) => {
  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_KEY;
  const templateId = "template_l43kul9";
  const userId = process.env.REACT_APP_EMAIL_PUBLIC_KEY; // Renommé pour plus de clarté

  const templateParams = {
    email: userEmail,
    newpassword: newPassword,
  };

  emailjs
    .send(serviceId, templateId, templateParams, userId)
    .then(() => {
      console.log("SUCCESS!");
    })
    .catch((error) => {
      console.error("FAILED...", error.text);
    });
};

export { sendWelcomeEmail, sendResetPasswordEmail };
