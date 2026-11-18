const PATIENT = {
    Persoon: {
        PersoonID: "112233449",
        Naam: {
            Voornaam: "Lisa",
            Achternaam: "Lang",
            Initialen: "LL",
            Tussenvoegsels: "",
            Titels: "dr."
        },
        Systeemrol: "0"
    },
    Geslacht: "V",
    Geboortedatum: "12-04-1989",
    IQ: 105,
    Aantekeningen: ""
};

function NaarWebsite(id, waarde) {
    document.getElementById(id).textContent = waarde ?? "Niet aangegeven";
}

NaarWebsite("PersoonID", PATIENT.Persoon.PersoonID);
NaarWebsite("Voornaam", PATIENT.Persoon.Naam.Voornaam);
NaarWebsite("Achternaam", PATIENT.Persoon.Naam.Achternaam);
NaarWebsite("Initialen", PATIENT.Persoon.Naam.Initialen);
NaarWebsite("Tussenvoegsels", PATIENT.Persoon.Naam.Tussenvoegsels);
NaarWebsite("Titels", PATIENT.Persoon.Naam.Titels);
NaarWebsite("Systeemrol", PATIENT.Persoon.Systeemrol);

NaarWebsite("Geslacht", PATIENT.Geslacht);
NaarWebsite("Geboortedatum", PATIENT.Geboortedatum);
NaarWebsite("IQ", PATIENT.IQ);
NaarWebsite("Aantekeningen", PATIENT.IQ);
