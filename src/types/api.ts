export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Concept = {
  title: string
}

export type Author = {
  photo: {
    url: string
    alternativeText: string
  }
  name: string
  role: string
  socialLinks: Array<SocialLink>
  description: string
}

export type SocialLink = {
  title: string
  url: string
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type Review = {
  name: string
  text: string
  photo: {
    url: string
  }
}

export type QuestionAndAnswer = {
  question: string
  answer: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: Array<TechIcon>
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<Concept>
}

export type SectionModulesProps = {
  title: string
  modules: Array<Module>
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: Array<Author>
}

export type SectionReviewsProps = {
  title: string
  reviews: Array<Review>
}

export type SectionFaqProps = {
  title: string
  questions: Array<QuestionAndAnswer>
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
