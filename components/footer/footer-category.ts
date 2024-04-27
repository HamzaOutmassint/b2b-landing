export interface FooterLink {
    text: string;
    href: string;
}

export interface FooterContent {
    solutions: FooterLink[];
    company: FooterLink[];
    regulations: FooterLink[];
    manufacturers: FooterLink[];
    fabricMillsByLocation: FooterLink[];
    fabricMillsByContent: FooterLink[];
    ByGeography: FooterLink[];
    ByEndUse: FooterLink[];
    ByContent: FooterLink[];
    Expertise: FooterLink[];
    Certifications: FooterLink[];
    ConsultingServices: FooterLink[];
}

const footerContent: FooterContent = {
    solutions: [
        { text: "Sustainable Procurement", href: "https://business.commonshare.com/sustainable-procurement" },
        { text: "Responsible Sourcing", href: "https://business.commonshare.com/responsible-sourcing" },
        { text: "ESG Communication", href: "https://business.commonshare.com/authentic-esg-communication" },
        { text: "Trade Compliance", href: "https://business.commonshare.com/trade-compliance" }
    ],
    company: [
        { text: "News", href: "https://news.commonshare.com" },
        { text: "About Us", href: "https://www.commonshare.com/about-us" }
    ],
    regulations: [
        { text: "AGEC", href: "https://www.commonshare.com/agec" },
        { text: "UFPLA", href: "https://www.commonshare.com/uflpa" },
        { text: "UK Modern Slavery", href: "https://www.commonshare.com/uk-modern-slavery" },
        { text: "EU Green Claims", href: "https://www.commonshare.com/eu-green-claims" },
        { text: "EU Digital Product Passport", href: "https://www.commonshare.com/eu-digital-product-passport" },
        { text: "German Supply Chain Act", href: "https://www.commonshare.com/german-supply-chain-act" },
        { text: "Canada Forced Labor", href: "https://www.commonshare.com/canada-forced-labor-in-supply-chain-act" }
    ],
    manufacturers: [
        { text: "US Top Clothing Manufacturers", href: "#US-Top-Clothing-Manufacturers" },
        { text: "UK Top Clothing Manufacturers", href: "#UK-Top-Clothing-Manufacturers" },
        { text: "Italy Top Clothing Manufacturers", href: "#Italy-Top-Clothing Manufacturers" },
        { text: "Turkey Top Clothing Manufacturers", href: "#Turkey-Top-Clothing-Manufacturers" },
        { text: "Portugal Top Clothing Manufacturers", href: "#Portugal-Top-Clothing-Manufacturers" }
    ],
    fabricMillsByLocation: [
        { text: "Italy Top Fabric Mills", href: "#Italy-Top-Fabric-Mills" },
        { text: "Turkey Top Fabric Mills", href: "#Turkey-Top-Fabric-Mills" },
        { text: "Portugal Top Fabric Mills", href: "#Portugal-Top-Fabric-Mills" },
        { text: "UK Top Fabric Mills", href: "#UK-Top-Fabric-Mills" },
        { text: "Vietnam Top Fabric Mills", href: "#Vietnam-Top-Fabric-Mills" }
    ],
    fabricMillsByContent: [
        { text: "Top Organic Cotton Fabric Mills", href: "#Top-Organic-Cotton-Fabric-Mills" },
        { text: "Top Linen Fabric Mills", href: "#Top-Linen-Fabric-Mills" },
        { text: "Top Recycled Fabric Mills", href: "#Top-Recycled-Fabric-Mills" },
        { text: "Top Tencel Fabric Mills", href: "#Top-Tencel-Fabric-Mills" },
        { text: "Top Viscose Fabric Mills", href: "#Top-Viscose-Fabric-Mills" }
    ],
    ByGeography: [
        { text: "US Top Sustainable Brands", href: "#US-Top-Sustainable-Brands" },
        { text: "UK Top Sustainable Brands", href: "#UK-Top-Sustainable-Brands" },
        { text: "France Top Sustainable Brands", href: "#France-Top-Sustainable-Brands" },
        { text: "German Top Sustainable Brands", href: "#German-Top-Sustainable-Brands" },
        { text: "Spain Top Sustainable Brands", href: "#Spain-Top-Sustainable-Brands" }
    ],
    ByEndUse: [
        { text: "Sustainable Swimwear Brands", href: "#Sustainable-Swimwear-Brands" },
        { text: "Sustainable Lingerie Brands", href: "#Sustainable-Lingerie-Brands" },
        { text: "Sustainable Workwear Brands", href: "#Sustainable-Workwear-Brands" },
        { text: "Sustainable Underwear Brands", href: "#Sustainable-Underwear-Brands" },
        { text: "Sustainable Shoe Brands", href: "#Sustainable-Shoe-Brands" }
    ],
    ByContent: [
        { text: "Organic Clothing Brands", href: "#Organic-Clothing-Brands" },
        { text: "Pima Cotton Brands", href: "#Pima-Cotton-Brands" },
        { text: "Fair-trade Clothing Brands", href: "#Fair-trade-Clothing-Brands" },
        { text: "Recycled Clothing Brands", href: "#Recycled-Clothing-Brands" },
        { text: "Vegan Clothing Brands", href: "#Vegan-Clothing-Brands" }
    ],
    Expertise: [
        { text: "Life Cycle Analysis", href: "#Life-Cycle-Analysis" },
        { text: "Double Materiality Analysis", href: "#Double-Materiality-Analysis" },
        { text: "Scope 3 Emissions", href: "#Scope-3-Emissions" },
        { text: "Supply Chain Mapping", href: "#Supply-Chain-Mapping" },
        { text: "Environmental Product Declarations", href: "#Environmental-Product-Declarations" }
    ],
    Certifications: [
        { text: "Organic Certification", href: "#Organic-Certification" },
        { text: "Fair Trade Certification", href: "#Fair-Trade-Certification" },
        { text: "FSC Forest Certification", href: "#FSC-Forest-Certification" },
        { text: "Global Recycled Standard", href: "#Global-Recycled-Standard" },
        { text: "B Corp Certification", href: "#B-Corp-Certification" }
    ],
    ConsultingServices: [
        { text: "ESG Experts", href: "#ESG-Experts" },
        { text: "LCA Expert", href: "#LCA-Expert" },
        { text: "CSRD Experts", href: "#CSRD-Experts" },
        { text: "ESRS Experts", href: "#ESRS-Experts" },
        { text: "SFDR Experts", href: "#SFDR-Experts" }
    ],
};

export default footerContent;
