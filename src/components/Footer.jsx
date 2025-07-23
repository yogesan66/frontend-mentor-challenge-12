const Footer = () => {
  return (
    <footer class="hidden md:block attribution absolute bottom-0 right-0 m-3 text-theme-light-textMuted  dark:text-theme-dark-textWhite">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className="dark:text-theme-dark-textLight text-theme-light-textMuted"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://yogesan.netlify.app/"
        className="dark:text-theme-dark-textLight text-theme-light-textMuted"
      >
        Yogesan
      </a>
      .
    </footer>
  );
};

export default Footer;
