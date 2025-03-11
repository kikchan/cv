import { Helmet, HelmetProvider } from "react-helmet-async";

export const SEO = ({ name, ocupation, description }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{name} - {ocupation}</title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};
