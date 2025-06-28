import axios from "axios";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import SocialContact from "./SocialContact";
import { url } from "../../_DefaultsComponent/DefaultsFunctions/Config";

export default function ContactUs() {
  const addressinfo = axios.get(`${url}/institution`);
  return (
    <div>
      <Contact addressinfo={addressinfo} />
      <ContactForm />
      <SocialContact addressinfo={addressinfo} />
    </div>
  );
}
