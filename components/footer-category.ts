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
        { text: "Sustainable Procurement", href: "#" },
        { text: "Responsible Sourcing", href: "#" },
        { text: "ESG Communication", href: "#" },
        { text: "Trade Compliance", href: "#" }
    ],
    company: [
        { text: "News", href: "#news" },
        { text: "About Us", href: "#" }
    ],
    regulations: [
        { text: "AGEC", href: "#" },
        { text: "UFPLA", href: "#" },
        { text: "UK Modern Slavery", href: "#" },
        { text: "EU Green Claims", href: "#" },
        { text: "EU Digital Product Passport", href: "#" },
        { text: "German Supply Chain Act", href: "#" },
        { text: "Canada Forced Labor", href: "#" }
    ],
    manufacturers: [
        { text: "US Top Clothing Manufacturers", href: "#" },
        { text: "UK Top Clothing Manufacturers", href: "#" },
        { text: "Italy Top Clothing Manufacturers", href: "#" },
        { text: "Turkey Top Clothing Manufacturers", href: "#" },
        { text: "Portugal Top Clothing Manufacturers", href: "#" }
    ],
    fabricMillsByLocation: [
        { text: "Italy Top Fabric Mills", href: "#" },
        { text: "Turkey Top Fabric Mills", href: "#" },
        { text: "Portugal Top Fabric Mills", href: "#" },
        { text: "UK Top Fabric Mills", href: "#" },
        { text: "Vietnam Top Fabric Mills", href: "#" }
    ],
    fabricMillsByContent: [
        { text: "Top Organic Cotton Fabric Mills", href: "#" },
        { text: "Top Linen Fabric Mills", href: "#" },
        { text: "Top Recycled Fabric Mills", href: "#" },
        { text: "Top Tencel Fabric Mills", href: "#" },
        { text: "Top Viscose Fabric Mills", href: "#" }
    ],
    ByGeography: [
        { text: "US Top Sustainable Brands", href: "#" },
        { text: "UK Top Sustainable Brands", href: "#" },
        { text: "France Top Sustainable Brands", href: "#" },
        { text: "German Top Sustainable Brands", href: "#" },
        { text: "Spain Top Sustainable Brands", href: "#" }
    ],
    ByEndUse: [
        { text: "Sustainable Swimwear Brands", href: "#" },
        { text: "Sustainable Lingerie Brands", href: "#" },
        { text: "Sustainable Workwear Brands", href: "#" },
        { text: "Sustainable Underwear Brands", href: "#" },
        { text: "Sustainable Shoe Brands", href: "#" }
    ],
    ByContent: [
        { text: "Organic Clothing Brands", href: "#" },
        { text: "Pima Cotton Brands", href: "#" },
        { text: "Fair-trade Clothing Brands", href: "#" },
        { text: "Recycled Clothing Brands", href: "#" },
        { text: "Vegan Clothing Brands", href: "#" }
    ],
    Expertise: [
        { text: "Life Cycle Analysis", href: "#" },
        { text: "Double Materiality Analysis", href: "#" },
        { text: "Scope 3 Emissions", href: "#" },
        { text: "Supply Chain Mapping", href: "#" },
        { text: "Environmental Product Declarations", href: "#" }
    ],
    Certifications: [
        { text: "Organic Certification", href: "#" },
        { text: "Fair Trade Certification", href: "#" },
        { text: "FSC Forest Certification", href: "#" },
        { text: "Global Recycled Standard", href: "#" },
        { text: "B Corp Certification", href: "#" }
    ],
    ConsultingServices: [
        { text: "ESG Experts", href: "#" },
        { text: "LCA Expert", href: "#" },
        { text: "CSRD Experts", href: "#" },
        { text: "ESRS Experts", href: "#" },
        { text: "SFDR Experts", href: "#" }
    ],
};

export default footerContent;
