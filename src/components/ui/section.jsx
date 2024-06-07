const Section = ({ children, id }) => {
  return (
    <section className="py-20" id={id}>
      <div className="container">{children}</div>
    </section>
  );
};
export default Section;
