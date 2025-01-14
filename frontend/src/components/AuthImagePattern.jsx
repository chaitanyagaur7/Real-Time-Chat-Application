import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faKaggle,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const AuthImagePattern = ({ title, subtitle }) => {
  const links = [
    { label: "GitHub", icon: faGithub, url: "https://github.com/chaitanyagaur7" },
    { label: "LinkedIn", icon: faLinkedin, url: "https://linkedin.com/in/chaitanyagaur7" },
    { label: "Kaggle", icon: faKaggle, url: "https://kaggle.com/chaitanyagaur572" },
    { label: "Gmail", icon: faEnvelope, url: "mailto:chaitanyagaur16@gmail.com" },
    { label: "Yahoo", icon: faEnvelope, url: "mailto:chaitanyagaur9@yahoo.com" },
    { label: "Resume", icon: faFilePdf, url: "https://your-resume-link.com" },
  ];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center aspect-square rounded-2xl bg-primary/10 p-2 hover:bg-primary/20 transition"
            >
              <FontAwesomeIcon icon={link.icon} className="text-3xl text-primary" />
              <div className="mt-2 text-sm font-semibold">{link.label}</div>
            </a>
          ))}
          {/* Empty tiles */}
          {[...Array(3)].map((_, i) => (
            <div
              key={links.length + i}
              className="aspect-square rounded-2xl bg-primary/10"
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60 whitespace-pre-line">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
