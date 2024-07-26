import { Section } from "./Section";

function Footer() {
  return (
    <Section className="border-t border-primary-foreground">
      <div className="w-5/6 flex flex-col items-center justify-center">
        <h2>Copiright @ Next Design</h2>
        <p>All rights reserved</p>
        <p>Made with ❤️ by SBDev</p>
      </div>
    </Section>
  );
}

export default Footer;
