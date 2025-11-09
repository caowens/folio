import { Raleway } from "next/font/google";
import { contacts } from "@/constants";
import ContactButton from "@/components/contact-button";

const raleway = Raleway();

export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <div className={`relative ${raleway.className}`}>
        <div className="blurred-eclipse-1"></div>
        <div className="blurred-eclipse-2"></div>
        <div className="blurred-eclipse-3"></div>
        <div
          className="py-48 px-4 md:px-0 z-50 animate-fade-up animate-once animate-duration-1000 animate-delay-300"
          style={{ transform: "translate(0px, 0px)", transition: "transform 0.5s ease-out" }}
        >
          <main className="max-w-l">
            <div className="pt-14 text-center flex items-center justify-center">
              <h1 className="text-gray-50 text-2xl text-center leading-5">
                <span className="font-extrabold">
                  Alex Owens
                </span>
                <br />
                <span className="text-xs font-semibold">
                  <span>Based in Redmond, WA</span>
                </span>
              </h1>
            </div>
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-5xl text-gray-50 font-bold text-accent md:text-6xl lg:text-8xl hero-font">
                FULLSTACK
              </h1>
            </div>
            <div className="text-primarytext flex text-[10px] items-center justify-center">
              <h1 className="text-4xl text-gray-50 font-bold text-accent md:text-6xl lg:text-8xl hero-font">
                DEVELOPER
              </h1>
            </div>
            <div className="pt-2 text-center">
              <div className="flex justify-center gap-4">
                {contacts.map((contact) => {
                  const IconComponent = contact.icon;

                  return (
                    <ContactButton
                      key={contact.method}
                      method={contact.method}
                      detail={contact.detail}
                      link={contact.link}
                      icon={IconComponent}
                      hoverColor={contact.hoverColor}
                    />
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
