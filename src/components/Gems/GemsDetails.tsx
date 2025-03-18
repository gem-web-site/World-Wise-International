import React from "react";
import styles from "../../styles/Gems/GemsDetails.module.css";

const GemsDetails = () => {
  const gems = [
    {
      id: 1,
      name: "Unheated Blue Sapphires",
      image: "/Gems/01.png",
      description:
        "Only about 2% of all sapphires on the market are 'no heat' in fine quality. Blue sapphires in natural colour are particularly precious because of their rarity. We are able to offer non-heated blue sapphires in remarkable sizes and colour tones for our exclusive customers",
    },
    {
      id: 2,
      name: "Unheated Fancy Sapphires",
      image: "/Gems/02.png",
      description:
        "The thermal treatment applies to sapphires and rubies as merchantable and accepted form of colour and clarity optimization. We offer 'no heat' treasures of nature in all sapphire colours from pink to purple and yellow to orange.",
    },
    {
      id: 3,
      name: "Cornflower Sapphires",
      image: "/Gems/03.png",
      description:
        "The colour variety of blue sapphires range from lighter pastel to intense deep blue tones. The preciouscornflower blue with perfect luster is one of the most desired sapphire hues.",
    },
    {
      id: 4,
      name: "Royal Blue Sapphires",
      image: "/Gems/04.png",
      description:
        "Timeless classic is the noble and magical royal blues.The noble royal blue has been popular for centuries as a timeless classic. Its magical deep blue, which should always be lively, makes it very rare and thus determines its high value.",
    },
    {
      id: 5,
      name: "Hot Pink Sapphires",
      image: "/Gems/05.png",
      description:
        "The most sought-after pink sapphires have an intensely saturated pinkish-red hue, also known as 'hot pinks'. This extremely rare colour is very precious and the colour intensity is a real speciality.",
    },
    {
      id: 6,
      name: "Pigeon Blood Rubies",
      image: "/Gems/06.png",
      description:
        "By wide prevalence of the red colour parts of the pink sapphire, it is a ruby. If the red parts of a pink sapphire predominate, it is a ruby. The colour palette of a ruby is very diverse, ranging from a pinkish red over the coveted pigeon blood red to an intense dark red.",
    },
    {
      id: 7,
      name: "Yellow Sapphires",
      image: "/Gems/07.png",
      description:
        "Bright and cheery, yellow sapphires display intense sparkle in a range of hues from light to golden yellow. The preferred yellow sapphire colour is a medium, vibrant, canary yellow.",
    },
    {
      id: 8,
      name: "Orange Sapphires",
      image: "/Gems/08.png",
      description:
        "Sapphires also occur in an orangish-yellow or even in a fancy deep orange colour. Orange Sapphires are rare and range from light pastel oranges to vivid orangish-reds due to their blend of red and yellow hues.",
    },
    {
      id: 9,
      name: "Padparadscha Sapphire aka 'King Sapphire",
      image: "/Gems/09.png",
      description:
        "The Ceylon King Sapphire, named after the lotus flower 'Padmaraja' in the Sinhalese, is one of the most precious gemstones in the world due to its intensive salmon colourin the colour scheme pink-orange.",
    },
    {
      id: 10,
      name: "Bi-Colour Sapphires",
      image: "/Gems/10.png",
      description:
        "For colourful individuals who wants more than one colour. The bi-colour sapphire is a stone that contains two colours as a result of colour zoning. These sapphires are exceptionally rare.",
    },
    {
      id: 11,
      name: "Colour Change Sapphires",
      image: "/Gems/11.png",
      description:
        "These sapphires are truly marvelous to behold. Under daylight basic colour ranges from blue to violet and under incandescent light colour changes from violetish purple to strongly reddish purple",
    },
    {
      id: 12,
      name: "Sapphires in all Rainbow Colours",
      image: "/Gems/12.png",
      description:
        "Nature gives us Ceylon sapphires in addition to the familiar shades of blue in pink, yellow, orange, purple and white. A unique colour spectrum.",
    },
    {
      id: 13,
      name: "Pastel Sapphires",
      image: "/Gems/13.png",
      description:
        "Brighter colours are becoming increasingly popular. With their great luster and fire perfect match to the fashionable spirit of the age. Pastel colours are more than just a trend.",
    },
    {
      id: 14,
      name: "White & Champagne Sapphires",
      image: "/Gems/14.png",
      description:
        "Colourless sapphires almost sparkle like a diamond by perfect cut. Whites with a blueish, pinkish or yellowish colour tint are individual, classy and sparkling like glass of champagne.",
    },
    {
      id: 15,
      name: "Star Sapphires & Star Rubies",
      image: "/Gems/15.png",
      description:
        "The optical phenomenon responsible for the star sapphire’s shimmering rays is called asterism. Fine qualities have enough silk for a bright, centered, well-defined star, without compromising the stone’s transparency.",
    },
    {
      id: 16,
      name: "Sapphire Cabochons",
      image: "/Gems/16.png",
      description:
        "The cabochon cut, a rounded dome shape is the oldest gemstone cut. A cabochon cut highlights the beautiful colour of a sapphire. Compared to faceted sapphires the transparency is translucent or opaque.",
    },
    {
      id: 17,
      name: "Fany Cut Sapphire",
      image: "/Gems/17.png",
      description:
        "In addition to the well-known and classic shapes and cuts, it is always amazing to cut individual shaped sapphires. We make the exceptional possible, depending on the customer's request.",
    },
    {
      id: 18,
      name: "Sapphire Pairs",
      image: "/Gems/18.png",
      description:
        "Cutting matching pairs is always a challenge. Extensive knowledge about selecting rough stones in similar colour, clarity and size is crucial for the best fit of high precision cutting of pairs in equal dimensions and symmetries.",
    },
    {
      id: 19,
      name: "Sapphire Collections & Sets",
      image: "/Gems/19.png",
      description:
        "For collections we cut upon request exactly dimensions and desired shapes in agreed volume. Sets are also possible in matching colours for e.g. earrings and rings or any other purpose.",
    },
    {
      id: 20,
      name: "Other Ceylon Gemstones",
      image: "/Gems/20.png",
      description:
        "In magnificent colours and rare sizes we also offer following gemstones – only in finest quality: spinel, tourmaline, alexandrite, chrysoberyl, cat’s eye, aquamarine, garnet, amethyst and many more..",
    },
  ];

  return (
    <section id="gems-details" className={styles.gemsDetails}>
      <h2>Explore Our Gems Collection</h2>
      <div className={styles.gemsGrid}>
        {gems.map((gem) => (
          <div key={gem.id} className={styles.gemCard}>
            <div className={styles.gemImageContainer}>
              <img src={gem.image} alt={gem.name} className={styles.gemImage} />
            </div>
            <div className={styles.gemContent}>
              <h3 className={styles.gemName}>{gem.name}</h3>
              <p className={styles.gemDescription}>{gem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GemsDetails;
