import Image from "next/image";

const Explore = () => {
  // Array of iconbox data
  const iconboxData = [
    {
      icon: "/images/icon/property-buy-2.svg",
      title: "Buy a property",
      text: "Looking to buy a property? Check out all our listings here!",
      linkText: "Find a home",
    },
    {
      icon: "/images/icon/property-sell-2.svg",
      title: "Sell a property",
      text: "Looking to sell a property? Please go to TROA, our own real estate agency.",
      linkText: "TROA ",
    },
    // {
    //   icon: "/images/icon/property-rent-2.svg",
    //   title: "Rent a property",
    //   text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
    //   linkText: "Find a rental",
    // },
  ];

  return (
    <>
      {iconboxData.map((item, index) => (
        <div
          className="col-sm-6 "
          key={index}
          data-aos="fade-up"
          data-aos-delay={(index + 1) * 100} // Increase delay for each item
        >
          <div className="iconbox-style3 text-center">
            <div className="icon">
              <Image width={316} height={150} src={item.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title font-bold text-xl">{item.title}</h4>
              <p className="text">{item.text}</p>
              <a href="#" className="ud-btn btn-thm3">
                {item.linkText}
                <i className="fal fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Explore;
