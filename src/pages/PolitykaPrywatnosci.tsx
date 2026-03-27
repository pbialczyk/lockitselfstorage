import Layout from "@/components/layout/Layout";

const PolitykaPrywatnosci = () => (
  <Layout title="Polityka prywatności" description="Polityka prywatności LOCKIT self storage." canonical="/polityka-prywatnosci">
    <section className="section-padding bg-brand-deep">
      <div className="container-narrow mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-primary-foreground">Polityka prywatności</h1>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto max-w-3xl prose prose-lg">
        <p className="text-foreground leading-relaxed mb-4">
          Administratorem danych osobowych jest LOCKIT self storage z siedzibą w Szczecinie, ul. Gdańska 14C, 70-661 Szczecin.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          Dane osobowe przetwarzane są zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO) w celach realizacji usług, marketingu i obsługi zapytań.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          Szczegółowe informacje dotyczące przetwarzania danych osobowych, w tym prawa osób, których dane dotyczą, dostępne są na życzenie pod adresem info@lockit.pl.
        </p>
      </div>
    </section>
  </Layout>
);

export default PolitykaPrywatnosci;
